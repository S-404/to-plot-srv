import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import UserPage from "../pages/UserPage";
import {FC} from "react";

interface RoutesTypes {
    path: string,
    component: FC
}

export const publicRoutes: RoutesTypes[] = [
    {path: '/', component: HomePage},
    {path: '/login', component: LoginPage},
    {path: '/registration', component: RegistrationPage},
    {path: '/*', component: HomePage},
]

export const privateRoutes: RoutesTypes[] = [
    {path: '/', component: HomePage},
    {path: '/user', component: UserPage},
    {path: '/*', component: HomePage},
]