import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
import { getQuery } from "@/shared/helpers/getQuery";
import { showErrorNotification } from "@/shared/helpers/notification";
import { AxiosError } from "axios";

type TrainsParams = {
  cityFrom: string;
  cityTo: string;
  date: Date;
  id: number | null;
  typeOfSeat: "UP" | "DOWN" | null;
  type: "LOCAL" | "PLATZCART" | "COUPE" | "SV" | "LUX" | null;
  timeArrives: number | null;
  timeDepatures: number | null;
  timeInRoad: number | null;
  countOfPeople: number | null;
};

export const getTrainsFetch = async (data: TrainsParams): Promise<string[]> => {
  try {
    return await axiosInstance.get(`/trains${getQuery(data)}`, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    const error = e as AxiosError;
    showErrorNotification(error.message);
    throw new Error(error.message);
  }
};

export const getCities = async () =>
  await axiosInstance.get("/search/cities", {
    headers: { "Content-Type": "application/json" },
  });
