import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../../assets/logements.json'
import './Fiche_logement.css' // Assurez-vous de créer un fichier CSS pour les styles spécifiques

function FicheLogement() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <div>Logement non trouvé</div>
  }

  return (
    <div className="fiche-logement">
      <h1>{logement.title}</h1>
      <div className="gallery">
        {logement.pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`${logement.title} ${index + 1}`} />
        ))}
      </div>
      <div className="logement-details">
        <div className="logement-info">
          <h2>Description</h2>
          <p>{logement.description}</p>
          <h2>Location</h2>
          <p>{logement.location}</p>
        </div>
        <div className="logement-meta">
          <div className="host">
            <h2>Hôte</h2>
            <img src={logement.host.picture} alt={logement.host.name} />
            <p>{logement.host.name}</p>
          </div>
          <div className="rating">
            <h2>Note</h2>
            <p>{'⭐'.repeat(logement.rating)}</p>
          </div>
          <div className="tags">
            <h2>Tags</h2>
            <ul>
              {logement.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="equipments">
            <h2>Équipements</h2>
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FicheLogement
