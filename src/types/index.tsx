export interface Data {}
export interface Flights {
  priceSinglePassengerTotal: {
    amount: string;
    currency: string;
    currencyCode: string;
  };
  duration: { where: number; back: number; totalTime: number };
  where: {
    arrival: {
      caption: string;
      arrivalAirPort: { uid: string; caption: string };
      arrivalCity: { uid: string; caption: string };
      arrivalDate: string;
    };
    departure: {
      caption: string;
      departureAirport: { uid: string; caption: string };
      departureCity: { uid: string; caption: string };
      departureDate: string;
    };
  };
  back: {
    arrival: {
      caption: string;
      arrivalAirPort: { uid: string; caption: string };
      arrivalCity: { uid: string; caption: string };
      arrivalDate: string;
    };
    departure: {
      caption: string;
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
