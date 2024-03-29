/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { IProducts } from "../../../api/productApi";
import {
  STATIC_HOST_URL_IMG,
  THUMBNAIL_URL_IMG_PLACEHOLDER,
} from "../../../constant";
import { useHistory } from "react-router-dom";

interface IProductList {
  product: IProducts;
}

const Product = ({ product }: IProductList) => {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST_URL_IMG}${product.thumbnail?.url}`
    : THUMBNAIL_URL_IMG_PLACEHOLDER;

  const history = useHistory();

  const handleClickProductDetail = () => {
    history.push(`products/${product.id}`);
  };
  return (
    <Box padding={1} onClick={handleClickProductDetail}>
      {/* <Skeleton variant="rectangular" width="100%" height={118}></Skeleton> */}
      <Box minHeight="200px">
        <img
          src={thumbnailUrl}
          alt={product.name}
          width="100%"
          style={{ borderRadius: "2px" }}
        />
      </Box>
      <Typography variant="body2">{product.name.toUpperCase()}</Typography>
      <Typography variant="body2" component="span">
        <Box fontWeight={700}>
          {product.salePrice.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </Box>{" "}
        {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ""}
      </Typography>
    </Box>
  );
};

export default Product;
