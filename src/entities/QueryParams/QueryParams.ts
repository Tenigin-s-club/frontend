import { formatDate, fullDateFormat } from "@/shared/helpers/date";
import { getQuery } from "@/shared/helpers/getQuery";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useQueryParams = create(
  immer<any>((set) => ({
    start_point: "",
    end_point: "",
    departure_date: formatDate(new Date(), fullDateFormat),
    wagon_type: [""],
    fullnes_type: [""],
    min_travel_time: "",
    max_travel_time: "",
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
    setWagonType: (wagon_type: string) => {
      set((state) => {
        state.wagon_type = wagon_type;
      });
    },
    setFullnesType: (fullnes_type: string) => {
      set((state) => {
        state.fullnes_type = fullnes_type;
      });
    },
    setPassengerCount: (passenger_count: string) => {
      set((state) => {
        state.passenger_count = passenger_count;
      });
    },

    setQueryParams: () => {
      set((state) => {
        const res = getQuery({
          start_point: state.start_point,
          end_point: state.end_point,
          departure_date: state.departure_date,
          wagon_type: state.wagon_type,
          fullnes_type: state.fullnes_type,
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
