import React from "react";
import ReactDOM from "react-dom";
import { pizzaData } from "./data";
import "./index.css";

function App() {
  return (
    <div className={"container"}>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  return (
    <li className={"pizza"}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{"$" + props.price}</span>
        <span>{!props.soldOut ? "In stock" : "Sold out!"}</span>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className={"header"}>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className={"menu"}>
      <h2>Our Menu</h2>
      <ul className={"pizzas"}>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            photoName={pizza.photoName}
            price={pizza.price}
            soldOut={pizza.soldOut}
            ingredients={pizza.ingredients}
            key={pizza.name}
          />
        ))}
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer className={"footer"}>
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
