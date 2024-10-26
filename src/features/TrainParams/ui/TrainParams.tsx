import style from "./TrainParams.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Dropdown from "@/shared/ui/Dropdown";
import { useEffect, useState } from "react";
import { getCities } from "../model/services/TrainParams/TrainParams";
import { showErrorNotification } from "@/shared/helpers/notification";
import "react-calendar/dist/Calendar.css";

import ReverseIcon from "@/shared/assets/reverse.svg";
import Calendar from "@/shared/ui/Calendar";
type Inputs = {
  fullname: string;
  email: string;
  password: string;
};

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const TrainParams = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [depatureCity, setDepatureCity] = useState("");
  const [arivingCity, setArivingCity] = useState("");
  const [cities, setCities] = useState([]);
  const [value, onChange] = useState<Value>(new Date());

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
  const navigate = useNavigate();
  if (areCitiesLoading) return <>Загрузка...</>;
  return (
    <div className={style.wrapper}>
      <div className={style.mainForm}>
        <label className={style.label}>
          <span>Откуда</span>
          <Dropdown
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
          <Dropdown
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
      </div>
    </div>
  );
};

export default TrainParams;
