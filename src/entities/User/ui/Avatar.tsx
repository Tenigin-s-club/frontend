import { Link } from "react-router-dom";
import style from "./Avatar.module.scss";
const Avatar = () => {
  return (
    <Link to="/profile" className={style.Avatar}>
      d
    </Link>
  );
};

export default Avatar;
