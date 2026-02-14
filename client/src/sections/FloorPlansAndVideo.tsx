import { useRef, useState } from "react";

type FloorPlan = {
  type: string;
  area: string;
  price: string;
  image: string;
};

type FloorPlansData = {
  plans?: FloorPlan[];
  videoUrl?: string;
};

export default function FloorPlansAndVideo({
  data,
}: {
  data?: FloorPlansData;
}) {
  const tabs = ["1 bhk", "2 bhk", "5,6 bhk"];

  const plans: FloorPlan[] = data?.plans || [
    {
      type: "1 BHK",
      area: "380–411 RERA Sq.ft",
      price: "Click for price",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80",
    },
    {
      type: "2 BHK",
      area: "580–650 RERA Sq.ft",
      price: "Click for price",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    },
    {
      type: "5 BHK",
      area: "900+ RERA Sq.ft",
      price: "Click for price",
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  return (
    <section className="w-full">
      {/* Floor Plans UI */}

      <div className="bg-[#9fd3c7] py-16 md:py-20 px-6 md:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Plan Image */}

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-[520px] mx-auto flex items-center justify-center">
            <img
              src={plans[activeTab]?.image}
              alt="Floor Plan"
              className="w-full max-h-[320px] object-contain rounded-lg"
            />
          </div>

          {/* Plan Info */}

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md mx-auto w-full">
            <div className="flex gap-3 mb-6 flex-wrap">
              {tabs.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 rounded text-sm font-medium capitalize transition ${
                    activeTab === i
                      ? "bg-teal-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <span className="font-medium">Type:</span>{" "}
                {plans[activeTab]?.type}
              </p>

              <p>
                <span className="font-medium">Area:</span>{" "}
                {plans[activeTab]?.area}
              </p>

              <p>
                <span className="font-medium">Price:</span>{" "}
                {plans[activeTab]?.price}
              </p>
            </div>

            <button className="mt-6 bg-gradient-to-r from-lime-400 to-green-500 text-white px-5 py-2 rounded shadow text-sm font-medium">
              Download Floor Plan
            </button>

            {/* Thumbnails */}

            <div className="flex gap-3 mt-6">
              {plans.map((p, i) => (
                <img
                  key={i}
                  src={p.image}
                  alt={p.type}
                  onClick={() => setActiveTab(i)}
                  className={`w-16 h-16 object-cover rounded border cursor-pointer ${
                    activeTab === i ? "ring-2 ring-teal-500" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video UI */}

      <div className="relative w-full h-[320px] md:h-[420px] lg:h-[520px] overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
        >
          <source
            src={data?.videoUrl || "https://www.w3schools.com/html/mov_bbb.mp4"}
            type="video/mp4"
          />
        </video>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button
              onClick={handlePlay}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-black flex items-center justify-center bg-white/40 backdrop-blur hover:scale-110 transition"
            >
              <div className="w-0 h-0 border-l-[18px] border-l-black border-y-[12px] border-y-transparent ml-1"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
