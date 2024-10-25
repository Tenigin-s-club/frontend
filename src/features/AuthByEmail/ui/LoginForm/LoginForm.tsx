import { Link, useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import style from "./LoginForm.module.scss";

import Button from "@/shared/ui/Button/index";
import Input from "@/shared/ui/Input/index";
import DogIcon from "@/shared/assets/Dog.svg";
import LockIcon from "@/shared/assets/Lock.svg";
import { loginFetch } from "../../model/services/AuthByEmail/AuthByEmail";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    let res = await loginFetch(data.email, data.password);
    if (res) navigate("/mytests");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.LoginForm}>
      <div className={style.title}>
        <h3>Вход на платформу</h3>
      </div>

      <div className={style.InputBlock}>
        <div className={style.InputBlockHeader}>
          <label>Почта:</label>
          {errors.email && <p className={style.errorMsg}>Введите почту</p>}
        </div>
        <Input
          icon={<DogIcon />}
          {...register("email", {
            required: true,
          })}
        />
      </div>
      <div className={style.InputBlock}>
        <div className={style.InputBlockHeader}>
          <label>Пароль:</label>
          {errors.password && <p className={style.errorMsg}>Введите пароль</p>}
        </div>

        <Input
          icon={<LockIcon />}
          type="password"
          {...register("password", { required: true })}
        />
      </div>

      <Button type="submit">Войти</Button>

      <Link to="/register">
        Ещё нет аккаунта?{" "}
        <span className={style.AccentColor}>Зарегистрирутесь!</span>
      </Link>
    </form>
  );
};

export default LoginForm;
