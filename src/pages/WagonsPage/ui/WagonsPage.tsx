import { getWagons } from "@/features/TicketsOperations/model/TicketsOperations";
import { trainType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import WagonCard from "@/widgets/WagonCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./WagonsPage.module.scss";
import Tiket from "@/widgets/Tiket";
import useWagonPlace from "@/entities/WagonPlace/WagonPlace";

const WagonsPage = () => {
  const { number_wagon, number_seat } = useWagonPlace();
  const { id } = useParams();
  const [wagonsData, setWagonsData] = useState<trainType | null>();
  useEffect(() => {
    getWagons(id || "").then((data) => data && setWagonsData(data));
  }, []);
  return (
    <div className={style.WagonsPage}>
      <div className={style.Wagons}>
        {wagonsData?.train?.map((item) => (
          <WagonCard id={item?.id} wagon={item?.wagon} />
        ))}
      </div>
      <Tiket
        hasFavorite={false}
        hasPrice={false}
        hasTimeLine={false}
        hasQr={false}
        id={id || ""}
        number_wagon={number_wagon}
        number_seat={number_seat}
      />
    </div>
  );
};

export default WagonsPage;
