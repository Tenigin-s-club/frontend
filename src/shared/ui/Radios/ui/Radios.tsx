import classNames from "classnames";
import style from "./Radios.module.scss";
import { FC } from "react";

type RadioItem = {
  id: number;
  label: string;
};

export interface RadiosProps {
  items: RadioItem[];
  activeId: number;
  setActiveId: (n: number) => void;
  horizontal?: boolean;
}

export const Radios: FC<RadiosProps> = ({
  items,
  activeId,
  setActiveId,
  horizontal,
}) => {
  return (
    <div
      className={classNames([
        style.radios,
        horizontal && style.radiosHorizontal,
      ])}
    >
      {items.map((radioElem) => (
        <label className={style.label} key={radioElem.id}>
          <input
            checked={radioElem.id === activeId}
            onChange={() => {
              console.log(radioElem);
              setActiveId(radioElem.id);
            }}
            type="radio"
            className={style.input}
          />
          <div className={style.svgs}>
            <svg
              className={classNames([
                style.radiosSvg,
                radioElem.id === activeId && style.radiosSvgActive,
              ])}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 19C12.0822 19 14.1 18.278 15.7095 16.9571C17.3191 15.6362 18.4209 13.798 18.8271 11.7558C19.2333 9.71363 18.9188 7.59376 17.9373 5.75743C16.9558 3.9211 15.3679 2.48191 13.4442 1.68508C11.5205 0.888262 9.37998 0.783107 7.38744 1.38754C5.3949 1.99197 3.67358 3.26858 2.51677 4.99987C1.35997 6.73115 0.839247 8.80998 1.04334 10.8822C1.24743 12.9543 2.1637 14.8916 3.63604 16.364"
                stroke="#4A4A4A"
                stroke-linecap="round"
              />
              <path
                d="M14 8L10.402 12.3175C9.74647 13.1042 9.41869 13.4976 8.97812 13.5176C8.53755 13.5375 8.17549 13.1755 7.45139 12.4514L6 11"
                stroke="#4A4A4A"
                stroke-linecap="round"
              />
            </svg>
            <svg
              className={classNames([
                style.radiosSvg,
                !(radioElem.id === activeId) && style.radiosSvgActive,
              ])}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="9.5" stroke="#CFD6DD" />
            </svg>
          </div>

          <p className={style.text}>{radioElem.label}</p>
        </label>
      ))}
    </div>
  );
};