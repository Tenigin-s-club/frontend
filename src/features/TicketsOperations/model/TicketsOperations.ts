import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
import { showErrorNotification } from "@/shared/helpers/notification";
import { AxiosError } from "axios";

export const loginFetch = async (email: string, password: string) => {
  try {
    await axiosInstance.post(
      "/users/login",
      {
        email,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return true;
  } catch (e) {
    const error = e as AxiosError;
    showErrorNotification(error.message);
    return false;
  }
};
export const registerFetch = async (
  fullname: string,
  email: string,
  password: string
) => {
  try {
    await axiosInstance.post(
      "/users/register",
      {
        fullname,
        email,
        password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return true;
  } catch (e) {
    const error = e as AxiosError;
    showErrorNotification(error.message);
    return false;
  }
};
export const logout = async () => {
  try {
    await axiosInstance.get("/users/logout");
    return true;
  } catch (e) {
    console.log(e);
  }
};
