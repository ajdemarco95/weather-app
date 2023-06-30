import React from "react";
import WeatherImage from "./WeatherImage";

function WeatherCard(props) {
  const item = props.item;
  return (
    <div className="text-center  mx-20 flex items-center justify-center flex-col ">
      <div className="backdrop-blur-sm bg-white/30 border-2 p-5">
        <h2>{item.name}</h2>
        <p className="font-black text-white text-5xl">{item.temperature} F°</p>
        <div className="flex items-center justify-around backdrop-blur-sm bg-white/30 border-2 p-2 rounded-full font-extralight">
          <div className="flex">
            <div>
              <p>Humidity</p>
              <p>{item.relativeHumidity.value}%</p>
            </div>
          </div>
          <div>
            <p>Wind</p>
            <p>
              {item.windSpeed} {item.windDirection}
            </p>
          </div>
          <div>
            <p>Chance of Rain</p>
            <p>
              {" "}
              {item.probabilityOfPrecipitation.value
                ? item.probabilityOfPrecipitation.value
                : "0"}
              %
            </p>
          </div>
        </div>
        <WeatherImage
          shortForecast={item.shortForecast}
          isDaytime={item.isDaytime}
        />
        <p className="my-5">{item.shortForecast}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
