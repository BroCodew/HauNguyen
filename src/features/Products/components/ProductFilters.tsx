import Box from "@mui/material/Box";
import React from "react";
import { IFilters } from "../../../api/productApi";
import FilterByCategory from "./Filters/FilterByCategory";

interface IProductFilters extends IFilters {}

const ProductFilters = (props: IProductFilters) => {
  const { onChange, filters } = props;
  const handleCategoryChange = (newCategoryId: number) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      "category.id": newCategoryId,
    };
    onChange(newFilters);
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
    </Box>
  );
};

export default ProductFilters;
