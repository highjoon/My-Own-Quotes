import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import { HeaderContainer, Nav } from "@components/Header/styles";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li>
            <NavLink to="/words" className={navData => (navData.isActive ? "selected" : "")}>
              All Words
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-word" className={navData => (navData.isActive ? "selected" : "")}>
              Add a Word
            </NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
