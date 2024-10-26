import style from "./MainPage.module.scss";

import FreeOrBooked from "@/widgets/FreeOrBooked/ui/FreeOrBooked";
const MainPage = () => {
  return (
    <div className={style.MainPage}>
      <FreeOrBooked />
    </div>
  );
};

export default MainPage;
