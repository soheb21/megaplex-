import { BrowserRouter, Route, Routes } from "react-router-dom";
import RealEstate from "./pages/RealEstate";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/auth";
import ProtectedRoute from "./utils/ProtectedByAdmin";
import "animate.css";
// import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RealEstate />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
