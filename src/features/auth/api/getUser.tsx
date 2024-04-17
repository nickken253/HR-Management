import { axios } from "../../../lib/axios";
import { ILoginCredentials, ILoginData } from "../../../interfaces/auth.interface";
import storage from "../../../utils/storage";

export const getUser = async (): Promise<any> => {
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
