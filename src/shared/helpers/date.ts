import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import updateLocale from "dayjs/plugin/updateLocale";
dayjs.extend(updateLocale);

export const toDayJs = (date: dayjs.ConfigType): Dayjs => dayjs(date);
export const formatDate = (date: dayjs.ConfigType, locale: string) => {
  return toDayJs(date).locale("ru-RU").format(locale);
};

export const fullDateFormat = "YYYY-MM-DD";
export const fullDateRuFormat = "DD.MM.YYYY";
export const MonthFormat = "D MMMM, dd";
