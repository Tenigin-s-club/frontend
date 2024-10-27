import Button from "@/shared/ui/Button";
import style from "./TrainCard.module.scss";
import SharedIcon from "@/shared/assets/share.svg";
import ShareModal from "@/widgets/ShareModal";
import { useState } from "react";
import { urls } from "@/shared/constants/urls";
import TwoTrainsIcon from "@/shared/assets/twoTrain.svg";
import { TrainCardAnswer } from "@/features/TicketsOperations/model/TicketsOperations.types";
import classNames from "classnames";
import {
  formatDate,
  formatTravelTime,
  ShortMonthFormat,
  timeFormat,
} from "@/shared/helpers/date";
import { useNavigate } from "react-router-dom";

const TrainCard = ({
  train_id,
  startpoint,
  startpoint_departure,
  endpoint,
  endpoint_arrival,
  travel_time,
  fullness,
  // suitable_wagons,
  stops,
}: TrainCardAnswer) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={style.TrainCard}>
      <ShareModal
        link={`${urls.app}${train_id}`}
        isOpened={isShareModalOpen}
        setIsOpened={() => setIsShareModalOpen((prev) => !prev)}
      />
      <div className={style.header}>
        <p>
          Id поезда: <span className={style.accent}>{train_id}</span>
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
          <p className={classNames(style.stops)}>
            {((): string => {
              const length = stops.length;

              if (length === 0) {
                return "";
              } else if (length === 1) {
                return stops[0];
              } else if (length === 2) {
                return `${stops[0]} -> ${stops[1]}`;
              } else if (length === 3) {
                return `${stops[0]} -> ${stops[1]} -> ${stops[2]}`;
              } else if (length === 4) {
                return `${stops[0]} -> ${stops[1]} -> ${stops[2]} -> ${stops[3]}`;
              } else {
                const firstPart = stops.slice(0, 2);
                const lastPart = stops.slice(length - 2);
                return `${firstPart.join(" -> ")} -> ... -> ${lastPart.join(
                  " -> "
                )}`;
              }
            })()}
          </p>
        </div>
        <div className={style.timeLine}>
          <div className={style.path}>
            <h4 className={style.accent}>
              {formatDate(startpoint_departure, timeFormat)}
            </h4>
            <p>{startpoint}</p>
            <span>{formatDate(startpoint_departure, ShortMonthFormat)}</span>
          </div>
          <div className={style.twoTrains}>
            <p>
              В пути:{" "}
              <span className={style.twoTrainsTime}>
                {formatTravelTime(travel_time)}
              </span>
            </p>
            <TwoTrainsIcon />
          </div>
          <div className={style.path}>
            <h4 className={style.accent}>
              {formatDate(endpoint_arrival, timeFormat)}
            </h4>
            <p>{endpoint}</p>
            <span>{formatDate(endpoint_arrival, ShortMonthFormat)}</span>
          </div>
        </div>

        <div className={style.Purchased}>
          <p>
            Подходит свободных: <span className={style.accent}>{5}%</span>
          </p>
          <p>
            Подходит купленных/забронированных:{" "}
            <span className={style.accent}>{10}%</span>
          </p>
        </div>
      </div>

      {fullness === 100 ? (
        <Button onClick={() => navigate(`/wagons/${train_id}`)} variant="text">
          Встать в очередь
        </Button>
      ) : (
        <Button onClick={() => navigate(`/wagons/${train_id}`)}>
          Забронировать
        </Button>
      )}
    </div>
  );
};

export default TrainCard;
