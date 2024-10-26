import { TiketType } from "@/features/TicketsOperations/model/TicketsOperations.types";
import Tiket from "@/widgets/Tiket";
import { useEffect, useState } from "react";
import style from "./CartPage.module.scss";
import { getOrders } from "@/features/TicketsOperations/model/TicketsOperations";

const CartPage = () => {
  const [cartArray, setCartArray] = useState<null | TiketType[]>(null);
  useEffect(() => {
    getOrders().then((data) => data && setCartArray(data));
  }, []);
  return (
    <div className={style.CartPage}>
      {cartArray?.map((item) => (
        <Tiket {...item} />
      ))}
    </div>
  );
};

export default CartPage;
