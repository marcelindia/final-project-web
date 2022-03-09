import React from "react";
import { useState, useEffect } from "react";
// import BasicRating from "./Ratings";
import {
  Card,
  CardContent,
  CardActionArea,
  Button,
  Box,
  Typography,
  Modal,
} from "@mui/material";

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
  const [recipe, setRecipe] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [ingredientList, setIngredientList] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    fetch("https://lets-eat-71558.uk.r.appspot.com/recipes")
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch(alert);
  }, []);

  const handleOnClick = (recipeId) => {
    fetch(`https://lets-eat-71558.uk.r.appspot.com/recipes/${recipeId}`)
      .then((response) => response.json())
      .then((data) => setIngredientList(data))
      .then(() => handleOpen())
      .catch(alert);
  };

  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
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
            console.log(ig);
            return (
              <ul className="list-group">
                <li>{ig}</li>
              </ul>
            );
          })}

          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>

      {!recipe ? (
        <h2>Loading...</h2>
      ) : (
        <div style={{ textAlign: "center" }}>
          {recipe.map((recipe) => {
            return (
              <Card>
                <CardContent
                  style={{
                    marginTop: 50,
                    marginBottom: 50,
                    marginLeft: 200,
                    marginRight: 200,
                    // backgroundColor: "paleturquoise",
                  }}
                >
                  <h2 style={{ backgroundColor: "lavender" }}>
                    {recipe.title}
                  </h2>
                  <h3 style={{ backgroundColor: "#51d1e1" }}>
                    <img src={recipe.img} width="300" height="400" />
                  </h3>
                  <CardActionArea>
                    <Button
                      onClick={() => {
                        if (recipe.id) {
                          handleOnClick(recipe.id);
                          console.log(recipe);
                        }
                      }}
                    >
                      Ingredients
                    </Button>
                  </CardActionArea>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Recipe;
