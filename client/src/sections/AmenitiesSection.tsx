type AmenityItem = {
  title: string;
  icon: string;
};

type AmenitiesData = {
  amenities?: AmenityItem[];
  amenityImage?: string;
};

export default function AmenitiesSection({ data }: { data?: AmenitiesData }) {
  const amenities: AmenityItem[] = data?.amenities || [
    { title: "Gymnasium", icon: "🏋️" },
    { title: "Kids Play Area", icon: "🛝" },
    { title: "Jogging Track", icon: "🏃" },
    { title: "Yoga Deck", icon: "🧘" },
    { title: "Swimming Pool", icon: "🏊" },
    { title: "Club House", icon: "🏢" },
  ];

  return (
    <div className="bg-[#e9f3f1] py-16 px-6 md:px-20">
      {/* Section Header */}

      <h2 className="text-3xl font-bold mb-2">Amenities</h2>

      <p className="text-gray-600 mb-10 max-w-2xl text-sm">
        Thoughtfully crafted surroundings that reflect tradition, comfort, and a
        human-centered design approach.
      </p>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Image */}

        <img
          src={
            data?.amenityImage ||
            "https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&w=900&q=80"
          }
          alt="Amenities"
          className="rounded-2xl shadow-xl w-full h-[320px] md:h-[420px] object-cover"
        />

        {/* Amenities Grid */}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {amenities.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center text-3xl text-teal-600">
                {item.icon}
              </div>

              <p className="mt-3 text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}

      <div className="flex justify-center mt-10">
        <button className="bg-gradient-to-r from-lime-400 to-green-500 text-white px-6 py-2 rounded-md shadow">
          View more
        </button>
      </div>
    </div>
  );
}
