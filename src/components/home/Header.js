// import { AppBar, Button, Toolbar } from "@mui/material";
// import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <header>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoClick}>Home</button>
    </header>
  );
}
