import React, { useState } from "react";
import { HeaderContainer, HeaderBody, NavContainer, Logo, NavList, NavMenuIconContainer, NavMenuItems } from "./styles";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { theme } from "../../styles/theme";

const Nav = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Videos", path: "/videos" },
    { name: "Contact", path: "/contact" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <HeaderContainer>
      <HeaderBody>
        <NavContainer>
          <Logo>Young Robbins Music</Logo>
          <div>
            <NavList>
              {links.map((link, index) => (
                <NavLink key={index} to={link.path} exact activeClassName="current">
                  <li>{link.name}</li>
                </NavLink>
              ))}
            </NavList>
          </div>
          <NavMenuIconContainer onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <MdClose size={24} color={theme.dark} /> : <MdMenu size={24} color={theme.dark} />}
          </NavMenuIconContainer>
        </NavContainer>
        {showMenu &&
          <NavMenuItems>
            {links.map((link, index) => (
              <NavLink key={index} to={link.path} exact activeClassName="current" onClick={() => setShowMenu(false)}>
                <li>{link.name}</li>
              </NavLink>
            ))}
          </NavMenuItems>
        }
      </HeaderBody>
      {/* <div style={{width: '100%', height: '1.5px', backgroundColor: 'rgba(170, 183, 196, 0.125)', margin: '1px auto', maxWidth: '1000px'}} /> */}
    </HeaderContainer>
  );
};


export default Nav;