import { useContext } from "react";
import useCart from "../../helpers/useCart";
import { LoadingContext } from "../../contexts/LoadingContext";
import { Link, useLocation } from "react-router-dom";
import LoadingBar from "../LoadingBar";
import { AppBar, Toolbar, IconButton, Badge, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/logo.PNG";
const Navbar = () => {
  const cart = useCart();
  const location = useLocation();
  const { loading } = useContext(LoadingContext);
  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar sx={{ py: 0.5 }}>
          <Link to="/">
            <img src={logo} alt="TaStore" height="55px" />
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          {location.pathname !== "/cart" && (
            <Box>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge
                  sx={{ fontFamily: "inherit" }}
                  badgeContent={cart?.total_items}
                  color="error"
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          )}
        </Toolbar>
        {loading && <LoadingBar />}
      </AppBar>
    </>
  );
};

export default Navbar;
