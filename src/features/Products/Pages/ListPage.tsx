import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/system/Unstable_Grid";
import { makeStyles } from "tss-react/mui";

import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import productApi from "../../../api/productApi";
import ProductList from "../components/ProductList";
import ProductSkeleton from "../components/ProductSkeleton";

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
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 9,
  });
  const [pagination, setPagination] = useState<{
    limit: number;
    page: number;
    total: number;
  }>({
    limit: 10,
    page: 1,
    total: 120,
  });

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const getProductList = async () => {
    setLoading(false);
    await delay(1000);
    console.log(loading, "loading...");
    const { data, pagination } = await productApi.getAll(filter);
    setProductList(data);
    setPagination(pagination);
    setLoading(true);
  };
  const handleChangePage = (e: any, page: any) => {
    setFilter((prev) => ({
      ...prev,
      _page: page,
    }));
  };
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
  }, [filter]);
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
              {!loading ? (
                <ProductSkeleton />
              ) : (
                <ProductList data={productList} />
              )}
              <Pagination
                count={Math.ceil(pagination.total / pagination.limit)}
                color="primary"
                defaultPage={pagination.page}
                onChange={handleChangePage}
              ></Pagination>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ListPage;
