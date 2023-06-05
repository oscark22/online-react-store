import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button, Tooltip, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, createTheme } from "@mui/material";
import { green } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [filterSelected, setFilterSelected] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  interface Link {
    link: string;
    ukey: string;
    text: string;
  }

  const LinkItem = ({ link, ukey, text }: Link) => {
    return (
      <Link to={link}>
        <Button
          key={ukey}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {text}
        </Button>
      </Link>
    );
  };

  const authContext = React.useContext(AuthContext);
  const loggedIn = authContext.loggedIn;

  const handleLogout = () => {
    authContext.logout();
    location.replace("/signIn");
  };

  const theme = createTheme({
    palette: {
      text: {
        primary: '#ffffff',
      },
    },
  });

  return (
    <AppBar position="static" sx={{ marginBottom: 3 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {loggedIn ? (
              <>
                <Button
                  onClick={handleLogout}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  LOGOUT
                </Button>
              </>
            ) : (
              <>
                <LinkItem ukey="signUp" link="/signUp" text="SIGN UP" />
                <LinkItem ukey="signIn" link="/signIn" text="SIGN IN" />
              </>
            )}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <ThemeProvider theme={theme}>
              <TextField
                id="search-input"
                label={ <Typography sx={{ color: "white" }} > Buscar </Typography> }
                variant="outlined"
                sx={{ mr: 2 }}
              />
            </ThemeProvider>
            <FormControl>
              <FormLabel sx={{ color: "white" }} id="form-filter"> Filtros: </FormLabel>
              <RadioGroup         
                aria-labelledby="form-filter"
                defaultValue="id"
                name="radio-buttons-group"
                row
              >
                <FormControlLabel
                  control={<Radio sx={{ '&.Mui-checked': {color: green[200] } }} />}
                  label="ID"
                  value="id"
                />
                <FormControlLabel
                  control={<Radio sx={{ '&.Mui-checked': {color: green[200] } }} />}
                  label="Raza"
                  value="raza"
                />
                <FormControlLabel
                  control={<Radio sx={{ '&.Mui-checked': {color: green[200] } }} />}
                  label="Nombre"
                  value="nombre"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{ my: 2, mr: 3, color: "white", display: "block" }}
            onClick={() => {
              
            }}
          >
            BUSCAR
          </Button>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir carrito">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AddShoppingCartIcon sx={{ color: "white" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
