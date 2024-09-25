import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppAppBar from "./components/AppAppBar";
import {RouterProvider} from "react-router-dom";
import Container from "@mui/material/Container";
import Footer from "./components/Footer";
import getBlogTheme from "./theme/getBlogTheme";
import AppRouts from "./components/AppRouts";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);
const blogTheme = createTheme(getBlogTheme('light')); //dark

root.render(
    <React.StrictMode>
        <ThemeProvider theme={blogTheme}>
            <CssBaseline enableColorScheme />
            <AppAppBar />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4, pt: 5 }}
            >
                <RouterProvider router={AppRouts}/>
            </Container>
            <Footer />
        </ThemeProvider>
    </React.StrictMode>
);
