import React from "react";

export default function Location() {
  const locations = [
    {
      icon: "✈",
      title: "Kabul International Airport",
    },
    {
      icon: "▥",
      title: "Wazir Akbar Khan",
    },
    {
      icon: "●",
      title: "Shahr-e-Naw",
    },
    {
      icon: "▥",
      title: "Business & Admin Areas",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white font-['Montserrat']">

      {/* =====================================================
          LOCATION SECTION
      ====================================================== */}
      <div
        className=" mx-auto max-w-[1280px] px-6 py-16 sm:px-8 md:px-10 lg:px-12 xl:px-0 xl:py-20 ">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">

          {/* ================= LEFT ================= */}
          <div>

            {/* LABEL */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-[3px] w-[43px] bg-[#159FD3]" />

              <span className="text-[16px] font-semibold text-[#159FD3] sm:text-[17px]">
                LOCATION
              </span>
            </div>

            {/* SMALL TITLE */}
            <p className="mb-5 text-[15px] font-medium text-[#111827] sm:text-[16px]">
              CONNECTED TO KABUL
            </p>

            {/* MAIN TITLE */}
            <h1
              className=" text-[38px] font-extrabold leading-[1.13] tracking-[-1.5px] text-[#050505] sm:text-[44px] md:text-[48px  lg:text-[46px] xl:text-[49px] " >
              A Prime Location in
              <br />

              <span className="text-[#159FD3]">
                Makroyan 5.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className=" mt-5 max-w-[650px] text-[14px] font-medium leading-[1.8] text-[#151a24] sm:text-[15px]">
              Solh Residential Project is located in Makroyan 5, Kabul,
              with convenient access to several of the city's important
              destinations.
            </p>

            {/* LOCATION CARDS */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {locations.map((item, index) => (
                <div
                  key={index}
                  className="flex min-h-[78px] items-center gap-3 rounded-[17px] border-[2px] border-[#8bcfe2] bg-white px-4 transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_8px_22px_rgba(21,159,211,0.12)]
                  "
                >

                  {/* ICON CIRCLE */}
                  <div
                    className=" flex h-[48px]  w-[48px] shrink-0 items-center justify-center rounded-full bg-[#d9f3fa] text-[23px] font-bold text-[#159FD3] ">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <p
                    className=" text-[14px] font-bold leading-[1.3] text-[#159FD3] sm:text-[15px] ">
                    {item.title}
                  </p>

                </div>
              ))}

            </div>
          </div>


          {/* ================= MAP ================= */}
          <div className="w-full">

            <div
              className=" h-[380px] w-full overflow-hidden rounded-[22px] sm:h-[420px] lg:h-[440px] ">
              <img
                src="/images/map.png"
                alt="Makroyan 5 Kabul Location Map"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

          </div>

        </div>
      </div>


      {/* =====================================================
          CTA SECTION
      ====================================================== */}
      <section
        className=" relative overflow-hidden bg-white px-6 pb-20 pt-14 sm:px-8 md:px-10 lg:pt-16 " >

        {/* BLUE SOFT BACKGROUND */}
        <div
          className=" pointer-events-none absolute left-1/2 top-[45%] h-[480px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dff6fc] opacity-90 blur-[65px] sm:h-[520px] sm:w-[1050px] "/>

        {/* CONTENT */}
        <div
          className=" relative z-10  mx-auto  flex  max-w-[1000px]  flex-col  items-center  text-center ">

          {/* SMALL TITLE */}
          <p
            className=" text-[14px] font-medium text-[#111827] sm:text-[15px] " >
            YOUR FUTURE STARTS HERE
          </p>

          {/* MAIN TITLE */}
          <h2
            className=" mt-5 text-[37px] font-extrabold leading-[1.2] tracking-[-1.5px] text-[#050505] sm:text-[45px] md:text-[50px] " >
            More Than a Home.
            <br />

            An Investment in{" "}
            <span className="text-[#159FD3]">
              Your Future.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className=" mt-6 max-w-[760px] text-[16px] font-medium leading-[1.8] text-[#151a24] sm:text-[18px] ">
            Discover a modern residential community built around
            <br className="hidden sm:block" />
            engineering, safety, comfort, and long-term value.
          </p>


          {/* BUTTONS */}
          <div
            className=" mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row  "  >

            {/* PRIMARY BUTTON */}
            <button
              type="button"
              className=" group flex min-w-[265px] items-center justify-center gap-5 rounded-[8px] bg-[#159FD3] px-6 py-4 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#078bbb] hover:shadow-[0_10px_25px_rgba(21,159,211,0.25)] " >
              <span>
                Explore Solh Project
              </span>

              <span
                className=" text-[27px] leading-none transition-transform duration-300 group-hover:translate-x-1 ">
                →
              </span>
            </button>


            {/* SECONDARY BUTTON */}
            <button
              type="button"
              className=" group flex min-w-[265px] items-center justify-center gap-5 rounded-[8px] border-[2px] border-[#8bcfe2] bg-white px-6 py-[14px] text-[16px] font-semibold text-[#159FD3] transition-all duration-300 hover:bg-[#f5fcfe] hover:shadow-[0_8px_20px_rgba(21,159,211,0.12)] " >
              <span>
                Contact Our Team
              </span>

              <span
                className=" text-[27px] leading-none transition-transform duration-300 group-hover:translate-x-1 ">
                →
              </span>
            </button>

          </div>
        </div>
      </section>

    </section>
  );
}