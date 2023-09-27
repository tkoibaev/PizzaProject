import logo from "./logo.svg";
import "./App.css";

import "./scss/app.scss";

import Header from "./components/Header/Header";
import Sort from "./components/Sort/Sort";
import Categories from "./components/Categories/Categories";
import PizzaCard from "./components/PizzaBlock/PizzaCard";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaCard price={900} title={"Мексиканская"} />
            <PizzaCard price={600} title={"Пепперони"} />
            <PizzaCard price={300} title={"Макарони"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
