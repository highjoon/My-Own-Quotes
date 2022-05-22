import React, { Fragment, ReactNode } from "react";
import { LayoutWrapper } from "@layouts/Layout/styles";
import Header from "@components/Header";

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>
    </Fragment>
  );
};

export default Layout;
