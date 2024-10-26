import Button from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import style from "./MainPage.module.scss";

import TrainCard from "@/widgets/TrainCard/ui/TrainCard";
import Dropdown from "@/shared/ui/Dropdown/ui/Dropdown";
import { useState } from "react";

const MainPage = () => {
  const [str, setStr] = useState("");
  const navigate = useNavigate();
  return (
    <div className={style.MainPage}>
      <TrainCard
        id={"214"}
        firstDate={{ time: "11:10", city: "Moskow", date: "26 окт, сб" }}
        secondDate={{ time: "12:10", city: "Moskowвав", date: "27 окт, вб" }}
        fitsFree={20}
        fitsPurchased={30}
      />
      <Dropdown
        options={[
          "Ростов",
          "Киев",
          "Киенев",
          "Киеров",
          "Киев",
          "Киенев",
          "Киеров",
          "Киев",
          "Киенев",
          "Киеров",

          "Москва",
          "Владимир",
          "Гуково",
        ]}
        selectedOption={str}
        setSelectedOption={(n) => setStr(n)}
      />
      <div className="container">
        <div className={style.content}>
          <h3>
            Платформа позволяет преподавателям быстро создавать контрольные и
            проверочные работы, а ученики могут проходить их как онлайн, так и
            оффлайн
          </h3>
          <div className={style.authBlock}>
            <Button onClick={() => navigate("/login")}>Войти</Button>
            <Button onClick={() => navigate("/register")}>Регистрация</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
