import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import style from "./MainLayout.module.scss";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children || <Outlet />}</>;
};
export default MainLayout;
