import React from 'react';
import logo from "../../assets/logo-footer.svg";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <img src={logo} alt="Logo de Kasa" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
