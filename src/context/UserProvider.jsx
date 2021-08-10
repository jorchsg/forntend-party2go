import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import config from "../config";

const UserProvider = ({ children }) => {

    const [user, setUser] = useState('randomtest');

    const getUserById = async () => {
        const response = await axios.get(`${config.backendURL}users/${'2'}`);
        const result = response.data.usuario;
        // console.log(result);
        setUser(result);
    }

    useEffect(() => {

        // getUserById();

        (async () => {
            try {
                const response = await axios.get(`${config.backendURL}users/${'2'}`);
                const result = response.data.usuario;
                // console.log(result);
                setUser(result);
            } catch (error) {
                console.log(error);
            }
        })();

    }, []);

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
    
};

export const UserContext = createContext();

export default UserProvider;

