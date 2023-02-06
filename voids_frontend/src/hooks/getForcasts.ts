import { useQuery } from "react-query";
import { fetchForecasts } from "../services";

const onSuccess = () => {
  console.log("fetching forecasts");
};

const onError = () => {
  console.log("encountering errors while fetching forecasts");
};

const useForecasts = (
  city: string = "",
  start_date: string,
  end_date: string
) => {
  return useQuery(
    "forecasts",
    () => fetchForecasts(city, start_date, end_date),
    {
      staleTime: 50000,
      onSuccess: onSuccess,
      onError: onError,
    }
  );
};

export { useForecasts };
