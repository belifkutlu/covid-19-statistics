import React from "react";

import "./StatisticsTable.css";

function StatisticsTable({ item }) {
  return (
    <tr>
      <td>{item.deaths}</td>
      <td>{item.confirmed}</td>
      <td>{item.date}</td>
    </tr>
  );
}

export default StatisticsTable;
