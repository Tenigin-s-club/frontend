import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
import { getOrdersType } from "./TicketsOperations.types";

export const getOrders: getOrdersType = async () => {
  try {
    const response = await axiosInstance.get("/account/orders");
    return response?.data;
  } catch (e) {
    return false;
  }
};

export const getTicketsWithParams: getOrdersType = async () => {
  try {
    const response = await axiosInstance.get("/account/orders");
    return response?.data;
  } catch (e) {
    return false;
  }
};
