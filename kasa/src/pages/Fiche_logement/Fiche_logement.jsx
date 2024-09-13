import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../assets/logements.json';
import ToggleSection from '../../components/Section/ToggleSection';
import Gallery from '../../components/Gallery/Gallery';
import './Fiche_logement.css';
import emptyStar from "../../assets/star_empty.svg";
import fullStar from "../../assets/star.svg";

function FicheLogement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          key={i}
          src={i < logement.rating ? fullStar : emptyStar}
          alt={i < logement.rating ? "Full Star" : "Empty Star"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="fiche-logement">
      <Gallery pictures={logement.pictures} title={logement.title} />

      <div className="logement-header">
        <div className="logement-title">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="host-info">
          <div className="host-ident">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="rating">
            {renderStars()}
          </div>
        </div>
      </div>

      <div className="logement-details">
        <ToggleSection 
          title="Description" 
          content={logement.description} 
        />
        <ToggleSection 
          title="Équipements" 
          content={<ul>{logement.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>} 
        />
      </div>
    </div>
  );
}

export default FicheLogement;
