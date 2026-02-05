import Carousel from "../components/Carousel"
import herbe from "../assets/images/herbe.jpeg"
import pelle from "../assets/images/pelle.jpeg"
import coupe from "../assets/images/coupe.jpeg"
import tronconne from "../assets/images/tronconne.jpeg"
import taille from "../assets/images/taille.jpeg"
 import tondre from "../assets/images/tondre.jpeg"

export default function Home() {
  return (
    <>
       
  
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
<section className="services-visuals">
  {/* <h2>Nos prestations en images</h2> */}

  <div className="services-grid">
    <div className="service-card">
      <img src={herbe} alt="Entretien de pelouse" />
      <p >Entretien du jardin</p>
    </div>

    <div className="service-card">
      <img src={tondre} alt="Entretien de pelouse" />
      <p >Tonte de pelouse</p>
    </div>

    <div className="service-card">
      <img src={taille} alt="Entretien de pelouse" />
      <p >Taille des haies</p>
    </div>

    <div className="service-card">
      <img src={pelle} alt="Aménagement extérieur" />
      <p>Aménagement extérieur</p>
    </div>

    <div className="service-card">
      <img src={coupe} alt="Taille et élagage" />
      <p>Taille & élagage</p>
    </div>

    <div className="service-card">
      <img src={tronconne} alt="Abattage" />
      <p>Abattage & débroussaillage</p>
    </div>
  </div>
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
