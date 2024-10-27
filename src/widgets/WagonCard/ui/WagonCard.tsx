import { CupeType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import Coupe from "@/shared/ui/Coupe";
import style from "./WagonCard.module.scss";

interface WagonCard {
  id: number;
  wagon: CupeType[];
}
const WagonCard = ({ id, wagon }: WagonCard) => {
  return (
    <div className={style.wagonCard}>
      <h3>Вагон {id}</h3>

      <div className={style.Coups}>
        <div className={style.titles}>
          <p>Верхние</p>
          <p>Нижние</p>
        </div>
        {wagon.map((item, id) => (
          <Coupe wagonId={id} key={id} cupe={item.cupe} />
        ))}
      </div>

      <div className={style.description}>
        <div className={style.accent}>1</div>
        <p>- Ваше место</p>

        <div className={style.black}>1</div>
        <p>- Занято</p>

        <div className={style.white}>1</div>
        <p>- Свободно</p>
      </div>
    </div>
  );
};

export default WagonCard;
