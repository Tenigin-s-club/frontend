import { ProfileCard } from "@/entities/User";
import classNames from "classnames";
import style from "./ProfilePage.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "@/shared/ui/Button";
const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className={classNames("section", style.ProfilePage)}>
      <div className={style.ProfileBody}>
        <ProfileCard name={"Не указано"} email={"Не указан"} />
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
      </div>
    </div>
  );
};

export default ProfilePage;
