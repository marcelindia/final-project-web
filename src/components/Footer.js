import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Footer() {
  return (
    <>
      <Box className="App-footer" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            style={{ backgroundColor: "white", justifyContent: "center" }}
          >
            <Typography style={{ color: "black" }}>
              &copy; 2022, Diana Marcelin
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default Footer;
