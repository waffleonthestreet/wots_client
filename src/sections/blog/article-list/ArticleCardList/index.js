import React from "react";
import PropTypes from "prop-types";
import { Box, Stack } from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import ArticleCard from "./ArticleCard";

const ArticleCardList = () => {
	return (
		<>
			<Stack spacing={2} sx={{ pt: 2 }}>
				{[1, 2, 3, 4].map((article, idx) => (
					<ArticleCard />
				))}
			</Stack>
		</>
	);
};

export default ArticleCardList;
