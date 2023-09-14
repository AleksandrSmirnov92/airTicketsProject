import style from "./MainSection.module.css";
import SectionCard from "./CardSection/SectionCard";
import { SectionP, Flights } from "../../../types/index";
import { useState } from "react";

const Section: React.FC<SectionP> = ({ flights }) => {
  const [visibleItems, setVisibleItems] = useState(2);
  const data = flights;
  const handleVisibleElements = () => {
    setVisibleItems((prev) => prev + 2);
  };
  return (
    <div className={style["section-container"]}>
      {data.slice(0, visibleItems).map((item: Flights, index) => {
        return (
          <div key={index}>
            <div className={style["section-header"]}>
              <div className={style["section-header__logo"]}>
                <span>LOGO</span>
              </div>
              <div className={style["section-header__cost"]}>
                <span className={style["section-header__cost-price"]}>
                  {`${
                    item.priceSinglePassengerTotal.amount
                  } ${item.priceSinglePassengerTotal.currency[0].toLowerCase()}`}
                </span>
                <span>Cтоимость на одного взрослого пассажира</span>
              </div>
            </div>
            <div className={style["section-content"]}>
              <SectionCard
                forthOrBack={true}
                transfer={item.transfer}
                flightDuration={item.flightDuration.forth}
                forthDeparture={item.forth.departureInfo}
                forthArrive={item.forth.arrivalInfo}
                backDeparture={item.back.departureInfo}
                backArrive={item.back.arrivalInfo}
              />
              <div className={style["section-content__separator"]}></div>
              <SectionCard
                forthOrBack={false}
                transfer={item.transfer}
                flightDuration={item.flightDuration.back}
                forthDeparture={item.forth.departureInfo}
                forthArrive={item.forth.arrivalInfo}
                backDeparture={item.back.departureInfo}
                backArrive={item.back.arrivalInfo}
              />
            </div>
            <button
              onClick={() => alert("Эта функция еще не доступна")}
              className={style["section-btn"]}
            >
              <span>ВЫБРАТЬ</span>
            </button>
          </div>
        );
      })}

      <div className={style["btn-wrapper"]}>
        {data.length > 2 ? (
          <button
            className={style["show-more-btn"]}
            onClick={handleVisibleElements}
          >
            <span>Показать еще</span>
          </button>
        ) : (
          <span>Ничего не найдено</span>
        )}
      </div>
    </div>
  );
};
export default Section;
