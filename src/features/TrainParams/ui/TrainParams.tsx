import style from "./TrainParams.module.scss";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
import Dropdown from "@/shared/ui/Dropdown";
import TextDropdown from "@/shared/ui/TextDropdown";
import { useEffect, useState } from "react";
import { getCities } from "../model/services/TrainParams/TrainParams";
import { showErrorNotification } from "@/shared/helpers/notification";
import "react-calendar/dist/Calendar.css";
import ReverseIcon from "@/shared/assets/reverse.svg";
import Calendar from "@/shared/ui/Calendar";
import Button from "@/shared/ui/Button";
import { getTicketsWithParams } from "@/features/TicketsOperations/model/TicketsOperations";
import useQueryParams from "@/entities/QueryParams/QueryParams";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const countOfPassangers = [
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
  } = useQueryParams();
  const [cities, setCities] = useState([]);
  const [count, setCount] = useState<string>(countOfPassangers[0]);

  const [areCitiesLoading, setAreCitiesLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setAreCitiesLoading(true);
      try {
        const res = await getCities();
        setCities(res.data);
      } catch (error) {
        showErrorNotification("Не удалось получить информацию о городах!");
      } finally {
        setAreCitiesLoading(false);
      }
    })();
  }, []);
  // const navigate = useNavigate();
  if (areCitiesLoading) return <>Загрузка...</>;

  const fined = () => {
    getTicketsWithParams();
  };
  return (
    <div className={style.wrapper}>
      <div className={style.mainForm}>
        <label className={style.label}>
          <span>Откуда</span>
          <TextDropdown
            placeholder="Введите город..."
            options={cities}
            selectedOption={setStartPoint}
            setSelectedOption={setStartPoint}
          />
        </label>
        <button
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
            options={countOfPassangers}
            selectedOption={count}
            setSelectedOption={setCount}
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
