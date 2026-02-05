import { Link } from 'react-router-dom'
import '../styles/header.css'
export default function Header() {
  return (
    <header className="header">
      <img src="/logo.jpg" alt="Jardin de Thau" className="logo" />
      <section className="hero">
        <h1 className='hero-h1'>Jardin de Thau</h1>
        <p className='hero-p'>Jardinier Paysagiste – Création & Entretien</p>
      </section>
      <nav className='hero-p'>
        <Link className='nav-link' to="/">Accueil</Link>
        <Link className='nav-link' to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
 