import Box from "@mui/material/Box";
import React from "react";
import { Route, Switch } from "react-router-dom";
import ListPage from "./Pages/ListPage";

const ProductFeatures = () => {
  return (
    <Box pt={4}>
      <Switch>
        <Route path="/products" component={ListPage} />
      </Switch>
      {/* <ListPage/> */}
    </Box>
  );
};

export default ProductFeatures;
