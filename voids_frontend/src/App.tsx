import React, { ChangeEvent, useState } from "react";
import "./App.css";

import Forecasts from "./components/Forecasts";
import Alerts from "./components/Alerts";

function App() {
  const [city, setCity] = useState<string>("Hamburg");
  const [startDate, setStartDate] = useState<string>("2023-02-06");
  const [endDate, setEndDate] = useState<string>("2023-02-21");

  const handleChangeCity = (event: ChangeEvent<HTMLSelectElement>) => {
    const newCity = event.target.value;
    if (newCity === city) return;

    setCity(() => newCity);
  };

  return (
    <div className="App">
      <Forecasts
        city={city}
        startDate={startDate}
        endDate={endDate}
        onChangeCity={handleChangeCity}
      />
      <Alerts city={city} startDate={startDate} endDate={endDate} />
    </div>
  );
}

export default App;
