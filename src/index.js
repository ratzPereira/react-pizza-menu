import React from "react";
import ReactDOM from "react-dom/client";
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

function Pizza({ pizza }) {
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "Sold out!" : "$" + pizza.price}</span>
        {/*//<span>{!pizza.soldOut ? "In stock" : "Sold out!"}</span>*/}
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
      {pizzaData.length > 0 ? (
        <>
          <p>Here are our {pizzaData.length} pizzas:</p>
          <ul className={"pizzas"}>
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, we are working on our Menu!</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className={"footer"}>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>We are closed. We open at {openHour}:00.</p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className={"order"}>
      <p>We are open until {closeHour}:00! Come visit us or order online.</p>
      <button className={"btn"}>Order Online</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
