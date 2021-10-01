import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
const EmptyCart = () => (
  <Typography variant="subtitle2">
    You have no items in your shopping cart.
    <Button variant="text" component={Link} to="/">
      Start adding some now!
    </Button>
  </Typography>
);

export default EmptyCart;
