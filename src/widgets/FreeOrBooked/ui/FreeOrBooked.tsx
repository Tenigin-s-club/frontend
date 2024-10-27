import CrossWithCircleIcon from "@/shared/assets/crossWithCircle.svg";
import Button from "@/shared/ui/Button";
import style from "./FreeOrBooked.module.scss";
import { useEffect, useState } from "react";
import { TrainCardAnswer } from "@/features/TicketsOperations/model/TicketsOperations.types";
import TrainCard from "@/widgets/TrainCard/ui/TrainCard";
import useQueryParams from "@/entities/QueryParams/QueryParams";
import { getTicketsWithParams } from "@/features/TicketsOperations/model/TicketsOperations";
import Loader from "@/shared/ui/Loader";
import { showErrorNotification } from "@/shared/helpers/notification";
import { AxiosError } from "axios";
const FreeOrBooked = () => {
  const [isFree, setIsFree] = useState(true);
  const [trainArray, setTrainArray] = useState<TrainCardAnswer[]>([
    {
      train_id: 0,
      startpoint: "Ростов-на-Дону",
      startpoint_departure: "2024-10-27T08:44:38.027Z",
      endpoint: "Москва",
      endpoint_arrival: "2024-10-29T13:22:38.027Z",
      travel_time: 1000,
      fullness: 40,
      suitable_wagons: [0],
      stops: ["Ростов-на-Дону", "Воронеж", "Липецк", "Москва"],
    },
    {
      train_id: 1,
      startpoint: "Ростов-на-Дону",
      startpoint_departure: "2024-10-27T08:44:38.027Z",
      endpoint: "Ростов Великий",
      endpoint_arrival: "2024-10-29T13:22:38.027Z",
      travel_time: 1000,
      fullness: 100,
      suitable_wagons: [0],
      stops: ["Ростов-на-Дону", "Воронеж", "Липецк", "Москва"],
    },
    {
      train_id: 2,
      startpoint: "Анапа",
      startpoint_departure: "2024-11-02T19:02:38.027Z",
      endpoint: "Москва",
      endpoint_arrival: "2024-11-05T04:33:38.027Z",
      travel_time: 4401,
      fullness: 40,
      suitable_wagons: [0, 2, 3, 4],
      stops: [
        "Анапа",
        "Киров",
        "Курск",
        "Киров",
        "Курск",
        "Киров",
        "Курск",
        "Москва",
        "Санкт-Петербург",
      ],
    },
  ]);
  const { queryParams, isLoading, isRequested, setIsLoading } =
    useQueryParams();
  useEffect(() => {
    if (queryParams) {
      setIsLoading(true);
      getTicketsWithParams(queryParams)
        .then((res) => {
          if (!res) return;
          setTrainArray(res);
        })
        .catch((e) => {
          const error = e as AxiosError;
          showErrorNotification(
            "Не удалось получить информацию о билетах: " + error.message
          );
        })
        .finally(() => setIsLoading(false));
    }
  }, [queryParams, isFree]);
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
        {isLoading && <Loader />}
        {!isLoading && !isRequested && !trainArray && (
          <div className={style.filterBlock}>
            <CrossWithCircleIcon />
            <h3>Введите фильтры</h3>
            <p>
              Мы не можем порекомендовать вам билеты, пока вы не поделитесь
              своими пожеланиями
            </p>
          </div>
        )}
        {!trainArray.length && !isLoading && isRequested && (
          <div className={style.filterBlock}>
            <CrossWithCircleIcon />
            <h3>Билетов нет</h3>
            <p>
              Нет подходящих по вашим критериям билетов. Попробуйте позже или
              встаньте в очередь на место.
            </p>
          </div>
        )}
        {!isLoading &&
          !!trainArray.length &&
          isFree &&
          trainArray
            .filter((el) => el.fullness !== 100)
            .map((item) => <TrainCard key={item.train_id} {...item} />)}
        {!isLoading &&
          !isFree &&
          !!trainArray.length &&
          trainArray
            .filter((el) => el.fullness === 100)
            .map((item) => <TrainCard key={item.train_id} {...item} />)}
      </div>
    </div>
  );
};

export default FreeOrBooked;
