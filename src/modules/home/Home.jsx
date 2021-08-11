import React from "react";

// Components
import Footer from "../../components/Footer/Footer";
// Icons
import heroImage from "../../../src/assets/hero-party.svg";
import iconSalon from "../../../src/assets/icon-services-salones.svg";
import iconSilla from "../../../src/assets/icon-services-sillas.svg";
import iconMesa from "../../../src/assets/icon-services-mesas.svg";
import iconSonido from "../../../src/assets/icon-services-sound.svg";
import DefaultLayout from "../DefaultLayout";
import { Link } from "react-router-dom";

// Styles
import "./home.scss";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-title">
              <div className="title">
                <h1>Organizar tu fiesta nunca fue más fácil y divertido </h1>
              </div>
              <div className="btn-container">
                <Link to="/order">
                  <button>Contratar Servicios</button>
                </Link>
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
            Party2Go es la plataforma mexicana para organizar tus fiestas,
            contratar servicios, entretenimiento, todo en un mismo lugar y con
            especialistas recomendados.
          </p>
        </section>

        <section className="module container" id="services">
          <h1 className="title">Nuestros Servicios</h1>

          <div className="container-cards container">
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

        <section className="info-hero" id="start">
          <div className="content-hero container">
            <div className="hero-title">
              <h1>Empieza Aqui</h1>
            </div>
            <div className="hero-text">
              <p>
                Party2Go es la plataforma mexicana para organizar tus fiestas,
                contratar servicios, entretenimiento, todo en un mismo lugar y
                con especialistas recomendados.
              </p>
            </div>
            <div className="button-services">
              <Link to="/order">
                <button>Contratar Servicios</button>
              </Link>
            </div>
          </div>
          <div className="color-overlay"></div>
        </section>

        <section className="contact container" id="contact">
          <div className="contact-titles">
            <h1>Contacto</h1>
            <h5>
              Háznos llegar tus dudas, ¡un asesor te atenderá a la brevedad!
            </h5>
          </div>

          <div className="form-contact">
            <div className="input-form">
              <input type="text" placeholder="Escribe tu correo electrónico" />
            </div>

            <div className="btn-form">
              <button className="btn-send">Enviar</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </DefaultLayout>
  );
};

export default Home;
