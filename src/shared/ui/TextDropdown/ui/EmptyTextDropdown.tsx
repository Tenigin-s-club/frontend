import CrossWithCircleIcon from "@/shared/assets/crossWithCircle.svg";
import style from "./TextDropdown.module.scss";
export const EmptyTextDropdown = () => {
  return (
    <div className={style.EmptyTextDropdown}>
      <CrossWithCircleIcon />
      <h4 className={style.EmptyTextDropdownTitle}>Ничего не нашли</h4>
      <p className={style.EmptyTextDropdownDescription}>
        Проверьте, правильно ли вы написали название
      </p>
    </div>
  );
};
