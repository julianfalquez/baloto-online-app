import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link, Router, RouterProvider, Routes } from "react-router-dom";
import { routes } from "../../utils/routeUtils";
import { router } from "../../routes/index";

const NavBar = () => {
  return (
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: "relative",
        borderBottom: (t) => `1px solid ${t.palette.divider}`,
      }}
    >
      <Toolbar>
        <Link to={routes.MENU}>
          <Typography variant="h6" color="inherit" noWrap>
            Supper Lotto
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
