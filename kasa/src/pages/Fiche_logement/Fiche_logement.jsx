import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../assets/logements.json';
import './Fiche_logement.css';
import arrow_left from '../../assets/vector-left.svg';
import arrow_right from '../../assets/vector-right.svg';
import emptyStar from "../../assets/star_empty.svg";
import fullStar from "../../assets/star.svg";
import arrow_up from "../../assets/vector-up.svg";

function FicheLogement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openSections, setOpenSections] = useState([]);
  const contentRefs = useRef([]);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
  };

  const toggleSection = (index) => {
    setOpenSections((prevOpenSections) => {
      const newOpenSections = prevOpenSections.includes(index)
        ? prevOpenSections.filter((i) => i !== index)
        : [...prevOpenSections, index];

      const element = contentRefs.current[index];

      if (newOpenSections.includes(index)) {
        element.style.maxHeight = element.scrollHeight + "px";
      } else {
        element.style.maxHeight = element.scrollHeight + "px"; // Set to current height
        requestAnimationFrame(() => {
          element.style.maxHeight = "0px"; // Then collapse
        });
      }

      return newOpenSections;
    });
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
        <div
          className={`logement-section ${openSections.includes(0) ? 'open' : ''}`}
          onClick={() => toggleSection(0)}
        >
          <h2>Description <img src={arrow_up} alt="Toggle description" className={`arrow ${openSections.includes(0) ? 'open' : ''}`} /></h2>
          <div
            ref={(el) => (contentRefs.current[0] = el)}
            className={`logement-section-content ${openSections.includes(0) ? 'open' : ''}`}
          >
            <p>{logement.description}</p>
          </div>
        </div>
        <div
          className={`logement-section ${openSections.includes(1) ? 'open' : ''}`}
          onClick={() => toggleSection(1)}
        >
          <h2>Équipements <img src={arrow_up} alt="Toggle equipments" className={`arrow ${openSections.includes(1) ? 'open' : ''}`} /></h2>
          <div
            ref={(el) => (contentRefs.current[1] = el)}
            className={`logement-section-content ${openSections.includes(1) ? 'open' : ''}`}
          >
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;
