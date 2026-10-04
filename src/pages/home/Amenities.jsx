import React from "react";

export default function Amenities() {
  const amenities = [
    {
      title: "24/7 Modern Elevators",
      description:
        "Reliable vertical access for everyday convenience.",
    },
    {
      title: "Dedicated Parking",
      description:
        "Organized parking facilities for residents.",
    },
    {
      title: "Independent Water Wells",
      description:
        "Independent water infrastructure for each block.",
    },
    {
      title: "Central Heating",
      description:
        "Integrated central heating for residential comfort.",
    },
    {
      title: "Standard Infrastructure",
      description:
        "Essential infrastructure developed according to engineering requirements.",
    },
    {
      title: "Public Spaces",
      description:
        "Organized common areas designed for residents.",
    },
  ];

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1280px]">

        {/* =========================
            TOP CONTENT
        ========================== */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr]">

          {/* LEFT */}
          <div className="w-full">

            {/* SECTION LABEL */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-[3px] w-11 bg-[#159FD3]" />

              <span className="text-[17px] font-semibold tracking-[-0.3px] text-[#159FD3]">
                AMENITIES
              </span>
            </div>

            {/* SMALL TITLE */}
            <p className="mb-4 text-[16px] font-medium text-[#111827] sm:text-[17px]">
              EVERYDAY COMFORT
            </p>

            {/* MAIN TITLE */}
            <h1 className="max-w-[620px] text-[36px] font-extrabold leading-[1.15] tracking-[-1.4px] text-[#050505] sm:text-[42px] md:text-[46px] lg:text-[44px] xl:text-[46px]">
              Designed Around the Way
              <br />

              You{" "}
              <span className="text-[#159FD3]">
                Live.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[650px] text-[15px] font-medium leading-[1.9] text-[#171b24] sm:text-[16px]">
              Solh Residential Project is planned as more than a
              collection of residential buildings. It is designed as
              a complete living environment where essential services,
              comfort, and community come together.
            </p>
          </div>


          {/* RIGHT IMAGE */}
          <div className="w-full">
            <div className="h-[250px] w-full overflow-hidden rounded-[22px] sm:h-[290px] md:h-[310px] lg:h-[295px]">
              <img
                src="/images/amenities-room.png"
                alt="Amenities Interior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>


        {/* =========================
            AMENITIES CARDS
        ========================== */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {amenities.map((item, index) => (
            <div
              key={index}
              className=" min-h-[150px] rounded-[20px] border-[2px]  border-[#8fd5e8] bg-white px-7 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(21,159,211,0.12)  "
            >

              {/* CARD TITLE */}
              <h2 className=" text-[20px] font-extrabold leading-[1.25] tracking-[-0.5px] text-[#159FD3] sm:text-[21px]
              ">
                {item.title}
              </h2>

              {/* CARD DESCRIPTION */}
              <p className=" mt-2 max-w-[360px] text-[15px] font-medium leading-[1.7] text-[#111111]
              ">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}