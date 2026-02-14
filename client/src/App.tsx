import { BrowserRouter, Route, Routes } from "react-router-dom";
import RealEstate from "./pages/RealEstate";
import AdminDashboard from "./pages/AdminDashboard";
// import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RealEstate />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
