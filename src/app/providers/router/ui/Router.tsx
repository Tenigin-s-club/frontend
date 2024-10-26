import { appRoutersConfig } from "@/shared/config/RouteConfig/RouteConfig";
import { RouterProvider } from "react-router-dom";

const Router = () => {
  return <RouterProvider router={appRoutersConfig} />;
};

export default Router;
