import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {RouterProvider} from "react-router-dom";
import getBlogTheme from "./theme/getBlogTheme";
import AppRouts from "./components/AppRouts";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);
const blogTheme = createTheme(getBlogTheme('light')); //dark

root.render(
    <React.StrictMode>
        <ThemeProvider theme={blogTheme}>
            <CssBaseline enableColorScheme />
            <RouterProvider router={AppRouts}/>
        </ThemeProvider>
    </React.StrictMode>
);
