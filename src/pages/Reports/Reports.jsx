import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StatisticsTable from "../../components/StatisticsTable";

import "./Reports.css";

function Reports() {
  let { provicesName } = useParams();
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "67dffe1c6fmsh3b4a505ec81fbc5p1e279cjsne2745e615c0f",
        "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
      },
    };

    fetch(
      `https://covid-19-statistics.p.rapidapi.com/reports?q=${provicesName}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setReports(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <table>
        <thead className="tbl-header ">
          <tr className="tbl-content  ">
            <th>Death</th>
            <th>confirmed</th>
            <th>date</th>
          </tr>
        </thead>

        <tbody className="made-with-love">
          {reports.map((item) => (
            <StatisticsTable item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;
