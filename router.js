import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import PermanentDrawerLeft from "../screens/dashboard";

export default function Approuter() {
  return (
    <Router>
     <Routes>
        <Route path='*' element={<PermanentDrawerLeft  />} />
     </Routes>
    </Router>
  );
}
