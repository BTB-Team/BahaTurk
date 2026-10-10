import { useEffect, useState } from "react";

const AmenitiesSection = () => {
  const [amenitiesData, setAmenitiesData] = useState([]);

  useEffect(() => {
    const getAmenitiesData = async () => {
      try {
        const response = await fetch("/db.json");
        if (!response.ok) {
          throw new Error("Failed to fetch amenities data");
        }
        const data = await response.json();
        setAmenitiesData(data.project_amenities);
      } catch (error) {
        console.error("Error fetching amenities data:", error);
      }
    };
    getAmenitiesData();
  }, []);

  return (
    <section className="bahaturk-inter w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* top */}
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          {/* content */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] sm:h-[3px] w-8 sm:w-10 bg-accent" />

              <span className="text-base sm:text-lg font-semibold uppercase tracking-wide text-accent">
                Amenities
              </span>
            </div>

            <p className="mb-2 text-base uppercase text-text">
              Everyday Comfort
            </p>

            <h2 className="text-3xl font-extrabold leading-14 sm:text-4xl lg:text-5xl">
              <span className="text-text">Designed Around the Way</span>
              <br />
              <span className="text-text">You </span>
              <span className="text-accent">Live.</span>
            </h2>

            <p className="mt-5 max-w-full lg:max-w-[580px] text-base leading-8 text-text font-medium">
              Solh Residential Project is planned as more than a collection of
              residential buildings. It is designed as a complete living
              environment where essential services, comfort, and community come
              together.
            </p>
          </div>

          {/* image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/amenities.webp"
              alt="Solh residential interior"
              className="h-[220px] w-full object-cover sm:h-[280px]"
            />
          </div>
        </div>

        {/* amenities grid */}
        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenitiesData.map((item) => (
            <div
              key={item.title}
              className="
                min-h-[108px]
                rounded-2xl
                border
                border-accent
                bg-white
                px-8
                py-6
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_8px_25px_rgba(21,159,204,0.10)]
                hover:border-2
              "
            >
              <h3 className="text-base font-bold text-accent sm:text-xl">
                {item.title}
              </h3>

              <p className="mt-1.5 text-sm leading-5 text-text font-medium sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
