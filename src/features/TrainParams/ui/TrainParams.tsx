import style from "./TrainParams.module.scss";
import Dropdown from "@/shared/ui/Dropdown";
import TextDropdown from "@/shared/ui/TextDropdown";
import { getCities } from "../model/services/TrainParams/TrainParams";
import { showErrorNotification } from "@/shared/helpers/notification";
import "react-calendar/dist/Calendar.css";
import ReverseIcon from "@/shared/assets/reverse.svg";
import Calendar from "@/shared/ui/Calendar";
import Button from "@/shared/ui/Button";
import { getTicketsWithParams } from "@/features/TicketsOperations/model/TicketsOperations";
import useQueryParams from "@/entities/QueryParams/QueryParams";
import { useState, useCallback, useEffect } from "react";
import { getQuery } from "@/shared/helpers/getQuery";

const countOfPassengers = [
  "1 пассажир",
  "2 пассажира",
  "3 пассажира",
  "4 пассажира",
];

const TrainParams = () => {
  const {
    start_point,
    end_point,
    departure_date,
    setStartPoint,
    setEndPoint,
    setDepartureDate,
    wagon_type,
    fullnes_type,
    max_travel_time,
    min_travel_time,
    passenger_count,
  } = useQueryParams();
  const [cities, setCities] = useState([]);
  const [areCitiesLoading, setAreCitiesLoading] = useState(false);

  const fetchCities = useCallback(async () => {
    setAreCitiesLoading(true);
    try {
      const res = await getCities();
      setCities(res.data);
    } catch (error) {
      showErrorNotification("Не удалось получить информацию о городах!");
    } finally {
      setAreCitiesLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  if (areCitiesLoading) return <>Загрузка...</>;

  const fined = () => {
    getTicketsWithParams(
      getQuery({
        start_point,
        end_point,
        departure_date,
        wagon_type,
        fullnes_type,
        min_travel_time,
        max_travel_time,
        passenger_count,
      })
    );
  };
  return (
    <div className={style.wrapper}>
      <div className={style.mainForm}>
        <label className={style.label}>
          <span>Откуда</span>
          <TextDropdown
            placeholder="Введите город..."
            options={cities}
            selectedOption={start_point}
            setSelectedOption={setStartPoint}
          />
        </label>
        <button
          type="button"
          className={style.reverseButton}
          onClick={() => {
            const dep = start_point;
            const arr = end_point;
            console.log(dep, arr);
            setStartPoint(arr);
            setEndPoint(dep);
          }}
        >
          <ReverseIcon />
        </button>
        <label className={style.label}>
          <span>Куда</span>
          <TextDropdown
            placeholder="Введите город..."
            options={cities}
            selectedOption={end_point}
            setSelectedOption={setEndPoint}
          />
        </label>
        <label className={style.label}>
          <span>Когда</span>
          <Calendar
            onChange={(v) => setDepartureDate(v)}
            value={departure_date}
          />
        </label>
        <label className={style.label}>
          <span>Количество пассажиров</span>
          <Dropdown
            options={countOfPassengers}
            selectedOption={countOfPassengers[0]}
            setSelectedOption={() => {}}
            // setSelectedOption={(value) => setCount("count", value)}
          />
        </label>

        <Button className={style.SubmitButton} onClick={fined}>
          Найти билеты
        </Button>
      </div>
    </div>
  );
};

export default TrainParams;
