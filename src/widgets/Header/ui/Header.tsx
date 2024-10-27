import style from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import CardIcon from "@/shared/assets/card.svg";
import LikeIcon from "@/shared/assets/like.svg";
import UserIcon from "@/shared/assets/user.svg";
import HomeIcon from "@/shared/assets/home.svg";
import Logo from "@/shared/assets/Logo.svg";

const Header = () => {
  return (
    <header className={style.Header}>
      <Link to="/" className={style.logo}>
        <Logo />
      </Link>

      <div className={style.links}>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          to={"/"}
        >
          <HomeIcon />
          <p>Главная</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          to={"/favorite"}
        >
          <LikeIcon />
          <p>Избранное</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          to={"/cart"}
        >
          <CardIcon />
          <p>Корзина</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          to={"/profile"}
        >
          <UserIcon />
          <p>Профиль</p>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
