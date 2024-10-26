import ShareModal from "@/widgets/ShareModal";
import style from "./Tiket.module.scss";
import { useState } from "react";
import { urls } from "@/shared/constants/urls";
import SharedIcon from "@/shared/assets/share.svg";
import QrImage from "@/shared/assets/QrCode.png";
import QRModal from "@/widgets/QRModal";
import TwoTrainsIcon from "@/shared/assets/twoTrain.svg";
import { TiketType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import { FavoriteButton } from "@/features/TicketsOperations";
import classNames from "classnames";
import NextArrowIcon from "@/shared/assets/nextArrow.svg";

interface TiketTypeProps extends TiketType {
  hasFavorite?: boolean;
  hasPrice?: boolean;
  hasTimeLine?: boolean;
}

const Tiket = ({
  id,
  firstDate,
  secondDate,
  typeWagon,
  typeShelf,
  wagon,
  seat,
  travelTime,
  stops,
  hasFavorite,
  hasPrice,
  hasTimeLine = true,
}: TiketTypeProps) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const stopsArr = stops?.split(" ");
  return (
    <div className={style.Tiket}>
      <div className={style.mainTiket}>
        <ShareModal
          link={`${urls.app}${id}`}
          isOpened={isShareModalOpen}
          setIsOpened={() => setIsShareModalOpen((prev) => !prev)}
        />
        <div className={style.header}>
          <p>
            Id поезда: <span className={style.accent}>{id}</span>
          </p>
          <div className={style.buttons}>
            {hasFavorite && <FavoriteButton isActive={false} />}
            <button
              className={style.shareButton}
              onClick={() => setIsShareModalOpen(true)}
            >
              <SharedIcon />
            </button>
          </div>
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
          {hasTimeLine && (
            <div className={style.timeLine}>
              <div className={style.path}>
                <h4 className={style.accent}>{firstDate.time}</h4>
                <p>{firstDate.city}</p>
                <span>{firstDate.date}</span>
              </div>
              <div className={style.twoTrains}>
                <p>В пути: {travelTime}</p>
                <TwoTrainsIcon />
              </div>

              <div className={style.path}>
                <h4 className={style.accent}>{secondDate.time}</h4>
                <p>{secondDate.city}</p>
                <span>{secondDate.date}</span>
              </div>
            </div>
          )}
          <div className={style.footer}>
            <div className={style.Purchased}>
              <p>
                Тип вагона: <span className={style.accent}>{typeWagon}</span>
              </p>
              <p>
                Тип полки: <span className={style.accent}>{typeShelf}</span>
              </p>
            </div>
            <div className={style.wagonInfo}>
              <p>
                Вагон: <br /> <span className={style.accent}>{wagon}</span>
              </p>
              <p>
                Место: <br /> <span className={style.accent}>{seat}</span>
              </p>
            </div>
            {hasPrice && (
              <div className={style.price}>
                <p>
                  <span className={style.accent}>XXX</span>руб.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={style.qrBlock} onClick={() => setIsQRModalOpen(true)}>
        <img src={QrImage} />
      </div>
      <QRModal
        isOpened={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />
    </div>
  );
};

export default Tiket;
