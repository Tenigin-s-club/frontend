import { CupeType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import style from "./Coupe.module.scss";
import classNames from "classnames";

const Coupe = ({ cupe }: CupeType) => {
  return (
    <div className={style.coupeCard}>
      <div className={style.coupe}>
        <div
          className={classNames(style.place, {
            [style.black]:
              cupe[0]?.bookingStatus === "BOOKED" ||
              cupe[0]?.bookingStatus === "CLOSED",
          })}
        >
          {cupe[0]?.seatNum}
        </div>
        <div
          className={classNames(style.place, {
            [style.black]:
              cupe[1]?.bookingStatus === "BOOKED" ||
              cupe[1]?.bookingStatus === "CLOSED",
          })}
        >
          {cupe[1]?.seatNum}
        </div>
        <div
          className={classNames(style.place, {
            [style.black]:
              cupe[2]?.bookingStatus === "BOOKED" ||
              cupe[2]?.bookingStatus === "CLOSED",
          })}
        >
          {cupe[2]?.seatNum}
        </div>
        <div
          className={classNames(style.place, {
            [style.black]:
              cupe[3]?.bookingStatus === "BOOKED" ||
              cupe[3]?.bookingStatus === "CLOSED",
          })}
        >
          {cupe[3]?.seatNum}
        </div>
      </div>
    </div>
  );
};

export default Coupe;
