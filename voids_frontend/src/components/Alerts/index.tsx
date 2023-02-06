import React from "react";
import { useAlerts } from "../../hooks/getAlerts";
import "./index.css";

interface Props {
  city: string;
  startDate: string;
  endDate: string;
}

const Alerts = ({ city, startDate, endDate }: Props) => {
  const {
    isError,
    isLoading,
    data: alerts,
    refetch,
  } = useAlerts(city, startDate, endDate);

  if (isLoading) {
    return <div>Loading alerted days</div>;
  }

  if (isError) {
    return <div>Error happened when loading alerted days</div>;
  }

  const handleGetAlerts = () => {
    refetch().then(() => {
      console.log("getting results");
    });
  };

  return (
    <div className="alerts_root">
      <button onClick={handleGetAlerts}>
        Get Alerts for the Next 2 weeks for {city}
      </button>
      {alerts && (
        <div className="alerts">
          {alerts.map((alert) => (
            <div key={alert.datetime}>
              <div>{alert.datetime}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Alerts;
