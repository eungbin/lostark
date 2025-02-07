import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from '../pages/Main/Main';
import Header from '../components/Header/Header';
import Synergy from "../pages/Synergy/Synergy";

const Routers = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/synergy" element={<Synergy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;