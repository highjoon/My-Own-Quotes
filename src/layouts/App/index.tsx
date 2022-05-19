import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import loadable from "@loadable/component";

const Layout = loadable(() => import("@layouts/Layout"));
const AllWords = loadable(() => import("@/pages/AllWords"));
const NotFound = loadable(() => import("@/pages/NotFound"));

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/words"} />} />
        <Route path="/words" element={<AllWords />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
