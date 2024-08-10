import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return (
    <div>
      {/* Client-side routing */}
      <BrowserRouter>
        <Approute />
        {/* Suspense allows us to asynchronously fetch the data */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function Approute() {
  const navigate = useNavigate();
  /*
    note: The useNavigate hook from react-router-dom allows you to programmatically navigate to different routes in a React application
    it expects whenever u are using me, make sure to make that component inside that <browserRouter
  */
  return (
    <div>
      <div className="topbar">
        Top Bar
        <button
          onClick={() => {
            // Navigate to the landing page
            navigate("/landing");
          }}
        >
          Landing
        </button>
        <button
          onClick={() => {
            // Navigate to the dashboard page
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default App;
