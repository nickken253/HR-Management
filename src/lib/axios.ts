import Axios, { AxiosRequestConfig } from "axios";

import { API_URL } from "../config";
import { useNotificationStore } from "../stores/notifications";
import storage from "../utils/storage";

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
}); 

axios.interceptors.request.use(function (config) {
    const token = storage.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axios.interceptors.response.use(
  (response) => {    
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    useNotificationStore.getState().addNotification({
      type: "error",
      title: "Error",
      message,
    });
    return Promise.reject(error);
  }
);
