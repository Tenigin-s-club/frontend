import Loader from "@/shared/ui/Loader";
import Header from "@/widgets/Header";
import { FC, PropsWithChildren, Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="section">
      <Header />
      <Suspense fallback={<Loader />}>{children || <Outlet />}</Suspense>
    </div>
  );
};
export default MainLayout;
