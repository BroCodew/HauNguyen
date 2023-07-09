import Box from "@mui/material/Box";
import React from "react";
import { Route, Switch } from "react-router-dom";
import ListPage from "./Pages/ListPage";
import DetailPage from "./Pages/DetailPage";

const ProductFeatures = () => {
  return (
    <Box pt={4}>
      <Switch>
        <Route path="/products" exact component={ListPage} />
        <Route path="/products/:productId" component={DetailPage} />
      </Switch>
      {/* <ListPage/> */}
    </Box>
  );
};

export default ProductFeatures;
