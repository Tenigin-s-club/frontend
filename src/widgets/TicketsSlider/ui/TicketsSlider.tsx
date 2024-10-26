import style from "./TicketsSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import NextButtonIcon from "@/shared/assets/NestButton.svg";
import "swiper/css";
import "swiper/css/pagination";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Tiket from "@/widgets/Tiket";
import { TiketType } from "@/features/TicketsOperations/model/TicketsOperations.types";

const TicketsSlider = () => {
  const [myticketsArray, setMyTicketsArray] = useState<TiketType[] | null>(
    null
  );
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1300px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 750px)" });
  useEffect(() => {
    setMyTicketsArray([
      {
        id: "234",
        firstDate: { time: "13:20", city: "москва", date: "18:00" },
        secondDate: { time: "17:20", city: "курск", date: "20:00" },
        typeWagon: "купе",
        typeShelf: "нижняя",
        wagon: 23,
        seat: 1,
        travelTime: "15 часов 45 минуть",
      },
      {
        id: "234",
        firstDate: { time: "13:20", city: "москва", date: "18:00" },
        secondDate: { time: "17:20", city: "курск", date: "20:00" },
        typeWagon: "купе",
        typeShelf: "нижняя",
        wagon: 23,
        seat: 1,
        travelTime: "15 часов 45 минуть",
      },
      {
        id: "234",
        firstDate: { time: "13:20", city: "москва", date: "18:00" },
        secondDate: { time: "17:20", city: "курск", date: "20:00" },
        typeWagon: "купе",
        typeShelf: "нижняя",
        wagon: 23,
        seat: 1,
        travelTime: "15 часов 45 минуть",
      },
    ]);
    // запрашиваем мои билеты
  }, []);
  return (
    <>
      <h2 className={style.title}>Мои билеты</h2>
      <div className={style.TicketsSlider}>
        {!isMobile && (
          <div
            id="prevButton"
            className={classNames(style.SliderButton, style.prev)}
          >
            <NextButtonIcon />
          </div>
        )}
        <Swiper
          className={style.dates}
          slidesPerView={isTabletOrMobile ? 1.5 : 2.5}
          freeMode={true}
          direction="horizontal"
          navigation={
            !isMobile && {
              nextEl: "#nextButton",
              prevEl: "#prevButton",
              disabledClass: `${style.swiperButtonDisable}`,
            }
          }
          pagination={{
            el: "#swiperPagination",
            clickable: true,
          }}
          modules={[Navigation, FreeMode, Pagination]}
        >
          {myticketsArray?.map((dateItem, id) => (
            <SwiperSlide key={id}>
              <Tiket {...dateItem} />
            </SwiperSlide>
          ))}
        </Swiper>
        {!isMobile && (
          <div id="nextButton" className={style.SliderButton}>
            <NextButtonIcon />
          </div>
        )}

        <div className={style.swiperPagination}>
          <div id="swiperPagination"></div>
        </div>
      </div>
    </>
  );
};

export default TicketsSlider;
