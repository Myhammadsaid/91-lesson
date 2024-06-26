import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const SkeletonPage = ({ pageCount }) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"49px"}
      >
        {new Array(pageCount).fill("").map((_, inx) => (
          <Grid key={inx} item lg={3}>
            <Skeleton variant="rectangular" height={250} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SkeletonPage;
