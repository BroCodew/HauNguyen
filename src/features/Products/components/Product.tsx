/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { IProducts } from "../../../api/productApi";

interface IProductList {
  product: IProducts;
}

const Product = ({ product }: IProductList) => {
  console.log(product.thumbnail?.url);
  const thumbnailUrl = product.thumbnail
    ? `http://api.ezfrontend.com${product.thumbnail?.url}`
    : `https://via.placeholder.com/444/000000/FFFFFF/?text=IPaddress.net`;
  return (
    <Box padding={8}>
      {/* <Skeleton variant="rectangular" width="100%" height={118}></Skeleton> */}
      <Box padding={1}>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        {product.salePrice} - {product.promotionPercent}
      </Typography>
    </Box>
  );
};

export default Product;
