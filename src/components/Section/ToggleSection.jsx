import React, { useState, useRef } from 'react';
import arrow_up from "../../assets/vector-up.svg";
import './ToggleSection.css';

function ToggleSection({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`toggle-section ${isOpen ? 'open' : ''}`}>
      <div className="toggle-section-header" onClick={toggleSection}>
        <h2>{title}</h2>
        <img
          src={arrow_up}
          alt="Toggle section"
          className={`arrow ${isOpen ? 'open' : ''}`}
        />
      </div>
      <div
        ref={contentRef}
        className={`toggle-section-content ${isOpen ? 'open' : ''}`}
      >
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
    </div>
  );
}

export default ToggleSection;
