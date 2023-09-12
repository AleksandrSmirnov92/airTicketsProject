import style from "./SectionCard.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { minutesToHours, formattedDate } from "../../../../helpers/sortFlights";
interface SectionProps {
  durationTime: number;
  arrivalFlag: boolean;
  whereArrive: {
    arrivalAirPort: { uid: string; caption: string };
    arrivalCity: { uid: string; caption: string };
    arrivalDate: string;
  };
  whereDeparture: {
    caption: string;
    departureAirport: { uid: string; caption: string };
    departureCity: { uid: string; caption: string };
    departureDate: string;
  };
  backArrive: {
    caption: string;
    arrivalAirPort: { uid: string; caption: string };
    arrivalCity: { uid: string; caption: string };
    arrivalDate: string;
  };
  backDeparture: {
    caption: string;
    departureAirport: { uid: string; caption: string };
    departureCity: { uid: string; caption: string };
    departureDate: string;
  };
  transfer: { where: number; back: number };
}
const SectionCard: React.FC<SectionProps> = ({
  durationTime,
  whereArrive,
  backArrive,
  arrivalFlag,
  transfer,
  whereDeparture,
  backDeparture,
}) => {
  const dateArrive = new Date(
    arrivalFlag ? whereArrive!.arrivalDate : backArrive.arrivalDate
  );
  const dateDepature = new Date(
    arrivalFlag ? whereDeparture!.departureDate : backDeparture.departureDate
  );

  return (
    <div className={style["card-container"]}>
      <div className={style["card"]}>
        <span className={style["card-text"]}>
          {arrivalFlag
            ? `${whereDeparture.departureCity.caption}, ${whereDeparture.departureAirport.caption}`
            : `${backDeparture.departureCity.caption}, ${backDeparture.departureAirport.caption}`}
          <span className={style["card-subtext"]}>
            (
            {arrivalFlag
              ? whereDeparture.departureAirport.uid
              : whereDeparture.departureAirport.uid}
            )
            <HiOutlineArrowNarrowRight className={style["card-text__arrow"]} />
          </span>
          {arrivalFlag
            ? `${whereArrive?.arrivalCity.caption}, ${whereArrive.arrivalAirPort.caption}`
            : `${backArrive.arrivalCity.caption}, ${backArrive.arrivalAirPort.caption}`}
          <span className={style["card-subtext"]}>
            (
            {arrivalFlag
              ? whereArrive.arrivalAirPort.uid
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
          <span>{minutesToHours(durationTime)}</span>
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
        {arrivalFlag ? (
          transfer.where - 1 !== 0 ? (
            <span>{`${transfer.where - 1} пересадка`}</span>
          ) : (
            <span className={style["card-segment-three-transfer"]}>{`${
              transfer.where - 1
            } пересадка`}</span>
          )
        ) : transfer.back - 1 !== 0 ? (
          <span>{`${transfer.back - 1} пересадка`}</span>
        ) : (
          <span className={style["card-segment-three-transfer"]}>{`${
            transfer.back - 1
          } пересадка`}</span>
        )}
        <div></div>
      </div>
      <div className={style["card-segment-four"]}>
        <span>
          Рейс выполняет
          {arrivalFlag ? whereDeparture.caption : backArrive.caption}
        </span>
      </div>
    </div>
  );
};
export default SectionCard;
