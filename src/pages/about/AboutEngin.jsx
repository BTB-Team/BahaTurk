import React from "react";

const AboutEngineering = () => {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* =====================================================
          ENGINEERING SECTION
      ====================================================== */}

      <section className=" w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14  ">
        <div className="mx-auto w-full max-w-[1200px]  ">
          {/*======================== MAIN CARD=================== */}

          <div className="h-full relative overflow-hidden rounded-[18px] border-2 border-[#8bd0e8] bg-white sm:rounded-[20px] md:rounded-[24px] ">
            {/* =================================================
                CONTENT
            ================================================= */}
            {/* Mohammadi Code: relative z-10 w-full px-5 py-7 sm:px-7  md:w-[68%] md:px-10  lg:w-[70%] lg:px-[52px]  xl:w-[72%] */}
            <div className="relative flex  ">
              {/* HEADING */}
              <div className="p-12">
                <h2 className="bahaturk-inter max-w-[686px] text-[28px] font-[700] leading-[1.3] text-black sm:text-[34px] md:text-[44px] lg:text-[64px] lg:leading-[79px] ">
                  Engineering
                  <br />
                  Beyond
                  <span className="text-[#119dcc]"> Construction.</span>
                </h2>

                {/* PARAGRAPH */}

                <p className="bahaturk-inter text-justify w-[763px] text-[20px] font-[500] leading-[41px] lg:tracking-[0.8px] text-[#171717] mt-2">
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

              <div className="absolute right-0 ">
                <img src="/images/tower-crane.png" alt="Construction Crane" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutEngineering;
