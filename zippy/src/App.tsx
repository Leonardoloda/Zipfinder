import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Lookup } from "./Components/Pages/Lookup";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Lookup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

