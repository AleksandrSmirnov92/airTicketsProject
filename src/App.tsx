import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import SideBarFilter from "./components/SideBarFilter/SideBarFilter";
import dataFlights from "./store/flights.json";
import { Flights } from "./types/index";
import { filterFlights } from "./helpers/sortFlights";
import { getData } from "./helpers/getData";

function App() {
  const [flights, setFlights] = useState<Flights[]>([]);
  const [sortPrice, setSortPrice] = useState("");
  const [oneTransferFilter, setOneTransferFilter] = useState(false);
  const [twoTransferFilter, setTwoTransferFilter] = useState(false);
  const [firstAirline, setFirstAirlines] = useState(false);
  const [secondAirline, setSecondAirlines] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200000);

  useEffect(() => {
    const data = getData(dataFlights);
    setFlights(
      filterFlights(
        data,
        oneTransferFilter,
        twoTransferFilter,
        sortPrice,
        minPrice,
        maxPrice,
        firstAirline,
        secondAirline
      )
    );
  }, [
    sortPrice,
    minPrice,
    maxPrice,
    firstAirline,
    secondAirline,
    oneTransferFilter,
    twoTransferFilter,
  ]);

  return (
    <div className="main-wrapper">
      <SideBarFilter
        sortPrice={setSortPrice}
        setOneTransferFilter={setOneTransferFilter}
        setTwoTransferFilter={setTwoTransferFilter}
        setFirstAirlines={setFirstAirlines}
        setSecondAirlines={setSecondAirlines}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />

      <Main flights={flights} />
    </div>
  );
}

export default App;
