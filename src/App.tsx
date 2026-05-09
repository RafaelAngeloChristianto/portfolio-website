import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { Certifications } from "./screens/Certifications";
import { SherlockScreen } from "./screens/SherlockScreen";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white scale-wrapper">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/sherlocks" element={<SherlockScreen />} />
      </Routes>
    </div>
  );
};