import { axios } from "../../../lib/axios";
import { ILoginCredentials, ILoginData } from "../../../interfaces/auth.interface";
import storage from "../../../utils/storage";
import { AxiosResponse } from "axios";

export const handleResponse = (response: AxiosResponse<ILoginData>) => {
  const { data } = response;
  if (data) {
    storage.set("token", data.token);
  }
  return data;
};
export const login = async (credentials: ILoginCredentials): Promise<any> => {
  try {
    const response = await axios.post("/login", credentials);
    console.log(response);
    handleResponse(response);
    return response; 
  } catch (error:any) {
    return {
      message: error.response?.data?.message || error.message,
      code: error.response?.data?.code || null,
      error: true,
    };
  }
};

export const logout = () => {
  storage.remove("token");
};

export const getUserDetail = async (): Promise<any> => {
  try {
    const response = await axios.get("/user/detail");
    return response;
  } catch (error:any) {
    return {
      message: error.response?.data?.message || error.message,
      code: error.response?.data?.code || null,
      error: true,
    };
  }
}
