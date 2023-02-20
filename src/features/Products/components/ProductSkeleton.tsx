import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid";
import { makeStyles } from "tss-react/mui";
import Paper from "@mui/material/Paper";

const ProductSkeleton = () => {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(3)).map((item, index: any) => (
          <Grid key={index}>
            <Box padding={1}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={118}
              ></Skeleton>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSkeleton;
