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
        departure_date: "14:00",
        arriving_data: "15:00",
        start_point: "Москва",
        finish_point: "Курск",
        type_wagon: "купе",
        type_shelf: "нижняя",
        number_wagon: 1,
        number_seat: 10,
        stops: ["Мосва", "адлер", "Курск"],
        id: "23456",
      },
      {
        departure_date: "14:00",
        arriving_data: "15:00",
        start_point: "Москва",
        finish_point: "Курск",
        type_wagon: "купе",
        type_shelf: "нижняя",
        number_wagon: 1,
        number_seat: 10,
        stops: ["Мосва", "адлер", "Курск"],
        id: "23456",
      },
      {
        departure_date: "14:00",
        arriving_data: "15:00",
        start_point: "Москва",
        finish_point: "Курск",
        type_wagon: "купе",
        type_shelf: "нижняя",
        number_wagon: 1,
        number_seat: 10,
        stops: ["Мосва", "адлер", "Курск"],
        id: "23456",
      },
      {
        departure_date: "14:00",
        arriving_data: "15:00",
        start_point: "Москва",
        finish_point: "Курск",
        type_wagon: "купе",
        type_shelf: "нижняя",
        number_wagon: 1,
        number_seat: 10,
        stops: ["Мосва", "адлер", "Курск"],
        id: "23456",
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
          slidesPerView={isTabletOrMobile ? 2 : 3}
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
              <Tiket {...dateItem} hasQr={true} />
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
