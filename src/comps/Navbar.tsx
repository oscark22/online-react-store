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

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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

  const [productName, setProductName] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [subCategory, setSubCategory] = React.useState("");
  const [itemId, setItemId] = React.useState("");

  const handleProductNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductName(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handleSubCategoryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSubCategory(event.target.value);
  };

  const handleItemIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemId(event.target.value);
  };

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

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <TextField
              label="Product Name"
              value={productName}
              onChange={handleProductNameChange}
              sx={{ mr: 2 }}
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
            />
            <TextField
              label="Category"
              value={category}
              onChange={handleCategoryChange}
              sx={{ mr: 2 }}
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
            />
            <TextField
              label="Sub-Category"
              value={subCategory}
              onChange={handleSubCategoryChange}
              sx={{ mr: 2 }}
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
            />
            <TextField
              label="Item ID"
              value={itemId}
              onChange={handleItemIdChange}
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
            />
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
