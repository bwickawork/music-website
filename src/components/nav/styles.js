import styled from 'styled-components';
import '../../index.css';
import { NavLink } from "react-router-dom";


export const HeaderContainer = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background: none;
  height: 64px;
`;

export const HeaderBody = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  height: 64px;
`;

export const NavContainer = styled.div`
  min-height: 64px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-family: 'Maven Pro';
  letter-spacing: -2px;
  color: #32325d;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  a {
    text-decoration: none;
  }

  li {
    color: #32325d;
    padding: 10px 20px;
    letter-spacing: .2px;
    appearance: none;
    outline: none;
    border: none;
    background-color: transparent;
    text-decoration: none;
    font-size: 15px;
    font-weight: 700;
    opacity: 0.6;
  }

  .current {
    li {
      opacity: 1;
    }
  }
`;
