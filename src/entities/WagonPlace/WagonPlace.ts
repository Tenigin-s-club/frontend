import { formatDate, fullDateFormat } from "@/shared/helpers/date";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useQueryParams = create(
  immer<any>((set) => ({
    start_point: "",

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
    setWagonType: (wagon_type: string) => {
      set((state) => {
        state.wagon_type = wagon_type;
      });
    },
    setFullnesType: (fullness_type: string) => {
      set((state) => {
        state.fullness_type = fullness_type;
      });
    },
  }))
);

export default useQueryParams;
