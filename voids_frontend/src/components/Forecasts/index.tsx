import React, { ChangeEvent, useEffect } from "react";
import { useForecasts } from "../../hooks/getForcasts";
import "./index.css";

interface Props {
  city: string;
  startDate: string;
  endDate: string;
  onChangeCity: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Forecasts = ({ city, onChangeCity, startDate, endDate }: Props) => {
  const forecastsResult = useForecasts(city, startDate, endDate);
  const { isError, isLoading, data: forecasts } = forecastsResult;

  useEffect(() => {
    forecastsResult
      .refetch()
      .then(() => console.log(`getting new search data for ${city}`));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  if (isLoading) {
    return <div>Loading forecasts</div>;
  }

  if (isError) {
    return <div>something happened while loading your forecasts</div>;
  }

  return (
    <div className="forecasts_root">
      <div>
        <select name="" id="" onChange={onChangeCity}>
          <option value="Hamburg">Hamburg</option>
          <option value="Munich">Munich</option>
        </select>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Sales</th>
              <th>Temperature</th>
              <th>city</th>
            </tr>
          </thead>
          <tbody>
            {forecasts?.map((forecast) => (
              <tr key={forecast.id}>
                <td>{forecast.datetime}</td>
                <td>{forecast.forecasted_sales_quantity}</td>
                <td>{forecast.temp}</td>
                <td>{forecast.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Forecasts;
