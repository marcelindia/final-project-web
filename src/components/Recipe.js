import React from "react";
import { useState, useEffect, useContext } from "react";
import { RecipeContext } from "../App";
import BasicRating from "./BasicRating";
import {
  Card,
  CardContent,
  CardActionArea,
  Button,
  Box,
  Typography,
  Modal,
} from "@mui/material";

import "../App.css";
import Header from "./home/Header";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [ingredientList, setIngredientList] = useState([]);

  const { selectedIngrResult } = useContext(RecipeContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    setRecipes(selectedIngrResult);
  }, [selectedIngrResult]);

  const handleOnClick = (recipeId) => {
    if (recipeId) {
      fetch(`https://lets-eat-71558.uk.r.appspot.com/recipes/${recipeId}`)
        .then((response) => response.json())
        .then((data) => setIngredientList(data))
        .then(() => handleOpen())
        .catch(alert);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            <header style={{ backgroundColor: "lavender" }}>
              {ingredientList.title}
            </header>
          </Typography>

          {ingredientList?.ingredients?.map((ig) => {
            return (
              <ul className="list-group">
                <li>{ig}</li>
              </ul>
            );
          })}
          <BasicRating
            rating={ingredientList.rating}
            id={ingredientList.id}
            setRecipes={setRecipes}
          />
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
      {!recipes ? (
        <h2>Loading...</h2>
      ) : (
        <section className="recipesResults">
          {recipes?.map((recipe) => {
            return (
              <Card className="card">
                <CardContent>
                  <h2>{recipe.title} </h2>
                  <h3>
                    <img
                      src={recipe.img}
                      width="200"
                      height="250"
                      alt="Dish requested on home page"
                    />
                  </h3>

                  <CardActionArea>
                    <button
                      className="recipeIngred"
                      onClick={() => {
                        if (recipe.id) {
                          handleOnClick(recipe.id);
                        }
                      }}
                    >
                      Ingredients
                    </button>
                  </CardActionArea>
                </CardContent>
              </Card>
            );
          })}
        </section>
      )}
      <Header />
    </div>
  );
}

export default Recipe;
