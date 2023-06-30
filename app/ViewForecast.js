import React from "react";
import ForecastSlider from "./ForecastSlider";

function ViewForecast(props) {
  const { forecast, location } = props;
  return (
    <>
      {/* <div className="text-center mb-2">
        <p className="text-5xl text-white font-bold">
          {location.city}, {location.state}
        </p>
      </div> */}
      <ForecastSlider forecast={forecast} />
    </>
  );
}

export default ViewForecast;
