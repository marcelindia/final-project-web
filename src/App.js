import "./App.css";
import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Recipe from "./components/Recipe";
import Login from "./scenes/Login";
import SignUp from "./scenes/SignUp";
import Footer from "./components/Footer";
import Header from "./components/home/Header";

export const RecipeContext = createContext();

function App() {
  const [selectedIngrResult, setSelectedIngrResult] = useState();
  const [user, setUser] = useState();

  return (
    <RecipeContext.Provider
      value={{ selectedIngrResult, setSelectedIngrResult }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/recipes" element={<Recipe />} />
        <Route
          path="/login"
          element={<Login setUser={setUser} user={user} />}
        ></Route>
        <Route
          path="/signup"
          element={<SignUp setUser={setUser} user={user} />}
        ></Route>
        <Route
          path="/home"
          element={user ? <Home user={user} /> : <Login setUser={setUser} />}
        ></Route>
      </Routes>
      <Footer />
    </RecipeContext.Provider>
  );
}

export default App;
