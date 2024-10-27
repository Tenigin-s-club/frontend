import classNames from "classnames";
import style from "./ProfilePage.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "@/shared/ui/Button";
import { useEffect, useState } from "react";
import { getUser } from "@/features/GetUser/model/service/GetUser/GetUser";
import { showErrorNotification } from "@/shared/helpers/notification";
import { AxiosError } from "axios";
import TicketsSlider from "@/widgets/TicketsSlider";
const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ fio: string; email: string } | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await getUser();
        setUser(res.data);
      } catch (e) {
        const error = e as AxiosError;
        showErrorNotification(
          "Не удалось получить информацию о пользователе: " + error.message
        );
        if (error.status === 403 || error.status === 401) {
          localStorage.removeItem("access_token");
          navigate("/login");
        }
      }
    })();
  }, []);
  return (
    <div className={classNames("section", style.ProfilePage)}>
      <div className={style.ProfileBody}>
        <h1>Профиль</h1>
        <h2>ФИО: {user?.fio || "Не указано"}</h2>
        <h2>EMAIL: {user?.email || "Не указан"}</h2>{" "}
        <Button
          className={style.ExitButton}
          variant="danger"
          onClick={() => {
            localStorage.removeItem("access_token");
            navigate("/login");
          }}
        >
          <p>Выйти</p>
        </Button>
      </div>{" "}
      <TicketsSlider />
    </div>
  );
};

export default ProfilePage;
