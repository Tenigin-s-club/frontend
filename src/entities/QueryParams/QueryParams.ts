import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useQueryParams = create(
  immer<any>((set) => ({
    query: {
      start_point: "",
      end_point: "",
      departure_date: "",
      wagon_type: [""],
      fullnes_type: [""],
      min_travel_time: "",
      max_travel_time: "",
      passenger_count: 0,

      queryParams: "",
    },
    setStartPoint: (start_point: string) => {
      set((state) => {
        state.query.start_point = start_point;
      });
    },
    setEndPoint: (end_point: string) => {
      set((state) => {
        state.query.end_point = end_point;
      });
    },
    setDepartureDate: (departure_date: string) => {
      set((state) => {
        state.query.departure_date = departure_date;
      });
    },
    setWagonType: (wagon_type: string) => {
      set((state) => {
        state.query.wagon_type = wagon_type;
      });
    },
    setFullnesType: (fullnes_type: string) => {
      set((state) => {
        state.query.fullnes_type = fullnes_type;
      });
    },
    setPassengerCount: (passenger_count: string) => {
      set((state) => {
        state.query.passenger_count = passenger_count;
      });
    },

    getQueryParams: () => {
      set((state) => {});
    },
  }))
);

export default useQueryParams;
