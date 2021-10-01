import useCart from "../../helpers/useCart";
import FilledCart from "./FilledCart";
import EmptyCart from "./EmptyCart";
import { Container, Typography } from "@mui/material";
const Cart = () => {
  const cart = useCart();

  return (
    <>
      <Container>
        <Typography sx={{ mt: "5%" }} variant="h3" gutterBottom>
          Your Shopping Cart
        </Typography>
        {cart?.line_items.length ? <FilledCart /> : <EmptyCart />}
      </Container>
    </>
  );
};

export default Cart;
