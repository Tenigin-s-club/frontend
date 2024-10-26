import TrainParams from "@/features/TrainParams";
import style from "./MainPage.module.scss";
import classNames from "classnames";
const MainPage = () => {
  return (
    <div className={classNames(["container", style.MainPage])}>
      <TrainParams />
    </div>
  );
};

export default MainPage;
