import styled from 'styled-components';
import '../../index.css';
import { NavLink } from "react-router-dom";


export const HeaderContainer = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background: none;
  height: 72px;
  z-index: 10;
`;

export const HeaderBody = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  height: 72px;

  @media (max-width: 880px) {
    padding: 0 0px;
    position: fixed;
  }
`;

export const NavContainer = styled.div`
  min-height: 72px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 880px) {
    padding: 0 16px;
  }
`;

export const Logo = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 23px;
  font-family: 'Roboto Mono';
  font-weight: 300;
  letter-spacing: -2px;
  color: #000;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 880px) {
    display: none;
  }

  a {
    text-decoration: none;
  }

  li {
    color: #000;
    padding: 10px 20px;
    letter-spacing: .2px;
    appearance: none;
    outline: none;
    border: none;
    background-color: transparent;
    text-decoration: none;
    font-size: 15px;
    font-weight: 400;
    font-family: 'Roboto Mono';
    opacity: 0.6;
  }

  .current {
    li {
      opacity: 1;
    }
  }
`;


export const NavMenuIconContainer = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: auto;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  @media (max-width: 880px) {
    display: flex;
  }
`;


export const NavMenuItems = styled.div`
display: none;
width: 100vw
height: 100vh;
flex-direction: column;
align-items: center;
margin: 0;
padding: 0px 0;
list-style: none;
background-color :#fff;
border-top: 1px solid #f2f2f2;

@media (max-width: 880px) {
  display: flex;
}

a {
  text-decoration: none;
}

li {
  color: #000;
  padding: 20px 20px;
  letter-spacing: .2px;
  appearance: none;
  outline: none;
  border: none;
  background-color: transparent;
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto Mono';
  opacity: 0.6;
}

.current {
  li {
    opacity: 1;
  }
}
`;

