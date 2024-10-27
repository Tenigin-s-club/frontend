import Button from "@/shared/ui/Button";
import style from "./TrainCard.module.scss";
import SharedIcon from "@/shared/assets/share.svg";
import ShareModal from "@/widgets/ShareModal";
import { useState } from "react";
import { urls } from "@/shared/constants/urls";
import TwoTrainsIcon from "@/shared/assets/twoTrain.svg";
import { TrainCardType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import classNames from "classnames";
import NextArrowIcon from "@/shared/assets/nextArrow.svg";
import { useNavigate } from "react-router-dom";

const TrainCard = ({
  id,
  firstDate,
  secondDate,
  fitsFree,
  fitsPurchased,
  booked,
  stops,
}: TrainCardType) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const stopsArr = stops?.split(" ");
  const navigate = useNavigate();
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
        <div className={style.stopsBlock}>
          {stopsArr.map((item, id) => (
            <p
              key={item}
              className={classNames(style.stops, {
                [style.accent]: id === 0 || id === stopsArr.length - 1,
              })}
            >
              {item} {id !== stopsArr.length - 1 && <NextArrowIcon />}
            </p>
          ))}
        </div>
        <div className={style.timeLine}>
          <div className={style.path}>
            <h4 className={style.accent}>{firstDate.time}</h4>
            <p>{firstDate.city}</p>
            <span>{firstDate.date}</span>
          </div>
          <TwoTrainsIcon />
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

      {booked ? (
        <Button variant="text">Встать в очередь</Button>
      ) : (
        <Button onClick={() => navigate(`/wagons/${id}`)}>Забронировать</Button>
      )}
    </div>
  );
};

export default TrainCard;
