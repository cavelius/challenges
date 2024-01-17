import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // let count = 0;
  const [count, setCounter] = useState(0);

  // function handlieClick() {}

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            {
              setCounter(count - 1);
            }
            console.log("🤔");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCounter(count + 1);
            console.log("🤔");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
