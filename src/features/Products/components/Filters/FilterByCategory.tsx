import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import categoryApi, { aaa } from "../../../../api/categoryApi";

const FilterByCategory = (props: any) => {
  const { onChange } = props;
  const [categoryList, setCategoryList] = useState<aaa[]>();

  const getCategoryList = async () => {
    try {
      const list = await categoryApi.getAll("");

      const listCtgry = list.map((item) => ({
        id: item.id,
        name: item.name,
      }));

      setCategoryList(listCtgry);
    } catch (error) {}
  };

  // const handleCategoryClick = () => {

  // };

  const handleCategoryClick = (category: any) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <Box>
      <Typography>DANH MUC SAN PHAM</Typography>
      <div>
        {categoryList?.map((category) => {
          return (
            <p key={category.id} onClick={() => handleCategoryClick(category)}>
              {category.name}
            </p>
          );
        })}
      </div>
    </Box>
  );
};

export default FilterByCategory;
