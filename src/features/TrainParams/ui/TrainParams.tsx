import plural from "plural-ru";
import style from "./TrainParams.module.scss";
import Dropdown from "@/shared/ui/Dropdown";
import TextDropdown from "@/shared/ui/TextDropdown";
import { getCities } from "../model/services/TrainParams/TrainParams";
import { showErrorNotification } from "@/shared/helpers/notification";
import "react-calendar/dist/Calendar.css";
import ReverseIcon from "@/shared/assets/reverse.svg";
import Calendar from "@/shared/ui/Calendar";
import Button from "@/shared/ui/Button";
import useQueryParams from "@/entities/QueryParams/QueryParams";
import { useState, useCallback, useEffect } from "react";
import { formatDate, fullDateFormat } from "@/shared/helpers/date";

const TrainParams = () => {
  const {
    start_point,
    end_point,
    departure_date,
    setStartPoint,
    setEndPoint,
    setDepartureDate,
    setQueryParams,
    setPassengerCount,
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

  const fined = () => setQueryParams();
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
            onChange={(v) =>
              setDepartureDate(
                formatDate(v as unknown as string, fullDateFormat)
              )
            }
            value={departure_date}
          />
        </label>
        <label className={style.label}>
          <span>Количество пассажиров</span>
          <Dropdown
            options={Array.from({ length: 4 }).map((_, index) => (
              <p>
                {plural(index + 1, "%d пассажир", "%d пассажира", "пассажиров")}
              </p>
            ))}
            selectedOption={1 + ""}
            setSelectedOption={(value) => setPassengerCount(Number(value))}
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
