import Button from "@/shared/ui/Button";
import style from "./TrainCard.module.scss";
import SharedIcon from "@/shared/assets/share.svg";

interface pathI {
  time: string;
  city: string;
  date: string;
}

interface TrainCardProps {
  id: string;
  firstDate: pathI;
  secondDate: pathI;
  fitsFree: number;
  fitsPurchased: number;
}

const TrainCard = ({
  id,
  firstDate,
  secondDate,
  fitsFree,
  fitsPurchased,
}: TrainCardProps) => {
  return (
    <div className={style.TrainCard}>
      <div className={style.header}>
        <p>
          Id поезда: <span className={style.accent}>{id}</span>
        </p>
        <SharedIcon />
      </div>
      <div className={style.body}>
        <div className={style.timeLine}>
          <div className={style.path}>
            <h4 className={style.accent}>{firstDate.date}</h4>
            <h5>{firstDate.city}</h5>
            <p>{firstDate.time}</p>
          </div>
          <div className={style.path}>
            <h4 className={style.accent}>{secondDate.date}</h4>
            <h5>{secondDate.city}</h5>
            <p>{secondDate.time}</p>
          </div>
        </div>
        <div className={style.Purchased}>
          <p>
            Подходит свободных:{" "}
            <span className={style.accent}>{fitsFree}%</span>
          </p>
          <p>
            Подходит купленных/забронированных:{" "}
            <span className={style.accent}>{fitsPurchased}%</span>
          </p>
        </div>
      </div>

      <Button>Забронировать</Button>
    </div>
  );
};

export default TrainCard;
