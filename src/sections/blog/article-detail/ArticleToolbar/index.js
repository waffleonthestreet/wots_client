import React from "react";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";
import { Typography } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";

const ArticleToolbar = () => {
	return (
		<Stack direction="row" spacing={1}>
			<Avatar alt="Remy Sharp" src="https://picsum.photos/50/50" size="lg" />
			<Box>
				<Typography level="body-md" sx={{ fontFamily: "inherit" }}>
					길거리와플
				</Typography>
				<Typography level="body-xs" sx={{ fontFamily: "inherit" }}>
					2023.08.20 15:28:33
				</Typography>
			</Box>
		</Stack>
	);
};

export default ArticleToolbar;
