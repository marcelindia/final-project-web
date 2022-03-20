import React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState, useEffect, useContext } from "react";
import { RecipeContext } from "../../App";

import { useNavigate } from "react-router-dom";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxIng() {
  const [allIngredients, setAllIngredients] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const navigate = useNavigate();
  const handleChange = (value) => {
    setSelectedValues(value);
  };
  const { setSelectedIngrResult } = useContext(RecipeContext);

  const handleSubmit = () => {
    fetch(
      `https://lets-eat-71558.uk.r.appspot.com/recipes?ing=${selectedValues.join(
        ","
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedIngrResult(data);
        navigate("recipes");
      })

      .catch(alert);
  };

  const set = new Set();
  useEffect(() => {
    fetch("https://lets-eat-71558.uk.r.appspot.com/recipes")
      .then((response) => response.json())
      .then((allRecipes) => {
        allRecipes.forEach((recipe) => {
          recipe.ingredients.forEach((ingredient) => {
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
    <>
      <Autocomplete
        multiple
        onChange={(event, value, reason) => handleChange(value)}
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
          <TextField
            {...params}
            placeholder="Ingredients that I have:"
          ></TextField>
        )}
      />
      <button onClick={handleSubmit}>Let's Get Cooking</button>
    </>
  );
}
