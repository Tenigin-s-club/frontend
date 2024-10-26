import { urls } from "@/shared/constants/urls";
import axios from "axios";
import { Cookies } from "react-cookie";

const axiosInstance = axios.create({
  baseURL: urls.api,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const cookie = new Cookies();
    const token = cookie.get("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
    }
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      axiosInstance.get("/users/refresh_token");
    }
    return error;
  }
);

export default axiosInstance;
