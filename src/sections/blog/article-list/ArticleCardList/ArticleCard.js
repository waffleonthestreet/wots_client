import React from "react";
import PropTypes from "prop-types";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { Box, Stack } from "@mui/joy";
import { lineColor } from "../../../../config";

const ArticleCard = () => {
	return (
		<Stack direction="row">
			<Box
				sx={{
					width: {
						xs: "100%",
						sm: "100%",
						md: "40%",
						lg: "40%",
						xl: "40%",
					},
					height: "225px",
					border: `1px solid ${lineColor}`,
					backgroundImage: "url('https://picsum.photos/400')",
					// backgroundRepeat: "no-repeat",
				}}></Box>
			<Box
				sx={{
					width: {
						xs: "100%",
						sm: "100%",
						md: "60%",
						lg: "60%",
						xl: "60%",
					},
					height: "225px",
					border: `1px solid ${lineColor}`,
				}}>
				<Stack spacing={1} sx={{ p: 3 }} justifyContent="space-between">
					<Typography
						level="h4"
						fontWeight={400}
						sx={{ fontFamily: "inherit" }}>
						블로그 제목을 뭘로 할까나
					</Typography>
					<Box sx={{ height: "100px" }}>
						<Typography level="body-md" sx={{ fontFamily: "inherit" }}>
							블로그 내용 이라네. 블로그 내용 이라네. 블로그 내용 이라네. 블로그
							내용 이라네. 블로그 내용 이라네. 블로그 내용 이라네. 블로그 내용
						</Typography>
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					<Stack direction="row" spacing={1}>
						<Typography level="body-sm" sx={{ fontFamily: "inherit" }}>
							길거리와플 ∙ 2023.08.20
						</Typography>
					</Stack>
				</Stack>
			</Box>
		</Stack>
	);
};

export default ArticleCard;
