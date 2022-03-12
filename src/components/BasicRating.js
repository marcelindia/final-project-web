import { Box, Rating } from "@mui/material/";

function BasicRating({ rating, id, setRecipe }) {
  const handleSubmitRating = (newValue) => {
    fetch(`https://lets-eat-71558.uk.r.appspot.com/recipes/rating/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: newValue }),
    })
      .then((res) => res.json())
      .then((data) => setRecipe)
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Box
      sx={{
        "& > legend": { mt: 0 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={rating}
        precision={0.5}
        onChange={(event, newValue) => {
          handleSubmitRating(newValue);
        }}
      />
    </Box>
  );
}

export default BasicRating;
