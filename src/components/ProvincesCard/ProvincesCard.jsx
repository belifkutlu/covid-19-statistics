import React from "react";
import { Link } from "react-router-dom";

import "./ProvincesCard.css";

function ProvincesCard({ city }) {
  return (
    <div className="provinces-card">
      <Link to={`/reports/${city.province || city.name}`}>
        {city.province || city.name}
      </Link>
    </div>
  );
}

export default ProvincesCard;
