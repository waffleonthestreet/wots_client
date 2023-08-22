import React from "react";
import PropTypes from "prop-types";
import { Box, Stack } from "@mui/material";
import SearchToolbar from "../../sections/blog/article-list/SearchToolbar";
import ArticleCardList from "../../sections/blog/article-list/ArticleCardList";

const ArticleList = () => {
	return (
		<>
			<Box sx={{ width: "100%", height: "5px", backgroundColor: "black" }} />
			<h1>ARTICLE LIST</h1>
			<Stack spacing={1}>
				<SearchToolbar />
				<ArticleCardList />
			</Stack>
		</>
	);
};

export default ArticleList;
