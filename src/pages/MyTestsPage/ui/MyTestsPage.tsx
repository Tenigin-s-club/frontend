import Header from "@/widgets/Header";
import style from "./MyTestsPage.module.scss";
import classNames from "classnames";

import { useEffect, useState } from "react";

const MyTestsPage = () => {
  const [created, setCreated] = useState(true);

  return (
    <div className={classNames("section", style.MyTestsPage)}>
      <Header />
      <div className={style.tools}>
        <div
          className={classNames(style.RightBlock, { [style.active]: !created })}
        >
          <div
            onClick={() => setCreated(true)}
            className={classNames(style.tool, { [style.noActive]: !created })}
          >
            <p>Созданные</p>
          </div>
          <div className={style.line}></div>
          <div
            onClick={() => setCreated(false)}
            className={classNames(style.tool, { [style.noActive]: created })}
          >
            <p>Решенные</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTestsPage;
