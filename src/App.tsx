import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Component/Screens/SignUpScreen/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
