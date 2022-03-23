import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Timeline from "./pages/Timeline/TimelinePanel";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
