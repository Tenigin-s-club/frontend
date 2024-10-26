import Button from "@/shared/ui/Button";
import style from "./FreeOrBooked.module.scss";
import { useEffect, useState } from "react";
import { TrainCardType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import TrainCard from "@/widgets/TrainCard/ui/TrainCard";
const FreeOrBooked = () => {
  const [isFree, setIsFree] = useState(true);
  const [trainArray, setTrainArray] = useState<null | TrainCardType[]>(null);
  useEffect(() => {
    isFree
      ? setTrainArray([
          {
            id: "21345",
            firstDate: { time: "14:34", city: "Москва", date: "14 окт" },
            secondDate: { time: "14:34", city: "Москва", date: "15 окт" },
            fitsFree: 34,
            fitsPurchased: 2,
            stops: "Москва Волгоград Ростов-на-Дону Краснодак",
          },
          {
            id: "21345",
            firstDate: { time: "14:34", city: "Москва", date: "14 окт" },
            secondDate: { time: "14:34", city: "Москва", date: "15 окт" },
            fitsFree: 34,
            fitsPurchased: 2,
            stops: "Москва Волгоград Ростов-на-Дону Краснодак",
          },
        ])
      : setTrainArray([
          {
            id: "21345",
            firstDate: { time: "14:34", city: "Москва", date: "14 окт" },
            secondDate: { time: "14:34", city: "Москва", date: "15 окт" },
            fitsFree: 34,
            fitsPurchased: 2,
            booked: true,
            stops: "Москва Волгоград Ростов-на-Дону Краснодак",
          },
          {
            id: "21345",
            firstDate: { time: "14:34", city: "Москва", date: "14 окт" },
            secondDate: { time: "14:34", city: "Москва", date: "15 окт" },
            fitsFree: 34,
            fitsPurchased: 2,
            booked: true,
            stops: "Москва Волгоград Ростов-на-Дону Краснодак",
          },
          {
            id: "21345",
            firstDate: { time: "14:34", city: "Москва", date: "14 окт" },
            secondDate: { time: "14:34", city: "Москва", date: "15 окт" },
            fitsFree: 34,
            fitsPurchased: 2,
            booked: true,
            stops: "Москва Волгоград Ростов-на-Дону Краснодак",
          },
        ]);
  }, [isFree]);
  return (
    <div className={style.freeOrBooked}>
      <div className={style.buttons}>
        <Button variant={isFree ? "" : "text"} onClick={() => setIsFree(true)}>
          Свободные
        </Button>
        <Button variant={isFree ? "text" : ""} onClick={() => setIsFree(false)}>
          Забронированные
        </Button>
      </div>
      <h2>Подходящие вам:</h2>
      <div className={style.trainCards}>
        {trainArray?.map((item) => (
          <TrainCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FreeOrBooked;
