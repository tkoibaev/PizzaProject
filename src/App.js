import Header from "./components/Header/Header";

import HomePage from "./Pages/Home/HomePage";
import NotFound from "./Pages/NotFound/NotFound";
import Cart from "./Pages/Cart/Cart";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import "./scss/app.scss";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState();
  //https://6515bedd09e3260018c917ce.mockapi.io/items - mockapi

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
