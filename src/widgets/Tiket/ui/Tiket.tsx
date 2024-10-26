import ShareModal from "@/widgets/ShareModal";
import style from "./Tiket.module.scss";
import { useState } from "react";
import { urls } from "@/shared/constants/urls";
import SharedIcon from "@/shared/assets/share.svg";
import QrImage from "@/shared/assets/QrCode.png";
import QRModal from "@/widgets/QRModal";

interface pathI {
  time: string;
  city: string;
  date: string;
}

interface TiketProps {
  id: string;
  firstDate: pathI;
  secondDate: pathI;
  typeWagon: string;
  typeShelf: string;
  wagon: number;
  seat: number;
}
const Tiket = ({
  id,
  firstDate,
  secondDate,
  typeWagon,
  typeShelf,
  wagon,
  seat,
}: TiketProps) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
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
