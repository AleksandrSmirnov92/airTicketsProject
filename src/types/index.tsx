export interface Flights {
  caption: string;
  priceSinglePassengerTotal: {
    amount: string;
    currency: string;
    currencyCode: string;
  };
  duration: { where: number; back: number; totalTime: number };
  where: {
    arrival: {
      arrivalAirPort: { uid: string; caption: string };
      arrivalCity: { uid: string; caption: string };
      arrivalDate: string;
    };
    departure: {
      departureAirport: { uid: string; caption: string };
      departureCity: { uid: string; caption: string };
      departureDate: string;
    };
  };
  back: {
    arrival: {
      arrivalAirPort: { uid: string; caption: string };
      arrivalCity: { uid: string; caption: string };
      arrivalDate: string;
    };
    departure: {
      departureAirport: { uid: string; caption: string };
      departureCity: { uid: string; caption: string };
      departureDate: string;
    };
  };
  transfer: {
    where: number;
    back: number;
  };
  // transfer: string;
}
