import React from 'react';
import './footer.scss';

// Icons
import Twitter from '../../assets/icon-twitter-white.svg'
import Youtube from '../../assets/icon-youtube-white.svg'
import Facebook from '../../assets/icon-facebook-white.svg'
import Instagram from '../../assets/icon-instagram-white.svg'
import AppStore from '../../assets/icon-app-store.svg'
import GooglePlay from '../../assets/icon-google-play-white.svg'


const Footer = () => {
    return (
        <>
            <div className="footer-party">

                <div className="footer-container">

                    <div className="social-networks">

                        <div className="social-title">
                            <h2>Party To Go</h2>
                            <p>Los mejores especialistas para tus fiestas en un solo lugar.</p>
                        </div>

                        <div className="social">
                            <h5>Siguenos en Nuestras Redes Sociales</h5>
                            <div className="icons-social-networks">
                                <img className="item-1" src={Twitter} alt="icon twitter" />
                                <img className="item-2" src={Youtube} alt="icon-youtube" />
                                <img className="item-3" src={Facebook} alt="icon-facebook" />
                                <img className="item-4" src={Instagram} alt="icon-instagram" />
                            </div>
                        </div>
                    </div>

                    <div className="footer-sections">
                        <h2>Secciones</h2>
                        <ul>
                            <li>Servicios</li>
                            <li>Empieza Aquí</li>
                            <li>Conctacto</li>
                        </ul>
                    </div>

                    <div className="footer-apps">
                        <button className="btn-language">
                            Idioma: Español
                        </button>
                        <h4>Descarga la app de Party2Go</h4>
                        <img src={AppStore} alt="app sotre" />
                        <img src={GooglePlay} alt="Google play" />
                    </div>
                </div>

            </div>

            <div className="rights">
                <p>Copyright ©  Party2Go 2021 - Todos los derechos reservados</p>
            </div>

        </>
    )
}

export default Footer;
