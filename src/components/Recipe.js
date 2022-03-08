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
  const [ingredient, setIngredient] = useState([]);
  const [id, setId] = useState("");
  console.log(id);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    fetch("https://lets-eat-71558.uk.r.appspot.com/recipes")
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch(alert);
  }, []);
  const handleOnClick = () => {
    console.log(id);
    if (id) {
      fetch(`https://lets-eat-71558.uk.r.appspot.com/recipes/${id}`)
        .then((response) => response.json())
        .then((data) => setIngredient(data))
        .then(() => handleOpen())
        .catch(alert);
    }
  };
  console.log(ingredient);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2 style={{ backgroundColor: "lavender" }}>{ingredient.title}</h2>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {ingredient.ingredients}
          </Typography>
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
                    marginLeft: 50,
                    marginRight: 50,
                    backgroundColor: "paleturquoise",
                  }}
                >
                  <h2 style={{ backgroundColor: "lavender" }}>
                    {recipe.title}
                  </h2>
                  <img src={recipe.img} width="300" height="400" />
                  <CardActionArea>
                    <Button
                      onClick={() => {
                        setId(recipe.id);
                        if (recipe.id) {
                          handleOnClick();
                        }
                      }}
                    >
                      Ingredients
                    </Button>
                    {/* <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          <h2 style={{ backgroundColor: "lavender" }}>
                            {recipe.title}
                          </h2>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {recipe.ingredients}
                        </Typography>
                      </Box>
                    </Modal> */}
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
