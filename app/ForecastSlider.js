import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import WeatherCard from "./WeatherCard";

function ForecastSlider(props) {
  const forecast = props.forecast;
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    []
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      {forecast &&
        forecast.map((item, index) => {
          return (
            <div key={index} className="keen-slider__slide">
              <WeatherCard item={item} />
            </div>
          );
        })}
    </div>
  );
}

export default ForecastSlider;
