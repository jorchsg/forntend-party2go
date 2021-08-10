import React, {useContext, useState } from 'react'
import { UserContext } from '../../context/UserProvider';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './profile.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const ProfileUser = () => {

    const classes = useStyles();

    const [user] = useContext(UserContext);
    console.log(user);

    const [value, setValue] = useState('Controlled');

    const UserSession = localStorage.getItem("login");
    console.log(UserSession);

    if (!user) return <></>;

    const {
        nombre, apellidoPaterno, apellidoMaterno, telefono, estado, calle, numInterior, numExterior, cp, colonia, ciudad, correo
    } = user;

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <Container className="main">
                <div className="title">
                    <h1>Información De La Cuenta</h1>
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container spacing={12}>
                        <Grid item xs={12}>
                            <h4>Datos Personales</h4>
                            <TextField
                                id="outlined-read-only-input"
                                label="Nombre"
                                defaultValue="Nombre"
                                InputProps={{ readOnly: true, }}
                                variant="outlined"
                                value={nombre}
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Apellido Paterno"
                                defaultValue="Apellido"
                                InputProps={{ readOnly: true, }}
                                variant="outlined"
                                value={apellidoPaterno}
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Apellido Materno"
                                defaultValue="Apellido Materno"
                                InputProps={{readOnly: true,}}
                                variant="outlined"
                                value={apellidoMaterno}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <h4>Información de Contacto</h4>
                            <TextField
                                id="outlined-read-only-input"
                                label="Correo Electrónico"
                                defaultValue="Correo Electrónico"
                                InputProps={{ readOnly: true, }}
                                variant="outlined"
                                value={correo}
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Teléfono"
                                defaultValue="Hello World"
                                InputProps={{ readOnly: true, }}
                                variant="outlined"
                                value={telefono}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <h4>Dirección</h4>
                            <TextField
                                id="outlined-read-only-input"
                                label="Calle"
                                defaultValue="Hello World"
                                InputProps={{ readOnly: true, }}
                                variant="outlined"
                                value={calle}
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Numéro Exterior"
                                defaultValue="Hello World"
                                InputProps={{ readOnly: true, }}
                                variant="outlined"
                                value={numExterior}
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Numéro Interior"
                                defaultValue="Hello World"
                                InputProps={{ readOnly: true, }}
                                variant="outlined"
                                value={numInterior}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="outlined-read-only-input"
                                label="Colonia"
                                defaultValue="Hello World"
                                InputProps={{ readOnly: true, }}
                                variant="outlined"
                                value={colonia}
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Ciudad"
                                defaultValue="Hello World"
                                InputProps={{ readOnly: true, }}
                                variant="outlined"
                                value={ciudad}
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Estado"
                                defaultValue="Hello World"
                                InputProps={{ readOnly: true, }}
                                variant="outlined"
                                value={estado}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-read-only-input"
                                label="Código Postal"
                                defaultValue="Hello World"
                                InputProps={{ readOnly: true, }}
                                variant="outlined"
                                value={cp}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    )
}

export default ProfileUser
