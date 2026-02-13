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
    <section className="  content glass-section">
      <div className=" glass-card">
  <h2 >Jardinier paysagiste à Montbazin (34) – Bassin de Thau</h2>

  <p>
    Jardin de Thau est une entreprise de jardinage et de paysagisme basée à Montbazin (Hérault).
    Nous accompagnons les particuliers et professionnels pour l’entretien de jardins, la création
    paysagère et l’aménagement extérieur dans tout le Bassin de Thau.
  </p>

  <p>
    De la tonte de pelouse à la taille des haies, en passant par l’élagage, le débroussaillage
    et la prévention incendie, nous proposons des prestations sur mesure adaptées à votre terrain
    et à votre environnement méditerranéen.
  </p>
  </div>
</section>

      <section className="content glass-section">
        <div className="glass-card">
          <h2>Notre savoir-faire</h2>
          <p>
            Jardin de Thau met son expertise au service de vos extérieurs :
            entretien, création paysagère et aménagement sur mesure à Montbazin
            et autour du Bassin de Thau.
          </p>

          <ul>
            <li>🌿 Entretien de jardins et espaces verts</li>
            <li>🌳 Taille d’arbres et arbustes</li>
            <li>🪴 Création paysagère</li>
            <li>🪨 Aménagements extérieurs</li>
            <li>💧 Arrosage & irrigation</li>
            <li>🔥 Débroussaillage & prévention incendie</li>
          </ul>
        </div>
      </section>

      <Carousel />

      <section className="services-visuals">
        <h2>Nos services de jardinage</h2>

        <div className="services-grid">
          <div className="service-card">
            <img src={herbe} alt="Entretien de jardin à Montbazin" />
            <p>Entretien du jardin</p>
          </div>

          <div className="service-card">
            <img src={tondre} alt="Tonte de pelouse dans l’Hérault" />
            <p>Tonte de pelouse</p>
          </div>

          <div className="service-card">
            <img src={taille} alt="Taille de haies et arbustes à Montbazin" />
            <p>Taille des haies</p>
          </div>

          <div className="service-card">
            <img src={pelle} alt="Aménagement extérieur paysager" />
            <p>Aménagement extérieur</p>
          </div>

          <div className="service-card">
            <img src={coupe} alt="Taille et élagage d’arbres" />
            <p>Taille & élagage</p>
          </div>

          <div className="service-card">
            <img src={tronconne} alt="Abattage d’arbres et débroussaillage" />
            <p>Abattage & débroussaillage</p>
          </div>
        </div>
      </section>

      <section className=" realisations ">
        <div className="glass-card" >
        <h2 >Nos réalisations</h2>

        {/* mini texte SEO local  */}
        <p >
          Intervention à Montbazin, Gigean, Poussan, Frontignan, Sète et dans tout le Bassin de Thau.
        </p>
</div>
        <div className="grid" style={{paddingTop:'30px'}}>
          <div className="card">Jardin méditerranéen</div>
          <div className="card">Entretien annuel</div>
          <div className="card">Création sur mesure</div>
        </div>
      </section>
    </>
  )
}
