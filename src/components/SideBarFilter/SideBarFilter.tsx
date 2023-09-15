import style from "./SideBarFilter.module.css";
import { BsFilterRight } from "react-icons/bs";
import { useEffect, useState, useCallback } from "react";
import { SideBarProps } from "../../types";
const SideBarFilter: React.FC<SideBarProps> = ({
  sortPrice,
  setMinPrice,
  setMaxPrice,
  setSecondAirlines,
  setFirstAirlines,
  setOneTransferFilter,
  setTwoTransferFilter,
  toggleBtn,
  setToggleBtn,
}) => {
  const [firstFilter, setFirstFilter] = useState(true);
  const [secondFilter, setSecondFilter] = useState(true);
  const [firstAirline, setFirstAirline] = useState(true);
  const [secondAirline, setSecondAirline] = useState(true);
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const handleChangeTransferFilter = useCallback(
    (data: string) => {
      if (data === "first") {
        if (firstFilter === true) {
          setOneTransferFilter(true);
        } else {
          setOneTransferFilter(false);
        }
        setFirstFilter(!firstFilter);
      }
      if (data === "second") {
        if (secondFilter === true) {
          setTwoTransferFilter(true);
        } else {
          setTwoTransferFilter(false);
        }
        setSecondFilter(!secondFilter);
      }
    },
    [firstFilter, setOneTransferFilter, secondFilter, setTwoTransferFilter]
  );
  const handleChangeAirlineFilter = useCallback(
    (data: string) => {
      if (data === "firstAirline") {
        if (firstAirline === true) {
          setFirstAirlines(true);
        } else {
          setFirstAirlines(false);
        }
        setFirstAirline(!firstAirline);
      }
      if (data === "secondAirline") {
        if (secondAirline === true) {
          setSecondAirlines(true);
        } else {
          setSecondAirlines(false);
        }
        setSecondAirline(!secondAirline);
      }
    },
    [firstAirline, secondAirline, setFirstAirlines, setSecondAirlines]
  );
  useEffect(() => {
    const handlePriceFilter = () => {
      const first = Number(firstNumber);
      const second = Number(secondNumber);
      if (firstNumber === "") {
        setMinPrice(0);
      }
      if (secondNumber === "") {
        setMaxPrice(200000);
      }
      if (first !== 0) {
        setMinPrice(first);
      }
      if (second !== 0) {
        setMaxPrice(second);
      }
    };

    handlePriceFilter();
  }, [firstNumber, secondNumber, setMaxPrice, setMinPrice]);

  return (
    <div className={style["sidebar-container"]}>
      <div className={style["sidebar-filter-wrapper"]}>
        <button onClick={() => setToggleBtn(!toggleBtn)}>
          <BsFilterRight className={style["sidebar-filter"]} />
        </button>
      </div>
      <div
        className={
          toggleBtn
            ? `${style["sidebar-content_active"]}`
            : `${style["sidebar-content_inactive"]}`
        }
      >
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
              id="PriceIncrease"
            />
            <label htmlFor="PriceIncrease"> - По возростанию цены</label>
          </div>
          <div className={style["section-card"]}>
            <input
              name="FilterPrice"
              type="radio"
              value={"PriceDecreasing"}
              onChange={(e) => {
                sortPrice(e.target.value);
              }}
              id="PriceDecreasing"
            />
            <label htmlFor="PriceDecreasing"> - По убыванию цены</label>
          </div>
          <div className={style["section-card"]}>
            <input
              name="FilterPrice"
              type="radio"
              value={"TravelTime"}
              onChange={(e) => {
                sortPrice(e.target.value);
              }}
              id="TravelTime"
            />
            <label htmlFor="TravelTime"> - По времени пути</label>
          </div>
        </div>
        <div className={style["sidebar-content__section"]}>
          <h2>Фильтровать</h2>
          <div className={style["section-card"]}>
            <input
              type="checkbox"
              value={`${firstFilter}`}
              onChange={() => handleChangeTransferFilter("first")}
              id="oneTransfer"
            />
            <label htmlFor="oneTransfer"> - Одна пересадка</label>
          </div>
          <div className={style["section-card"]}>
            <input
              type="checkbox"
              value={`${secondFilter}`}
              onChange={() => handleChangeTransferFilter("second")}
              id="twoTransfer"
            />
            <label htmlFor="twoTransfer"> - Две пересадки</label>
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
              max={200000}
              placeholder={"0"}
              className={style["section-card__form"]}
              onChange={(e) =>
                setFirstNumber((prev) =>
                  Number(prev) > 200001 ? "" : e.target.value.replace(/\D/g, "")
                )
              }
            />
          </div>
          <div className={style["section-card"]}>
            <span>До</span>
            <input
              type="number"
              className={style["section-card__form"]}
              value={secondNumber}
              placeholder={"200000"}
              max={200000}
              min={0}
              onChange={(e) =>
                setSecondNumber((prev) =>
                  Number(prev) > 200001 ? "" : e.target.value.replace(/\D/g, "")
                )
              }
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
              id="lot"
            />
            <label htmlFor="lot"> - LOT Publich Airlines от 21049 р.</label>
          </div>
          <div className={style["section-card"]}>
            <input
              type="checkbox"
              value={`${secondAirline}`}
              onChange={() => handleChangeAirlineFilter("secondAirline")}
              id="rus"
            />
            <label htmlFor="rus"> - Аэрофлот рос... от 31733 р. </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBarFilter;
