import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Building = {
  title: string;
  image: string;
};

type BuildingsData = {
  buildings?: Building[];
};

export default function BuildingsCarousel({ data }: { data?: BuildingsData }) {
  const buildings: Building[] = data?.buildings || [
    {
      title: "Newly Launched - Vighnaharta Enclave",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Premium Tower Residences",
      image:
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Luxury Skyline Apartments",
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#8fd0c7] py-16 px-6 md:px-20">
      {/* Section Header */}

      <h2 className="text-3xl font-bold text-center mb-10">
        Explore More Buildings in the Township
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {buildings.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              {/* Image */}

              <div className="w-full h-[320px] overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title */}

              <div className="bg-gradient-to-r from-lime-300 to-green-400 p-3 text-center font-medium text-sm">
                {b.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
