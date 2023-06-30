"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default async function Home() {
  const [value, setValue] = useState();

  const handleSubmit = async (place) => {
    let geoObj = {
      lat: place.geometry.location.lat(),
      lon: place.geometry.location.lng(),
    };
    let forecastUrl = `/api/weather?lat=${geoObj.lat}&lon=${geoObj.lon}`;

    // const res = await fetch(forecastUrl);
    // const data = await res.json();

    // console.log(data);
  };

  return (
    <main>
      <div className="m-5">
        <button className="btn ml-5">Submit</button>
      </div>
      <div>
        <p>test</p>
      </div>
    </main>
  );
}
