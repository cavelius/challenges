import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    return alert("clicked");
  }

  return (
    <Button
      color={"red"}
      text={"click"}
      disabled={false}
      onClick={handleClick}
    />
  );

  function Button({ color, text, disabled, onClick }) {
    return (
      <button
        style={{ backgroundColor: color }}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}
