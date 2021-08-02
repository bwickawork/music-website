import React from "react";
import { HeaderContainer, HeaderBody, NavContainer, Logo, NavList } from "./styles";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Videos", path: "/videos" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <HeaderContainer>
      <HeaderBody>
        <NavContainer>
          <Logo>young robbins music</Logo>
          <div>
            <NavList>
              {links.map((link, index) => (
                <NavLink key={index} to={link.path} exact activeClassName="current">
                  <li>{link.name}</li>
                </NavLink>
              ))}
            </NavList>
          </div>
        </NavContainer>
      </HeaderBody>
      <div style={{width: '100%', height: '1.5px', backgroundColor: 'rgba(170, 183, 196, 0.125)', margin: '1px auto', maxWidth: '1000px'}} />
    </HeaderContainer>
  );
};


export default Nav;