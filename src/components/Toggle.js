import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  return <button style={{background:"green" ,padding :20, borderRadius:10,}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;