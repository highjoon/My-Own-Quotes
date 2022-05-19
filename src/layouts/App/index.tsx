import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import loadable from "@loadable/component";

const Layout = loadable(() => import("@layouts/Layout"));
const Main = loadable(() => import("@pages/Main"));
const NotFound = loadable(() => import("@/pages/NotFound"));

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
