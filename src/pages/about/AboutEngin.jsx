
import React from "react";

const AboutEngineering = () => {
  return (
    <>
      {/* =====================================================
          MONTSERRAT FONT
      ====================================================== */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

        .about-engineering-page {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      <main className="about-engineering-page w-full bg-white">

        {/* =====================================================
            TOP ABOUT BANNER
        ====================================================== */}

        <section
          className=" relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#1499c5] bg-cover bg-center px-5 py-14 sm:min-h-[330px] sm:px-6 sm:py-16 md:min-h-[370px] md:px-8 md:py-20"
          style={{
            backgroundImage: "url('/images/Rectangle112.png')",
          }}
        >
          {/* BLUE OVERLAY */}
          <div className="absolute inset-0 bg-[#0798c8]/90" />

          {/* CONTENT */}
          <div
            className=" relative z-10 mx-auto w-full max-w-5xl px-2 text-center text-white sm:px-4 " >
            {/* LABEL */}
            <p
              className=" mb-4 text-[11px] font-bold tracking-[0.18em] sm:mb-5 sm:text-[14px] md:mb-6 md:text-[18px] lg:text-[20px]" >
              ◆ ABOUT BAHA TURK ◆
            </p>

            {/* TITLE */}
            <h1
              className=" text-[28px] font-extrabold leading-[1.15] sm:text-[34px] md:text-[44px] lg:text-[50px] ">
              Building with Purpose Since 2001.
            </h1>

            {/* DESCRIPTION */}
            <p
              className=" mx-auto mt-4 max-w-[850px] text-[12px] font-medium leading-[1.8] sm:mt-5 sm:text-[14px] md:text-[18px] lg:text-[21px] ">
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
          className=" w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 xl:px-20 ">
          <div className="mx-auto max-w-[1140px]">

            {/* =================================================
                MAIN CARD
            ================================================= */}

            <div
              className=" relative overflow-hidden rounded-[18px] border-2 border-[#8bd0e8] bg-white sm:rounded-[20px] ">
              {/* =================================================
                  CONTENT
              ================================================= */}

              <div
                className=" relative z-10 w-full px-5 py-8 sm:px-7 sm:py-10 md:w-[68%] md:px-10 md:py-12 lg:w-[70%] lg:px-[52px] lg:py-14 xl:w-[72%] ">
                {/* HEADING */}

                <h2
                  className=" text-[30px] font-extrabold leading-[1.12] tracking-tight text-black sm:text-[36px] md:text-[46px] lg:text-[54px] xl:text-[58px] " >
                  Engineering
                  <br />
                  Beyond{" "}
                  <span className="text-[#119dcc]">
                    Construction.
                  </span>
                </h2>

                {/* PARAGRAPH */}

                <p
                  className=" mt-5 max-w-[760px] text-[12px] font-medium leading-[1.9] text-[#171717] sm:mt-6 sm:text-[13px] md:mt-7 md:text-[15px] lg:mt-8  lg:text-[17px] " >
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
                className=" pointer-events-none absolute right-0 top-0 hidden h-full w-[34%] md:block lg:w-[36%] xl:w-[38%]">
                <img
                  src="/images/tower-crane.png"
                  alt="Construction Crane"
                  className=" absolute right-[-15px] top-0 h-auto w-[115%] max-w-none object-contain object-top "/>
              </div>

              {/* =================================================
                  CRANE IMAGE — TABLET / MOBILE
              ================================================= */}

              <div
                className=" relative mt-2 block h-[220px] w-full overflow-hidden md:hidden "
              >
                <img
                  src="/images/tower-crane.png"
                  alt="Construction Crane"
                  className=" absolute bottom-[-20px] left-1/2 h-auto w-[105%] max-w-none -translate-x-1/2 object-contain
                  "
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutEngineering;

