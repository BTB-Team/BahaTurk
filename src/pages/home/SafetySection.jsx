import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoMdPulse } from "react-icons/io";

const SafetySection = () => {
  const [safetyData, setSafetyData] = useState(null);
  useEffect(() => {
    const getSafetyData = async () => {
      try {
        const response = await fetch("/db.json");
        if (!response.ok) {
          throw new Error("Failed to fetch safety data");
        }
        const data = await response.json();
        setSafetyData(data.projects[0].safety);
      } catch (error) {
        console.error("Error fetching safety data:", error);
      }
    };
    getSafetyData();
  }, []);
  return (
    <section className="bahaturk-inter w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center items-start gap-3">
            {/* section label */}
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] sm:h-[3px] w-8 sm:w-10 bg-accent" />

              <span className="text-base sm:text-lg font-semibold uppercase tracking-wide text-accent">
                Safety
              </span>
            </div>

            <p className="mb-2 text-base uppercase text-text">
              Built With Safety In Mind
            </p>

            {/* heading */}
            <h2 className="text-3xl font-extrabold leading-14 sm:text-4xl lg:text-5xl">
              <span className="text-accent">Engineering for Strength.</span>
              <br />
              <span className="text-text">Building for Peace of Mind.</span>
            </h2>

            {/* description */}
            <div className="mt-5 max-w-full lg:max-w-[580px] text-base leading-8 text-text font-medium">
              {safetyData?.description ||
                "Safety is a top priority in our residential project. We ensure that every building is constructed with the highest standards of engineering and materials to withstand natural disasters and provide a secure living environment for our residents."}
            </div>

            {/* button */}
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-accent px-5 py-3 text-xs sm:text-base font-medium text-white transition hover:bg-accent-hover cursor-pointer"
            >
              Quality & Safety
              <AiOutlineArrowRight className="font-black text-2xl" />{" "}
            </button>
          </div>

          {/* RIGHT SAFETY CARD */}
          <div className="flex justify-center items-center">
            {/* blue circle */}
            <div
              className=" bg-[#D9F3FA] translate-y-30 rounded-full lg:mt-10 mb-30 sm:mb-10 flex 
            h-[340px] w-[350px]
            sm:h-[530px] sm:w-[545px] justify-center"
            >
              {/* card */}
              <div
                className="
                   z-10
                  -translate-y-15
                  flex 
                  h-[300px] w-[200px] 
                  sm:h-[450px] sm:w-[314px]
                  flex-col items-center justify-between
                  rounded-2xl
                  border-4 border-[#D9F3FA]
                  bg-white
                  px-5 py-5 sm:py-10
                  text-center
                  shadow-[0_15px_35px_rgba(21,159,204,0.18)]
                  overflow-hidden
                "
              >
                <p className="text-xs sm:text-sm font-medium uppercase tracking-normal sm:tracking-[0.25em] text-gray-400">
                  Earthquake Resistance
                </p>

                <p className="mt-5 text-2xl sm:text-4xl font-semibold text-black">
                  Up To
                </p>

                <p className="mt-0 text-6xl sm:text-[150px] font-bold leading-none bg-linear-to-t from-text to-accent bg-clip-text text-transparent">
                  {safetyData?.earthquake_resistance_richter || 10}
                </p>

                <p className="text-xl font-bold text-black sm:text-2xl">
                  Richter scale
                </p>

                {/* wave */}
                <div className="mt-6 flex items-center gap-3 text-accent">
                  <span className="h-[2.5px] w-12 bg-linear-to-r from-white to-accent" />
                  <IoMdPulse className="text-6xl leading-none" />
                  <span className="h-[2.5px] w-12 bg-linear-to-l from-white to-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
