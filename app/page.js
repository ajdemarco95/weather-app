"use client";
import { useState, useEffect } from "react";
import ViewForecast from "./ViewForecast";

export default function Home() {
  const [search, setSearch] = useState();
  const [forecast, setForecast] = useState();
  const [location, setLocation] = useState();

  const handleSubmit = async () => {
    let apiCallURL = `/api/weather?text=${search}`;
    const res = await fetch(apiCallURL);
    const data = await res.json();
    setForecast(data.forecast);
    setLocation(data.location);
    console.log(data);
  };

  return (
    <main>
      <div className="m-5 flex items-center justify-center w-100">
        <input
          placeholder="Enter Zip Code..."
          type="text"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleSubmit();
          }}
          className="btn ml-5"
        >
          Submit
        </button>
      </div>
      {!forecast && (
        <p className="text-center">Add a zip code to view forecast...</p>
      )}
      {forecast && <ViewForecast forecast={forecast} location={location} />}
    </main>
  );
}
