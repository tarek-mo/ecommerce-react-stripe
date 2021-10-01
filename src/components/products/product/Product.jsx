// import useCart from "../../../helpers/useCart";
import useUpdateCart from "../../../helpers/useUpdateCart";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Product = ({ product }) => {
  const { addToCart } = useUpdateCart();
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{ paddingTop: "56.25%" }}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {product.price.formatted_with_symbol}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton
          aria-label="Add to cart"
          onClick={() => addToCart(product.id, 1)}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
