import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <artikel>
      <h1>Hello, I am a h1</h1>
      <p>... and I am a p tag</p>
    </artikel>
  );
}
