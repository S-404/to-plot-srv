import authSlicer from "./model/authSlice";
export {authSlicer};
export {
    authApi,
    useLoginMutation,
    useLogoutMutation,
    useRegistrationMutation
} from "./api/authApi";
export {checkAuth, setAuth} from "./model/authSlice";