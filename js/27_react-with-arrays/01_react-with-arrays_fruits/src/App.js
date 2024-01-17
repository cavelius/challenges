import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "Apfel",
      color: "green",
    },
    {
      id: 3,
      name: "Kirsche",
      color: "red",
    },
    {
      id: 4,
      name: "Zitrone",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
