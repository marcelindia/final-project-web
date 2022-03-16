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
      <RecipeContext.Provider
        value={{ selectedIngrResult, setSelectedIngrResult }}
      >
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/recipes" element={<Recipe />} />
        </Routes>
        <Footer />
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
