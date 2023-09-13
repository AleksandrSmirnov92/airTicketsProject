import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import SideBarFilter from "./components/SideBarFilter/SideBarFilter";
import dataFlights from "./store/flights.json";
import { Flights } from "./types/index";
import { filterFlights } from "./helpers/sortFlights";
function App() {
  const [flights, setFlights] = useState<Flights[]>([]);
  const [sortPrice, setSortPrice] = useState("");
  const [filterTransfer, setFilterTransfer] = useState("");
  const [filterAirline, setFilterAirline] = useState("");
  const [filterPrice, setFilterPrice] = useState(0);

  useEffect(() => {
    const data = dataFlights;
    const newDataFlights: Flights[] = data.result.flights.map((item: any) => {
      return {
        airline: item.flight.carrier.caption,
        transfer: {
          forth: item.flight.legs[0].segments.length,
          back: item.flight.legs[1].segments.length,
        },
        priceSinglePassengerTotal: {
          amount: Math.round(
            Number(
              item.flight.price.passengerPrices[0].singlePassengerTotal.amount
            )
          ),
          currency:
            item.flight.price.passengerPrices[0].singlePassengerTotal.currency,
          currencyCode:
            item.flight.price.passengerPrices[0].singlePassengerTotal
              .currencyCode,
        },
        flightDuration: {
          forth: item.flight.legs[0].duration,
          back: item.flight.legs[1].duration,
          totalTime:
            item.flight.legs[0].duration + item.flight.legs[1].duration,
        },
        forth: {
          departureInfo: {
            airline:
              item.flight.legs[0].segments.length > 1
                ? item.flight.legs[0].segments[1].airline.caption
                : item.flight.legs[0].segments[0].airline.caption,
            departureAirport: {
              uid: item.flight.legs[0].segments[0].departureAirport.uid,
              caption: item.flight.legs[0].segments[0].departureAirport.caption,
            },
            departureCity: {
              uid: item.flight.legs[0].segments[0].departureCity.uid,
              caption: item.flight.legs[0].segments[0].departureCity.caption,
            },
            departureDate: item.flight.legs[0].segments[0].departureDate,
          },
          arrivalInfo: {
            arrivalAirPort: {
              uid:
                item.flight.legs[0].segments.length > 1
                  ? item.flight.legs[0].segments[1].arrivalAirport.uid
                  : item.flight.legs[0].segments[0].arrivalAirport.uid,
              caption:
                item.flight.legs[0].segments.length > 1
                  ? item.flight.legs[0].segments[1].arrivalAirport.caption
                  : item.flight.legs[0].segments[0].arrivalAirport.caption,
            },
            arrivalCity: {
              uid:
                item.flight.legs[0].segments.length > 1
                  ? item.flight.legs[0].segments[1].arrivalCity?.uid
                  : item.flight.legs[0].segments[0].arrivalCity?.uid,
              caption:
                item.flight.legs[0].segments.length > 1
                  ? item.flight.legs[0].segments[1].arrivalCity?.caption
                  : item.flight.legs[0].segments[0].arrivalCity?.caption,
            },
            arrivalDate:
              item.flight.legs[0].segments.length > 1
                ? item.flight.legs[0].segments[1].arrivalDate
                : item.flight.legs[0].segments[0].arrivalDate,
          },
        },
        // back
        back: {
          departureInfo: {
            airline:
              item.flight.legs[1].segments.length > 1
                ? item.flight.legs[1].segments[1].airline.caption
                : item.flight.legs[1].segments[0].airline.caption,

            departureAirport: {
              uid: item.flight.legs[1].segments[0].departureAirport.uid,
              caption: item.flight.legs[1].segments[0].departureAirport.caption,
            },
            departureCity: {
              uid: item.flight.legs[1].segments[0].departureCity?.uid,
              caption: item.flight.legs[1].segments[0].departureCity?.caption,
            },
            //
            departureDate: item.flight.legs[1].segments[0].departureDate,
          },

          arrivalInfo: {
            arrivalAirPort: {
              uid:
                item.flight.legs[1].segments.length > 1
                  ? item.flight.legs[1].segments[1].arrivalAirport.uid
                  : item.flight.legs[1].segments[0].arrivalAirport.uid,
              caption:
                item.flight.legs[1].segments.length > 1
                  ? item.flight.legs[1].segments[1].arrivalAirport.caption
                  : item.flight.legs[1].segments[0].arrivalAirport.caption,
            },
            arrivalCity: {
              uid:
                item.flight.legs[1].segments.length > 1
                  ? item.flight.legs[1].segments[1].arrivalCity.uid
                  : item.flight.legs[1].segments[0].arrivalCity.uid,
              caption:
                item.flight.legs[1].segments.length > 1
                  ? item.flight.legs[1].segments[1].arrivalCity.caption
                  : item.flight.legs[1].segments[0].arrivalCity.caption,
            },
            arrivalDate:
              item.flight.legs[1].segments.length > 1
                ? item.flight.legs[1].segments[1].arrivalDate
                : item.flight.legs[1].segments[0].arrivalDate,
          },
        },
      };
    });
    setFlights(
      filterFlights(newDataFlights, filterTransfer, sortPrice, filterAirline)
    );
    console.log(data);
    console.log(filterPrice);
  }, [filterTransfer, sortPrice, filterAirline, filterPrice]);

  console.log(flights);
  return (
    <div className="main-wrapper">
      <SideBarFilter
        sortPrice={setSortPrice}
        setFilterTransfer={setFilterTransfer}
        setFilterAirline={setFilterAirline}
        setFilterPrice={setFilterPrice}
      />
      <Main flights={flights} />
    </div>
  );
}

export default App;
