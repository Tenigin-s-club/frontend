import LikeIcon from "@/shared/assets/like.svg";
import LikeActiveIcon from "@/shared/assets/likeActive.svg";
import classNames from "classnames";
import { useState } from "react";
import style from "./FavoriteButton.module.scss";
const FavoriteButton = ({ isActive }: { isActive: boolean }) => {
  const [active, setActive] = useState(isActive);
  return (
    <div
      onClick={() => setActive(!active)}
      className={classNames(style.favoriteButton, { [style.active]: active })}
    >
      {active ? <LikeActiveIcon /> : <LikeIcon />}
    </div>
  );
};

export default FavoriteButton;
