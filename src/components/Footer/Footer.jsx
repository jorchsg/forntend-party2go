import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <>
            <div className="footer-container">

                <div className="footer-social-networks">
                    <h2>Party To Go</h2>
                    <p>Los mejores especialistas para tus fiestas en un solo lugar.</p>

                    <h5>Siguenos en Nuestras Redes Sociales</h5>
                    <div className="icons-social-networs">
                        <img src="" alt="icon twitter" />
                        <img src="" alt="icon-youtube" />
                        <img src="" alt="icon-facebook" />
                        <img src="" alt="icon-instagram" />
                    </div>
                </div>

                <div className="footer-sections">
                    <h2>Secciones</h2>
                    <li>
                        <ul>Servicios</ul>
                        <ul>Empieza Aquí</ul>
                        <ul>Conctacto</ul>
                    </li>
                </div>

                <div className="footer-apps">
                    <button className="btn-language">
                        Idioma: Español
                    </button>
                    <h4>Descarga la app de Party2Go</h4>
                    <img src="" alt="app sotre image" />
                    <img src="" alt="Google play image" />
                </div>

                <div className="rights">
                    <p>Copyright ©  Party2Go 2021 - Todos los derechos reservados</p>
                </div>

            </div>

        </>
    )
}

export default Footer;
