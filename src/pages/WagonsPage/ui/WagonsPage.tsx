import { getWagons } from "@/features/TicketsOperations/model/TicketsOperations";
import { WagonType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import WagonCard from "@/widgets/WagonCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./WagonsPage.module.scss";

const WagonsPage = () => {
  const { id } = useParams();
  const [wagonsData, setWagonsData] = useState<WagonType[] | null>();
  useEffect(() => {
    getWagons(idTrain || "").then((data) => data && setWagonsData(data));
  }, []);
  return (
    <div className={style.WagonsPage}>
      <div className={style.Wagons}>
        {wagonsData?.map((item) => (
          <WagonCard wagon={0} coupes={[]} />
        ))}
      </div>
    </div>
  );
};

export default WagonsPage;
