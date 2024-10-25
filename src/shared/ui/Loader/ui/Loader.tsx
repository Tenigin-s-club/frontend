import style from "./Loader.module.scss";
const Loader = () => {
  return (
    <div className={style.LoaderComponent}>
      <div className={style.wrapper}>
        <div className={style.loader}>
          <div className={style.train}></div>
          <div className={style.track}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
