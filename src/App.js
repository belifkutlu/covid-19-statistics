import { Routes, Route, useParams } from "react-router-dom";

import Countries from "./pages/Countries";
import Provinces from "./pages/Provinces";
import Reports from "./pages/Reports";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/cities/:countryISO" element={<Provinces />} />
      <Route path="/reports/:provicesName" element={<Reports />} />
    </Routes>
  );
}

export default App;
