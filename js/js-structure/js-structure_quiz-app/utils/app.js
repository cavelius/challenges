import Header from "./header.js";
import Form from "./form.js";
import CardList from "./cardList.js";

export default function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
