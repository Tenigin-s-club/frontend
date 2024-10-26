import { urls } from "@/shared/constants/urls";
import { showErrorNotification } from "@/shared/helpers/notification";
import axios, { AxiosError } from "axios";
const axiosInstance = axios.create({
  baseURL: urls.api,
});
export const loginFetch = async (email: string, password: string) => {
  try {
    const res = await axiosInstance.post(
      "/auth/login",
      {
        email,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    localStorage.setItem("access_token", res.data["token"]);
    return res.data["token"];
  } catch (e) {
    const error = e as AxiosError;
    showErrorNotification(error.message);
    return false;
  }
};
export const registerFetch = async (
  fio: string,
  email: string,
  password: string
) => {
  try {
    const res = await axiosInstance.post(
      "/auth/register",
      {
        fio,
        email,
        password,
        team: Math.floor(Math.random() * 100_000_000) + "",
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    localStorage.setItem("access_token", res.data["token"]);
    return res.data["token"];
  } catch (e) {
    const error = e as AxiosError;
    showErrorNotification(error.message);
    return false;
  }
};
export const logout = async () => {
  try {
    localStorage.removeItem("access_token");
    return true;
  } catch (e) {
    console.log(e);
  }
};
