import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../context/UserProvider';

const ProfileUser = () => {

    const [user] = useContext(UserContext);
    console.log(user);

    const UserSession = localStorage.getItem("login");
    console.log(UserSession);

    if (!user) return <></>;


    const { nombre, apellidoPaterno, apellidoMaterno, correo } = user;

    return (
        <>
            <h1>Hello </h1>
            <h1>{`Nombre Completo: ${nombre} ${apellidoPaterno} ${apellidoMaterno}`}</h1>
            <p>{`Correo Electrónico: ${correo}`}</p>
        </>
    )
}

export default ProfileUser
