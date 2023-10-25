import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/system/Unstable_Grid";
import { makeStyles } from "tss-react/mui";
import ProductThumbnail from "../components/ProductThumbnail";
import { useParams, useRouteMatch } from "react-router-dom";
import useFetchProductId from "../../../customHook/useFetchData";
import ProductInfo from "../components/ProductInfo";

type MatchTypes = { params?: any };
interface RouteParams {
  productId: string;
}
const DetailPage = () => {
  const useStyles = makeStyles<{ color: "red" | "blue" }>()(
    (theme, { color }) => ({
      root: {},
      left: {
        width: "400px",
        padding: theme.spacing(1.5),
        borderRight: `3px solid ${theme.palette.grey[300]}`,
      },
      right: {
        flex: "1 1 0",
        padding: theme.spacing(1.5),
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
  const params = useParams<RouteParams>();
  const { productId } = params;
  const [{ product, loading }] = useFetchProductId(productId);
  if (loading === true)
    return (
      <div>
        <div>sdf</div>
      </div>
    );

  return (
    <Box className={classes.root}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid className={classes.right}>
              <ProductInfo product={product} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default DetailPage;
