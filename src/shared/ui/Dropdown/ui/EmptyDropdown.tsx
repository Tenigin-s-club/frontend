import CrossIcon from "@/shared/assets/cross.svg";
import style from "./Dropdown.module.scss";
export const EmptyDropdown = () => {
  return (
    <div className={style.EmptyDropdown}>
      <CrossIcon />
      <h4 className={style.EmptyDropdownTitle}>Ничего не нашли</h4>
      <p className={style.EmptyDropdownDescription}>
        Проверьте, правильно ли вы написали название
      </p>
    </div>
  );
};
