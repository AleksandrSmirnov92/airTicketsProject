import style from "./SectionCard.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { minutesToHours, formattedDate } from "../../../../helpers/handleDate";
interface SectionProps {
  flightDuration: number;
  forthOrBack: boolean;
  forthDeparture: {
    airline: string;
    departureAirport: { uid: string; caption: string };
    departureCity: { uid: string; caption: string };
    departureDate: string;
  };
  forthArrive: {
    arrivalAirPort: { uid: string; caption: string };
    arrivalCity: { uid: string; caption: string };
    arrivalDate: string;
  };
  backDeparture: {
    airline: string;
    departureAirport: { uid: string; caption: string };
    departureCity: { uid: string; caption: string };
    departureDate: string;
  };
  backArrive: {
    arrivalAirPort: { uid: string; caption: string };
    arrivalCity: { uid: string; caption: string };
    arrivalDate: string;
  };

  transfer: { forth: number; back: number };
}
const SectionCard: React.FC<SectionProps> = ({
  flightDuration,
  forthArrive,
  backArrive,
  forthOrBack,
  transfer,
  forthDeparture,
  backDeparture,
}) => {
  const dateArrive = new Date(
    forthOrBack ? forthArrive!.arrivalDate : backArrive.arrivalDate
  );
  const dateDepature = new Date(
    forthOrBack ? forthDeparture!.departureDate : backDeparture.departureDate
  );

  return (
    <div className={style["card-container"]}>
      <div className={style["card"]}>
        <span className={style["card-text"]}>
          {forthOrBack
            ? `${forthDeparture.departureCity.caption}, ${forthDeparture.departureAirport.caption}`
            : `${backDeparture.departureCity.caption}, ${backDeparture.departureAirport.caption}`}
          <span className={style["card-subtext"]}>
            (
            {forthOrBack
              ? forthDeparture.departureAirport.uid
              : forthDeparture.departureAirport.uid}
            )
            <HiOutlineArrowNarrowRight className={style["card-text__arrow"]} />
          </span>
          {forthOrBack
            ? `${forthArrive?.arrivalCity.caption}, ${forthArrive.arrivalAirPort.caption}`
            : `${backArrive.arrivalCity.caption}, ${backArrive.arrivalAirPort.caption}`}
          <span className={style["card-subtext"]}>
            (
            {forthOrBack
              ? forthArrive.arrivalAirPort.uid
              : backArrive.arrivalAirPort.uid}
            )
          </span>
        </span>
      </div>
      <div className={style["card-segment-two"]}>
        <div className={style["card-l-segment"]}>
          <span className={style["card-l-segment__text"]}>
            {`${dateDepature.getHours()}:${
              dateDepature.getMinutes() < 10
                ? "0" + dateDepature.getMinutes()
                : dateDepature.getMinutes()
            }`}
          </span>
          <span className={style["card-l-segment__subtext"]}>
            {formattedDate(dateDepature)}
          </span>
        </div>
        <div className={style["card-c-segment"]}>
          <BiTimeFive className={style["card-c-segment__watch"]} />
          <span>{minutesToHours(flightDuration)}</span>
        </div>
        <div className={style["card-r-segment"]}>
          <span className={style["card-r-segment__subtext"]}>
            {formattedDate(dateArrive)}
          </span>
          <span className={style["card-r-segment__text"]}>
            {`${dateArrive.getHours()}:${
              dateArrive.getMinutes() < 10
                ? "0" + dateArrive.getMinutes()
                : dateArrive.getMinutes()
            }`}
          </span>
        </div>
      </div>
      <div className={style["card-segment-three"]}>
        <div></div>
        {forthOrBack ? (
          transfer.forth - 1 !== 0 ? (
            <span>{`${transfer.forth - 1} пересадка`}</span>
          ) : (
            ""
          )
        ) : transfer.back - 1 !== 0 ? (
          <span>{`${transfer.back - 1} пересадка`}</span>
        ) : (
          ""
        )}
        <div></div>
      </div>
      <div className={style["card-segment-four"]}>
        <span>
          Рейс выполняет{" "}
          {forthOrBack ? forthDeparture.airline : backDeparture.airline}
        </span>
      </div>
    </div>
  );
};
export default SectionCard;
