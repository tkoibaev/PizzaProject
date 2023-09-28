import Header from "./components/Header/Header";
import Sort from "./components/Sort/Sort";
import Categories from "./components/Categories/Categories";
import PizzaCard from "./components/PizzaBlock/PizzaCard";

import "./App.css";
import "./scss/app.scss";
import { useEffect, useState } from "react";

// import pizzas from "./assets/pizzas.json";

function App() {
  //https://6515bedd09e3260018c917ce.mockapi.io/items - mockapi
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://6515bedd09e3260018c917ce.mockapi.io/items")
      .then((responce) => responce.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaCard key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
