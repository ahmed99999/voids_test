import { useQuery } from "react-query";
import { fetchAlerts } from "../services";

const onSuccess = () => {
  console.log("fetching alerts");
};

const onError = () => {
  console.log("encountering errors while fetching alerts");
};

const useAlerts = (city: string = "", start_date: string, end_date: string) => {
  return useQuery("alerts", () => fetchAlerts(city, start_date, end_date), {
    staleTime: 50000,
    onSuccess: onSuccess,
    onError: onError,
    enabled: false,
  });
};

export { useAlerts };
