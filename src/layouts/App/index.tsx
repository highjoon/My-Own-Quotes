import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

const Layout = loadable(() => import("@layouts/Layout"));
const AllQuotes = loadable(() => import("@pages/AllQuotes"));
const QuoteDetail = loadable(() => import("@pages/QuoteDetail"));
const NewQuote = loadable(() => import("@pages/NewQuote"));
const NotFound = loadable(() => import("@pages/NotFound"));

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/quotes"} />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quote/:id" element={<QuoteDetail />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
