import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Component/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Component/Screens/SignUpScreen/SignUp";
import Getallusers from "./Component/Screens/Userscreens/Getallusers";
import Updateuser from "./Component/Screens/Updateuserprofile/Updateuser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Signup />} />
          <Route
            path="/update/:firstName/:lastName/:_id"
            element={<Updateuser />}
          />
          <Route path="/Dashboard" element={<Getallusers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
