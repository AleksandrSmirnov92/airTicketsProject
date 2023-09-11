import style from "./SectionCard.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
const SectionCard = () => {
  return (
    <div className={style["card-container"]}>
      <div className={style["card"]}>
        <span className={style["card-text"]}>
          Москва, ШЕРЕМЕТЬЕВО
          <span className={style["card-subtext"]}>
            (SVO)
            <HiOutlineArrowNarrowRight className={style["card-text__arrow"]} />
          </span>
          ЛОНДОН, Лондон, Хитроу
          <span className={style["card-subtext"]}>(SVO)</span>
        </span>
      </div>
      <div className={style["card-segments"]}>
        <div className={style["card-l-segment"]}>
          <span className={style["card-l-segment__text"]}>20:40</span>
          <span className={style["card-l-segment__subtext"]}>18 авг. вт</span>
        </div>
        <div className={style["card-c-segment"]}>
          <BiTimeFive className={style["card-c-segment__watch"]} />
          <span>14 ч 45 мин</span>
        </div>
        <div className={style["card-r-segment"]}>
          <span className={style["card-r-segment__subtext"]}>18 авг. вт</span>
          <span className={style["card-r-segment__text"]}>20:40</span>
        </div>
      </div>
      <div>3</div>
      <div>4</div>
    </div>
  );
};
export default SectionCard;
