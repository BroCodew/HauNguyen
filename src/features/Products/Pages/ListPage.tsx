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
import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";

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
      pagination: {
        display: "flex",
        justifyContent: "center",
        flexFlow: "row nowrap",
        marginTop: "20px",
        paddingBottom: "20px",
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
    _sort: "salePrice:DESC",
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
    const { data, pagination } = await productApi.getAll(filter);
    setProductList(data);
    setPagination(pagination);
    setLoading(true);
  };

  const handleChangePage = (e: any, page: any) => {
    setFilter((prev: any) => ({
      ...prev,
      _page: page,
    }));
  };
  const handleSortChange = (newSortValue: any) => {
    setFilter((prev) => ({
      ...prev,
      _sort: newSortValue,
    }));
    console.log("newSortValue", newSortValue);
  };
  //
  const handleFilterChange = (newFilterValue: any) => {
    setFilter((prev) => ({
      ...prev,
      ...newFilterValue,
    }));
  };
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
            <Paper elevation={0}>
              <ProductFilters filters={filter} onChange={handleFilterChange} />
            </Paper>
          </Grid>
          <Grid className={classes.right}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={filter._sort}
                onChange={handleSortChange}
              />
              {!loading ? (
                <ProductSkeleton />
              ) : (
                <ProductList data={productList} />
              )}
              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  color="primary"
                  defaultPage={pagination.page}
                  onChange={handleChangePage}
                  style={{ display: "flex", justifyContent: "center" }}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ListPage;
