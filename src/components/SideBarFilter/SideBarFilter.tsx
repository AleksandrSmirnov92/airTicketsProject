import style from "./SideBarFilter.module.css";
import { BsFilterRight } from "react-icons/bs";
import { useEffect, useState } from "react";
interface SideBarProps {
  sortPrice: React.Dispatch<React.SetStateAction<string>>;
  setFilterTransfer: React.Dispatch<React.SetStateAction<string>>;
  setFilterAirline: React.Dispatch<React.SetStateAction<string>>;
  setFilterPrice: React.Dispatch<React.SetStateAction<number>>;
}
const SideBarFilter: React.FC<SideBarProps> = ({
  sortPrice,
  setFilterTransfer,
  setFilterAirline,
  setFilterPrice,
}) => {
  const [firstFilter, setFirstFilter] = useState(true);
  const [secondFilter, setSecondFilter] = useState(true);
  const [firstAirline, setFirstAirline] = useState(true);
  const [secondAirline, setSecondAirline] = useState(true);
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const handleChangeTransferFilter = (data: string) => {
    if (data === "first") {
      if (firstFilter === true) {
        setFilterTransfer("first");
      } else {
        setFilterTransfer("none");
      }
      setFirstFilter(!firstFilter);
    }
    if (data === "second") {
      if (secondFilter === true) {
        setFilterTransfer("second");
      } else {
        setFilterTransfer("none");
      }
      setSecondFilter(!secondFilter);
    }
  };
  const handleChangeAirlineFilter = (data: string) => {
    if (data === "firstAirline") {
      if (firstAirline === true) {
        setFilterAirline("firstAirline");
      } else {
        setFilterAirline("none");
      }
      setFirstAirline(!firstAirline);
    }
    if (data === "secondAirline") {
      if (secondAirline === true) {
        setFilterAirline("secondAirline");
      } else {
        setFilterAirline("none");
      }
      setSecondAirline(!secondAirline);
    }
  };

  useEffect(() => {
    const handlePriceFilter = () => {
      const result = Number(firstNumber) + Number(secondNumber);
      if (result !== 0) {
        setFilterPrice(result);
      }
    };
    handlePriceFilter();
  }, [firstNumber, secondNumber]);
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
              value={`${firstFilter}`}
              onChange={() => handleChangeTransferFilter("first")}
            />
            <span> - Одна пересадка</span>
          </div>
          <div className={style["section-card"]}>
            <input
              type="checkbox"
              value={`${secondFilter}`}
              onChange={() => handleChangeTransferFilter("second")}
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
              value={firstNumber}
              min={0}
              max={"200000"}
              placeholder={"0"}
              className={style["section-card__form"]}
              onChange={(e) => setFirstNumber(e.target.value)}
            />
          </div>
          <div className={style["section-card"]}>
            <span>До</span>
            <input
              type="number"
              className={style["section-card__form"]}
              value={secondNumber}
              placeholder={"10000"}
              max={200000}
              min={0}
              onChange={(e) => setSecondNumber(e.target.value)}
            />
          </div>
        </div>
        <div className={style["sidebar-content__section"]}>
          <h2>Авиакомпании</h2>
          <div className={style["section-card"]}>
            <input
              type="checkbox"
              value={`${firstAirline}`}
              onChange={() => handleChangeAirlineFilter("firstAirline")}
            />
            <span> - LOT Publich Airlines от 21049 р.</span>
          </div>
          <div className={style["section-card"]}>
            <input
              type="checkbox"
              value={`${secondAirline}`}
              onChange={() => handleChangeAirlineFilter("secondAirline")}
            />
            <span> - Аэрофлот рос... от 31733 р. </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBarFilter;
