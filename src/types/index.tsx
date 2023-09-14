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
}
export interface SideBarProps {
  sortPrice: React.Dispatch<React.SetStateAction<string>>;
  setOneTransferFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setTwoTransferFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  setFirstAirlines: React.Dispatch<React.SetStateAction<boolean>>;
  setSecondAirlines: React.Dispatch<React.SetStateAction<boolean>>;
  toggleBtn: boolean;
  setToggleBtn: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface SectionP {
  flights: Flights[];
}
export interface SectionProps {
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
