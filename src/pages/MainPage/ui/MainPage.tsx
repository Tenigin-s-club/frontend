import Button from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import style from "./MainPage.module.scss";
import Dropdown from "@/shared/ui/Dropdown/ui/Dropdown";
import { useState } from "react";

const MainPage = () => {
  const [str, setStr] = useState("");
  const navigate = useNavigate();
  return <div className={style.MainPage}></div>;
};

export default MainPage;
