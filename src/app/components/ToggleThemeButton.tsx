import React from "react";
import { useLayout, useUpdateContext } from "../context/AppContext";

const ToggleThemeButton = () => {
  const flag = useLayout();
  const changeFlag = useUpdateContext();

  const handleClick = () => {
    if (changeFlag) {
      changeFlag(flag); // Wywołanie tylko wtedy, gdy `flag` ma wartość
    } else {
      console.error("flag is undefined");
    }
  };

  return <button onClick={handleClick}>Change Theme</button>;
};

export default ToggleThemeButton;
