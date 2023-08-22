import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import Router from "./routes";
import {CssVarsProvider, extendTheme} from '@mui/joy/styles';
import "./App.css";
import chakraTheme from "./theme";
import {StyledEngineProvider} from '@mui/material/styles';
import {
    useColorScheme as useMaterialColorScheme,
    Experimental_CssVarsProvider as MaterialCssVarsProvider,
    experimental_extendTheme as extendMaterialTheme,
    THEME_ID
} from "@mui/material/styles";
import {
    CssVarsProvider as JoyCssVarsProvider,
    useColorScheme as useJoyColorScheme
} from "@mui/joy/styles";

const App = () => {

    const materialTheme = extendMaterialTheme();
    return (
        <>
            <StyledEngineProvider injectFirst>
                <MaterialCssVarsProvider theme={{[THEME_ID]: materialTheme}}>
                    <JoyCssVarsProvider theme={chakraTheme}>
                        <ScrollToTop/>
                        <Router/>
                    </JoyCssVarsProvider>
                </MaterialCssVarsProvider>
            </StyledEngineProvider>
        </>
    );
};

export default App;
