import { useState } from "react";
import { useHead } from "@unhead/react";
import "../styles/contact.css"

export default function Contact() {
  const [sent, setSent] = useState(false);

  useHead({
    title: "Contact | Jardin de Thau – Montbazin (34)",
    link: [{ rel: "canonical", href: "https://jardindethau.fr/contact" }],
    meta: [
      {
        name: "description",
        content:
          "Contactez Jardin de Thau à Montbazin (34) : téléphone, email, adresse, horaires. Devis et interventions sur le Bassin de Thau.",
      },
      { property: "og:title", content: "Contact | Jardin de Thau – Montbazin (34)" },
      {
        property: "og:description",
        content:
          "Téléphone, email, adresse, horaires, zone d’intervention. Devis rapide à Montbazin et Bassin de Thau.",
      },
      { property: "og:url", content: "https://jardindethau.fr/contact" },
      { property: "og:type", content: "website" },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    }).then(() => {
      setSent(true);
      form.reset();
    });
  };

  return (
    <section className="contact-container">
      <div className="contact-card">
        <h2>Contactez-nous</h2>
        <p>Un projet ? Une question ? Parlons-en 🌿</p>

        {sent ? (
          <div className="success-message">✅ Message envoyé avec succès !</div>
        ) : (
          <form
            action="https://formspree.io/f/xvzqweaq"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="_subject"
              value="🌿 Nouveau message – Jardin de Thau"
            />

            <div className="field">
              <input type="text" name="name" required placeholder=" " />
              <label>Nom</label>
            </div>

            <div className="field">
              <input type="email" name="email" required placeholder=" " />
              <label>Email</label>
            </div>

            <div className="field">
              <textarea name="message" rows="4" required placeholder=" " />
              <label>Message</label>
            </div>

            <button type="submit">Envoyer le message</button>
          </form>
        )}

        {/* ✅ Vidéo SOUS le formulaire */}
        <div className="contact-video">
          <h3>Découvrez vos aides à la personne </h3>

          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/_4tp5zCnHy8"
              title="Présentation Jardin de Thau"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <h3 className="contact-video-caption">
            🌿 Le service d'avance immédiate de crédit d'impôts
          </h3>
        </div>
      </div>
    </section>
  );
}
