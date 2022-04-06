import React from "react";
import "../assets/css/main.css";
export default function MenuItem(props) {
  // using props to get fruits array and functions

  return (
    <ul className="list">
      {props.data.map((elem) => {
        return (
          <li
            className="list-item"
            onClick={() => {
              props.isClicked();
              props.selectValue(elem);
            }}
          >
            {elem}
          </li>
        );
      })}
    </ul>
  );
}
