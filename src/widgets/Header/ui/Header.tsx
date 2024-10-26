import style from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import CardIcon from "@/shared/assets/card.svg";
import LikeIcon from "@/shared/assets/like.svg";
import UserIcon from "@/shared/assets/user.svg";
import HomeIcon from "@/shared/assets/home.svg";

const Header = () => {
  return (
    <header className={style.Header}>
      <Link to="/">
        <h3>ЛОГО</h3>
      </Link>

      <div className={style.links}>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          to={"/"}
        >
          <HomeIcon />
          Главная
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          to={"/favorite"}
        >
          <LikeIcon />
          Избранное
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          to={"/card"}
        >
          <CardIcon />
          Корзина
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          to={"/profile"}
        >
          <UserIcon />
          Профиль
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
