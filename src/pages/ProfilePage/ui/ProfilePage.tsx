import { ProfileCard } from "@/entities/User";
import classNames from "classnames";
import style from "./ProfilePage.module.scss";
import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from "@/shared/assets/arrowLeft.svg";
import Button from "@/shared/ui/Button";
const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className={classNames("section", style.ProfilePage)}>
      <div className={style.ProfileBody}>
        <Button variant="primary" onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
          <p>Назад</p>
        </Button>
        <ProfileCard />
      </div>
    </div>
  );
};

export default ProfilePage;
