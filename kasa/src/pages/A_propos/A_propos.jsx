import React, { useRef, useState } from 'react';
import './A_propos.css';
import arrow_up from "../../assets/vector-up.svg";

const sections = [
  {
    title: 'Fiabilité',
    content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
  },
  {
    title: 'Respect',
    content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    title: 'Service',
    content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    title: 'Sécurité',
    content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
  }
];

function About() {
  const [openSections, setOpenSections] = useState([]);
  const contentRefs = useRef([]);

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

  return (
    <div className="about-page">
      <div className="banner-about"></div>
      <div className="about-container">
        {sections.map((section, index) => (
          <div key={index} className={`about-section ${openSections.includes(index) ? 'open' : ''}`}>
            <div className="about-section-header" onClick={() => toggleSection(index)}>
              <h2>{section.title}</h2>
              <img src={arrow_up} alt="Toggle section" className={`arrow ${openSections.includes(index) ? 'open' : ''}`} />
            </div>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={`about-section-content ${openSections.includes(index) ? 'open' : ''}`}
            >
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
