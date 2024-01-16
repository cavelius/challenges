import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Headline</h2>
      <label htmlFor="myFirstInpit">Schreibe etwas:</label>
      <input id="myFirstInpit" name="username" type="text" />
      <a href="https://www.w3schools.com" className="article__link">
        click
      </a>
    </article>
  );
}
