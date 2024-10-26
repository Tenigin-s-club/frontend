import { getUser } from "@/features/GetUser/model/service/GetUser/GetUser";
import { getLocationQuery } from "@/shared/helpers/getLocationQuery";
import { showErrorNotification } from "@/shared/helpers/notification";
import Loader from "@/shared/ui/Loader";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("access_token");
    const access_token = token ? token : "";
    if (!access_token) {
      const backPath = getLocationQuery("back") || location.pathname.slice(1);
      const url = backPath ? `/login?back=${backPath}` : "/login";
      navigate(url);
      return;
    }
    (async () => {
      try {
        await getUser();
      } catch (e) {
        showErrorNotification("Ошибка при получении информации о пользователе");
        localStorage.removeItem("access_token");
        navigate("/login");
      } finally {
      }
    })();
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loader />;

  return children;
};

//
// export const fetchUser =
//   (navigate: NavigateFunction) => async (dispatch: AppDispatch) => {
//     const access_token = SessionService.accessaccess_token;
//     if (!access_token) {
//       const backPath = getLocationQuery("back") || location.pathname.slice(1);
//       const url = backPath
//         ? `${AppRoutes.login}?back=${backPath}`
//         : AppRoutes.login;
//       navigate(url);
//       return;
//     }

//     dispatch(uiActions.setRequestStarted("getUser"));
//     try {
//       const user = await requestUser();
//       dispatch(uiActions.setUser(user));
//     } catch (e) {
//       showErrorNotification("Ошибка при получении информации о пользователе");
//     } finally {
//       dispatch(uiActions.setRequestFinished("getUser"));
//     }
//   };
