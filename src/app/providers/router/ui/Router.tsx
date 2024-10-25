import { appRoutersConfig } from "@/shared/config/RouteConfig/RouteConfig";
import Loader from "@/shared/ui/Loader";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

const Router = () => {
  return (
    <div className="flexPage">
      <Suspense fallback={<Loader />}>
        <RouterProvider router={appRoutersConfig} />
      </Suspense>
    </div>
  );
};

export default Router;
