//import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header title={"Journal"} />
      <Main headline={"New Entry"} labeldescription={"Motto"} />
      <Footer text="JournalApsp — 2028" />
    </>
  );
}
