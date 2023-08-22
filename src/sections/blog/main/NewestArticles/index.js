import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const NewestArticles = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
        gap: 2,
      }}
    >
      {[1, 2, 3, 4].map((item, idx) => (
        <Card
          key={idx}
          sx={{ minHeight: "280px" }}
          size="lg"
          variant="outlined"
        >
          <CardCover>
            <img
              src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
              srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardCover
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
            }}
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography level="title-lg" textColor="#fff" mb={1}>
              Yosemite National Park
            </Typography>
            <Typography
              // startDecorator={<LocationOnRoundedIcon />}
              textColor="neutral.300"
            >
              California, USA
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default NewestArticles;
