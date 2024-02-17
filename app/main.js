import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Main from "./components/SE_Main";
import Header from "./components/Header";

const root = createRoot(document.getElementById("main"));

root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/*" element={<Main />}></Route>
    </Routes>
  </Router>
);
