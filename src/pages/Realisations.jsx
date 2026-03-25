import { useEffect, useMemo, useState } from "react";
import data from "../data/realisations.json";
import "../styles/realisations.css";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

export default function Realisations() {
  const [query, setQuery] = useState("");
  const [lightboxImage, setLightboxImage] = useState(null);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;

    return data.filter((it) => {
      const haystack = [
        it.title,
        it.location,
        it.description,
        ...(it.tags || []),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [query]);

  const openLightbox = (src, alt = "") => {
    setLightboxImage({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  return (
    <>
      <section className="content glass-section">
        <div className="glass-card">
          <h2>Nos réalisations</h2>
          <p>
            Découvrez quelques chantiers réalisés à Montbazin et dans le Bassin
            de Thau : avant / après, détails et prestations.
          </p>

          <div className="realisations-search">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher : taille, débroussaillage, Montbazin..."
              aria-label="Rechercher une réalisation"
            />
          </div>
        </div>
      </section>

      <section className="realisations-page">
        <div className="realisations-grid">
          {items.map((it) => (
            <article key={it.id} className="real-card glass-card">
              <header className="real-card-head">
                <h3>{it.title}</h3>

                <p className="real-meta">
                  <span>{it.location}</span>
                  {it.date ? <span> • {it.date}</span> : null}
                </p>

                {it.tags?.length ? (
                  <div className="real-tags">
                    {it.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="real-tags real-tags--empty" />
                )}
              </header>

              <BeforeAfterSlider
                key={`${it.beforeImage}|${it.afterImage}`}
                before={it.beforeImage}
                after={it.afterImage}
                title={it.title}
                onOpenImage={openLightbox}
              />

              <p className="real-desc">{it.description}</p>
            </article>
          ))}
        </div>

        {items.length === 0 && (
          <p className="realisations-empty">
            Aucun chantier ne correspond à ta recherche.
          </p>
        )}
      </section>

      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            type="button"
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Fermer l’image"
          >
            ×
          </button>

          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}