import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../assets/logements.json';
import './Fiche_logement.css';
import arrow_left from '../../assets/vector-left.svg';
import arrow_right from '../../assets/vector-right.svg';
import emptyStar from "../../assets/star_empty.svg";
import fullStar from "../../assets/star.svg";

function FicheLogement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openSections, setOpenSections] = useState([]);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
  };

  const toggleSection = (section) => {
    setOpenSections(openSections.includes(section) ? openSections.filter(sec => sec !== section) : [...openSections, section]);
  };

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
      <div className="logement-gallery">
        <img 
          src={logement.pictures[currentImageIndex]} 
          alt={`${logement.title} ${currentImageIndex + 1}`} 
        />
        {logement.pictures.length > 1 && (
          <>
            <button className="gallery-button left" onClick={handlePreviousImage}>
              <img src={arrow_left} alt="Précédent" />
            </button>
            <button className="gallery-button right" onClick={handleNextImage}>
              <img src={arrow_right} alt="Suivant" />
            </button>
          </>
        )}
        <span className="image-counter">{currentImageIndex + 1}/{logement.pictures.length}</span>
      </div>
      <div className="logement-header">
        <div className="logement-title">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <div className="host-info">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>

      <div className="logement-meta">
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="rating">
          {renderStars()}
        </div>
      </div>

      <div className="logement-details">
        <div className="logement-section" onClick={() => toggleSection('description')}>
          <h2>Description</h2>
          {openSections.includes('description') && <p>{logement.description}</p>}
        </div>
        <div className="logement-section" onClick={() => toggleSection('equipments')}>
          <h2>Équipements</h2>
          {openSections.includes('equipments') && (
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;
