import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './home.scss'

const Home = () => {

    return (
        <>
            <Navbar />
            <div className="Hero">
                <h1>Organizar tu fiesta nunca fue más fácil y divertido </h1>
                <button>Contratar Servicios</button>
                <img src="" alt="" />
            </div>

            <main>
                <section class="main-container">
                    <div>
                        <p>
                            Party2Go es la plataforma mexicana para organizar tus fiestas, contratar servicios, entretenimiento, todo en un mismo lugar y con especialistas recomendados.
                        </p>
                    </div>

                    <div>

                    </div>

                </section >

                <section className="services">
                    <div className="services-title">
                        <h1>Nuestros Servicios</h1>
                    </div>
                    <div className="services-items">
                        <div className="service-card">
                            <p>Salones</p>
                            <img src="" alt="Sillas" />
                        </div>
                        <div className="service-card">
                            <p>Sillas</p>
                            <img src="" alt="Sillas" />
                        </div>
                        <div className="service-card">
                            <p>Mesas</p>
                            <img src="" alt="Sillas" />
                        </div>
                        <div className="service-card">
                            <p>Sonido/Dj</p>
                            <img src="" alt="Sillas" />
                        </div>
                    </div>
                </section>

                <section className="contact-container">

                    <div class="contact-titles">
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

            <Footer />
        </>
    )
}

export default Home;
