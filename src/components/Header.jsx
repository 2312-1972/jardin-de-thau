import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/header.css";

function HeaderInner() {
  const [open, setOpen] = useState(false);

  // Bloque le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Ferme au clavier (ESC)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <img src="/logo.jpg" alt="Jardin de Thau" className="logo" />

        <section className="hero">
          <h1 className="hero-h1">Jardin de Thau</h1>
          <p className="hero-p">Jardinier Paysagiste – Création & Entretien</p>
        </section>

        {/* DESKTOP NAV */}
        <nav className="nav nav-desktop" aria-label="Navigation principale">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* BURGER */}
        <button
          className={`burger ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`menu-overlay ${open ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile panel */}
      <nav
        id="mobile-menu"
        className={`nav-mobile ${open ? "open" : ""}`}
        aria-label="Navigation mobile"
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) => `mobile-link ${isActive ? "active" : ""}`}
        >
          Accueil
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) => `mobile-link ${isActive ? "active" : ""}`}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default function Header() {
  const location = useLocation();

  // Astuce: en changeant de route, on remonte un nouveau HeaderInner (state reset)
  return <HeaderInner key={location.pathname} />;
}
