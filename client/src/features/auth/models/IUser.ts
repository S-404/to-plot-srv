export interface IUserCredentials {
    password: string;
    email: string;
}

export interface IUser extends IUserCredentials {
    id: number;
    username: string;

}