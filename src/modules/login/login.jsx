import React from 'react'
import img from '../../assets/login-piñata.png'
import './Login.scss'

const Login = () => {
    return (
        <div>
            <div className='login-image__container'>
                <img src={img} alt="" />
            </div>
            <div className='form-container'>
                <div className="form-container__subcontainer">
                    hello world
                </div>
                <span>¿No tienes una cuenta? <a href="">Crea una</a></span>
            </div>
        </div>
    )
}

export default Login;
