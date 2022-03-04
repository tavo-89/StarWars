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
                    <Link className='link' to="/planets">Planets </Link>
                    <Link className="link" to='/people'>People</Link>
                    <Link className="link" to='/species'>Species</Link>
                    <Link className="link" to='/vehicles'>Vehicles</Link>
                    <Link className="link" to='/starships'>Starships</Link>
                </nav>
        </header>
        </div>
    );
};

export default Header;
