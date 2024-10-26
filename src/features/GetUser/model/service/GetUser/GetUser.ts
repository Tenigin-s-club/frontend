import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";

export const getUser = async () => {
  return await axiosInstance.get("/account/info");
  // return new Promise((res) => setTimeout(() => res({ fio: "test" }), 300));
  // return new Promise((_, rej) => setTimeout(() => rej("some error"), 300));
};
