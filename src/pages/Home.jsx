import Carousel from "../components/Carousel"

export default function Home() {
  return (
    <>
       
      <section className="hero">
        <h1>Jardin de Thau</h1>
        <p>Jardinier Paysagiste – Création & Entretien</p>
      </section>
      <Carousel />
      <section className="content">
        <h2>Notre savoir-faire</h2>
        <p>
          Jardin de Thau met son expertise au service de vos extérieurs :
          entretien, création paysagère et aménagement sur mesure.
        </p>

        <ul>
          <li>🌿 Entretien de jardins</li>
          <li>🌳 Taille d’arbres et arbustes</li>
          <li>🪴 Création paysagère</li>
          <li>🪨 Aménagements extérieurs</li>
        </ul>
      </section>

      <section className="realisations">
        <h2>Nos réalisations</h2>
        <div className="grid">
          <div className="card">Jardin méditerranéen</div>
          <div className="card">Entretien annuel</div>
          <div className="card">Création sur mesure</div>
        </div>
      </section>
    </>
  )
}
