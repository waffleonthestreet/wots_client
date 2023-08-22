import React from "react";
import PropTypes from "prop-types";
import { Box, Stack } from "@mui/material";
import { drawerWidth, headerHeight, outletPadding } from "../../config";
import NewestArticles from "../../sections/blog/main/NewestArticles";

const Main = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "5px", backgroundColor: "black" }} />
      <h1>NEW POST</h1>
      <Stack spacing={1}>
        <NewestArticles />
      </Stack>
    </>
  );
};

export default Main;
