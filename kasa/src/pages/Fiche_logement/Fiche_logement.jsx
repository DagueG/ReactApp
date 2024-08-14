import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../assets/logements.json';
import './Fiche_logement.css';

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
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter((sec) => sec !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  return (
    <div className="fiche-logement">
      <div className="logement-gallery">
        <button className="gallery-button left" onClick={handlePreviousImage}>❮</button>
        <img 
          src={logement.pictures[currentImageIndex]} 
          alt={`${logement.title} ${currentImageIndex + 1}`} 
        />
        <button className="gallery-button right" onClick={handleNextImage}>❯</button>
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
          <p>{'⭐'.repeat(logement.rating)}</p>
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
