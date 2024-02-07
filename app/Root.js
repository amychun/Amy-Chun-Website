import React from "react";
import Candies from "./components/Candies";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import SingleCandy from "./components/SingleCandy";

const Root = () => {
  return (
    <div>
      <Header />
      <Main />
      <Routes>
        <Route path="/*"></Route>
        <Route path="/candies" element={<Candies />}></Route>
        <Route path="/candies/:id" element={<SingleCandy />}></Route>
      </Routes>
    </div>
  );
};

export default Root;
