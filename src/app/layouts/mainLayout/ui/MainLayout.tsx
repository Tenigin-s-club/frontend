import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children || <Outlet />}</>;
};
export default MainLayout;
