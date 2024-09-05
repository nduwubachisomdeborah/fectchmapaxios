import React, { useState } from "react";
import Rough from "../Roughjava/Rough";
import Portion from "../Roughjava/Portion";
import Post from "../../Postscreen/Post";
import Users from "../Screens/Userscreen/Users";
import Signup from "../Screens/SignUpScreen/SignUp";
import Getallusers from "../Screens/Userscreens/Getallusers";
import Updateuser from "../Screens/Updateuserprofile/Updateuser";

const Home = () => {
  return (
    <div>
      <Getallusers />
      <Updateuser />
      {/* <Signup /> */}
      {/* <Users /> */}
      {/* <Post /> */}
      {/* <Rough /> */}
      {/* <Portion /> */}
    </div>
  );
};

export default Home;
