import style from "./MainSection.module.css";
import SectionCard from "./CardSection/SectionCard";
const Section = () => {
  return (
    <div className={style["section-container"]}>
      <div className={style["section-header"]}>
        <div className={style["section-header__logo"]}>
          <span>LOGO</span>
        </div>
        <div className={style["section-header__cost"]}>
          <span className={style["section-header__cost-price"]}>21049 Р</span>
          <span>Cтоимость на одного взрослого пассажира</span>
        </div>
      </div>
      <div className={style["section-content"]}>
        <SectionCard />
        <div className={style["section-content__separator"]}></div>
        <SectionCard />
      </div>
      <button className={style["section-btn"]}>
        <span>ВЫБРАТЬ</span>
      </button>
    </div>
  );
};
export default Section;
