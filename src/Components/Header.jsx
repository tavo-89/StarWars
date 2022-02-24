import React from "react";
import { Link } from "react-router-dom";
import Logo from '../Images/Star_Wars_Logo.png'

const Header = () => {
    return (
        <div>
        <header>
            <img className="logo" src={Logo} alt="Logo Star Wars" />
                <nav>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/planetas">Planetas </Link>
                    <Link className="link" to='/personajes'>Personajes</Link>
                </nav>
        </header>
        </div>
    );
};

export default Header;
