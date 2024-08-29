import React, { useState } from "react";
import { userData } from "../../Data/Data";
import Cartitem from "./Cartitem";

const Portion = () => {
  const [displayUsers, setdisplayUsers] = useState([userData]);
  console.log(displayUsers);
  const brown = () => {
    setdisplayUsers([]);
  };
  return (
    <div>
      <Cartitem nelson={displayUsers} />

      {userData.map((items) => (
        <div>
          {items.id}
          {items.firstName}
          {items.lastName}
          {items.age}
          {items.isAdmin}
        </div>
      ))}
    </div>
  );
};

export default Portion;
