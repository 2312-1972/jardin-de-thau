import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <img src="/logo.jpg" alt="Jardin de Thau" className="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
