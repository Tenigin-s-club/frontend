import Input from "@/shared/ui/Input";
import style from "./TrainParams.module.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type Inputs = {
  fullname: string;
  email: string;
  password: string;
};

const TrainParams = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      <label>
        <span></span>
        <Input />
      </label>
    </div>
  );
};

export default TrainParams;
