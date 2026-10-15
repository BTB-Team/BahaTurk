import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

const SafetySection = () => {
  const [safetyData, setSafetyData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getSafetyData = async () => {
      try {
        const response = await fetch("db.json");
        if (!response.ok) {
          throw new Error("Failed to fetch safety data");
        }
        const data = await response.json();
        setSafetyData(data.projects[0].safety);
      } catch (error) {
        console.error("Error fetching safety data:", error);
      } finally {
        setLoading(false);
      }
    };
    getSafetyData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (!safetyData) {
    return <div className="py-16 text-center">Section data not found.</div>;
  }

  return (
    <section className="bahaturk-inter w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center items-start gap-0 sm:gap-2">
            {/* section label */}
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] sm:h-[3px] w-8 sm:w-10 bg-accent" />

              <span className="text-base sm:text-lg font-semibold uppercase tracking-wide text-accent">
                Safety
              </span>
            </div>

            <p className="mb-2 text-sm sm:text-lg uppercase text-text">
              Built With Safety In Mind
            </p>

            {/* heading */}
            <h2 className="text-2xl font-extrabold leading-10 sm:leading-14 sm:text-3xl md:text-4xl lg:text-5xl text-text">
              <span className="text-accent">Engineering for Strength.</span>
              <br />
              <span className="text-text">Building for Peace of Mind.</span>
            </h2>

            {/* description */}
            <div className="mt-5 max-w-full lg:max-w-[580px] text-base sm:text-lg text-justify leading-8 text-text font-medium font-inter-medium">
                <p>
                  Safety is a fundamental priority in the design and construction of Solh Residential Project. <br />
                  Through its integrated structural system and engineering approach, the project is designed to deliver strong performance against lateral forces and seismic activity. <br />
                  According to the project's specifications, the structural system is designed for earthquake resistance of up to 10 on the Richter scale.
                </p>
            </div>

            {/* button */}
            <Link
              to="projects"
              onClick={() => window.scrollTo(0, 0)}
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-4 text-[16px] sm:text-base font-inter-medium leading[27px] font-medium text-white transition hover:bg-accent-hover cursor-pointer"
            >
              Quality & Safety
              <img src="images/Vector1.svg" alt="vector" className="w-5" />
            </Link>
          </div>

          {/* RIGHT SAFETY CARD */}
          <div className="flex justify-center items-center">
            {/* blue circle */}
            <div
              className=" bg-accent/20 translate-y-20 xl:translate-y-30 rounded-full lg:mt-10 mb-30 sm:mb-10 flex 
            h-[340px] w-[350px]
            sm:h-[500px] sm:w-[500px] xl:h-[570px] xl:w-[570px] justify-center"
            >
              {/* card */}
              <div
                className="
                   z-10
                  -translate-y-10
                  flex 
                  h-[300px] w-[200px] 
                  sm:h-[420px] sm:w-[300px]
                  xl:h-[480px] xl:w-[330px]
                  flex-col items-center justify-between
                  rounded-4xl
                  border-4 border-accent/20
                  bg-linear-to-tr
                  from-white
                  via-white
                  to-accent/20
                  bg-clip-padding
                  backdrop-blur-[30px]
                  px-5 py-5 sm:py-10
                  text-center
                  shadow-[0_5px_30px_rgba(21,159,204,0.3)]
                  overflow-hidden
                "
              >
                <p className="text-xs sm:text-[15px] font-extra sm:font-medium uppercase tracking-tight sm:tracking-[0.15em] text-gray-400/95">
                  Earthquake Resistance
                </p>

                <p className="mt-5 text-2xl sm:text-4xl font-bold text-text">
                  Up To
                </p>

                <p className="mt-0 text-6xl sm:text-[160px] font-bold tracking-wider leading-none bg-linear-to-t from-text/80 to-accent bg-clip-text text-transparent">
                  {safetyData?.earthquake_resistance_richter || 10}
                </p>

                <p className="text-xl font-bold text-text sm:text-4xl">
                  Richter scale
                </p>

                {/* wave */}
                <div className="mt-6 flex items-center gap-3 text-accent">
                  <span className="h-[2.5px] w-12 bg-linear-to-r from-white to-accent" />
                  <img
                    src="images/pulse.svg"
                    alt="pulse"
                    className="w-10 sm:w-14"
                  />
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
