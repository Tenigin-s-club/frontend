import { FC, useEffect, useRef, useState } from "react";
import CalendarComponent, { CalendarProps } from "react-calendar";
import style from "./Calendar.module.scss";
import classNames from "classnames";
import Input from "../../Input";
import { formatDate, MonthFormat } from "@/shared/helpers/date";
import dayjs from "dayjs";
export const Calendar: FC<CalendarProps> = (props) => {
  const [isShown, setIsShown] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: MouseEvent) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(e.target as Node)
    ) {
      setIsShown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={calendarRef}
      style={{ position: "relative", maxWidth: 400, width: "100%" }}
    >
      <Input
        onChange={() => {}}
        className={style.input}
        value={formatDate(props.value as string, MonthFormat)}
        onClick={() => setIsShown(true)}
      />
      <CalendarComponent
        {...props}
        minDate={dayjs().toDate()}
        maxDate={dayjs().add(119, "day").toDate()}
        className={classNames([style.Calendar, isShown && style.shown])}
      />
    </div>
  );
};

export default Calendar;
