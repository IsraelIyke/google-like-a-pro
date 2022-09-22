import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import img404 from "../images/404p.png";

export default function P404() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <img src={img404} alt="404" width={350} height={350} />
        </Grid>
        <Grid
          item
          xs={12}
          justifyContent="center"
          style={{
            textAlign: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            home
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
