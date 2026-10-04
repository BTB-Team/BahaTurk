import React from "react";

const AboutEngineering = () => {
  return (
    <main
      className="w-full overflow-x-hidden bg-white"
      style={{
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* =====================================================
          TOP ABOUT BANNER
      ====================================================== */}

      <section
        className=" relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#1499c5] bg-cover bg-center px-4 py-12 sm:min-h-[320px] sm:px-6 sm:py-14 md:min-h-[360px] md:px-8 md:py-16 lg:min-h-[390px] lg:py-20 "
        style={{
          backgroundImage: "url('/images/Rectangle112.png')",
        }}
      >
        {/* BLUE OVERLAY */}

        <div className="absolute inset-0 bg-[#0798c8]/90" />

        {/* CONTENT */}

        <div
          className=" relative z-10 mx-auto w-full max-w-5xl px-1 text-center text-white sm:px-4">
          {/* LABEL */}

          <p
            className=" mb-3 text-[9px] font-bold tracking-[0.14em] sm:mb-4 sm:text-[12px] sm:tracking-[0.18em] md:mb-5 md:text-[16px] lg:text-[18px] " >
            ◆ ABOUT BAHA TURK ◆
          </p>

          {/* TITLE */}

          <h1
            className=" text-[26px] font-extrabold leading-[1.15] tracking-[-0.5px] sm:text-[32px] md:text-[42px] lg:text-[50px] xl:text-[54px]" >
            Building with Purpose Since 2001.
          </h1>

          {/* DESCRIPTION */}

          <p
            className=" mx-auto mt-4 max-w-[850px] text-[11px] font-medium leading-[1.8] sm:mt-5 sm:text-[13px] md:text-[16px] md:leading-[1.7] lg:text-[19px]">
            Experience, engineering, innovation, and responsibility
            <br className="hidden md:block" />
            brought together to create lasting value.
          </p>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING SECTION
      ====================================================== */}

      <section
        className=" w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-20" >
        <div className="mx-auto w-full max-w-[1140px]">
          {/* MAIN CARD */}

          <div
            className=" relative overflow-hidden rounded-[18px] border-2 border-[#8bd0e8] bg-white sm:rounded-[20px] md:rounded-[24px] ">
            {/* =================================================
                CONTENT
            ================================================= */}

            <div
              className=" relative z-10 w-full px-5 py-7 sm:px-7 sm:py-9 md:w-[68%] md:px-10 md:py-12 lg:w-[70%] lg:px-[52px] lg:py-14 xl:w-[72%]">
              {/* HEADING */}

              <h2
                className=" text-[28px] font-extrabold leading-[1.12] tracking-[-0.8px] text-black sm:text-[34px] md:text-[44px] lg:text-[52px] xl:text-[58px]">
                Engineering
                <br />
                Beyond{" "}
                <span className="text-[#119dcc]">
                  Construction.
                </span>
              </h2>

              {/* PARAGRAPH */}

              <p
                className=" mt-5 max-w-[760px] text-[12px] font-medium leading-[1.85] text-[#171717] sm:mt-6 sm:text-[13px] md:mt-7 md:text-[15px] lg:mt-8 lg:text-[17px] lg:leading-[1.9]
                "
              >
                Baha Turk Construction Company is a construction company with
                Turkish roots, established in Turkey in 2001. Since its
                establishment, the company has focused on developing
                construction projects through modern technologies, engineering
                quality, and international standards. Baha Turk's presence in
                Afghanistan is driven by a commitment to transfer technical
                knowledge, improve construction quality, and introduce modern
                building methods. Supported by experienced professionals and
                advanced construction technologies, we aim to develop projects
                that deliver quality, safety, durability, and long-term
                investment value. For us, quality is more than a standard. It
                is a responsibility to the people, investors, communities, and
                cities we serve.
              </p>
            </div>

            {/* =================================================
                CRANE IMAGE — DESKTOP
            ================================================= */}

            <div
              className=" pointer-events-none absolute right-0 top-0 hidden h-full w-[32%] md:block lg:w-[36%] xl:w-[38%]">
              <img
                src="/images/tower-crane.png"
                alt="Construction Crane"
                className=" absolute right-[-10px] top-0 h-auto w-[115%] max-w-none object-contain object-top lg:right-[-15px]"/>
            </div>

            {/* =================================================
                CRANE IMAGE — TABLET / MOBILE
            ================================================= */}

            <div
              className=" relative mt-0 block h-[190px] w-full overflow-hidden sm:h-[220px] md:hidden">
              <img
                src="/images/tower-crane.png"
                alt="Construction Crane"
                className=" absolute bottom-[-15px] left-1/2 h-auto w-[100%] max-w-none -translate-x-1/2 object-contain object-bottom sm:w-[95%]"/>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutEngineering;