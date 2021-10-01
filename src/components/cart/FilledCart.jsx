import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import useUpdateCart from "../../helpers/useUpdateCart";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { Typography, Button, Grid, Box } from "@mui/material";
const FilledCart = () => {
  const { cart } = useContext(CartContext);
  const { emptyCart } = useUpdateCart();
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "10%",
          width: "100%",
        }}
      >
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <Box>
          <Button
            onClick={() => emptyCart()}
            color="error"
            variant="contained"
            type="button"
            size="large"
            sx={{ minWidth: "150px", m: "10px" }}
          >
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            color="primary"
            variant="contained"
            type="button"
            size="large"
            sx={{ minWidth: "150px", m: "10px" }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default FilledCart;
