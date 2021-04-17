import { Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <Grid
        container
        alignItems="center"
        direction="column"
        style={{ minHeight: "100vh" }}
      >
        <Typography variant="h2">Page Not Found</Typography>
        <Typography variant="h4">Sorry, this page does not exist</Typography>
      </Grid>
    </Fragment>
  );
};

export default NotFound;
