import style from "./Main.module.css";
import Section from "./MainSection/MainSection";
const Main = () => {
  return (
    <div className={style["main-container"]}>
      <div className={style["main-content"]}>
        <Section />
      </div>
    </div>
  );
};
export default Main;
