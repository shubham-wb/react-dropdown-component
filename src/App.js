import React, { useState } from "react";
import "../assets/css/main.css";
import MenuItem from "./MenuItem";
import down from "../assets/Images/down.jpg";
import up from "../assets/Images/up.jpg";
export default function App() {
  let [value, setValue] = useState("Select Fruits");
  let [clicked, setClicked] = useState(false);
  const fruits = ["Apple", "Banana", "Mango", "Grapes", "Berries", "Kiwi"];

  const SelectValue = (newValue) => {
    setValue(newValue);
  };

  const isClicked = () => {
    setClicked((prevState) => !prevState);
  };

  return (
    <div className="dropdown">
      <div className="btn" onMouseEnter={isClicked}>
        <div className="btn-txt">{value}</div>
        <img src={clicked ? up : down} alt="" />
      </div>
      {clicked ? (
        <MenuItem
          data={fruits}
          isClicked={isClicked}
          selectValue={SelectValue}
        />
      ) : null}
    </div>
  );
}
