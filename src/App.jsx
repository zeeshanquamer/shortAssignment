import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SidebarPage from "./pages/SidebarPage";
import BankDetails from "./pages/BankDetails";
import Dashboard from "./pages/Dashboard";
import TOTM from "./pages/TOTM";
import DailySummary from "./pages/DailySummary";

const App = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar expanded={expanded} setExpanded={setExpanded} />
      <Routes>
        <Route
          path="/"
          element={
            <SidebarPage expanded={expanded} setExpanded={setExpanded} />
          }
        >
          <Route
            path="/bank-details"
            element={
              <BankDetails expanded={expanded} setExpanded={setExpanded} />
            }
          />
          <Route
            path="/my-dashboard"
            element={
              <Dashboard expanded={expanded} setExpanded={setExpanded} />
            }
          />
          <Route
            path="/totm"
            element={<TOTM expanded={expanded} setExpanded={setExpanded} />}
          />
          <Route
            path="/daily-summary"
            element={
              <DailySummary expanded={expanded} setExpanded={setExpanded} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
