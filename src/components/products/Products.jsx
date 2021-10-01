import Product from "./product/Product";
import { Container, Grid, Typography } from "@mui/material";
import useProducts from "../../helpers/useProducts";
const Products = () => {
  const { products } = useProducts();
  return (
    <>
      <Container>
        <Typography align="center" sx={{ mt: "5%" }} variant="h3" gutterBottom>
          Our Products
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          {products?.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Products;
