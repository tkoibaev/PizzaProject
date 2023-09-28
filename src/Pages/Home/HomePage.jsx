import React, { useState, useEffect } from "react";

import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import PizzaCard from "../../components/PizzaBlock/PizzaCard";
import CardSkeleton from "../../components/PizzaBlock/CardSkeleton";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://6515bedd09e3260018c917ce.mockapi.io/items")
      .then((responce) => responce.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <CardSkeleton key={index} />)
          : items.map((obj) => <PizzaCard key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default HomePage;
