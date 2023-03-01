import Box from "@mui/material/Box";
import React from "react";
import { IFilters } from "../../../api/productApi";
import FilterByCategory from "./Filters/FilterByCategory";

interface IProductFilters extends IFilters {}

const ProductFilters = (props: IProductFilters) => {
  const { onChange, filters } = props;
  const handleCategoryChange = (newCategory: any) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      categoryId: newCategory,
    };
    onChange(newFilters);
  };
  return (
    <Box>
      <FilterByCategory />
    </Box>
  );
};

export default ProductFilters;
