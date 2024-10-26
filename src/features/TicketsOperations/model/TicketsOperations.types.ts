export interface pathType {
  time: string;
  city: string;
  date: string;
}
export interface TiketType {
  id: string;
  firstDate: pathType;
  secondDate: pathType;
  typeWagon: string;
  typeShelf: string;
  wagon: number;
  seat: number;
  travelTime: string;
}

export interface TrainCardType {
  id: string;
  firstDate: pathType;
  secondDate: pathType;
  fitsFree: number;
  fitsPurchased: number;
  booked?: boolean;
}
