import { formatDate, fullDateFormat } from "@/shared/helpers/date";
import { getQuery } from "@/shared/helpers/getQuery";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type ZustandStateConstants = {
  start_point: string;
  end_point: string;
  departure_date: string;
  wagon_type: string[];
  fullness_type: string[];
  min_travel_time: number;
  max_travel_time: number;
  passenger_count: number;
  queryParams: string;
  isRequested: boolean;
  isLoading: boolean;
};

type ZustandStateReducers = {
  setStartPoint: (item: string) => void;
  setEndPoint: (item: string) => void;
  setDepartureDate: (item: string) => void;
  setWagonType: (item: string[]) => void;
  setFullnessType: (item: string[]) => void;
  setPassengerCount: (item: number) => void;
  setIsLoading: (item: boolean) => void;
  setQueryParams: () => void;
};

type ZustandStateType = ZustandStateReducers & ZustandStateConstants;

const useQueryParams = create(
  immer<ZustandStateType>((set) => ({
    isRequested: false,
    isLoading: false,
    start_point: "",
    end_point: "",
    departure_date: formatDate(new Date(), fullDateFormat),
<<<<<<< HEAD
    wagon_type: ["PLATZCART"],
=======
    wagon_type: "PLATZCART",
>>>>>>> b62d226 (add WagonsPage)
    fullness_type: ["LOW"],
    min_travel_time: 0,
    max_travel_time: 0,
    passenger_count: 0,
    queryParams: "",
    setStartPoint: (start_point: string) => {
      set((state) => {
        state.start_point = start_point;
      });
    },
    setEndPoint: (end_point: string) => {
      set((state) => {
        state.end_point = end_point;
      });
    },
    setDepartureDate: (departure_date: string) => {
      set((state) => {
        state.departure_date = formatDate(departure_date, fullDateFormat);
      });
    },
    setWagonType: (wagon_type: string[]) => {
      set((state) => {
        state.wagon_type = wagon_type;
      });
    },
<<<<<<< HEAD
    setFullnessType: (fullness_type: string[]) => {
=======
    setFullnesType: (fullness_type: string) => {
>>>>>>> b62d226 (add WagonsPage)
      set((state) => {
        state.fullness_type = fullness_type;
      });
    },
    setPassengerCount: (passenger_count: number) => {
      set((state) => {
        state.passenger_count = passenger_count;
      });
    },
    setIsRequested: () => {
      set((state) => {
        state.isRequested = true;
      });
    },
    setIsLoading: (item) => {
      set((state) => {
        state.isLoading = item;
      });
    },
    setQueryParams: () => {
      set((state) => {
        const res = getQuery({
          start_point: state.start_point,
          end_point: state.end_point,
          departure_date: state.departure_date,
          wagon_type: state.wagon_type,
          fullness_type: state.fullness_type,
          min_travel_time: state.min_travel_time,
          max_travel_time: state.max_travel_time,
          passenger_count: state.passenger_count,
        });
        console.log(res, state.departure_date);
        state.queryParams = res;
      });
    },
  }))
);

export default useQueryParams;
