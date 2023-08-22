import {CssVarsProvider, extendTheme} from '@mui/joy/styles';

const chakraTheme = extendTheme({
    fontFamily: {
        body: 'inherit',
    },
});

export default chakraTheme;

// function App() {
//     return (
//         <CssVarsProvider theme={chakraTheme}>
//             <Button>Solid</Button>
//             ...other buttons
//         </CssVarsProvider>
//     );
// };