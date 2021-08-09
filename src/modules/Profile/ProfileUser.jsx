import React, { useEffect, useState } from 'react'
import axios from 'axios';
import config from '../../config';

const ProfileUser = () => {

    const [user, setUser] = useState({});

    const getUserById = async () => {
        const response = await axios.get(`${config.backendURL}users/${'2'}`);
        const result = response.data.usuario;
        setUser(result);
    }

    const UserSession = localStorage.getItem("login");
    console.log(UserSession);

    useEffect(() => {

        getUserById();

    }, []);

    const { nombre, apellidoPaterno, apellidoMaterno, correo } = user;

    console.log(user);

    return (
        <>
            <h1>{`Nombre Completo: ${nombre} ${apellidoPaterno} ${apellidoMaterno}`}</h1>
            <p>{`Correo Electrónico: ${correo}`}</p>
        </>
    )
}

export default ProfileUser
