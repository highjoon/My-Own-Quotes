import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, Nav } from "@components/Header/styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li>
            <NavLink to="/quotes" className={navData => (navData.isActive ? "selected" : "")}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" className={navData => (navData.isActive ? "selected" : "")}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
