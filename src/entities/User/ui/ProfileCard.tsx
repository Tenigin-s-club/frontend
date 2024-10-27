import { FC } from "react";
import style from "./ProfileCard.module.scss";

interface ProfileCardProps {
  name: string;
  email: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ name, email }) => {
  return (
    <div className={style.ProfileCard}>
      <label>ФИО: </label>
      <h3>{name}</h3>

      <label>Email:</label>
      <h3>{email}</h3>
    </div>
  );
};

export default ProfileCard;
