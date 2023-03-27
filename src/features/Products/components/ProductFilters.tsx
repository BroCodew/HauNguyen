import Box from "@mui/material/Box";
import React from "react";
import { IFilters } from "../../../api/productApi";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";

interface IProductFilters extends IFilters {}

const ProductFilters = (props: IProductFilters) => {
  const { onChange, filters } = props;
  const handleCategoryChange = (newCategoryId: number) => {
    if (!onChange) return;
    const newFilters = {
      "category.id": newCategoryId,
    };
    onChange(newFilters);
  };

  const handleChange = (values: any) => {
    if (onChange) onChange(values);
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService onChange={handleChange} filters={filters} />
    </Box>
  );
};

export default ProductFilters;
