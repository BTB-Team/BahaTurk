import React from "react";

const AboutEngineering = () => {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* =====================================================
          ENGINEERING SECTION
      ====================================================== */}

      <section className="w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
        <div className="mx-auto w-full max-w-[1200px]">
          {/* ==================== MAIN CARD ==================== */}

          <div className="relative h-full overflow-hidden rounded-[18px] border-2 border-[#8bd0e8] bg-white sm:rounded-[20px] md:rounded-[24px]">
            {/* ==================== CONTENT ==================== */}

            <div className="relative z-[20] flex">
              {/* HEADING AND PARAGRAPH */}

              <div className="w-full p-5 sm:p-7 md:p-10 lg:p-12 min-[1211px]:w-[72%] min-[1211px]:p-12">
                {/* HEADING */}

                <h2 className="relative z-[20] bahaturk-inter max-w-[686px] text-[28px] font-[700] leading-[1.3] text-black sm:text-[34px] md:text-[44px] xl:text-[64px] xl:leading-[79px]">
                  Engineering
                  <br />
                  Beyond
                  <span className="text-[#119dcc]"> Construction.</span>
                </h2>

                {/* PARAGRAPH */}

                <p className="relative z-[20] bahaturk-inter mt-2 w-full text-justify text-[14px] font-[500] leading-[1.9] text-[#171717] sm:text-[16px] md:text-[18px] min-[1211px]:w-[1080px] xl:w-[763px] xl:text-[20px] xl:leading-[41px] xl:tracking-[0.2px]">
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

              {/* ==================== CRANE IMAGE ==================== */}

              <div className="absolute right-0 top-0 z-[10] hidden xl:block">
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
