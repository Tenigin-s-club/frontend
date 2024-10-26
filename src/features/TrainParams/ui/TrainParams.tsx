import CrossIcon from "@/shared/assets/cross.svg";
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
import Input from "@/shared/ui/Input";
import Radios from "@/shared/ui/Radios/";
import classNames from "classnames";
import FromTo from "@/shared/ui/FromTo";
// type Inputs = {
//   fullname: string;
//   email: string;
//   password: string;
// };

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const countOfPassangers = [
  "1 пассажир",
  "2 пассажира",
  "3 пассажира",
  "4 пассажира",
];

const typeOfWagon = {
  Купе: "COUPE",
  Платцкарт: "PLATZCART",
};

const typeOfShelf = [
  {
    label: "Не имеет значения",
    id: 0,
  },
  {
    label: "Верхняя",
    id: 1,
  },
  {
    label: "Нижняя",
    id: 2,
  },
];

const TrainParams = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Inputs>();
  const [depatureCity, setDepatureCity] = useState("");
  const [arivingCity, setArivingCity] = useState("");
  const [cities, setCities] = useState([]);
  const [value, onChange] = useState<Value>(new Date());
  const [count, setCount] = useState<string>(countOfPassangers[0]);
  const [areAdvancedOpen, setAreAdvancedOpen] = useState(false);
  const [trainId, setTrainId] = useState<number | undefined>();
  const [trainType, setTrainType] = useState<string | undefined>();
  const [fromDepartureTime, setFromDepartureTime] = useState<Date | null>(null);
  const [toDepartureTime, setToDepartureTime] = useState<Date | null>(null);
  const [fromArrivingTime, setFromArrivingTime] = useState<Date | null>(null);
  const [toArrivingTime, setToArrivingTime] = useState<Date | null>(null);
  const [fromHoursInPath, setFromHoursInPath] = useState(0);
  const [toHoursInPath, setToHoursInPath] = useState(168);
  const [activeTypeOfShelf, setActiveTypeOfShelf] = useState<number>(
    typeOfShelf[0].id
  );

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
  return (
    <div className={style.wrapper}>
      <div className={style.mainForm}>
        <label className={style.label}>
          <span>Откуда</span>
          <TextDropdown
            placeholder="Введите город..."
            options={cities}
            selectedOption={depatureCity}
            setSelectedOption={setDepatureCity}
          />
        </label>
        <button
          className={style.reverseButton}
          onClick={() => {
            const dep = depatureCity;
            const arr = arivingCity;
            console.log(dep, arr);
            setDepatureCity(arr);
            setArivingCity(dep);
          }}
        >
          <ReverseIcon />
        </button>
        <label className={style.label}>
          <span>Куда</span>
          <TextDropdown
            placeholder="Введите город..."
            options={cities}
            selectedOption={arivingCity}
            setSelectedOption={setArivingCity}
          />
        </label>
        <label className={style.label}>
          <span>Когда</span>
          <Calendar onChange={(v) => onChange(v)} value={value} />
        </label>
        <label className={style.label}>
          <span>Количество пассажиров</span>
          <Dropdown
            options={countOfPassangers}
            selectedOption={count}
            setSelectedOption={setCount}
          />
        </label>
      </div>
      <h3
        className={classNames([
          style.titleAdvanced,
          areAdvancedOpen && style.titleAdvancedActive,
        ])}
        onClick={() => setAreAdvancedOpen((prev) => !prev)}
      >
        Доп. параметры <CrossIcon />
      </h3>
      <div
        className={classNames([
          style.advanced,
          areAdvancedOpen && style.advancedActive,
        ])}
      >
        <div
          className={classNames([
            style.advancedContent,
            areAdvancedOpen && style.advancedContentActive,
          ])}
        >
          <div className={style.label}>
            <span>ID поезда:</span>
            <Input
              value={trainId}
              onChange={(v) => setTrainId(Number(v.target.value))}
              type="number"
            />
          </div>
          <div className={style.label}>
            <span>Тип вагона:</span>
            <Dropdown
              options={Object.keys(typeOfWagon)}
              selectedOption={trainType || ""}
              setSelectedOption={(n) => setTrainType(n)}
            />
          </div>
          <div className={style.label}>
            <span>Тип полки:</span>
            <Radios
              items={typeOfShelf}
              horizontal
              activeId={activeTypeOfShelf}
              setActiveId={(n) => setActiveTypeOfShelf(n)}
            />
          </div>
        </div>
        <div className={style.times}>
          <FromTo
            label={"Время поездки:"}
            fromValue={fromHoursInPath}
            setFromValue={(newVal: number) => setFromHoursInPath(newVal)}
            toValue={toHoursInPath}
            setToValue={(newVal: number) => setToHoursInPath(newVal)}
          />
          <FromTo
            label={"Время отправления:"}
            fromValue={fromDepartureTime}
            setFromValue={(newVal: Date | null) => setFromDepartureTime(newVal)}
            type="time"
            toValue={toDepartureTime}
            setToValue={(newVal: Date | null) => setToDepartureTime(newVal)}
          />
          <FromTo
            label={"Время прибытия:"}
            fromValue={fromArrivingTime}
            setFromValue={(newVal: Date | null) => setFromArrivingTime(newVal)}
            type="time"
            toValue={toArrivingTime}
            setToValue={(newVal: Date | null) => setToArrivingTime(newVal)}
          />
        </div>
      </div>
      <Button className={style.SubmitButton}>Найти билеты</Button>
    </div>
  );
};

export default TrainParams;
