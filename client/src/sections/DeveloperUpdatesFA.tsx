import { useState } from "react";

/* ================= TYPES ================= */

type CMSData = {
  developerTitle?: string;
  developerText?: string;

  stat1Value?: string;
  stat1Label?: string;

  stat2Value?: string;
  stat2Label?: string;

  stat3Value?: string;
  stat3Label?: string;

  stat4Value?: string;
  stat4Label?: string;

  stat5Value?: string;
  stat5Label?: string;

  constructionUpdates?: {
    title: string;
  }[];

  faqs?: {
    question: string;
    answer: string;
  }[];
};

type Stat = {
  value: string;
  label: string;
};

type Update = {
  title: string;
  image: string;
};

/* ================= COMPONENT ================= */

export default function DeveloperUpdatesFA({
  data,
}: {
  data?: CMSData;
}) {
  console.log({ data });

  //stats

  const stats: Stat[] = [
    {
      value: data?.stat1Value || "6",
      label: data?.stat1Label || "Projects",
    },
    {
      value: data?.stat2Value || "1.32 LAC",
      label:
        data?.stat2Label || "Sq. Ft. Area Developed",
    },
    {
      value: data?.stat3Value || "429+",
      label: data?.stat3Label || "Happy Families",
    },
    {
      value: data?.stat4Value || "3.77 LAC",
      label: data?.stat4Label || "Sq. Ft. Ongoing",
    },
    {
      value: data?.stat5Value || "2.7 LAC",
      label: data?.stat5Label || "Sq. Ft. Upcoming",
    },
  ];

  /* ================= STATIC UPDATES ================= */

  const updates: Update[] = [
    {
      title:
        data?.constructionUpdates?.[0]?.title ||
        "Under Construction",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title:
        data?.constructionUpdates?.[1]?.title ||
        "Completed Projects",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    },
    {
      title:
        data?.constructionUpdates?.[2]?.title ||
        "Upcoming Launch",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    },
  ];

  // FAQ Toggle

  const [openIndex, setOpenIndex] =
    useState<number | null>(null);

  const toggleFAQ = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-[#eef5f4]">
      {/* About Developer */}

      <div className="py-16 md:py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {data?.developerTitle || "About Developer"}
        </h2>

        <p className="max-w-4xl mx-auto text-gray-600 text-sm leading-relaxed">
          {data?.developerText ||
            "We are committed to building quality homes with modern amenities."}
        </p>

        {/* Stats */}

        <div className="mt-10 bg-[#8fd0c7] rounded-xl py-6 px-4 grid grid-cols-2 md:grid-cols-5 gap-6 text-white">
          {stats.map((s, i) => (
            <div key={i}>
              <h3 className="text-xl md:text-2xl font-bold">
                {s.value}
              </h3>
              <p className="text-xs md:text-sm opacity-90">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Image */}

      <div className="w-full h-[220px] md:h-[300px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
          alt="Developer Projects"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Construction Updates */}

      <div className="bg-[#8fd0c7] py-14 md:py-16 px-6 md:px-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-gray-800">
          Construction Updates
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {updates.map((u, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={u.image}
                alt={u.title}
                className="w-full h-[260px] object-cover"
              />

              <div className="bg-gradient-to-r from-teal-300 to-green-400 text-center py-3 text-sm font-medium">
                {u.title}
                <div className="text-xs opacity-80">
                  Know More
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}

      <div className="py-16 md:py-20 px-6 md:px-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {data?.faqs?.map((q, i) => (
            <div
              key={i}
              className="bg-[#8fd0c7] rounded-lg shadow"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium"
              >
                {q.question}
                <span className="text-xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-4 text-sm text-gray-700">
                  {q.answer || "Answer coming soon."}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
