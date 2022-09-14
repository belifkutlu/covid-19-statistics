import { useEffect, useState } from "react";

import CountriesCard from "../../components/CountriesCard";

import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "67dffe1c6fmsh3b4a505ec81fbc5p1e279cjsne2745e615c0f",
        "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
      },
    };

    fetch("https://covid-19-statistics.p.rapidapi.com/regions", options)
      .then((response) => response.json())
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Countries</h2>
      <div className="content">
        {countries.map((country) => (
          <CountriesCard country={country} />
        ))}
      </div>
    </main>
  );
}
