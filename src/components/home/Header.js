import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <header>
      <p>
        <Button onClick={handleLogoClick}>Try More recipes</Button>
      </p>
    </header>
  );
}
