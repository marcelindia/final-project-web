import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Footer() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "white" }}>
            <Typography style={{ color: "black", position: "center" }}>
              &copy; 2022, Diana Marcelin
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default Footer;
