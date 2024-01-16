import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>click me</Button>
      <Button>I am a button</Button>
      <Button>BUTTON</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
