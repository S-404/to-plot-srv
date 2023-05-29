export interface IUserCredentials {
    password: string;
    email: string;
}

export interface IUser extends IUserCredentials {
    id: number;
    username: string;
}

export type IAuthQuery = IUserCredentials;

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface IRegistrationQuery extends IUserCredentials {
    username: string;
}

export type IRegistrationResponse = IAuthResponse

export interface IAuthErrorResponse {
    status: number,
    data: {
        message: string,
        errors?: [],
    }
}