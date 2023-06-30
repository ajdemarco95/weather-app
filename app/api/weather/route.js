import { NextResponse } from "next/server";

export async function GET(request) {
  // Get address text from URL searchParams
  const { searchParams } = new URL(request.url);
  const searchQuery = searchParams.get("text");
  const geoapifyAPIURL = `https://api.geoapify.com/v1/geocode/search?text=${searchQuery}&apiKey=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`;

  //Fetch Geocoordinates from Geoapify.com Geocoding API
  const geoRes = await fetch(geoapifyAPIURL);
  const geoData = await geoRes.json();
  console.log(geoData.features[0].properties.lat);

  //Set Lat & Lon based on geo response
  const lat = geoData.features[0].properties.lat;
  const lon = geoData.features[0].properties.lon;

  //Get forecast URL from provided coordinates

  const NWSFetchString = `https://api.weather.gov/points/${lat},${lon}`;

  const res = await fetch(NWSFetchString);
  console.log(NWSFetchString);

  if (!res.ok) {
    throw new Error(res.status);
  }

  const data = await res.json();
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
