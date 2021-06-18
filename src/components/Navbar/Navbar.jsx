import React from 'react';
import './navbar.scss';

// Icons
import Logo from '../../assets/logo-party2go-white.svg';

const Navbar = () => {
    return (
        <>

            <nav className="navbar">
                <div className="nav-logo">
                    <img src={Logo} alt="Party 2 Go" />
                </div>
                <div className="navbar-links">
                    <a href="#">Inicio</a>
                    <a href="#">Servicios</a>
                    <a href="#">Empieza Aquí</a>
                    <a href="#">Contacto</a>
                </div>
                <div className="right-nav">
                    <input type="text" placeholder="Search" />
                    <button className="btn-secondary">
                        Entrar
                    </button>
                    <button className="btn-main">
                        Crear Cuenta
                    </button>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
