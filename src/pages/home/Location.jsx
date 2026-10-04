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
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          py-12
          sm:px-6
          sm:py-14
          md:px-8
          md:py-16
          lg:px-10
          lg:py-20
          xl:px-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            md:gap-10
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-12
          "
        >
          {/* ================= LEFT ================= */}

          <div className="min-w-0">
            {/* LABEL */}

            <div className="mb-4 flex items-center gap-2 sm:mb-5">
              <span className="h-[3px] w-8 shrink-0 bg-[#159FD3] sm:w-[43px]" />

              <span className="text-[14px] font-semibold text-[#159FD3] sm:text-[16px] md:text-[17px]">
                LOCATION
              </span>
            </div>

            {/* SMALL TITLE */}

            <p className="mb-4 text-[13px] font-medium text-[#111827] sm:mb-5 sm:text-[15px] md:text-[16px]">
              CONNECTED TO KABUL
            </p>

            {/* MAIN TITLE */}

            <h2
              className="
                text-[32px]
                font-extrabold
                leading-[1.13]
                tracking-[-1px]
                text-[#050505]
                sm:text-[38px]
                md:text-[44px]
                lg:text-[46px]
                xl:text-[49px]
              "
              style={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              A Prime Location in
              <br />
              <span className="text-[#159FD3]">
                Makroyan 5.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-4
                max-w-[650px]
                text-[13px]
                font-medium
                leading-[1.8]
                text-[#151a24]
                sm:mt-5
                sm:text-[14px]
                md:text-[15px]
              "
            >
              Solh Residential Project is located in Makroyan 5, Kabul,
              with convenient access to several of the city's important
              destinations.
            </p>

            {/* LOCATION CARDS */}

            <div
              className="
                mt-6
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >
              {locations.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    min-h-[72px]
                    items-center
                    gap-3
                    rounded-[15px]
                    border-2
                    border-[#8bcfe2]
                    bg-white
                    px-3
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_8px_22px_rgba(21,159,211,0.12)]
                    sm:min-h-[78px]
                    sm:rounded-[17px]
                    sm:px-4
                  "
                >
                  {/* ICON CIRCLE */}

                  <div
                    className="
                      flex
                      h-[43px]
                      w-[43px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#d9f3fa]
                      text-[20px]
                      font-bold
                      text-[#159FD3]
                      sm:h-[48px]
                      sm:w-[48px]
                      sm:text-[23px]
                    "
                  >
                    {item.icon}
                  </div>

                  {/* TITLE */}

                  <p className="text-[12px] font-bold leading-[1.3] text-[#159FD3] sm:text-[14px] md:text-[15px]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= MAP ================= */}

          <div className="w-full min-w-0">
            <div
              className="
                h-[280px]
                w-full
                overflow-hidden
                rounded-[20px]
                sm:h-[350px]
                sm:rounded-[22px]
                md:h-[400px]
                lg:h-[440px]
                lg:rounded-[22px]
              "
            >
              <img
                src="/images/map.png"
                alt="Makroyan 5 Kabul Location Map"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
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
        className="
          relative
          overflow-hidden
          bg-white
          px-4
          pb-14
          pt-10
          sm:px-6
          sm:pb-16
          sm:pt-12
          md:px-8
          md:pb-20
          md:pt-14
          lg:px-10
          lg:pt-16
        "
      >
        {/* BLUE SOFT BACKGROUND */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[45%]
            h-[320px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#dff6fc]
            opacity-90
            blur-[55px]
            sm:h-[400px]
            sm:w-[800px]
            sm:blur-[60px]
            md:h-[480px]
            md:w-[900px]
            md:blur-[65px]
            lg:h-[520px]
            lg:w-[1050px]
          "
        />

        {/* CONTENT */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[1000px]
            flex-col
            items-center
            px-1
            text-center
          "
        >
          {/* SMALL TITLE */}

          <p className="text-[12px] font-medium text-[#111827] sm:text-[14px] md:text-[15px]">
            YOUR FUTURE STARTS HERE
          </p>

          {/* MAIN TITLE */}

          <h2
            className="
              mt-4
              text-[30px]
              font-extrabold
              leading-[1.2]
              tracking-[-1px]
              text-[#050505]
              sm:mt-5
              sm:text-[38px]
              md:text-[45px]
              lg:text-[50px]
            "
            style={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            More Than a Home.
            <br />
            An Investment in{" "}
            <span className="text-[#159FD3]">
              Your Future.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-5
              max-w-[760px]
              text-[13px]
              font-medium
              leading-[1.8]
              text-[#151a24]
              sm:mt-6
              sm:text-[16px]
              md:text-[18px]
            "
          >
            Discover a modern residential community built around
            <br className="hidden sm:block" />
            engineering, safety, comfort, and long-term value.
          </p>

          {/* BUTTONS */}

          <div
            className="
              mt-7
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3
              sm:mt-9
              sm:flex-row
              sm:gap-4
            "
          >
            {/* PRIMARY BUTTON */}

            <button
              type="button"
              className="
                group
                flex
                w-full
                max-w-[300px]
                items-center
                justify-center
                gap-4
                rounded-[8px]
                bg-[#159FD3]
                px-5
                py-3
                text-[14px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#078bbb]
                hover:shadow-[0_10px_25px_rgba(21,159,211,0.25)]
                sm:w-[265px]
                sm:px-6
                sm:py-4
                sm:text-[16px]
              "
            >
              <span>
                Explore Solh Project
              </span>

              <span
                className="
                  text-[24px]
                  leading-none
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  sm:text-[27px]
                "
              >
                →
              </span>
            </button>

            {/* SECONDARY BUTTON */}

            <button
              type="button"
              className="
                group
                flex
                w-full
                max-w-[300px]
                items-center
                justify-center
                gap-4
                rounded-[8px]
                border-2
                border-[#8bcfe2]
                bg-white
                px-5
                py-[11px]
                text-[14px]
                font-semibold
                text-[#159FD3]
                transition-all
                duration-300
                hover:bg-[#f5fcfe]
                hover:shadow-[0_8px_20px_rgba(21,159,211,0.12)]
                sm:w-[265px]
                sm:px-6
                sm:py-[14px]
                sm:text-[16px]
              "
            >
              <span>
                Contact Our Team
              </span>

              <span
                className="
                  text-[24px]
                  leading-none
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  sm:text-[27px]
                "
              >
                →
              </span>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}