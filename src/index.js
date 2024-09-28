import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Search from "./Components/Pages/Search";
import LikeSongs from "./Components/Pages/LikeSongs"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<App />} />
        <Route path="/search" element={<Search />} />
        <Route path="/likesongs" element={<LikeSongs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
