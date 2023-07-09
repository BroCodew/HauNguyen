import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/system/Unstable_Grid";
import { makeStyles } from "tss-react/mui";

import { Pagination } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import productApi from "../../../api/productApi";
import ProductList from "../components/ProductList";
import ProductSkeleton from "../components/ProductSkeleton";
import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";
import FilterByViewers from "../components/Filters/FilterByViewers";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

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
  const history = useHistory();
  const location = useLocation();
  const queryParams: any = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page as string) || 1,
      _limit: Number.parseInt(params._limit as string) || 9,
      _sort: params._sort || "salePrice:DESC",
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true",
    };
  }, [location.search]);
  const [productList, setProductList] = useState([] as any);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<{
    limit: number;
    page: number;
    total: number;
  }>({
    limit: 10,
    page: Number.parseInt(queryParams._page as string) || 1,
    total: 120,
  });

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const getProductList = async () => {
    setLoading(false);
    await delay(1000);
    const { data, pagination } = await productApi.getAll(queryParams);
    setProductList(data);
    setPagination(pagination);
    setLoading(true);
  };

  useEffect(() => {
    try {
      getProductList();
    } catch (error) {
      console.log("Day la loi", error);
    }
  }, [queryParams]);

  const handleChangePage = (e: any, page: any) => {
    const filter = {
      ...queryParams,
      _page: page,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };
  const handleSortChange = (newSortValue: any) => {
    const filter = {
      ...queryParams,
      _sort: newSortValue,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };
  //
  const handleFilterChange = (newFilterValue: any) => {
    const filter = {
      ...queryParams,
      ...newFilterValue,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };

  const setNewFilters = (newFilters: any) => {
    // setFilter((prev: any) => newFilters);
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters
                filters={queryParams}
                onChange={handleFilterChange}
              />
            </Paper>
          </Grid>
          <Grid className={classes.right}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={queryParams?._sort}
                onChange={handleSortChange}
              />
              <FilterByViewers filter={queryParams} onChange={setNewFilters} />

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
