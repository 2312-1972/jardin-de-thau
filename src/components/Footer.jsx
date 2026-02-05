import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Jardin de Thau</h3>
          <p>Jardinier Paysagiste – Création & Entretien</p>
        </div>

        <div className="footer-links">
          <Link to="/">Accueil</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-socials">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/groups/596429257115464/user/1358590834?locale=fr_FR"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/jardin.de.thau?igsh=MTE5d3g5Y3o4MmxyNw=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          {/* Icône mail redirige vers la page Contact */}
          <Link to="/contact" aria-label="Contact">
            <FaEnvelope />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Jardin de Thau — Tous droits réservés
      </div>
    </footer>
  );
}
