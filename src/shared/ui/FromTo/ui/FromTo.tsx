import { ReactNode } from "react";
import Input from "../../Input";
import style from "./FromTo.module.scss";

interface FromToProps<T> {
  fromValue: T;
  setFromValue: (newVal: T) => void;
  toValue: T;
  setToValue: (newVal: T) => void;
  type?: string;
  label?: ReactNode;
  fromPlaceholder?: string;
  toPlaceholder?: string;
  fromPrefix?: string;
  toPrefix?: string;
}

export const FromTo = <T,>({
  fromValue,
  type = "number",
  setFromValue,
  setToValue,
  toValue,
  label,
  fromPlaceholder,
  toPlaceholder,
  toPrefix = "до",
  fromPrefix = "с",
}: FromToProps<T>) => {
  return (
    <label>
      {label && <span>{label}</span>}
      <p className={style.text}>
        {fromPrefix}
        <Input
          type={type}
          className={style.input}
          value={String(fromValue)}
          onChange={(v) => setFromValue(v.target.value as T)}
          placeholder={fromPlaceholder}
        />
        {toPrefix}
        <Input
          type={type}
          className={style.input}
          value={String(toValue)}
          onChange={(v) => setToValue(v.target.value as T)}
          placeholder={toPlaceholder}
        />
      </p>
    </label>
  );
};
