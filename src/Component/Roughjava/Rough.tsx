import React, { useState } from "react";

const Rough = () => {
  const [display, setDisplay] = useState(false);
  console.log(display);
  const download = () => {
    setDisplay(true);
  };

  return (
    <div>
      <button onClick={download}>Click me</button>
      {display ? (
        <>
          <div style={{ color: "yellow" }}>Welcome</div>
        </>
      ) : (
        <div>leave my office</div>
      )}
    </div>
  );
};

export default Rough;
