import { NextResponse } from "next/server";

export async function GET(Request) {
  // Get lat / lon data from input address
  console.log(Request.nextUrl.searchParams);

  //Get forecast URL from provided link

  const lat = "39.7456";
  const lon = "-97.0892";
  const NWSFetchString = `https://api.weather.gov/points/${lat},${lon}`;

  const res = await fetch(NWSFetchString);

  if (!res.ok) {
    throw new Error("HELP!");
  }

  const data = await res.json();

  // console.log(data.properties.relativeLocation);

  const forecastUrl = data.properties.forecast;

  //Get forecast data from Gov Provided Link

  const forecastRes = await fetch(forecastUrl);

  if (!forecastRes.ok) {
    throw new Error("Help!");
  }

  const forecastData = await forecastRes.json();

  let resObj = {
    forecast: forecastData.properties.periods,
    location: data.properties.relativeLocation.properties,
  };

  return NextResponse.json(resObj);
}
