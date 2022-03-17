import "./App.css";
import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Recipe from "./components/Recipe";

export const RecipeContext = createContext();

function App() {
  const [selectedIngrResult, setSelectedIngrResult] = useState();
  return (
    <div>
      <RecipeContext.Provider
        value={{ selectedIngrResult, setSelectedIngrResult }}
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/recipes" element={<Recipe />} />
        </Routes>
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
