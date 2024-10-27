import { CupeType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import style from "./Coupe.module.scss";
import classNames from "classnames";
import useWagonPlace from "@/entities/WagonPlace/WagonPlace";

interface CoupeP extends CupeType {
  wagonId: number;
}
const Coupe = ({ cupe, wagonId }: CoupeP) => {
  const { number_wagon, number_seat, setNumberWagon, setNumberSeat } =
    useWagonPlace();
  const isCurrentWagon = number_seat === wagonId;
  const setCurrentPlace = (number_seat: number) => {
    setNumberWagon(wagonId);
    setNumberSeat(number_seat);
  };
  return (
    <div className={style.coupeCard}>
      <div className={style.coupe}>
        <div
          className={classNames(
            style.place,
            {
              [style.black]:
                cupe[0]?.bookingStatus === "BOOKED" ||
                cupe[0]?.bookingStatus === "CLOSED",
            },
            {
              [style.accent]:
                cupe[0]?.seatNum === number_wagon && isCurrentWagon,
            }
          )}
          onClick={() => setCurrentPlace(cupe[0]?.seatNum)}
        >
          {cupe[0]?.seatNum}
        </div>
        <div
          className={classNames(
            style.place,
            {
              [style.black]:
                cupe[1]?.bookingStatus === "BOOKED" ||
                cupe[1]?.bookingStatus === "CLOSED",
            },
            {
              [style.accent]:
                cupe[1]?.seatNum === number_wagon && isCurrentWagon,
            }
          )}
          onClick={() => setCurrentPlace(cupe[1]?.seatNum)}
        >
          {cupe[1]?.seatNum}
        </div>
        <div
          className={classNames(
            style.place,
            {
              [style.black]:
                cupe[2]?.bookingStatus === "BOOKED" ||
                cupe[2]?.bookingStatus === "CLOSED",
            },
            {
              [style.accent]:
                cupe[2]?.seatNum === number_wagon && isCurrentWagon,
            }
          )}
          onClick={() => setCurrentPlace(cupe[2]?.seatNum)}
        >
          {cupe[2]?.seatNum}
        </div>
        <div
          className={classNames(
            style.place,
            {
              [style.black]:
                cupe[3]?.bookingStatus === "BOOKED" ||
                cupe[3]?.bookingStatus === "CLOSED",
            },
            {
              [style.accent]:
                cupe[3]?.seatNum === number_wagon && isCurrentWagon,
            }
          )}
          onClick={() => setCurrentPlace(cupe[3]?.seatNum)}
        >
          {cupe[3]?.seatNum}
        </div>
      </div>
    </div>
  );
};

export default Coupe;
