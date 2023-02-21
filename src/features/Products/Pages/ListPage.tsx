import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid";
import { makeStyles } from "tss-react/mui";
import Paper from "@mui/material/Paper";

import React, { useEffect, useState } from "react";
import productApi from "../../../api/productApi";
import ProductSkeleton from "../components/ProductSkeleton";
import { Typography } from "@mui/material";
import ProductList from "../components/ProductList";

const ListPage = () => {
  const useStyles = makeStyles<{ color: "red" | "blue" }>()(
    (theme, { color }) => ({
      root: {},
      left: {
        width: "250px",
      },
      right: {
        flex: "1 1 0",
        textAlign: "left",
      },
    })
  );
  const [color, setColor] = useState<"red" | "blue">("red");
  const { classes, cx } = useStyles({ color });
  const [productList, setProductList] = useState([] as any);
  const [loading, setLoading] = useState(true);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const getProductList = async () => {
    await delay(1000);
    const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
    setProductList(data);
    setLoading(false);
  };
  console.log(productList, "productList");
  // useEffect(() => {
  //   setTimeout(() => {
  //     try {
  //       getProductList();
  //     } catch (error) {
  //       console.log("Day la loi", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }, 1000);
  // }, []);

  useEffect(() => {
    try {
      getProductList();
    } catch (error) {
      console.log("Day la loi", error);
    }
  }, []);
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid className={classes.left}>
            <Paper elevation={0}>Left column</Paper>
          </Grid>
          <Grid className={classes.right}>
            {" "}
            <Paper elevation={0}>
              {loading ? (
                <ProductSkeleton />
              ) : (
                <ProductList data={productList} />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ListPage;
