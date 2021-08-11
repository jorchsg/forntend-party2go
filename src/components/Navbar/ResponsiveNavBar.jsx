import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import Logo from "../../assets/logo-party2go-white.svg";
import Salir from "../../assets/salir.svg";
import { AppContext } from "../Provider/index";
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

  ListItem,
  Results
} from "./NavbarElements";


const UserSession = localStorage.getItem("login");

const ResponsiveNavBar = () => {

  const [allContext] = useContext(AppContext);

  const [filtrados, setFiltrados] = useState([]);

  const [isFocus, setIsFocus] = useState(false);

  const filtrarSalones = (value => {
    setFiltrados(allContext.salones.filter(
      item => item.nombre.toLowerCase().search(value.toLowerCase()) !== -1
    ));
  });

  console.log('Salones Filtados', filtrados);

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

            <SearchBar
              placeholder="Search"
              onChange={(e) => filtrarSalones(e.target.value)}
              onFocus={() => setIsFocus(true)}
              onBlur={(() => setIsFocus(false))}
            >
            </SearchBar>

            <Results
              style={{ display: isFocus ? 'block' : 'none' }}
            >
              <>
                {
                  filtrados.map((ele =>
                    <p>{ele.nombre}</p>
                  ))
                }
              </>
            </Results>

            <DropDown>
              <DropBtn>JT</DropBtn>
              <DropDownContent>
                <ListItem href="/profile">Mi Perfil</ListItem>
                <ListItem onClick={() => logOut()}>Salir</ListItem>
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
