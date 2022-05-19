import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import loadable from "@loadable/component";

const Layout = loadable(() => import("@layouts/Layout"));
const AllQuotes = loadable(() => import("@pages/AllQuotes"));
const QuoteDetail = loadable(() => import("@pages/QuoteDetail"));
const NotFound = loadable(() => import("@pages/NotFound"));

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/quotes"} />} />
        <Route path="/quotes/*" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
