import React from "react";
import {
  STATIC_HOST_URL_IMG,
  THUMBNAIL_URL_IMG_PLACEHOLDER,
} from "../../../constant";
import Box from "@mui/material/Box";

const ProductThumbnail = ({ product }: any) => {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST_URL_IMG}${product.thumbnail?.url}`
    : THUMBNAIL_URL_IMG_PLACEHOLDER;
  return (
    <Box>
      {" "}
      <img
        src={thumbnailUrl}
        alt={product.name}
        width="100%"
        style={{ borderRadius: "2px" }}
      />
    </Box>
  );
};

export default ProductThumbnail;
