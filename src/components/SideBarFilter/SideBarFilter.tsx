import style from "./SideBarFilter.module.css";
import { BsFilterRight } from "react-icons/bs";
interface SideBarProps {
  sortPrice: React.Dispatch<React.SetStateAction<string>>;
  setFilterTransfer: React.Dispatch<React.SetStateAction<string>>;
}
const SideBarFilter: React.FC<SideBarProps> = ({
  sortPrice,
  setFilterTransfer,
}) => {
  return (
    <div className={style["sidebar-container"]}>
      <div className={style["sidebar-filter-wrapper"]}>
        <BsFilterRight className={style["sidebar-filter"]} />
      </div>
      <div className={style["sidebar-content"]}>
        <div className={style["sidebar-content__section"]}>
          <h2>Сортировать</h2>
          <div className={style["section-card"]}>
            <input
              name="FilterPrice"
              type="radio"
              value={"PriceIncrease"}
              defaultChecked
              onChange={(e) => {
                sortPrice(e.target.value);
              }}
            />
            <span> - По возростанию цены</span>
          </div>
          <div className={style["section-card"]}>
            <input
              name="FilterPrice"
              type="radio"
              value={"PriceDecreasing"}
              onChange={(e) => {
                sortPrice(e.target.value);
              }}
            />
            <span> - По убыванию цены</span>
          </div>
          <div className={style["section-card"]}>
            <input
              name="FilterPrice"
              type="radio"
              value={"TravelTime"}
              onChange={(e) => {
                sortPrice(e.target.value);
              }}
            />
            <span> - По времени пути</span>
          </div>
        </div>
        <div className={style["sidebar-content__section"]}>
          <h2>Фильтровать</h2>
          <div className={style["section-card"]}>
            <input
              type="checkbox"
              value={"one"}
              onChange={(e) => setFilterTransfer(e.target.value)}
            />
            <span> - Одна пересадка</span>
          </div>
          <div className={style["section-card"]}>
            <input
              type="checkbox"
              value={"two"}
              onChange={(e) => setFilterTransfer(e.target.value)}
            />
            <span> - Две пересадки</span>
          </div>
        </div>
        <div className={style["sidebar-content__section"]}>
          <h2>Цена</h2>
          <div className={style["section-card"]}>
            <span>От</span>
            <input
              type="number"
              value={0}
              min={0}
              className={style["section-card__form"]}
            />
          </div>
          <div className={style["section-card"]}>
            <span>До</span>
            <input
              type="number"
              className={style["section-card__form"]}
              value={10000}
            />
          </div>
        </div>
        <div className={style["sidebar-content__section"]}>
          <h2>Авиакомпании</h2>
          <div className={style["section-card"]}>
            <input type="checkbox" />
            <span> - LOT Publich Airlines от 21049 р.</span>
          </div>
          <div className={style["section-card"]}>
            <input type="checkbox" />
            <span> - Аэрофлот рос... от 31733 р. </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBarFilter;
