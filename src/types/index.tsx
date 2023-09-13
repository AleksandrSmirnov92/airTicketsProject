export interface Data {}
export interface Flights {
  airline: string;
  priceSinglePassengerTotal: {
    amount: number;
    currency: string;
    currencyCode: string;
  };
  flightDuration: { forth: number; back: number; totalTime: number };
  forth: {
    departureInfo: {
      airline: string;
      departureAirport: { uid: string; caption: string };
      departureCity: { uid: string; caption: string };
      departureDate: string;
    };
    arrivalInfo: {
      arrivalAirPort: { uid: string; caption: string };
      arrivalCity: { uid: string; caption: string };
      arrivalDate: string;
    };
  };
  back: {
    departureInfo: {
      airline: string;
      departureAirport: { uid: string; caption: string };
      departureCity: { uid: string; caption: string };
      departureDate: string;
    };
    arrivalInfo: {
      arrivalAirPort: { uid: string; caption: string };
      arrivalCity: { uid: string; caption: string };
      arrivalDate: string;
    };
  };
  transfer: {
    forth: number;
    back: number;
  };
  // transfer: string;
}
