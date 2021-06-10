import React from 'react';
import './navbar.scss';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-logo">
                    <img src="" alt="" />
                </div>
                <div className="navbar-links">
                    <a href="#">Inicio</a>
                    <a href="#">Servicios</a>
                    <a href="#">Empieza Aquí</a>
                    <a href="#">Contacto</a>
                </div>
                <div className="right-nav">
                    <input type="text" placeholder="Search" />
                    <button className="btn-enter">
                        Entrar
                    </button>
                    <button className="btn-createAccount">
                        Crear Cuenta
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
