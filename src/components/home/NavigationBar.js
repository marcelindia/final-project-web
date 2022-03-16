import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();
  // const handleLogoClick = () => {
  //   navigate("/");
  // };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "white" }}>
          <Typography style={{ color: "black" }}>Website Title</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
