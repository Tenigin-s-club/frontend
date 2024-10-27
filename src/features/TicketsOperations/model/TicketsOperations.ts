import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
<<<<<<< HEAD
import { getOrdersType } from "./TicketsOperations.types";
=======
import {
  getOrdersType,
  getWagonsType,
  getTicketsWithParams as ParamsType,
} from "./TicketsOperations.types";
>>>>>>> b62d226 (add WagonsPage)

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
<<<<<<< HEAD
    return response.data;
=======
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
>>>>>>> b62d226 (add WagonsPage)
  } catch (e) {
    return false;
  }
};
