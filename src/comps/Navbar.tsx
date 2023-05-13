import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import auth from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { TextField } from "@mui/material";
import { useState } from "react";
import SearchUI from "./SearchBar";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const initialOptions = [
  { value: 'name', label: 'Nombre' },
  { value: 'breed', label: 'Raza' },
  { value: 'color', label: 'Color' },
];

const Search = () => {
  const [searchOption, setSearchOption] = useState(initialOptions[0]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  if (!searchValue || !isNaN(searchValue)) {
    // mostrar mensaje de error aquí
    return;
  }
  
  const filteredResults = results.filter((result) => {
    const value = searchOption.value;
    const searchTerm = searchValue.toLowerCase();
    const resultValue = result[value].toLowerCase();
    return resultValue.includes(searchTerm);
  });
  
  setSearchResults(filteredResults);
  
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    </Box>
  );
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
          <SearchUI
            options={initialOptions}
            searchOption={searchOption}
            onOptionChange={setSearchOption}
            searchValue={searchValue}
            onValueChange={setSearchValue}
            onSearch={search}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{ my: 2, mr: 3, color: "white", display: "block" }}
            onClick={() => {
              // Aquí se puede implementar la lógica para actualizar lo que se muestra en la página principal según los parámetros de búsqueda
            }}
          >
            Search
          </Button>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
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
