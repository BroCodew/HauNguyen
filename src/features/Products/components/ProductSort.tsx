import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const ProductSort = (props: any) => {
  const { onChange, currentSort } = props;
  // const handleSortChange = (event: any, newValue: any) => {
  //   if (onChange) onChange(newValue);
  //   console.log(newValue, "newValue");
  // };

  return (
    <Tabs
      value={currentSort}
      onChange={(event: any, newValue: any) => {
        if (onChange) onChange(newValue);
        console.log(newValue, "newValue");
      }}
      aria-label="basic tabs example"
      textColor="primary"
    >
      <Tab label="Giá thấp tới cao" value="salePrice:ASC" />
      <Tab label="Giá cao xuống thấp" value="salePrice:DESC" />
    </Tabs>
  );
};

export default ProductSort;
