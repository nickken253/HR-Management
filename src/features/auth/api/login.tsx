import { axios } from "../../../lib/axios";
import { ILoginCredentials, ILoginData } from "../../../interfaces/auth.interface";
import storage from "../../../utils/storage";
import { AxiosResponse } from "axios";

export const loginWithUsernameAndPassword = async (credentials: ILoginCredentials): Promise<any> => {
  try {
    const response = await axios.post("/login", credentials);
    return response; 
  } catch (error:any) {
    return {
      message: error.response?.data?.message || error.message,
      code: error.response?.data?.code || null,
      error: true,
    };
  }
};

