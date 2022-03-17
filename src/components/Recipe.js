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
import Grid from "@mui/material/Grid";
import "../App.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFindNewRecipes = () => {
    navigate("/");
  };

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
          <Typography id="modal-modal-title" variant="h6" component="h2">
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
        <div
          style={{
            textAlign: "center",
            marginTop: 40,
            marginBottom: 40,
            marginLeft: 400,
            marginRight: 400,
            display: "inline-flex",
            gap: "20px",
          }}
        >
          <header style={{ textAlign: "center" }}>
            <button onClick={handleFindNewRecipes}>Try More Recipes</button>
          </header>
          {recipes?.map((recipe) => {
            return (
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Card sx={{ maxWidth: 405 }}>
                  <CardContent className="css-46bh2p-MuiCardContent-root">
                    <h2 style={{ backgroundColor: "lavender" }}>
                      {recipe.title}
                    </h2>
                    <h3 style={{ backgroundColor: "white" }}>
                      <img
                        src={recipe.img}
                        width="300"
                        height="450"
                        alt="Dish requested on home page"
                      />
                    </h3>
                    <CardActionArea>
                      <Button
                        onClick={() => {
                          if (recipe.id) {
                            handleOnClick(recipe.id);
                          }
                        }}
                      >
                        Ingredients
                      </Button>
                    </CardActionArea>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Recipe;
