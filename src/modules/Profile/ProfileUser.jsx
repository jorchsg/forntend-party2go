import React, { useEffect, useState } from 'react'
import axios from 'axios';
import config from '../../config';

const ProfileUser = () => {

    const [user, setUser] = useState({});

    console.log(user);

    const getUserById = async () => {
        const response = await axios.get(`${config.backendURL}users/${'2'}`);
        const result = response.data.usuario;
        setUser(result);
    }

    useEffect(() => {

        getUserById();

    }, []);

    const { nombre, apellidoPaterno, apellidoMaterno, correo } = user;

    return (
        <>
            <h1>{`Nombre Completo: ${nombre} ${apellidoPaterno} ${apellidoMaterno}`}</h1>
            <p>{`Correo Electrónico: ${correo}`}</p>
        </>
    )
}

export default ProfileUser
