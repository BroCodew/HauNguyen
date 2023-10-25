// import { Box, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import React from "react";


const ProductInfo = ({ product }: any) => {
  const { name, shortDescription, salePrice, promotionPercent, originalPrice } =
    product;

  return (
    <Box>
      <Typography>{name}</Typography>
      <Typography>{shortDescription}</Typography>
      <Box>
        <Box>{salePrice}</Box>
        <Box>{originalPrice}</Box>
        <Box>{promotionPercent}</Box>
      </Box>
    </Box>
  );
};

export default ProductInfo;
