// import axiosInstance from "@/shared/config/ApiConfig/ApiConfig"

export const getUser = () => {
  //return await axiosInstance.get('/profile')
  return new Promise((res) => setTimeout(() => res({ fio: "test" }), 300));
  // return new Promise((_, rej) => setTimeout(() => rej("some error"), 300));
};
