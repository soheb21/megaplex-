import { useState } from "react";
import axios from "axios";
import SectionCard from "../components/SectionCard";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "https://megaplex-3ujz.onrender.com/api/content/login",
        formData
      );
      localStorage.setItem("admin", res.data.email);
      navigate("/admin");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        <SectionCard id="admin-login" title="Admin Login">
          {/* Email */}

          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Password */}

          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          {/* Error */}

          {error && (
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded text-sm">
              {error}
            </div>
          )}

          {/* Button */}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-lime-500 hover:bg-lime-600 text-white py-3 rounded-lg font-semibold shadow disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </SectionCard>
      </div>
    </div>
  );
}
