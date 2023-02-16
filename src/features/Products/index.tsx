import React from "react";
import { Route, Switch } from "react-router-dom";
import ListPage from "./Pages/ListPage";

const ProductFeatures = () => {
  return (
    <div>
      ProductFeatures
      <Switch>
        <Route path="/products" component={ListPage} />
      </Switch>
      {/* <ListPage/> */}
    </div>
  );
};

export default ProductFeatures;
