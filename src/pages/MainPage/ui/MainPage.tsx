import TrainParams from "@/features/TrainParams";
import style from "./MainPage.module.scss";

import FreeOrBooked from "@/widgets/FreeOrBooked/ui/FreeOrBooked";
import Filters from "@/features/Filters/ui/Filters";
const MainPage = () => {
  return (
    <div className={style.MainPage}>
      <TrainParams />
      <div className={style.flexBody}>
        <Filters />
        <FreeOrBooked />
      </div>
    </div>
  );
};

export default MainPage;
