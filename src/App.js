import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import { InfoProvider } from "./context/InfoContext";
import Categoria from "./containers/Categoria";

function App() {
  return (
    <InfoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path='/category/:id' element={<Categoria/>} />
        </Routes>
      </Router>
    </InfoProvider>
  );
}

export default App;
