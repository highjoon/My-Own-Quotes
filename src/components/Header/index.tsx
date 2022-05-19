import React, { FC } from "react";
import { Link } from "react-router-dom";

import { HeaderContainer, TitleImage } from "@components/Header/styles";
import titleImage from "@assets/images/titleImage.png";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <TitleImage src={titleImage} alt="title_image" />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
