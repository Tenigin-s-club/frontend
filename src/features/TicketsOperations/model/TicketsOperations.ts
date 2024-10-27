import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
import {
  getOrdersType,
  getTicketsWithParams as ParamsType,
} from "./TicketsOperations.types";

export const getOrders: getOrdersType = async () => {
  try {
    const response = await axiosInstance.get("/account/orders");
    return response?.data;
  } catch (e) {
    return false;
  }
};

export const getTicketsWithParams: ParamsType = async (queryParams: string) => {
  try {
    const response = await axiosInstance.get(`/account/orders?${queryParams}`);
    return response?.data;
  } catch (e) {
    return false;
  }
};
