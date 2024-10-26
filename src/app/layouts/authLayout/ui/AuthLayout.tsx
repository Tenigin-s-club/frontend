import { FC, PropsWithChildren, Suspense } from "react";
import { Outlet } from "react-router-dom";
import style from "./AuthLayout.module.scss";
import Loader from "@/shared/ui/Loader";
const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.AuthLayout}>
      <Suspense fallback={<Loader />}>{children || <Outlet />}</Suspense>
    </div>
  );
};
export default AuthLayout;
