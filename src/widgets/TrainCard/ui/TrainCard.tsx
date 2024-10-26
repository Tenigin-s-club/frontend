import Button from "@/shared/ui/Button";
import style from "./TrainCard.module.scss";
import SharedIcon from "@/shared/assets/share.svg";
import ShareModal from "@/widgets/ShareModal";
import { useState } from "react";
import { urls } from "@/shared/constants/urls";

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
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  return (
    <div className={style.TrainCard}>
      <ShareModal
        link={`${urls.app}${id}`}
        isOpened={isShareModalOpen}
        setIsOpened={() => setIsShareModalOpen((prev) => !prev)}
      />
      <div className={style.header}>
        <p>
          Id поезда: <span className={style.accent}>{id}</span>
        </p>
        <button
          className={style.shareButton}
          onClick={() => setIsShareModalOpen(true)}
        >
          <SharedIcon />
        </button>
      </div>
      <div className={style.body}>
        <div className={style.timeLine}>
          <div className={style.path}>
            <h4 className={style.accent}>{firstDate.time}</h4>
            <p>{firstDate.city}</p>
            <span>{firstDate.date}</span>
          </div>
          <div className={style.path}>
            <h4 className={style.accent}>{secondDate.time}</h4>
            <p>{secondDate.city}</p>
            <span>{secondDate.date}</span>
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
