import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Provinces.css";

export default function Provinces() {
  let { countryISO } = useParams();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "67dffe1c6fmsh3b4a505ec81fbc5p1e279cjsne2745e615c0f",
        "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
      },
    };

    fetch(
      `https://covid-19-statistics.p.rapidapi.com/provinces?iso=${countryISO}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setCities(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Provinces</h2>
      {cities.map((city) => (
        <div>
          <Link to={`/reports/${city.province || city.name}`}>
            {city.province || city.name}
          </Link>
        </div>
      ))}
    </main>
  );
}
