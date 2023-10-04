import React, { useState, useEffect } from "react";

import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import PizzaCard from "../../components/PizzaBlock/PizzaCard";
import CardSkeleton from "../../components/PizzaBlock/CardSkeleton";

const HomePage = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : ``;
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    // const search = searchValue ? `search=${searchValue}` : ``;

    fetch(
      `https://6515bedd09e3260018c917ce.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((responce) => responce.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <CardSkeleton key={index} />)
          : items
              .filter((val) => {
                return val.title
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
                  ? true
                  : false;
              })
              .map((obj) => <PizzaCard key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default HomePage;
