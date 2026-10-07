import React from "react";

export default function Amenities() {
  const amenities = [
    {
      title: "24/7 Modern Elevators",
      description: "Reliable vertical access for everyday convenience.",
    },
    {
      title: "Dedicated Parking",
      description: "Organized parking facilities for residents.",
    },
    {
      title: "Independent Water Wells",
      description: "Independent water infrastructure for each block.",
    },
    {
      title: "Central Heating",
      description: "Integrated central heating for residential comfort.",
    },
    {
      title: "Standard Infrastructure",
      description: "Essential infrastructure developed according to engineering requirements.",
    },
    {
      title: "Public Spaces",
      description: "Organized common areas designed for residents.",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-20 xl:px-16">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT CONTENT */}
          <div className="w-full">
            {/* SECTION LABEL */}
            <div className="mb-4 flex items-center gap-2 sm:mb-5">
              <span className="h-[3px] w-8 shrink-0 bg-[#159FD3] sm:w-11" />
              <span className="text-[14px] font-semibold tracking-[-0.2px] text-[#159FD3] sm:text-[17px]">
                AMENITIES
              </span>
            </div>

            {/* SMALL TITLE */}
            <p className="mb-3 text-[14px] font-medium text-[#111827] sm:mb-4 sm:text-[17px]">
              EVERYDAY COMFORT
            </p>

            {/* MAIN TITLE */}
            <h2 className="max-w-[620px] text-[30px] font-extrabold leading-[1.15] tracking-[-1px] text-[#050505] sm:text-[38px] md:text-[42px] lg:text-[44px] xl:text-[46px]">
              Designed Around the Way
              <br className="hidden sm:block" />
              You{" "}
              <span className="text-[#159FD3]">
                Live.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-[650px] text-[14px] font-medium leading-[1.8] text-[#171b24] sm:mt-7 sm:text-[16px] sm:leading-[1.9]">
              Solh Residential Project is planned as more than a
              collection of residential buildings. It is designed as
              a complete living environment where essential services,
              comfort, and community come together.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <div className="relative h-[220px] w-full overflow-hidden rounded-[18px] sm:h-[280px] sm:rounded-[20px] md:h-[320px] lg:h-[310px] xl:h-[330px]">
              <img
                src="/images/amenities-room.png"
                alt="Amenities Interior"
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* AMENITIES CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex min-h-[145px] flex-col rounded-[18px] border-2 border-[#8fd5e8] bg-white px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(21,159,211,0.12)] sm:min-h-[155px] sm:rounded-[20px] sm:px-7 sm:py-7"
            >
              {/* CARD TITLE */}
              <h3 className="text-[18px] font-extrabold leading-[1.25] tracking-[-0.4px] text-[#159FD3] sm:text-[20px] md:text-[21px]">
                {item.title}
              </h3>

              {/* CARD DESCRIPTION */}
              <p className="mt-2 max-w-[360px] text-[14px] font-medium leading-[1.7] text-[#111111] sm:text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}