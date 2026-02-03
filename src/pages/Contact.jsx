import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

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
          <div className="success-message">
            ✅ Message envoyé avec succès !
          </div>
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
              <input type="text" name="name" required />
              <label>Nom</label>
            </div>

            <div className="field">
              <input type="email" name="email" required />
              <label>Email</label>
            </div>

            <div className="field">
              <textarea name="message" rows="4" required />
              <label>Message</label>
            </div>

            <button type="submit">Envoyer le message</button>
          </form>
        )}
      </div>
    </section>
  );
}
