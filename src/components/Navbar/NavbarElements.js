import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: linear-gradient(
    142.75deg,
    #ed5026 -2.2%,
    #f02748 50.89%,
    #f71694 107.64%
  );
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  justify-content: flex-start;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
    font-weight: bold;
  }
  &:hover {
    color: yellow;
    opacity: 0.7;
  }
  img {
    @media screen and (min-width: 992px) {
      display: none;
    }
  }
`;
export const Anchor = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #fff;
    font-weight: bold;
  }
  &:hover {
    color: yellow;
    opacity: 0.7;
  }
  img {
    @media screen and (min-width: 992px) {
      display: none;
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  width: 100vw;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  /* margin-right: 24px; */
  /* Third Nav */
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #2d2d41;
  :first-child {
    margin-right: 18px;
  }
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  /* margin-left: 24px; */
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const ProfileOptions = styled.div`
  display: grid;
  grid-template-columns: 70% auto auto;
  grid-gap: 14px;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SearchBar = styled.input.attrs({
  type: "text",
})`
  height: 46px;
  width: 212px;
  left: 0px;
  top: 1px;
  border-radius: 4px;
  padding: 12px, 16px, 12px, 16px;
  border: none;
  box-sizing: border-box;
  background-image: url("../../assets/loupe.svg");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
  position: relative;

  &:focus {
    border: 1px solid #555;
    border: none;
    color: #9696a0;
    outline-width: 0;
  }
  ::placeholder {
    color: #9696a0;
  }
`;

export const DropDownContent = styled("div")`
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #fde9ed;
    }
  }
`;

export const DropDown = styled("div")`
  position: relative;
  display: inline-block;

  &:hover ${DropDownContent} {
    display: block;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DropBtn = styled("button")`
  background-color: #2d2d41;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  /* width: 200px; */
  border-radius: 50%;

  &:hover {
    background-color: #ddd;
  }
`;

export const ListItem = styled("a")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #ddd;
  }
`;

export const Results = styled('div')`
  background-color: #FFFFFF;
  height: max-content;
  width: 264px;
  right: 300px;
  top: 90px;
  border-radius: 4px;
  z-index: 999;
  position: absolute;
  display: none;
  padding: 16px;

  p{
    padding: 8px 6px;
    color: #2D2D41;
    margin-bottom: 8px;
    cursor: pointer;

    :last-of-type{
      margin: 0;
    }

    &:hover{
       background-color: #EAEAEC;
       color: #2D2D41;
       opacity: .9;
    }
  }
`;




