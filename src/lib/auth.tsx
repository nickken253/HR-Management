import { axios } from "../lib/axios";
import { ILoginCredentials, ILoginData } from "../interfaces/auth.interface";
import storage from "../utils/storage";
import { AxiosResponse } from "axios";
import { getUser, loginWithUsernameAndPassword } from "../features/auth";
import { useDispatch } from "react-redux";
import { setUsername } from "../";

export const handleResponse = (response: AxiosResponse<ILoginData>) => {
    const { data } = response;
    if (data) {
        storage.set("token", data.token);
    }
};

export const login = async (credentials: ILoginCredentials): Promise<any> => {
    console.log(credentials);
    const response = await loginWithUsernameAndPassword(credentials);
    console.log('response: ',response);
    handleResponse(response);
    return response;
};

export const loadUser = async () => {
    const dispatch = useDispatch();
    if (storage.get("token")) {
        const response = await getUser();
        dispatch(setUsername(response.data.username));
        return response;
    }
    return null;
};

export const logout = () => {
    storage.remove("token");
};