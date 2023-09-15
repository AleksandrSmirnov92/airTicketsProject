import { Flights } from "../types/index";
const sortFlights = (flights: Flights[], sortPrice: string) => {
  let results = flights
    .sort(
      (a: Flights, b: Flights) =>
        Number(b.priceSinglePassengerTotal.amount) -
        Number(a.priceSinglePassengerTotal.amount)
    )
    .reverse();
  if (sortPrice === "PriceDecreasing") {
    results = flights
      .sort(
        (a: Flights, b: Flights): number =>
          Number(a.priceSinglePassengerTotal.amount) -
          Number(b.priceSinglePassengerTotal.amount)
      )
      .reverse();
    return results;
  }
  if (sortPrice === "TravelTime") {
    results = flights.sort(
      (a: Flights, b: Flights): number =>
        a.flightDuration.totalTime - b.flightDuration.totalTime
    );
    return results;
  }
  return results;
};
export const filterFlights = (
  flights: Flights[],
  oneTransferFilter: boolean,
  twoTransferFilter: boolean,
  sortPrice: string,
  minPrice: number,
  maxPrice: number,
  firstAirline: boolean,
  secondAirline: boolean
) => {
  let results = sortFlights(flights, sortPrice);

  if (oneTransferFilter || twoTransferFilter) {
    if (oneTransferFilter && twoTransferFilter) {
      const result = flights.filter(
        (item: Flights) =>
          1 * (item.transfer.forth + item.transfer.back) === 3 ||
          1 * (item.transfer.forth + item.transfer.back) === 4
      );
      results = result;
    } else if (oneTransferFilter) {
      const result = flights.filter(
        (item: Flights) => 1 * (item.transfer.forth + item.transfer.back) === 3
      );
      results = result;
    } else if (twoTransferFilter) {
      const result = flights.filter(
        (item: Flights) => 1 * (item.transfer.forth + item.transfer.back) === 4
      );
      results = result;
    } else return results;
  }
  if (minPrice !== 0 || maxPrice !== 200000) {
    results = flights.filter(
      (item) =>
        item.priceSinglePassengerTotal.amount >= minPrice &&
        item.priceSinglePassengerTotal.amount <= maxPrice
    );
  }
  if (firstAirline || secondAirline) {
    if (firstAirline && secondAirline) {
      const result = flights.filter(
        (item: Flights) =>
          item.airline === "LOT Polish Airlines" ||
          item.airline === "Аэрофлот - российские авиалинии"
      );
      results = result;
    } else if (firstAirline) {
      const result = flights.filter(
        (item: Flights) => item.airline === "LOT Polish Airlines"
      );
      results = result;
    } else if (secondAirline) {
      const result = flights.filter(
        (item: Flights) => item.airline === "Аэрофлот - российские авиалинии"
      );
      results = result;
    } else return results;
  }
  return results;
};
