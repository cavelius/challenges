import React from "react";
import "./styles.css";
import Button from "./Button";

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
}
