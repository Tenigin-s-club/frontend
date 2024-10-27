import { getWagons } from "@/features/TicketsOperations/model/TicketsOperations";
import { trainType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import WagonCard from "@/widgets/WagonCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./WagonsPage.module.scss";

const WagonsPage = () => {
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
    </div>
  );
};

export default WagonsPage;
