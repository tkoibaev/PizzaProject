import Header from "./components/Header/Header";
import Sort from "./components/Sort/Sort";
import Categories from "./components/Categories/Categories";
import PizzaCard from "./components/PizzaBlock/PizzaCard";
import CardSkeleton from "./components/PizzaBlock/CardSkeleton";
import HomePage from "./Pages/Home/HomePage";
import NotFound from "./Pages/NotFound/NotFound";
import Cart from "./Pages/Cart/Cart";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import "./scss/app.scss";
import { useEffect, useState } from "react";

// import pizzas from "./assets/pizzas.json";

function App() {
  //https://6515bedd09e3260018c917ce.mockapi.io/items - mockapi

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
