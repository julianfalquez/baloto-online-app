import { AppBar, Toolbar, Typography } from "@mui/material";

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
        <Typography variant="h6" color="inherit" noWrap>
          Supper Lotto
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
