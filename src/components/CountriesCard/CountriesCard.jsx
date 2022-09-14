import React from "react";
import { Link } from "react-router-dom";

import "./CountriesCard.css";

function CountriesCard({ country }) {
  return (
    <div className="countries-card">
      <Link to={`/cities/${country.iso}`}>{country.name}</Link>
    </div>
  );
}

export default CountriesCard;
