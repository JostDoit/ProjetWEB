import React, {useState} from 'react';
import './Header.css'; // Importation des styles CSS spécifiques au composant Header

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className="header">
            <div className="logo-container">
                <img src="/miam.png" alt="Logo" className="logo" />
            </div>
            <div className="dropdown-container">
                <button className="dropdown-button" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className={`dropdown-content ${menuOpen ? 'show' : ''}`}>
                </div>
            </div>
        </header>
    );
}

export default Header;

