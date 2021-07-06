import React from 'react';

// Components
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// Icons
import heroImage from '../../../src/assets/hero-party.svg'
import iconSalon from '../../../src/assets/icon-services-salones.svg'
import iconSilla from '../../../src/assets/icon-services-sillas.svg'
import iconMesa from '../../../src/assets/icon-services-mesas.svg'
import iconSonido from '../../../src/assets/icon-services-sound.svg'

// Styles
import './home.scss'

const Home = () => {

    return (
        <>
           

            <div className="hero">
                <div className="container">
                    <div className="content">
                        <div className="hero-title">
                            <div className="title">
                                <h1>Organizar tu fiesta nunca fue más fácil y divertido </h1>
                            </div>
                            <div className="btn-container">
                                <button >Contratar Servicios</button>
                            </div>
                        </div>
                        <div className="hero-img">
                            <img src={heroImage} alt="Hero Party" />
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <section className="about container">
                    <p classsName="description">
                        Party2Go es la plataforma mexicana para organizar tus fiestas, contratar servicios, entretenimiento, todo en un mismo lugar y con especialistas recomendados.
                    </p>
                </section >

                <section className="module container">

                    <h1 className="title">Nuestros Servicios</h1>

                    <div className="container-cards">

                        <div className="card">
                            <img class="img" src={iconSalon} alt="Salon" />
                            <h4>Salones</h4>
                        </div>
                        <div className="card">
                            <img src={iconSilla} alt="Sillas" />
                            <h4>Sillas</h4>
                        </div>
                        <div className="card">
                            <img src={iconMesa} alt="Mesas" />
                            <h4>Mesas</h4>
                        </div>
                        <div className="card">
                            <img src={iconSonido} alt="Sonido" />
                            <h4>Sonido/Dj</h4>
                        </div>
                    </div>
                </section>

                <section className="info-hero">
                    <div className="content-hero container">

                        <div className="hero-title">
                            <h1>Empieza Aqui</h1>
                        </div>
                        <div className="hero-text">
                            <p>Party2Go es la plataforma mexicana para organizar tus fiestas, contratar servicios, entretenimiento, todo en un mismo lugar y con especialistas recomendados.</p>
                        </div>
                        <div className="button-services">
                            <button>Contratar Servicios</button>
                        </div>
                    </div>

                </section>

                <section className="contact container">

                    <div className="contact-titles">
                        <h1>Contacto</h1>
                        <p>Haznos llegar tus dudas, ¡un asesor te atenderá a la brevedad!</p>
                    </div>

                    <div className="form-conmtact">
                        <div className="form-contact">
                            <input type="text" placeholder="Escribe tu correo electrónico" />
                            <button
                                className="btn-send"
                            >Enviar
                            </button>
                        </div>
                    </div>

                </section>

            </main>

            {/* <Footer /> */}
        </>
    )
}

export default Home;
