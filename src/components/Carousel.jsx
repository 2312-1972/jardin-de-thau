import { useState, useEffect } from "react";

const slides = [
  {
    src: "/src/assets/images/servicedes2.png",
    caption: "Prestations de jardinage & entretien",
  },
  {
    src: "/src/assets/images/servicedes1.png",
    caption: "Avance immédiate de crédit d’impôt",
  },
  {
    src: "/src/assets/images/avantage-service.png",
    caption: "Services à la personne – 50 % d’avantage fiscal",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  /* AUTOPLAY */
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  /* SWIPE MOBILE */
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
      <h2>Nos services & avantages</h2>

      <div className="carousel">
        <button className="nav left" onClick={prev}>‹</button>

        <div
          className="carousel-frame"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
            key={index}
            src={slides[index].src}
            alt={slides[index].caption}
            className="carousel-image"
          />
        </div>

        <button className="nav right" onClick={next}>›</button>
      </div>

      <p className="carousel-caption">{slides[index].caption}</p>
     


      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
       <a href="/contact" className="carousel-cta"> Demander un devis </a>
    </section>
  );
}
