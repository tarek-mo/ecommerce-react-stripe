import useUpdateCart from "../../helpers/useUpdateCart";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
const CartItem = ({ item }) => {
  const { removeProductFromCart, updateProductQtityInCart } = useUpdateCart();
  return (
    <Card>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        sx={{ height: "260px" }}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            onClick={() => updateProductQtityInCart(item.id, item.quantity - 1)}
            type="button"
            size="small"
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            onClick={() => updateProductQtityInCart(item.id, item.quantity + 1)}
            type="button"
            size="small"
          >
            +
          </Button>
        </Box>
        <Button
          onClick={() => removeProductFromCart(item.id)}
          variant="contained"
          color="error"
          type="button"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
