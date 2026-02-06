import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaEuroSign, FaHandsHelping } from "react-icons/fa";
import servicedes2 from "../assets/images/servicedes2.png";
import servicedes1 from "../assets/images/servicedes1.png";
import avantageService from "../assets/images/avantage-service.png";

const slides = [
  {
    src: servicedes2,
    caption: "Prestations de jardinage & entretien",
    icon: <FaLeaf />,
  },
  {
    src: servicedes1,
    caption: "Avance immédiate de crédit d’impôt",
    icon: <FaEuroSign />,
  },
  {
    src: avantageService,
    caption: "Services à la personne – 50 % d’avantage fiscal",
    icon: <FaHandsHelping />,
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  // Swipe mobile
  const minSwipe = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipe) next();
    if (distance < -minSwipe) prev();
  };

  return (
    <section className="carousel-section">
      <div className="carousel">
        <div
          className="carousel-frame"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button className="nav left" onClick={prev} aria-label="Précédent">
            ‹
          </button>

          <img
            key={index}
            src={slides[index].src}
            alt={slides[index].caption}
            className="carousel-image"
          />

          <button className="nav right" onClick={next} aria-label="Suivant">
            ›
          </button>
        </div>
      </div>

      {/* Caption glass */}
      <p className="carousel-caption">
        <span className="carousel-caption-glass">
          {slides[index].caption}
        </span>
      </p>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* CTA */}
      <Link to="/contact" className="carousel-cta">
  🌿 Demander un devis
</Link>
    </section>
  );
}
