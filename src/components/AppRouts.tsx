import * as React from 'react';
import {createBrowserRouter} from "react-router-dom";
import RegistrationPage from "../page/auth/RegistrationPage";
import HomePage from "../page/home/HomePage";
import PaymentPage from "../page/payment/PaymentPage";
import UnitPage from "../page/unit/UnitPage";
import LoginPage from "../page/auth/LoginPage";

const AppRouts = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage/>
        },
        {
            path: "/payments",
            element: <PaymentPage/>
        },
        {
            path: "/units",
            element: <UnitPage/>
        },
        {
            path: "/login",
            element: <LoginPage/>
        },
        {
            path: "/registration",
            element: <RegistrationPage/>
        },
    ]
);

export default AppRouts;