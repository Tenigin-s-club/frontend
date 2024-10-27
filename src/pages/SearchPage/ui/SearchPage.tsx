import { useEffect, useState, useCallback } from "react";
import style from "./TrainParams.module.scss";
import Dropdown from "@/shared/ui/Dropdown";
import TextDropdown from "@/shared/ui/TextDropdown";
import {
  getCities,
  getTrainsFetch,
} from "@/features/TrainParams/model/services/TrainParams/TrainParams";
import { showErrorNotification } from "@/shared/helpers/notification";
import "react-calendar/dist/Calendar.css";
import ReverseIcon from "@/shared/assets/reverse.svg";
import Calendar from "@/shared/ui/Calendar";
import { fullDateFormat, toDayJs } from "@/shared/helpers/date";

const countOfPassengers = [
  "1 пассажир",
  "2 пассажира",
  "3 пассажира",
  "4 пассажира",
];
// const typeOfWagon = { Купе: "COUPE", Платцкарт: "PLATZCART" };
const typeOfShelf = [
  { label: "Не имеет значения", id: 0 },
  { label: "Верхняя", id: 1 },
  { label: "Нижняя", id: 2 },
];

const SearchPage = () => {
  const [formData, setFormData] = useState({
    depatureCity: "",
    arivingCity: "",
    departureDate: new Date(),
    count: countOfPassengers[0],
    trainId: undefined,
    wagonType: undefined,
    fromHoursInPath: 0,
    toHoursInPath: 168,
    fromDepartureTime: null,
    toDepartureTime: null,
    fromArrivingTime: null,
    toArrivingTime: null,
    activeTypeOfShelf: typeOfShelf[0].id,
  });

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

  const handleChange = useCallback((field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleClick = useCallback(async () => {
    try {
      const res = await getTrainsFetch({
        start_point: formData.depatureCity,
        end_point: formData.arivingCity,
        departure_date: toDayJs(formData.departureDate).format(fullDateFormat),
        fullness_type: ["LOW"],
        wagon_type: formData.wagonType ? [formData.wagonType] : ["COUPE"],
        min_travel_time: formData.fromHoursInPath,
        max_travel_time: formData.toHoursInPath,
      });
      console.log(res);
    } catch (e) {
      console.log("error:", e);
    }
  }, [formData]);

  const swapCities = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      depatureCity: prev.arivingCity,
      arivingCity: prev.depatureCity,
    }));
  }, []);

  if (areCitiesLoading) return <>Загрузка...</>;
  return (
    <>
      <div>
        <div className={style.mainForm}>
          <label className={style.label}>
            <span>Откуда</span>
            <TextDropdown
              placeholder="Введите город..."
              options={cities}
              selectedOption={formData.depatureCity}
              setSelectedOption={(value) => handleChange("depatureCity", value)}
            />
          </label>
          <button
            type="button"
            className={style.reverseButton}
            onClick={swapCities}
          >
            <ReverseIcon />
          </button>
          <label className={style.label}>
            <span>Куда</span>
            <TextDropdown
              placeholder="Введите город..."
              options={cities}
              selectedOption={formData.arivingCity}
              setSelectedOption={(value) => handleChange("arivingCity", value)}
            />
          </label>
          <label className={style.label}>
            <span>Когда</span>
            <Calendar
              onChange={(value) => handleChange("departureDate", value)}
              value={formData.departureDate}
            />
          </label>
          <label className={style.label}>
            <span>Количество пассажиров</span>
            <Dropdown
              options={countOfPassengers}
              selectedOption={formData.count}
              setSelectedOption={(value) => handleChange("count", value)}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
