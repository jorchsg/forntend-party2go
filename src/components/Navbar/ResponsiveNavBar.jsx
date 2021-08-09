import React, { useState } from "react";
import { Link } from 'react-router-dom';
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

  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem
} from "./NavbarElements";

const options = ["Mi Perfil", "Salir"];

const UserSession = localStorage.getItem("login");

const ResponsiveNavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

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
              <DropBtn onClick={toggling}>Johar Terraza</DropBtn>
              <DropDownContent>
                <ListItem href="/profile">Profile</ListItem>
                <ListItem href="/">Exit</ListItem>
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
