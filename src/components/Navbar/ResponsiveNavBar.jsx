import React from 'react';
import Logo from '../../assets/logo-party2go-white.svg';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavButtons,
    NavBtnLink
} from './NavbarElements';


const ResponsiveNavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src={Logo} alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/'>
                        Servicios
                    </NavLink>
                    <NavLink to='/'>
                        Empieza Aquí
                    </NavLink>
                    <NavLink to='/'>
                        Contáctanos
                    </NavLink>
                    {/* Second Nav
                    <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>


                <NavBtn>
                    <NavBtnLink to='/login'>Entrar</NavBtnLink>
                    <NavBtnLink to='/login'>Crear Cuenta</NavBtnLink>
                </NavBtn>

            </Nav>
        </>
    )
}

export default ResponsiveNavBar;
