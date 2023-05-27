import {FC} from "react";
import FilesPage from "@pages/FilesPage";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import MeetingsPage from "@pages/MeetingsPage";
import MessagesPage from "@pages/MessagesPage";
import RegistrationPage from "@pages/RegistrationPage";
import UserPage from "@pages/UserPage";

interface RoutesTypes {
    path: string,
    component: FC
}

export const publicRoutes: RoutesTypes[] = [
    {path: "/", component: HomePage},
    {path: "/login", component: LoginPage},
    {path: "/registration", component: RegistrationPage},
    {path: "/*", component: HomePage},
];

export const privateRoutes: RoutesTypes[] = [
    {path: "/", component: HomePage},
    {path: "/user", component: UserPage},
    {path: "/messages", component: MessagesPage},
    {path: "/files", component: FilesPage},
    {path: "/meetings", component: MeetingsPage},
    {path: "/*", component: HomePage},
];