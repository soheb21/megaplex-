import { useEffect, useState } from "react";
import axios from "axios";
import SectionCard from "../components/SectionCard";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [formData, setFormData] = useState({
    headingTop: "THINKING",
    headingHighlight: "OF A FANTASTIC VICINITY?",
    subheading: "20+ PODIUM LUXURIOUS AMENITIES • SPACIOUS BALCONY HOMES",

    projectNameTop: "VIGHNAHARTA",
    projectNameBottom: "INFINITY",

    /* PRICING */
    price1Title: "SMART 1 BHK",
    price1Old: "74.99 Lacs",
    price1Price: "₹ 69.99 Lacs*",

    price2Title: "PREMIUM 2 BHK",
    price2Old: "1.05 CR",
    price2Price: "₹ 96.99 Lacs*",

    address: "BLDG. NO. 223/224, CIRCLE - KANNAMWAR NAGAR I, VIKHROLI (EAST)",

    aboutTitle: "About Project",
    aboutText:
      "At Vighnaharta Infinity, every detail is thoughtfully crafted to offer a life of elegance and comfort.",

    developerTitle: "About Developer",
    developerText:
      "We are committed to building quality homes with modern amenities.",

    /* DEVELOPER STATS */
    stat1Value: "6",
    stat1Label: "Projects",

    stat2Value: "1.32 LAC",
    stat2Label: "Sq. Ft. Area Developed",

    stat3Value: "429+",
    stat3Label: "Happy Families",

    stat4Value: "3.77 LAC",
    stat4Label: "Sq. Ft. Ongoing",

    stat5Value: "2.7 LAC",
    stat5Label: "Sq. Ft. Upcoming",
  });
  const fetchContent = async () => {
    try {
      setLoading(true);

      const res = await axios.get("http://localhost:8000/api/content");

      setFormData(res.data);
    } catch (err) {
      setError("Failed to load content");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await axios.post("http://localhost:8000/api/content", formData);

      setSuccess("Content updated successfully");
    } catch (err) {
      setError("Failed to update content");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchContent();
  }, []);
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="h-screen bg-gray-100 flex relative">
      {/* Sidebar */}

      <aside className="hidden md:flex md:flex-col w-64 bg-white shadow-lg border-r sticky top-0 h-screen">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <p className="text-xs text-gray-500">CMS Dashboard</p>
        </div>

        <nav className="flex-1 p-6 space-y-4 text-sm text-gray-600 overflow-y-auto">
          <SidebarItem label="Hero Section" target="hero" />
          <SidebarItem label="Project Info" target="project" />
          <SidebarItem label="Pricing" target="pricing" />
          <SidebarItem label="About Project" target="about" />
          <SidebarItem label="Developer" target="developer" />
        </nav>
      </aside>

      {/* Mobile Topbar */}

      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow z-40 flex items-center justify-between px-4 py-3">
        <h2 className="font-bold">Admin Panel</h2>

        <button onClick={() => setSidebarOpen(true)} className="space-y-1">
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Sidebar */}

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />

          <aside className="w-64 bg-white shadow-xl p-6 space-y-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Menu</h2>
              <button onClick={() => setSidebarOpen(false)}>✕</button>
            </div>

            <SidebarItem label="Hero Section" target="hero" />
            <SidebarItem label="Project Info" target="project" />
            <SidebarItem label="Pricing" target="pricing" />
            <SidebarItem label="About Project" target="about" />
            <SidebarItem label="Developer" target="developer" />
          </aside>
        </div>
      )}

      {/* Content */}

      <main className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10 pt-20 md:pt-10">
        <h1 className="text-2xl md:text-3xl font-bold">
          Website Content Manager
        </h1>

        {/* Status messages */}
        {loading && (
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
            Loading...
          </div>
        )}

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded">
            {success}
          </div>
        )}

        {/* Hero UI */}

        <SectionCard id="hero" title="Hero Section">
          <Input
            label="Heading Top"
            name="headingTop"
            value={formData.headingTop}
            onChange={handleChange}
          />

          <Input
            label="Heading Highlight"
            name="headingHighlight"
            value={formData.headingHighlight}
            onChange={handleChange}
          />

          <Textarea
            label="Subheading"
            name="subheading"
            value={formData.subheading}
            onChange={handleChange}
          />
        </SectionCard>

        {/* Project UI */}

        <SectionCard id="project" title="Project Info">
          <Input
            label="Project Name Top"
            name="projectNameTop"
            value={formData.projectNameTop}
            onChange={handleChange}
          />

          <Input
            label="Project Name Bottom"
            name="projectNameBottom"
            value={formData.projectNameBottom}
            onChange={handleChange}
          />
        </SectionCard>

        {/* Pricing UI */}

        <SectionCard id="pricing" title="Pricing">
          {/* 1 BHK */}
          <div className="border rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-sm">Smart 1 BHK</h3>

            <Input
              label="Title"
              name="price1Title"
              value={formData.price1Title}
              onChange={handleChange}
            />

            <Input
              label="Old Price"
              name="price1Old"
              value={formData.price1Old}
              onChange={handleChange}
            />

            <Input
              label="New Price"
              name="price1Price"
              value={formData.price1Price}
              onChange={handleChange}
            />
          </div>

          {/* 2 BHK */}
          <div className="border rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-sm">Premium 2 BHK</h3>

            <Input
              label="Title"
              name="price2Title"
              value={formData.price2Title}
              onChange={handleChange}
            />

            <Input
              label="Old Price"
              name="price2Old"
              value={formData.price2Old}
              onChange={handleChange}
            />

            <Input
              label="New Price"
              name="price2Price"
              value={formData.price2Price}
              onChange={handleChange}
            />
          </div>
        </SectionCard>

        {/* About UI */}

        <SectionCard id="about" title="About Project">
          <Input
            label="Title"
            name="aboutTitle"
            value={formData.aboutTitle}
            onChange={handleChange}
          />

          <Textarea
            label="Description"
            name="aboutText"
            value={formData.aboutText}
            onChange={handleChange}
          />
        </SectionCard>

        {/* Developer UI */}

        {/* Developer UI */}

        <SectionCard id="developer" title="Developer Section">
          <Input
            label="Title"
            name="developerTitle"
            value={formData.developerTitle}
            onChange={handleChange}
          />

          <Textarea
            label="Description"
            name="developerText"
            value={formData.developerText}
            onChange={handleChange}
          />

          {/* Stats */}

          <div className="pt-4">
            <h3 className="font-semibold text-sm mb-3">Developer Statistics</h3>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Stat 1 */}
              <Input
                label="Projects Value"
                name="stat1Value"
                value={formData.stat1Value}
                onChange={handleChange}
              />
              <Input
                label="Projects Label"
                name="stat1Label"
                value={formData.stat1Label}
                onChange={handleChange}
              />

              {/* Stat 2 */}
              <Input
                label="Area Developed Value"
                name="stat2Value"
                value={formData.stat2Value}
                onChange={handleChange}
              />
              <Input
                label="Area Developed Label"
                name="stat2Label"
                value={formData.stat2Label}
                onChange={handleChange}
              />

              {/* Stat 3 */}
              <Input
                label="Families Value"
                name="stat3Value"
                value={formData.stat3Value}
                onChange={handleChange}
              />
              <Input
                label="Families Label"
                name="stat3Label"
                value={formData.stat3Label}
                onChange={handleChange}
              />

              {/* Stat 4 */}
              <Input
                label="Ongoing Value"
                name="stat4Value"
                value={formData.stat4Value}
                onChange={handleChange}
              />
              <Input
                label="Ongoing Label"
                name="stat4Label"
                value={formData.stat4Label}
                onChange={handleChange}
              />

              {/* Stat 5 */}
              <Input
                label="Upcoming Value"
                name="stat5Value"
                value={formData.stat5Value}
                onChange={handleChange}
              />
              <Input
                label="Upcoming Label"
                name="stat5Label"
                value={formData.stat5Label}
                onChange={handleChange}
              />
            </div>
          </div>
        </SectionCard>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-lg shadow font-semibold disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ label, target }: { label: string; target: string }) {
  const handleScroll = () => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      onClick={handleScroll}
      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
    >
      <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
      <span>{label}</span>
    </div>
  );
}
