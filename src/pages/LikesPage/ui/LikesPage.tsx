import { getAllFavorites } from "@/features/TicketsOperations/model/TicketsOperations";
import { TiketType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import Tiket from "@/widgets/Tiket";
import { useEffect, useState } from "react";

const LikesPage = () => {
  const [favoritesArray, setFavoritesArray] = useState<TiketType[] | null>(
    null
  );
  useEffect(() => {
    getAllFavorites().then((data) => data && setFavoritesArray(data));
  }, []);
  return (
    <>
      {favoritesArray?.map((item) => (
        <Tiket {...item} />
      ))}

      {/* <WagonCard
        wagon={0}
        coupes={[
          [
            {
              num: 0,
              block: 0,
              price: 200,
              status: "FREE",
            },
            {
              num: 1,
              block: 0,
              price: 200,
              status: "BOOKED",
            },
            {
              num: 3,
              block: 0,
              price: 200,
              status: "BOOKED",
            },
            {
              num: 4,
              block: 0,
              price: 200,
              status: "FREE",
            },
          ],
          [
            {
              num: 5,
              block: 1,
              price: 200,
              status: "CLOSED",
            },
            {
              num: 6,
              block: 1,
              price: 200,
              status: "BOOKED",
            },
            {
              num: 7,
              block: 1,
              price: 200,
              status: "FREE",
            },
            {
              num: 8,
              block: 1,
              price: 200,
              status: "FREE",
            },
          ],
          [
            {
              num: 5,
              block: 1,
              price: 200,
              status: "CLOSED",
            },
            {
              num: 6,
              block: 1,
              price: 200,
              status: "BOOKED",
            },
            {
              num: 7,
              block: 1,
              price: 200,
              status: "FREE",
            },
            {
              num: 8,
              block: 1,
              price: 200,
              status: "FREE",
            },
          ],
          [
            {
              num: 5,
              block: 1,
              price: 200,
              status: "CLOSED",
            },
            {
              num: 6,
              block: 1,
              price: 200,
              status: "BOOKED",
            },
            {
              num: 7,
              block: 1,
              price: 200,
              status: "FREE",
            },
            {
              num: 8,
              block: 1,
              price: 200,
              status: "FREE",
            },
          ],
          [
            {
              num: 5,
              block: 1,
              price: 200,
              status: "CLOSED",
            },
            {
              num: 6,
              block: 1,
              price: 200,
              status: "BOOKED",
            },
            {
              num: 7,
              block: 1,
              price: 200,
              status: "FREE",
            },
            {
              num: 8,
              block: 1,
              price: 200,
              status: "FREE",
            },
          ],
          [
            {
              num: 5,
              block: 1,
              price: 200,
              status: "CLOSED",
            },
            {
              num: 6,
              block: 1,
              price: 200,
              status: "BOOKED",
            },
            {
              num: 7,
              block: 1,
              price: 200,
              status: "FREE",
            },
            {
              num: 8,
              block: 1,
              price: 200,
              status: "FREE",
            },
          ],
          [
            {
              num: 5,
              block: 1,
              price: 200,
              status: "CLOSED",
            },
            {
              num: 6,
              block: 1,
              price: 200,
              status: "BOOKED",
            },
            {
              num: 7,
              block: 1,
              price: 200,
              status: "FREE",
            },
            {
              num: 8,
              block: 1,
              price: 200,
              status: "FREE",
            },
          ],
          [
            {
              num: 5,
              block: 1,
              price: 200,
              status: "CLOSED",
            },
            {
              num: 6,
              block: 1,
              price: 200,
              status: "BOOKED",
            },
            {
              num: 7,
              block: 1,
              price: 200,
              status: "FREE",
            },
            {
              num: 8,
              block: 1,
              price: 200,
              status: "FREE",
            },
          ],
        ]}
      /> */}
    </>
  );
};

export default LikesPage;
