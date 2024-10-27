import Button from "@/shared/ui/Button";
import style from "./FreeOrBooked.module.scss";
import { useEffect, useState } from "react";
import { TrainCardType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import TrainCard from "@/widgets/TrainCard/ui/TrainCard";
import useQueryParams from "@/entities/QueryParams/QueryParams";
import { getTicketsWithParams } from "@/features/TicketsOperations/model/TicketsOperations";
import Loader from "@/shared/ui/Loader";
const FreeOrBooked = () => {
  const [isFree, setIsFree] = useState(true);
  const [trainArray, setTrainArray] = useState<TrainCardType[]>([]);
  const { queryParams, isLoading } = useQueryParams();
  useEffect(() => {
    if (queryParams) {
      getTicketsWithParams(queryParams).then((res) => {
        if (!res) return;
        setTrainArray(res);
      });
    }
  }, [queryParams, isFree]);
  return (
    <div className={style.freeOrBooked}>
      <div className={style.buttons}>
        <Button variant={isFree ? "" : "text"} onClick={() => setIsFree(true)}>
          Свободные
        </Button>
        <Button variant={isFree ? "text" : ""} onClick={() => setIsFree(false)}>
          Забронированные
        </Button>
      </div>
      <h2>Подходящие вам:</h2>
      <div className={style.trainCards}>
        {isLoading && <Loader />}
        {/* {!trainArray.length && !isLoading && } */}
        {!isLoading &&
          !!trainArray.length &&
          trainArray.map((item) => <TrainCard key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default FreeOrBooked;
