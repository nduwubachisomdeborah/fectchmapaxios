import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
