import { CoupeType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import Coupe from "@/shared/ui/Coupe";
import style from "./WagonCard.module.scss";

interface WagonCard {
  wagon: number;
  coupes: CoupeType[];
}
const WagonCard = ({ wagon, coupes }: WagonCard) => {
  return (
    <div className={style.wagonCard}>
      <h3>Вагон {wagon}</h3>

      <div className={style.Coups}>
        <div className={style.titles}>
          <p>Верхние</p>
          <p>Нижние</p>
        </div>
        {coupes.map((item, id) => (
          <Coupe type={"coupe"} sits={item} key={`${(item[0], id)}`} />
        ))}
      </div>

      <div className={style.description}>
        <div className={style.accent}>1</div>
        <p> - Ваше место</p>

        <div className={style.black}>1</div>
        <p> - Занято</p>

        <div className={style.white}>1</div>
        <p> - Свободно</p>
      </div>
    </div>
  );
};

export default WagonCard;
