import React from "react";
interface brown {
  nelson: any[];
}
const Cartitem: React.FC<brown> = ({ nelson }) => {
  return (
    <>
      {nelson.map((items: any) => (
        <div>
          <div>{items.firstName}</div>
          <div>{items.lastName}</div>
        </div>
      ))}
    </>
  );
};

export default Cartitem;
