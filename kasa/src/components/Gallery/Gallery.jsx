import React, { useState } from 'react';
import arrow_left from '../../assets/vector-left.svg';
import arrow_right from '../../assets/vector-right.svg';
import './Gallery.css';

function Gallery({ pictures, title }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="logement-gallery">
      <img 
        src={pictures[currentImageIndex]} 
        alt={`${title} ${currentImageIndex + 1}`} 
      />
      {pictures.length > 1 && (
        <>
          <button className="gallery-button left" onClick={handlePreviousImage}>
            <img src={arrow_left} alt="Précédent" />
          </button>
          <button className="gallery-button right" onClick={handleNextImage}>
            <img src={arrow_right} alt="Suivant" />
          </button>
          <span className="image-counter">{currentImageIndex + 1}/{pictures.length}</span>
        </>
      )}
    </div>
  );
}

export default Gallery;
