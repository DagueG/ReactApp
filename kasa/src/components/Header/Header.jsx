import { Link } from 'react-router-dom';
import logo from "../../assets/LOGO.svg";
import './Header.css'

function Header() {
  return (
    <nav className="header-container">
      <Link to="/"><img src={logo} alt="Home Logo" className="home-logo" /></Link>
      <div className="navigation-section">
			  <Link to="/" className="nav-header_link-home">Accueil</Link>
			  <Link to="/about" className="nav-header_link-about">A Propos</Link>
      </div>
    </nav>
  )
}

export default Header;
