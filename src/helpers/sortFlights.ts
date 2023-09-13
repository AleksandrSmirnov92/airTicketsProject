import { Flights } from "../types/index";
const sortFlights = (flights: Flights[], sortPrice: string) => {
  if (sortPrice === "PriceDecreasing") {
    return flights
      .sort(
        (a: Flights, b: Flights): number =>
          Number(a.priceSinglePassengerTotal.amount) -
          Number(b.priceSinglePassengerTotal.amount)
      )
      .reverse();
  }
  if (sortPrice === "TravelTime") {
    return flights.sort(
      (a: Flights, b: Flights): number =>
        a.flightDuration.totalTime - b.flightDuration.totalTime
    );
  }
  return flights
    .sort(
      (a: Flights, b: Flights) =>
        Number(b.priceSinglePassengerTotal.amount) -
        Number(a.priceSinglePassengerTotal.amount)
    )
    .reverse();
};
export const filterFlights = (
  flights: Flights[],
  filterTransfer: string,
  sortPrice: string,
  filterAirline: string,
  minPrice: number,
  maxPrice: number
) => {
  let results = sortFlights(flights, sortPrice);
  if (minPrice !== 0 || maxPrice !== 200000) {
    console.log("nen");
    results = flights.filter(
      (item) =>
        item.priceSinglePassengerTotal.amount >= minPrice &&
        item.priceSinglePassengerTotal.amount <= maxPrice
    );
  }
  if (filterTransfer !== "none") {
    if (filterTransfer === "first") {
      const result = flights.filter(
        (item: Flights) => 1 * (item.transfer.forth + item.transfer.back) === 3
      );
      results = result;
    }
    if (filterTransfer === "second") {
      const result = flights.filter(
        (item: Flights) => 1 * (item.transfer.forth + item.transfer.back) === 4
      );
      results = result;
    }
  }
  if (filterAirline !== "none") {
    if (filterAirline === "firstAirline") {
      const result = flights.filter(
        (item: Flights) => item.airline === "LOT Polish Airlines"
      );
      results = result;
    }
    if (filterAirline === "secondAirline") {
      const result = flights.filter(
        (item: Flights) => item.airline === "Аэрофлот - российские авиалинии"
      );
      results = result;
    }
  }
  return results;
};
