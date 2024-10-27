import Tiket from "@/widgets/Tiket";
import WagonCard from "@/widgets/WagonCard";

const LikesPage = () => {
  return (
    <>
      <Tiket
        id={"1234567"}
        firstDate={{ time: "11:10", city: "Moskow", date: "26 окт, сб" }}
        secondDate={{ time: "12:10", city: "Краснодар", date: "27 окт, вб" }}
        typeWagon="плацкарт"
        typeShelf="верхняя"
        wagon={14}
        seat={5}
        stops={["Москва"]}
        travelTime={"3 часа 1 минуту"}
        hasFavorite
        hasPrice
      />
      <WagonCard
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
      />
    </>
  );
};

export default LikesPage;
