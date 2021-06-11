import React from 'react'
import logo_piñata from '../../assets/login-piñata.png'
import logo from '../../assets/logo.png'
import divider from '../../assets/divider.png'
import google_icon from '../../assets/icon-google.png'
import logo_white from '../../assets/logo-party2go-white.svg'
import './Login.scss'

const Login = () => {
    return (
        <div className='page'>
            <img className='logo-white' src={logo_white} alt="" />
            <div className='login-image__container'>
                <img src={logo_piñata} alt="" />
            </div>
            <div className='login'>
                <div className="login-container">
                    <div className='image-wrapper p-b'>
                        <img src={logo} alt="Party2Go logo" />
                    </div>
                    <form action="">
                        <label htmlFor="email">Correo electronico</label>
                        <input name="email" type="text" placeholder="test@gmail.com" />
                        <label htmlFor="password">Contraseña</label>
                        <input name="password" type="password" placeholder="****" />
                        
                        <div className='additional-info'>
                            <span className='error'>Contraseña o correo incorrecto</span>
                            <a className='forgot-password' href="/forgot-password"><span>Olvide mi contraseña</span></a>
                        </div>
                        <div className='button-wrapper p-s'>
                            <button className='login-button'>INGRESAR</button>
                        </div>
                        <div className='image-wrapper'>
                            <img src={divider} alt="" />
                        </div>
                        <div className='button-wrapper p-s'>
                            <button className='login-button__google'> 
                                <img src={google_icon} alt="" />
                                Continuar con Google
                            </button>
                        </div>
                    </form>
                </div>
                <span className='login-register'>¿No tienes una cuenta? <a href="/register">Regístrate</a></span>
            </div>
        </div>
    )
}

export default Login;
