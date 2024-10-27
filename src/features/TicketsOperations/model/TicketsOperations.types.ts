export interface sitType {
  seat_id: number;
  seatNum: number;
  block: number;
  price: number;
  status: "FREE" | "BOOKED" | "CLOSED";
}

export type CoupeType = { id: number; wagon: sitType[] };
export type TrainType = { train: CoupeType[] };

export interface pathType {
  time: string;
  city: string;
  date: string;
}
export interface TiketType {
  id: string;
  departure_date?: string;
  arriving_data?: string;
  start_point?: string;
  finish_point?: string;
  type_wagon?: string;
  type_shelf?: string;
  number_wagon: number;
  number_seat: number;
  stops?: string[];
}

export interface TrainCardType {
  id: string;
  firstDate: pathType;
  secondDate: pathType;
  fitsFree: number;
  fitsPurchased: number;
  booked?: boolean;
  stops: string;
}

export type seatType = {
  seatNum: number;
  bookingStatus: "BOOKED" | "CLOSED" | "FREE";
};

export type CupeType = {
  cupe: seatType[];
};

type WagonesType = {
  id: number;
  wagon: CupeType[];
};

export type trainType = {
  train: WagonesType[];
};
export interface TrainCardAnswer {
  stops: string[];
  train_id: number;
  startpoint: string;
  startpoint_departure: string;
  endpoint: string;
  endpoint_arrival: string;
  travel_time: number;
  fullness: number;
  suitable_wagons: number[];
}

export type getOrdersType = () => Promise<false | TiketType[]>;
export type getTicketsWithParams = (
  params: string
) => Promise<false | TiketType[]>;

export type getWagonsType = (TrainId: string) => Promise<false | trainType>;
