import { useEffect, useState } from "react";
import axios from "axios";

import AmenitiesSection from "../sections/AmenitiesSection";
import BuildingsCarousel from "../sections/BuildingsCarousel";
import DeveloperUpdatesFA from "../sections/DeveloperUpdatesFA";
import FloorPlansAndVideo from "../sections/FloorPlansAndVideo";

type RealEstateData = {
  logo?: string;
  heroImage?: string;

  headingTop?: string;
  headingHighlight?: string;
  subheading?: string;

  projectNameTop?: string;
  projectNameBottom?: string;

  price1Title?: string;
  price1Old?: string;
  price1Price?: string;

  price2Title?: string;
  price2Old?: string;
  price2Price?: string;

  address?: string;

  aboutTitle?: string;
  aboutText?: string;

  circleImg1?: string;
  circleImg2?: string;
  circleImg3?: string;
};

export default function RealEstate({ data }: { data?: RealEstateData }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [apiData, setApiData] = useState<RealEstateData | null>(null);

  const content = {
    logo:
      apiData?.logo ||
      data?.logo ||
      "https://dummyimage.com/200x60/8bc34a/ffffff&text=Lime+Logo",

    heroImage:
      apiData?.heroImage ||
      data?.heroImage ||
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1200&q=80",

    headingTop: apiData?.headingTop || data?.headingTop || "THINKING",

    headingHighlight:
      apiData?.headingHighlight ||
      data?.headingHighlight ||
      "OF A FANTASTIC VICINITY?",

    subheading:
      apiData?.subheading ||
      data?.subheading ||
      "20+ PODIUM LUXURIOUS AMENITIES • SPACIOUS BALCONY HOMES",

    projectNameTop:
      apiData?.projectNameTop || data?.projectNameTop || "VIGHNAHARTA",

    projectNameBottom:
      apiData?.projectNameBottom || data?.projectNameBottom || "INFINITY",

    price1Title: apiData?.price1Title || data?.price1Title || "SMART 1 BHK",

    price1Old: apiData?.price1Old || data?.price1Old || "74.99 Lacs",

    price1New: apiData?.price1Price || data?.price1Price || "₹ 69.99 Lacs*",

    price2Title: apiData?.price2Title || data?.price2Title || "PREMIUM 2 BHK",

    price2Old: apiData?.price2Old || data?.price2Old || "1.05 CR",

    price2New: apiData?.price2Price || data?.price2Price || "₹ 96.99 Lacs*",

    address:
      apiData?.address ||
      data?.address ||
      "BLDG. NO. 223/224, CIRCLE - KANNAMWAR NAGAR I, VIKHROLI (EAST)",

    aboutTitle: apiData?.aboutTitle || data?.aboutTitle || "About Project",

    aboutText:
      apiData?.aboutText || data?.aboutText || "Project description...",

    circleImg1:
      apiData?.circleImg1 ||
      data?.circleImg1 ||
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80",

    circleImg2:
      apiData?.circleImg2 ||
      data?.circleImg2 ||
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",

    circleImg3:
      apiData?.circleImg3 ||
      data?.circleImg3 ||
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=500&q=80",
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const fetchContent = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://megaplex-3ujz.onrender.com/api/content"
      );
      console.log(res.data);
      setApiData(res.data || {});
    } catch (err) {
      setError("Failed to load website content");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading website...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }
  return (
    <div className="w-full bg-white text-gray-800 font-sans animate__animated animate__fadeIn">
      {/* Navbar */}

      <div className="w-full flex items-center justify-between px-6 md:px-12 py-4 border-b bg-white sticky top-0 z-50 shadow-sm">
        <img
          src={content.logo}
          alt="Logo"
          className="h-10 md:h-12 object-contain rounded-3xl"
        />

        <div className="hidden  lg:flex gap-8 text-[15px] font-medium text-gray-600">
          <button className="cursor-pointer" onClick={() => scrollTo("home")}>
            Home
          </button>
          <button
            className="cursor-pointer"
            onClick={() => scrollTo("overview")}
          >
            Overview
          </button>
          <button
            className="cursor-pointer"
            onClick={() => scrollTo("connectivities")}
          >
            Connectivities
          </button>
          <button
            className="cursor-pointer"
            onClick={() => scrollTo("amenities")}
          >
            Amenities
          </button>
          <button
            className="cursor-pointer"
            onClick={() => scrollTo("floorplans")}
          >
            Floor Plans
          </button>
          <button
            className="cursor-pointer"
            onClick={() => scrollTo("developer")}
          >
            Developer
          </button>
          <button
            className="cursor-pointer"
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
        </div>

        <button className="hidden md:block bg-gradient-to-r from-lime-400 to-green-500 text-white  px-4 md:px-6 py-2 rounded-md shadow font-semibold text-sm md:text-base">
          Enquiry Now
        </button>

        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden space-y-1"
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />

          <aside className="w-64 bg-white shadow-xl p-6 space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Menu</h2>
              <button onClick={() => setMenuOpen(false)}>✕</button>
            </div>

            <MobileItem label="Home" onClick={() => scrollTo("home")} />
            <MobileItem label="Overview" onClick={() => scrollTo("overview")} />
            <MobileItem
              label="Amenities"
              onClick={() => scrollTo("amenities")}
            />
            <MobileItem
              label="Floor Plans"
              onClick={() => scrollTo("floorplans")}
            />
            <MobileItem
              label="Developer"
              onClick={() => scrollTo("developer")}
            />
          </aside>
        </div>
      )}

      {/* Hero UI */}

      <div id="home">
        <div className="grid lg:grid-cols-2">
          {/* Left */}
          <div className="relative bg-[#f3f3f3] px-6 md:px-14 py-12 md:py-16 flex flex-col justify-center min-h-[520px] overflow-hidden">
            <div className="relative  z-10 max-w-xl">
              <h2 className="text-4xl md:text-4xl  font-bold leading-tight">
                {content.headingTop}
                <br />
                <span className="text-red-600  ">
                  {content.headingHighlight}
                </span>
              </h2>

              <p className="mt-4 p-2 md:mt-6  text-green-900 text-md  md:text-sm tracking-wide">
                {content.subheading}
              </p>
            </div>

            {/* Hero image */}
            <div className="relative mt-8  lg:block  lg:w-[460px] w-full max-w-[520px]">
              <img
                src={content.heroImage}
                className="w-full h-[260px]  bg-blend-darken md:h-[320px] lg:h-[360px] object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center justify-center text-center px-6 md:px-10 py-12 min-h-[520px]">
            <div className="mb-6">
              <h3 className="tracking-[4px] text-gray-500 text-sm md:text-base">
                {content.projectNameTop}
              </h3>
              <h1 className="text-3xl md:text-4xl font-serif tracking-[6px]">
                {content.projectNameBottom}
              </h1>
            </div>

            {/* PRICING */}
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 mt-6">
              <div>
                <h4 className="font-semibold text-gray-700">
                  {content.price1Title}
                </h4>
                <p className="text-sm line-through text-red-500">
                  {content.price1Old}
                </p>
                <p className="text-xl md:text-2xl font-bold">
                  {content.price1New}
                </p>
                <span className="text-sm text-gray-500">onwards</span>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">
                  {content.price2Title}
                </h4>
                <p className="text-sm line-through text-red-500">
                  {content.price2Old}
                </p>
                <p className="text-xl md:text-2xl font-bold">
                  {content.price2New}
                </p>
                <span className="text-sm text-gray-500">onwards</span>
              </div>
            </div>

            <p className="mt-8 md:mt-10 text-xs md:text-sm text-gray-600 max-w-md">
              {content.address}
            </p>
          </div>
        </div>

        {/* ================= ABOUT ================= */}
        <div className="bg-[#dfeeee] py-16 md:py-20 px-6 md:px-24 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* IMAGE CLUSTER */}
          <div className="relative w-full max-w-[460px] h-[420px] mx-auto">
            <img
              src={content.circleImg1}
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full absolute left-16 top-12 shadow-xl"
            />

            <img
              src={content.circleImg2}
              className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-full absolute top-0 left-0 shadow-lg border-[6px] border-white"
            />

            <img
              src={content.circleImg3}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full absolute bottom-0 right-6 shadow-lg border-[6px] border-white"
            />

            <div className="absolute inset-0 rounded-full border border-dashed border-gray-400 scale-110"></div>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              {content.aboutTitle}
            </h2>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
              {content.aboutText}
            </p>

            <button className="mt-6 md:mt-8 bg-gradient-to-r from-lime-400 to-green-500 text-white  px-5 md:px-6 py-2 md:py-3 rounded-md shadow font-semibold text-sm md:text-base">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Amenities UI */}

      <div id="amenities">
        <AmenitiesSection />
      </div>

      {/* Buildings UI */}

      <div id="buildings">
        <BuildingsCarousel />
      </div>

      {/* Floor Plans UI */}

      <div id="floorplans">
        <FloorPlansAndVideo />
      </div>

      {/* Developer UI */}

      <div id="developer">
        <DeveloperUpdatesFA data={apiData as any} />
      </div>
    </div>
  );
}

type MobileItemProps = {
  label: string;
  onClick: () => void;
};

function MobileItem({ label, onClick }: MobileItemProps) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100"
    >
      {label}
    </button>
  );
}
