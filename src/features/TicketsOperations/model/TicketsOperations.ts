import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
import { getOrdersType, getWagonsType } from "./TicketsOperations.types";

export const getOrders: getOrdersType = async () => {
  try {
    const response = await axiosInstance.get("/account/orders");
    return response?.data;
  } catch (e) {
    return false;
  }
};

export const getTicketsWithParams = async (queryParams: string) => {
  try {
    const response = await axiosInstance.get(`/search?${queryParams}`);
    return response?.data;
  } catch (e) {
    return false;
  }
};

export const getWagons: getWagonsType = async (TrainId: string) => {
  try {
    const response = await axiosInstance.get(
      `/train/wagons/?train_id=${TrainId}`
    );
    return response?.data;
  } catch (e) {
    return false;
  }
};

export const getAllFavorites = async () => {
  try {
    const response = await axiosInstance.get("/favorites/all");
    return response?.data;
  } catch (e) {
    return false;
  }
};
