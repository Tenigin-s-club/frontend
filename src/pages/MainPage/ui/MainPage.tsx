import TrainParams from "@/features/TrainParams";
import style from "./MainPage.module.scss";

import FreeOrBooked from "@/widgets/FreeOrBooked/ui/FreeOrBooked";
const MainPage = () => {
  return (
    <div className={style.MainPage}>
      <TrainParams />
      <FreeOrBooked />
    </div>
  );
};

export default MainPage;
