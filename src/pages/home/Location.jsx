import { useEffect, useState } from "react";
import { FaLocationPinLock } from "react-icons/fa6";
import { MdMapsHomeWork } from "react-icons/md";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { IoAirplane } from "react-icons/io5";

const Location = () => {
  const icons = [
    <IoAirplane />,
    <MdMapsHomeWork />,
    <FaLocationPinLock />,
    <BiSolidBuildingHouse />,
  ];
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocationData = async () => {
      try {
        const response = await fetch("/db.json");
        if (!response.ok) {
          throw new Error("Failed to fetch location data");
        }
        const data = await response.json();
        setLocationData(data.projects[0].location_mapping);
      } catch (error) {
        console.error("Error fetching location data:", error);
      } finally {
        setLoading(false);
      }
    };
    getLocationData();
  }, []);

  if (loading) {
    return <div className="py-16 text-center">Loading...</div>;
  }
  if (!locationData) {
    return <div className="py-16 text-center">Location data not found.</div>;
  }

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="w-full h-full flex flex-col lg:flex-row justify-between gap-6">
          {/* left */}
          <div className="w-full lg:w-3/5">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-8 bg-accent" />

              <span className="text-lg font-semibold uppercase tracking-wide text-accent">
                Location
              </span>
            </div>

            <p className="mb-2 text-base font-medium uppercase text-black">
              Connected to Kabul
            </p>

            <h2 className="text-4xl font-extrabold leading-16 tracking-tight lg:text-5xl">
              <span className="text-black">A Prime Location in</span>
              <br />
              <span className="text-accent">
                {locationData?.city || "Kabul"}
              </span>
            </h2>

            <p className="mt-5 w-full lg:max-w-[580px] text-base leading-8 text-black font-semibold">
              {locationData?.description ||
                "Solh Residential Project is strategically located in Makroyan 5, providing easy access to key areas of Kabul. The location offers a blend of urban convenience and serene living, making it an ideal choice for residents seeking both comfort and connectivity."}
            </p>

            {/* location cards */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {locationData.nearby_places.map((place, index) => (
                <div
                  key={place}
                  className="
                    flex
                    min-h-[62px]
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-accent
                    px-4
                    py-3
                    duration-300
                    transition
                    hover:shadow-[0_8px_25px_rgba(21,159,204,0.10)]
                    hover:border-2
                    hover:-translate-y-1
                "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E1F5FB]
                      text-2xl
                      text-accent
                    "
                  >
                    {icons[index] || <span>{index + 1}</span>}
                  </div>

                  <span className="text-sm font-bold text-accent leading-7 sm:text-base">
                    {place}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* map */}
          <div className="w-full lg:w-2/5 overflow-hidden rounded-2xl flex-3 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.3982141732367!2d69.2050572!3d34.5434716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16d0033e53685%3A0x7ae2e4ad2470459b!2z2YXaqdix2YjYsduM2KfZhiDZvtmG2KzZhQ!5e0!3m2!1sen!2s!4v1791634693545!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
