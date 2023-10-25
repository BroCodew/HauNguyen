import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid";
import { IProducts } from "../../../api/productApi";
import Product from "./Product";

interface IProductList {
  data: IProducts[];
}

const ProductList = ({ data }: IProductList) => {

  return (
    <Box>
      <Grid container>
        {data.map((product) => {
          return (
            <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductList;
