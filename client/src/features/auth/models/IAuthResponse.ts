import {IUser} from "./IUser";

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface IAuthErrorResponse {
    status: number,
    data: {
        message: string,
        errors?: [],
    }
}