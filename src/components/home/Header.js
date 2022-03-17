import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <header>
      <Button onClick={handleLogoClick}>Home</Button>
    </header>
  );
}
