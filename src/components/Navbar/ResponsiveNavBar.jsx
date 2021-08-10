import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Logo from "../../assets/logo-party2go-white.svg";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  ProfileOptions,
  SearchBar,

  DropDown,
  DropDownContent,
  DropBtn,

  ListItem
} from "./NavbarElements";


const UserSession = localStorage.getItem("login");

const ResponsiveNavBar = () => {
  
  const history = useHistory();

  const logOut = () => {
    
    history.push("/login");

    localStorage.removeItem('login');

  }

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/">Servicios</NavLink>
          <NavLink to="/">Empieza Aquí</NavLink>
          <NavLink to="/">Contáctanos</NavLink>
          {/* Second Nav
                    <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        {UserSession ?
          <ProfileOptions>

            <SearchBar placeholder="Search"></SearchBar>

            <DropDown>
              <DropBtn>Johar Terraza</DropBtn>
              <DropDownContent>
                <ListItem href="/profile">Profile</ListItem>
                <ListItem onClick={() => logOut()}>Exit</ListItem>
              </DropDownContent>
            </DropDown>

          </ProfileOptions>
          :
          <NavBtn>
            <NavBtnLink to="/login">Entrar</NavBtnLink>
            <NavBtnLink to="/login">Crear Cuenta</NavBtnLink>
          </NavBtn>
        }
      </Nav>
    </>
  );
};

export default ResponsiveNavBar;
