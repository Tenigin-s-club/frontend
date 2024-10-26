import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.scss";
import SearchArray from "@/shared/assets/search.svg";

const Sidebar = () => {
  return (
    <div className={style.Sidebar}>
      <h3>НАЗВАНИЕ</h3>

      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        to="/mytests"
      >
        Мои тесты
        <SearchArray />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        to="/notification"
      >
        Уведомления
        <SearchArray />
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        to="/support"
      >
        Поддержка
        <SearchArray />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        to="/settings"
      >
        Настройки
        <SearchArray />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        to="/"
      >
        Выйти
        <SearchArray />
      </NavLink>
    </div>
  );
};

export default Sidebar;
