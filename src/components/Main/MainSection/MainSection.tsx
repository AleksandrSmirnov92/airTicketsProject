import style from "./MainSection.module.css";
import SectionCard from "./CardSection/SectionCard";
import { Flights } from "../../../types/index";
interface SectionProps {
  flights: Flights[];
}
const Section: React.FC<SectionProps> = ({ flights }) => {
  return (
    <div className={style["section-container"]}>
      {flights.map((item: Flights, index) => {
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
                arrivalFlag={true}
                durationTime={item.duration.where}
                whereArrive={item.where.arrival}
                whereDeparture={item.where.departure}
                backArrive={item.back.arrival}
                transfer={item.transfer}
              />
              <div className={style["section-content__separator"]}></div>
              <SectionCard
                arrivalFlag={false}
                whereArrive={item.where.arrival}
                whereDeparture={item.where.departure}
                backArrive={item.back.arrival}
                durationTime={item.duration.back}
                transfer={item.transfer}
              />
            </div>
            <button className={style["section-btn"]}>
              <span>ВЫБРАТЬ</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Section;
