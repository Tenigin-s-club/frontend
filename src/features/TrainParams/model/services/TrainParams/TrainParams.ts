import axiosInstance from "@/shared/config/ApiConfig/ApiConfig";
import { getQuery } from "@/shared/helpers/getQuery";
import { showErrorNotification } from "@/shared/helpers/notification";
import { AxiosError } from "axios";

type TrainsParams = {
  start_point: string;
  end_point: string;
  departure_date: string;
  // id: number | null;
  // typeOfSeat: "UP" | "DOWN" | null;
  wagon_type: ("PLATZCART" | "COUPE")[];
  // timeArrives: number | null;
  // timeDepatures: number | null;
  fullnesss_type: ["LOW"];
  min_travel_time: number | null;
  max_travel_time: number | null;
  // countOfPeople: number | null;
};

export const getTrainsFetch = async (data: TrainsParams) => {
  try {
    return await axiosInstance.get(`/search?${getQuery(data)}`, {
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
