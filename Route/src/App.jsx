import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
// import { Dashboard } from './components/Dashboard';
// import { Landing } from './components/Landing';
const Dashboard = React.lazy(() => {
  import("./components/Dashboard");
});
const Landing = React.lazy(() => {
  import("./components/Landing");
});
function App() {
  return (
    <>
      <div>
        {/* client site routing */}
        <BrowserRouter>
          <Approute />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

function Approute() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="topbar">
        Top Bar
        <button
          onClick={() => {
            // 1st method global locatoin object in react
            navigate("/landing");
          }}
        >
          landing
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          dashboard
        </button>
      </div>
    </div>
  );
}

export default App;
