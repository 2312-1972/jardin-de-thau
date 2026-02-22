import { useMemo, useRef, useState } from "react";
import "../styles/realisations.css";

/**
 * Avant (gauche) / Après (droite)
 * - BEFORE = visible à gauche (clip depuis la droite)
 * - AFTER  = visible à droite (image pleine en dessous)
 */
export default function BeforeAfterSlider({
  before,
  after,
  altBefore = "Avant",
  altAfter = "Après",
  initialPct = 50, // position du séparateur (0=full Avant, 100=full Après)
}) {
  const [pct, setPct] = useState(initialPct);
  const ref = useRef(null);

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  const setFromClientX = (clientX) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 0, rect.width);
    const next = (x / rect.width) * 100;
    setPct(clamp(next, 0, 100));
  };

  const onPointerDown = (e) => {
    e.preventDefault();
    ref.current?.setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e) => {
    if (e.buttons === 0 && e.pointerType === "mouse") return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = (e) => {
    try {
      ref.current?.releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
  };

  // IMPORTANT :
  // On affiche AFTER en dessous (plein écran).
  // On affiche BEFORE au-dessus, mais on le "coupe" depuis la droite
  // => la partie gauche reste "Avant", la partie droite laisse apparaître "Après".
  const beforeClipStyle = useMemo(
    () => ({
      clipPath: `inset(0 ${100 - pct}% 0 0)`, // coupe depuis la droite
    }),
    [pct]
  );

  const handleStyle = useMemo(() => ({ left: `${pct}%` }), [pct]);

  return (
    <div
      className="ba-slider"
      ref={ref}
      role="group"
      aria-label="Comparateur Avant / Après"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* AFTER (plein écran en dessous) */}
      <img className="ba-img" src={after} alt={altAfter} />

      {/* BEFORE (au-dessus, coupé) */}
      <img
        className="ba-img ba-before"
        src={before}
        alt={altBefore}
        style={beforeClipStyle}
      />

      {/* Handle */}
      <div className="ba-handle" style={handleStyle} aria-hidden="true">
        <span className="ba-line" />
        <span className="ba-knob">↔</span>
      </div>

      {/* Badges */}
      <div className="ba-badges" aria-hidden="true">
        <span className="ba-badge">Avant</span>
        <span className="ba-badge">Après</span>
      </div>

      {/* Range (clavier) */}
      <input
        className="ba-range"
        type="range"
        min="0"
        max="100"
        value={Math.round(pct)}
        onChange={(e) => setPct(Number(e.target.value))}
        aria-label="Position du séparateur"
      />
    </div>
  );
}
