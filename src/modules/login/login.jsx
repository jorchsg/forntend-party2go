import React from "react";
import logo_piñata from "../../assets/login-piñata.png";
import logo from "../../assets/logo.png";
import divider from "../../assets/divider.png";
import google_icon from "../../assets/icon-google.png";
import logo_white from "../../assets/logo-party2go-white.svg";
import "./Login.scss";
import axios from "axios";
import config from "../../config";

const Login = () => {
  const [error, setError] = React.useState(undefined);
  const [form, setForm] = React.useState({
    email: undefined,
    password: undefined,
  });

  const handleOnChange = (e) => {
    setError(undefined);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    //Avoid html default submit
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("No se permiten campos vacios");
      return;
    }

    //Call to API
    try {
      const result = await axios.get(`${config.backendURL}login`, {
        params: {
          correo: "johar@gmail.com",
          password: "123",
        },
      });
      console.log(result);
      setError("Usuario o contraseña invalidos");
    } catch (error) {
      setError("Error de red. Vuelva a intentarlo más tarde");
      console.error(error);
    }
  };
  return (
    <div className="page">
      <img className="logo-white" src={logo_white} alt="" />
      <div className="login-image__container">
        <img src={logo_piñata} alt="" />
      </div>
      <div className="login">
        <div className="login-container">
          <div className="image-wrapper p-b">
            <img src={logo} alt="Party2Go logo" />
          </div>
          <form action="">
            <label htmlFor="email">Correo electronico</label>
            <input
              name="email"
              type="text"
              placeholder="test@gmail.com"
              onChange={handleOnChange}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              name="password"
              type="password"
              onChange={handleOnChange}
              placeholder="****"
            />

            <div className="additional-info">
              {error ? <span className="error">{error}</span> : null}
              <a className="forgot-password" href="/forgot-password">
                <span>Olvide mi contraseña</span>
              </a>
            </div>
            <div className="button-wrapper p-s">
              <button className="login-button" onClick={handleSubmit}>
                INGRESAR
              </button>
            </div>
            <div className="image-wrapper">
              <img src={divider} alt="" />
            </div>
            <div className="button-wrapper p-s">
              <button className="login-button__google">
                <img src={google_icon} alt="" />
                Continuar con Google
              </button>
            </div>
          </form>
        </div>
        <span className="login-register">
          ¿No tienes una cuenta? <a href="/register">Regístrate</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
