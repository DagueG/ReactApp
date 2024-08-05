import { Link } from 'react-router-dom';
import logo from "../../assets/LOGO.svg";

function Header() {
  return (
    <nav className="nav-container">
      <Link to="/"><img src={logo} alt="Home Logo" className="home-logo" /></Link>
      <div>
			<Link to="/" className="nav-header_link-home">Accueil</Link>
			<Link to="/about" className="nav-header_link-about">A Propos</Link>
      </div>
    </nav>
  )
}

export default Header;
