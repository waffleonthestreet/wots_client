import React from "react";
import PropTypes from "prop-types";
import Input from "@mui/joy/Input";
import {Button, Stack} from "@mui/joy";

const SearchToolbar = () => {
    return (
        <Stack direction="row" spacing={1}>
            <Input
                placeholder="검색어를 입력하세오"
                sx={{width: "50%"}}
            />
            <Button>검색</Button>
        </Stack>
    );
};

export default SearchToolbar;
