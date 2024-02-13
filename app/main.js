import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
const root = createRoot(document.getElementById("main"));

root.render(
  <Router>
    <Header />
    <Main />
    <Routes>
      <Route path="/*"></Route>
      {/* <Route path="/candies"></Route> */}
    </Routes>
  </Router>
);
