import Image from "next/image";
import sunny from "../media/forecast-icns/sun.png";
import sunrain from "../media/forecast-icns/sun_rain.png";
import sunfog from "../media/forecast-icns/sun_fog.png";
import sunclouds from "../media/forecast-icns/sun_clouds.png";
import sunlighting from "../media/forecast-icns/sun_lighting.png";

import moon from "../media/forecast-icns/moon.png";
import moonrain from "../media/forecast-icns/moon_rain.png";
import moonlighting from "../media/forecast-icns/moon_lighting.png";
import moonfog from "../media/forecast-icns/moon_fog.png";
import moonclouds from "../media/forecast-icns/moon_clouds.png";

function WeatherImage(props) {
  const { shortForecast, isDaytime } = props;

  const forecastWordArr = shortForecast.split(" ");

  if (isDaytime) {
    if (forecastWordArr.includes("Thunderstorms")) {
      return (
        <div>
          <Image src={sunlighting} alt="Thunderstorms"></Image>
        </div>
      );
    } else if (forecastWordArr.includes("Showers")) {
      return (
        <div>
          <Image src={sunrain} alt="Showers"></Image>
        </div>
      );
    } else if (forecastWordArr.includes("Haze")) {
      return (
        <div>
          <Image src={sunfog} alt="Haze"></Image>
        </div>
      );
    } else if (forecastWordArr.includes("Rain")) {
      return (
        <div>
          <Image src={sunrain} alt="Rain"></Image>
        </div>
      );
    } else {
      return (
        <div>
          <Image src={sunny} alt="Sun"></Image>
        </div>
      );
    }
  } else {
    if (forecastWordArr.includes("Thunderstorms")) {
      return (
        <div>
          <Image src={moonlighting} alt="Thunderstorms"></Image>
        </div>
      );
    } else if (forecastWordArr.includes("Showers")) {
      return (
        <div>
          <Image src={moonrain} alt="Showers"></Image>
        </div>
      );
    } else if (forecastWordArr.includes("Haze")) {
      return (
        <div>
          <Image src={moonfog} alt="Haze"></Image>
        </div>
      );
    } else if (forecastWordArr.includes("Rain")) {
      return (
        <div>
          <Image src={moonrain} alt="Rain"></Image>
        </div>
      );
    } else {
      return (
        <div>
          <Image src={moon} alt="Moon"></Image>
        </div>
      );
    }
  }
}

export default WeatherImage;
