import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import { InfoProvider } from "./context/InfoContext";
import Categoria from "./containers/Categoria";
import Detalle from "./components/Detalle";
import NotFound from "./view/NotFound";

function App() {
  return (
    <InfoProvider>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route exact path='item/:id' element={<Detalle/>} />
          <Route exact path='category/:id' element={<Categoria/>} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </InfoProvider>
  );
}

export default App;
