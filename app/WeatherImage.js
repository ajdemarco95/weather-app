import Image from "next/image";
import sun from "../media/forecast-icns/sun.png";

function WeatherImage(props) {
  const shortForecast = props.shortForecast;
  return (
    <div>
      <Image src={sun} alt="Sunshine"></Image>
    </div>
  );
}

export default WeatherImage;
