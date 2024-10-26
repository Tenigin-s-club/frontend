import Tiket from "@/widgets/Tiket";

const LikesPage = () => {
  return (
    <Tiket
      id={"1234567"}
      firstDate={{ time: "11:10", city: "Moskow", date: "26 окт, сб" }}
      secondDate={{ time: "12:10", city: "Moskowвав", date: "27 окт, вб" }}
      typeWagon="плацкарт"
      typeShelf="верхняя"
      wagon={14}
      seat={5}
      travelTime={""}
    />
  );
};

export default LikesPage;
