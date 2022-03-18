import "./App.css";
import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";
import Header from "./components/home/Header";

export const RecipeContext = createContext();

function App() {
  const [selectedIngrResult, setSelectedIngrResult] = useState();

  return (
    <RecipeContext.Provider
      value={{ selectedIngrResult, setSelectedIngrResult }}
    >
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/recipes" element={<Recipe />} />
      </Routes>
      <Header />
      <Footer />
    </RecipeContext.Provider>
  );
}

export default App;
