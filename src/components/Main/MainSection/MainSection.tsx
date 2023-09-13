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
