import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <img src="/logo.jpg" alt="Jardin de Thau" className="logo" />

        <section className="hero">
          <h1 className="hero-h1">Jardin de Thau</h1>
          <p className="hero-p">Jardinier Paysagiste – Création & Entretien</p>
        </section>

        <nav className="nav" aria-label="Navigation principale">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
