import Header from "@/widgets/Header";
import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="section">
      <Header />
      {children || <Outlet />}
    </div>
  );
};
export default MainLayout;
