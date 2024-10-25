import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import style from "./AuthLayout.module.scss";
const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className={style.AuthLayout}>{children || <Outlet />}</div>;
};
export default AuthLayout;
