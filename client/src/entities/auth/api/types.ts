import {IUser, IUserCredentials} from "@entities/auth/model/IUser";

export type IAuthQuery = IUserCredentials;

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface IRegistrationQuery extends IUserCredentials {
    username: string;
}

export interface IAuthErrorResponse {
    status: number,
    data: {
        message: string,
        errors?: [],
    }
}