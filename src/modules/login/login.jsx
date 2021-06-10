import React from 'react'
import logo_piñata from '../../assets/login-piñata.png'
import logo from '../../assets/logo.png'
import './Login.scss'

const Login = () => {
    return (
        <div>
            <div className='login-image__container'>
                <img src={logo_piñata} alt="" />
            </div>
            <div className='form'>
                <div className="form__subcontainer">
                    <div className='image-wrapper'>
                        <img src={logo} alt="Party2Go logo" />
                    </div>
                    <form action="">
                        <label htmlFor="email">Correo Electronico</label>
                        <input name="email" type="text" placeholder="test@gmail.com" />
                        <label htmlFor="password">Contraseña</label>
                        <input name="password" type="password" placeholder="****" />
                        
                        <div className='additional-info'>
                            <span className='error'>Contraseña o correo incorrecto</span>
                            <a className='forgot-password' href="/forgot-password"><span>Olvide mi contraseña</span></a>
                        </div>
                        <div className='button-wrapper'>
                            <button className='login-button'>Ingresar</button>
                        </div>
                    </form>
                </div>
                <span>¿No tienes una cuenta? <a href="/register">Crea una</a></span>
            </div>
        </div>
    )
}

export default Login;
