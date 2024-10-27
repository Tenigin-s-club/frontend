import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useQueryParams = create(
  immer<any>((set) => ({
    start_point: "",
    end_point: "",
    departure_date: new Date().toISOString(),
    wagon_type: [""],
    fullnes_type: [""],
    min_travel_time: "",
    max_travel_time: "",
    passenger_count: 0,

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
        state.departure_date = departure_date;
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

    // getQueryParams: () => {
    //   set(
    //     ({
    //       start_point,
    //       end_point,
    //       departure_date,
    //       wagon_type,
    //       fullnes_type,
    //       min_travel_time,
    //       max_travel_time,
    //       passenger_count,
    //       queryParams,
    //     }) => {
    //       getQuery({
    //         start_point,
    //         end_point,
    //         departure_date,
    //         wagon_type,
    //         fullnes_type,
    //         min_travel_time,
    //         max_travel_time,
    //         passenger_count,
    //       });
    //     }
    //   );
    // },
  }))
);

export default useQueryParams;
