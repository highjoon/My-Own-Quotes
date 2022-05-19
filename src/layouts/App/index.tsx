import React from "react";
import { Route, Routes } from "react-router-dom";

import loadable from "@loadable/component";

const Main = loadable(() => import("@pages/Main"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default App;
