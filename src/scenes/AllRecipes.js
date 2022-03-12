import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Recipe from "../components/Recipe";

function AllRecipes() {
  return (
    <>
      <nav>
        <Button>
          <Link to="/">Home</Link>
        </Button>
      </nav>
      <Recipe />
    </>
  );
}

export default AllRecipes;
