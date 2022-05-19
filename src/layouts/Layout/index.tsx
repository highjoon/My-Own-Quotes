import React, { FC, ReactNode } from "react";
import { LayoutWrapper } from "@layouts/Layout/styles";
import Header from "@components/Header";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
