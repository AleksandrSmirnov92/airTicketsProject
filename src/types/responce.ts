export interface ResponceData {
  result: {
    flights: {
      flight: {
        carrier: { uid: string; caption: string; airlineCode: string };
        exchange: {
          ADULT: {
            exchangeAfterDeparture: {
              amount: string;
              currency: string;
              currencyCode: string;
            };
            exchangeBeforeDeparture: {
              amount: string;
              currency: string;
              currencyCode: string;
            };
            exchangeableAfterDeparture: boolean;
            exchangeableBeforeDeparture: boolean;
          };
        };
        international: boolean;
        isTripartiteContractDiscountApplied: boolean;
        legs: {
          duration: number;
          segments: {
            aircraft: { uid: string; caption: string };
            airline: { uid: string; caption: string; airlineCode: string };
            arrivalAirport: { uid: string; caption: string };
            arrivalCity: { uid: string; caption: string };
            arrivalDate: string;
            classOfService: { uid: string; caption: string };
            classOfServiceCode: string;
            departureAirport: { uid: string; caption: string };
            departureCity: { uid: string; caption: string };
            departureDate: string;
            flightNumber: string;
            servicesDetails: {
              fareBasis: { ADULT: string };
              freeCabinLuggage: object;
              freeLuggage: {
                ADULT: {
                  pieces: number;
                  nil: boolean;
                  unit: string;
                };
              };
              paidCabinLuggage: object;
              paidLuggage: object;
              tariffName: string;
            };
            starting: boolean;
            stops: number;
          }[];
        }[];
      };
      flightToken: string;
      hasExtendedFare: boolean;
      techStopInfos: [];
      travelDuration: number;
    }[];
  };
}
