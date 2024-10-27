import style from "./Filters.module.scss";
import { useState } from "react";
import Input from "@/shared/ui/Input";
import Radios from "@/shared/ui/Radios/";
import FromTo from "@/shared/ui/FromTo";
import Dropdown from "@/shared/ui/Dropdown";

const typeOfWagon = {
  Купе: "COUPE",
  Платцкарт: "PLATZCART",
};

const typeOfShelf = [
  {
    label: "Низкая",
    id: 0,
  },
  {
    label: "Средняя",
    id: 1,
  },
  {
    label: "Высокая",
    id: 2,
  },
];

const Filters = () => {
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

  return (
    <div className={style.filter}>
      <h2>Фильтры</h2>

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
        <span>Заполненность:</span>
        <Radios
          items={typeOfShelf}
          horizontal
          activeId={activeTypeOfShelf}
          setActiveId={(n) => setActiveTypeOfShelf(n)}
        />
      </div>

      <FromTo
        label={"Время поездки (ч.):"}
        fromValue={fromHoursInPath}
        setFromValue={(newVal: number) => setFromHoursInPath(newVal)}
        toValue={toHoursInPath}
        setToValue={(newVal: number) => setToHoursInPath(newVal)}
      />
      <FromTo
        label={"Время отправления (чч:мм):"}
        fromValue={fromDepartureTime}
        setFromValue={(newVal: Date | null) => setFromDepartureTime(newVal)}
        type="time"
        toValue={toDepartureTime}
        setToValue={(newVal: Date | null) => setToDepartureTime(newVal)}
      />
      <FromTo
        label={"Время прибытия (чч:мм):"}
        fromValue={fromArrivingTime}
        setFromValue={(newVal: Date | null) => setFromArrivingTime(newVal)}
        type="time"
        toValue={toArrivingTime}
        setToValue={(newVal: Date | null) => setToArrivingTime(newVal)}
      />
    </div>
  );
};

export default Filters;
