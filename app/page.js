"use client";
import { useState, useEffect } from "react";
import ViewForecast from "./ViewForecast";

export default function Home() {
  const [search, setSearch] = useState();
  const [forecast, setForecast] = useState();
  const [location, setLocation] = useState();
  const [loading, setIsLoading] = useState();

  const handleSubmit = async () => {
    let apiCallURL = `/api/weather?text=${search}`;
    const res = await fetch(apiCallURL);
    const data = await res.json();
    setForecast(data.forecast);
    setLocation(data.location);
    setIsLoading(false);
    console.log(data);
  };

  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Weather App</a>
        </div>
      </div>
      <div className="m-5 flex items-center justify-center w-100">
        <input
          placeholder="Enter Zip Code..."
          type="text"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {loading && (
          <button disabled className="btn ml-5">
            <span className="loading loading-dots"></span>
          </button>
        )}
        {!loading && (
          <button
            onClick={() => {
              setIsLoading(true);
              handleSubmit();
            }}
            className="btn ml-5"
          >
            Submit
          </button>
        )}
      </div>
      {!forecast && (
        <p className="text-center">Add a zip code to view the forecast...</p>
      )}
      {forecast && <ViewForecast forecast={forecast} location={location} />}
    </>
  );
}
