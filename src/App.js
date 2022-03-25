import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Timeline from "./pages/Timeline/TimelinePanel";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/user/:id" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
