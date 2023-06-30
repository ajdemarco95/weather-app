"use client";
import { useState } from "react";
import ViewForecast from "./ViewForecast";
import FloaterInput from "./FloaterInput";

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
          <a className="btn btn-ghost normal-case text-xl">Weatherfolio</a>
        </div>
      </div>
      <div className="absolute m-auto left-0 right-0 bottom-5">
        <FloaterInput
          search={search}
          setSearch={setSearch}
          loading={loading}
          setIsLoading={setIsLoading}
          handleSubmit={handleSubmit}
        />
      </div>
      {!forecast && (
        <p className="text-center">Add a zip code to view the forecast...</p>
      )}
      {forecast && <ViewForecast forecast={forecast} location={location} />}
    </>
  );
}
