import { Flights } from "../types/index";
export const sortFlights = (flights: Flights[], sortPrice: string) => {
  if (sortPrice === "PriceDecreasing") {
    return flights.sort(
      (a: Flights, b: Flights): number =>
        Number(a.priceSinglePassengerTotal.amount) -
        Number(b.priceSinglePassengerTotal.amount)
    );
  }
  if (sortPrice === "TravelTime") {
    return flights.sort(
      (a: Flights, b: Flights): number =>
        a.duration.totalTime - b.duration.totalTime
    );
  }
  return flights.sort(
    (a: Flights, b: Flights) =>
      Number(b.priceSinglePassengerTotal.amount) -
      Number(a.priceSinglePassengerTotal.amount)
  );
};
export const filterFlights = (flights: Flights[], filterTransfer: string) => {
  if (filterTransfer === "one") {
    console.log("one");
  }
  if (filterTransfer === "two") {
    console.log("two");
  }
  return flights;
};
export const minutesToHours = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes} минут`;
  } else if (remainingMinutes === 0) {
    return `${hours} ч`;
  } else {
    return `${hours} ч ${remainingMinutes} мин`;
  }
};
export const formattedDate = (date: Date) => {
  const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "май",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек",
  ];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  return dayOfMonth + " " + month + ". " + dayOfWeek;
};
