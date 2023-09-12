import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import SideBarFilter from "./components/SideBarFilter/SideBarFilter";
import dataFlights from "./store/flights.json";
import { Flights } from "./types/index";
import { sortFlights, filterFlights } from "./helpers/sortFlights";
function App() {
  const [flights, setFlights] = useState<Flights[]>([]);
  const [sortPrice, setSortPrice] = useState("");
  const [filterTransfer, setFilterTransfer] = useState("");
  sortFlights(flights, sortPrice);
  filterFlights(flights, filterTransfer);
  useEffect(() => {
    const data = dataFlights.result;
    const newDataFlights: Flights[] = data.flights.map((item: any) => {
      return {
        transfer: {
          where: item.flight.legs[1].segments.length,
          back: item.flight.legs[1].segments.length,
        },
        caption: item.flight.carrier.caption,
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
        duration: {
          where: item.flight.legs[0].duration,
          back: item.flight.legs[1].duration,
          totalTime:
            item.flight.legs[0].duration + item.flight.legs[1].duration,
        },
        where: {
          arrival: {
            arrivalAirPort: {
              uid: item.flight.legs[0].segments[0].arrivalAirport.uid,
              caption: item.flight.legs[0].segments[0].arrivalAirport.caption,
            },
            arrivalCity: {
              uid: item.flight.legs[0].segments[0].arrivalCity.uid,
              caption: item.flight.legs[0].segments[0].arrivalCity.caption,
            },
            arrivalDate: item.flight.legs[0].segments[0].arrivalDate,
          },
          departure: {
            departureAirport: {
              uid:
                item.flight.legs[0].segments.length > 1
                  ? item.flight.legs[0].segments[1].departureAirport.uid
                  : item.flight.legs[0].segments[0].departureAirport.uid,
              caption:
                item.flight.legs[0].segments.length > 1
                  ? item.flight.legs[0].segments[1].departureAirport.caption
                  : item.flight.legs[0].segments[0].departureAirport.caption,
            },
            departureCity: {
              uid:
                item.flight.legs[0].segments.length > 1
                  ? item.flight.legs[0].segments[1].departureCity.uid
                  : item.flight.legs[0].segments[0].departureCity.uid,
              caption:
                item.flight.legs[0].segments.length > 1
                  ? item.flight.legs[0].segments[1].departureCity.caption
                  : item.flight.legs[0].segments[0].departureCity.caption,
            },
            departureDate:
              item.flight.legs[0].segments.length > 1
                ? item.flight.legs[0].segments[1].departureDate
                : item.flight.legs[0].segments[0].departureDate,
          },
        },
        // back
        back: {
          arrival: {
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
          departure: {
            departureAirport: {
              uid:
                item.flight.legs[0].segments.length > 1
                  ? item.flight.legs[0].segments[1].departureAirport.uid
                  : item.flight.legs[0].segments[0].departureAirport.uid,
              caption:
                item.flight.legs[0].segments.length > 1
                  ? item.flight.legs[0].segments[1].departureAirport.caption
                  : item.flight.legs[0].segments[0].departureAirport.caption,
            },
            departureCity: {
              uid:
                item.flight.legs[0].segments.length > 1
                  ? item.flight.legs[0].segments[1].departureCity.uid
                  : item.flight.legs[0].segments[0].departureCity.uid,
              caption:
                item.flight.legs[0].segments.length > 1
                  ? item.flight.legs[0].segments[1].departureCity.caption
                  : item.flight.legs[0].segments[0].departureCity.caption,
            },
            departueDate:
              item.flight.legs[0].segments.length > 1
                ? item.flight.legs[0].segments[1].departureDate
                : item.flight.legs[0].segments[0].departureDate,
          },
        },
      };
    });
    setFlights(newDataFlights);
    console.log(data);
  }, []);
  console.log(flights);
  return (
    <div className="main-wrapper">
      <SideBarFilter
        sortPrice={setSortPrice}
        setFilterTransfer={setFilterTransfer}
      />
      <Main flights={flights} />
    </div>
  );
}

export default App;
