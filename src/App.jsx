import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SidebarPage from "./pages/SidebarPage";
import BankDetails from "./pages/BankDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SidebarPage />}>
        <Route path="/bank-details" element={<BankDetails/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
