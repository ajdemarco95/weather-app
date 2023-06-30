"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [search, setSearch] = useState();
  const [forecast, setForecast] = useState();

  useEffect(() => {
    if (search) {
      console.log(search);
    }
  }, [search]);

  const handleSubmit = async () => {
    let apiCallURL = `/api/weather?text=${search}`;

    const res = await fetch(apiCallURL);
    const data = await res.json();

    setForecast(data.forecast);

    console.log(data);
  };

  return (
    <main>
      <div className="m-5">
        <p>Enter a zip code or address:</p>
        <input
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
      <div>
        {forecast &&
          forecast.map((item, index) => {
            return (
              <div key={index} className="">
                {item.name}
              </div>
            );
            console.log(item, index);
          })}
      </div>
    </main>
  );
}
