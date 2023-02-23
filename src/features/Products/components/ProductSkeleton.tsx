import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/system/Unstable_Grid";

const ProductSkeleton = () => {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(3)).map((item, index: any) => (
          <Grid key={index} xs={12} sm={6} md={4} lg={3}>
            <Box padding={8}>
              <Skeleton
                variant="rectangular"
                width="200%"
                height={200}
              ></Skeleton>
              <Skeleton />
              <Skeleton width="100%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductSkeleton;
