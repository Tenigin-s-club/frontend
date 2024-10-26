import { FC } from "react";
import style from "./ProfileCard.module.scss";
import Button from "@/shared/ui/Button";

interface ProfileCardProps {
  name: string;
  email: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ name, email }) => {
  return (
    <div className={style.ProfileCard}>
      <div className={style.Header}>
        <h2>Профиль</h2>
      </div>
      <div className={style.AvatarBlock}>
        <Button variant="text">Загрузить фото</Button>
      </div>

      <div className={style.InputsBlock}>
        <div className={style.InputBlock}>
          <label>ФИО: </label>
          <h3>{name}</h3>
        </div>
        <div className={style.InputBlock}>
          <label>Email:</label>
          <h3>{email}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
