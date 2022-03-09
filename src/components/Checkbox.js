import React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxIng() {
  const [allIngredients, setAllIngredients] = useState([]);

  const set = new Set();
  useEffect(() => {
    fetch("https://lets-eat-71558.uk.r.appspot.com/recipes")
      .then((response) => response.json())
      .then((allRecipes) => {
        console.log(allRecipes);
        allRecipes.forEach((recipe) => {
          console.log(recipe);
          recipe.ingredients.forEach((ingredient) => {
            console.log(ingredient);
            set.add(ingredient);
          });
        });
      })
      .then(() => {
        const recipeList = Array.from(set);
        setAllIngredients(recipeList);
      })
      .catch(alert);
  }, []);
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={allIngredients}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      style={{
        width: 500,
        backgroundColor: "white",
      }}
      renderInput={(params) => (
        <TextField {...params} placeholder="The Items I Have"></TextField>
      )}
    />
  );
}
