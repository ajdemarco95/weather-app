import React from "react";
import WeatherImage from "./WeatherImage";

function WeatherCard(props) {
  const item = props.item;
  return (
    <div className="text-center mx-20 flex items-center justify-center flex-col">
      <h2>{item.name}</h2>
      <WeatherImage shortForecast={item.shortForecast} />
      <p className="my-5">{item.shortForecast}</p>
      <p>{item.temperature} F°</p>
      <p>{item.humidity}</p>
    </div>
  );
}

export default WeatherCard;
