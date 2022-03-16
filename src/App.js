import "./App.css";
import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";
import NavigationBar from "./components/home/NavigationBar";

export const RecipeContext = createContext();

function App() {
  const [selectedIngrResult, setSelectedIngrResult] = useState();
  return (
    <div>
      <NavigationBar />

      <RecipeContext.Provider
        value={{ selectedIngrResult, setSelectedIngrResult }}
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/recipes" element={<Recipe />} />
        </Routes>
      </RecipeContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
