import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    return () => alert("clicked");
  }

  return (
    <div>
      <Button
        color={"red"}
        text={"click"}
        disabled={false}
        onClick={handleClick}
      />

      <Button
        color={"blue"}
        text={"click"}
        disabled={false}
        onClick={handleClick}
      />

      <Button
        color={"green"}
        text={"click"}
        disabled={false}
        onClick={handleClick}
      />
    </div>
  );
}
function Button({ color, text, disabled, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={onClick()}
    >
      {text}
    </button>
  );
}
