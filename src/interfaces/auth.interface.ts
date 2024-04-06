export interface ILoginResponse {
  result?: boolean;
  message: string;
  data?: ILoginData;
  error?: boolean;
}

export interface ILoginData {
  token: string;
}

export interface ILoginCredentials {
  username: string;
  password: string;
  company_id: number;
}
export interface IUserData {
  id: number;
  email: string;
  username: string;
}

export interface IUserResponse {
  result?: boolean;
  message: string;
  data?: IUserData;
  error?: boolean;
}
