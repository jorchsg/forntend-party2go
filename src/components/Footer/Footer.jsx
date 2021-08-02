import React from 'react';
import './footer.scss';

// Icons
import Twitter from '../../assets/icon-twitter-white.svg'
import Youtube from '../../assets/icon-youtube-white.svg'
import Facebook from '../../assets/icon-facebook-white.svg'
import Instagram from '../../assets/icon-instagram-white.svg'
import AppStore from '../../assets/icon-app-store.svg'
import GooglePlay from '../../assets/icon-google-play-white.svg'
import LogoParty2Go from '../../assets/logo-party2go-white.svg'


const Footer = () => {
    return (
        <>
            <div className="footer-party">

                <div className="footer-container container">

                    <div className="social-networks">

                        <div className="social-title">
                            <img src={LogoParty2Go} alt="logo" />
                            <p>Los mejores especialistas para tus fiestas en un solo lugar.</p>
                        </div>

                        <div className="social">
                            <h5>Siguenos en redes sociales: </h5>
                            <div className="icons-social-networks">
                                <img className="item" src={Twitter} alt="icon twitter" />
                                <img className="item" src={Youtube} alt="icon-youtube" />
                                <img className="item" src={Facebook} alt="icon-facebook" />
                                <img className="item" src={Instagram} alt="icon-instagram" />
                            </div>
                        </div>
                    </div>

                    <div className="footer-sections">
                        <h4>Secciones</h4>
                        <ul className="service-list">
                            <li>Servicios</li>
                            <li>Empieza Aquí</li>
                            <li>Conctacto</li>
                        </ul>
                    </div>

                    <div className="footer-apps">
                        <h4>Descarga la app</h4>
                        <div class="apps">
                            <div className="appStore">
                                <img src={AppStore} alt="app sotre" />
                            </div>
                            <div className="google-play">
                                <img src={GooglePlay} alt="Google play" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rights">
                    <p>Copyright ©  Party2Go 2021 - Todos los derechos reservados</p>
                </div>
            </div>


        </>
    )
}

export default Footer;
