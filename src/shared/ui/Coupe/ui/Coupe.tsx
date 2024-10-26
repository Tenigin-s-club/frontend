import { CoupeType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import style from "./Coupe.module.scss";
import classNames from "classnames";

interface CoupeProps {
  type: "coupe" | "packard";
  sits: CoupeType;
}
const Coupe = ({ type, sits }: CoupeProps) => {
  return (
    <div className={style.coupeCard}>
      <div className={style.coupe}>
        <div
          className={classNames(style.place, {
            [style.black]:
              sits[0]?.status === "BOOKED" || sits[0]?.status === "CLOSED",
          })}
        >
          {sits[0]?.num}
        </div>
        <div
          className={classNames(style.place, {
            [style.black]:
              sits[1]?.status === "BOOKED" || sits[1]?.status === "CLOSED",
          })}
        >
          {sits[1]?.num}
        </div>
        <div
          className={classNames(style.place, {
            [style.black]:
              sits[2]?.status === "BOOKED" || sits[2]?.status === "CLOSED",
          })}
        >
          {sits[2]?.num}
        </div>
        <div
          className={classNames(style.place, {
            [style.black]:
              sits[3]?.status === "BOOKED" || sits[3]?.status === "CLOSED",
          })}
        >
          {sits[3]?.num}
        </div>
      </div>

      {type === "packard" && (
        <div className={style.packard}>
          <div
            className={classNames(style.place, {
              [style.black]:
                sits[4]?.status === "BOOKED" || sits[4]?.status === "CLOSED",
            })}
          >
            {sits[4]?.num}
          </div>
          <div
            className={classNames(style.place, {
              [style.black]:
                sits[5]?.status === "BOOKED" || sits[5]?.status === "CLOSED",
            })}
          >
            {sits[5]?.num}
          </div>
        </div>
      )}
    </div>
  );
};

export default Coupe;
