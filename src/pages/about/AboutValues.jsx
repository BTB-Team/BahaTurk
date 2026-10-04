
import React from "react";

import {
  Target,
  Eye,
  Award,
  Lightbulb,
  ShieldCheck,
  Sprout,
  HardHat,
  Headphones,
  Gem,
} from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      icon: Award,
      title: (
        <>
          Uncompromising
          <br />
          Quality
        </>
      ),
    },
    {
      icon: Lightbulb,
      title: "Innovation",
    },
    {
      icon: ShieldCheck,
      title: (
        <>
          Integrity &
          <br />
          Transparency
        </>
      ),
    },
    {
      icon: Sprout,
      title: "Responsibility",
    },
    {
      icon: HardHat,
      title: "Safety First",
    },
    {
      icon: Headphones,
      title: (
        <>
          Customer
          <br />
          Commitment
        </>
      ),
    },
    {
      icon: Gem,
      title: (
        <>
          Sustainable
          <br />
          Development
        </>
      ),
    },
  ];

  return (
    <>
      {/* =====================================================
          MONTSERRAT FONT
      ====================================================== */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

        .about-values-page {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      <section
        className=" about-values-page relative w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-16 " >
        {/* =====================================================
            BLUE BACKGROUND STRIP
        ====================================================== */}

        <div
          className=" pointer-events-none absolute left-0 top-[165px] z-0 h-[120px] w-full bg-[#149dcc] sm:top-[185px] sm:h-[135px] md:top-[220px] md:h-[160px] lg:top-[230px] lg:h-[170px]"/>

        {/* =====================================================
            VISION & MISSION
        ====================================================== */}

        <div
          className=" relative z-10 mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2 md:gap-6" >
          {/* ========================= VISION ========================= */}

          <div
            className=" flex min-h-[430px] flex-col rounded-[18px] border-2 border-[#8bcfe3] bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[450px] sm:px-7 sm:py-7 md:min-h-[500px] md:px-8 md:py-8">
            <div
              className=" mb-4 flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[#dff3fa] sm:h-[74px] sm:w-[74px] md:h-[82px] md:w-[82px] "
            >
              <Eye
                size={38}
                strokeWidth={2.8}
                className="text-[#159dcc] sm:h-10 sm:w-10 md:h-[47px] md:w-[47px]"
              />
            </div>

            <h3
              className="  mb-4  text-[14px]  font-extrabold  tracking-[2px]  text-[#159dcc]  sm:text-[17px]  md:mb-5  md:text-[20px]">
              OUR VISION
            </h3>

            <h2
              className=" text-[26px] font-extrabold leading-[1.2] text-black sm:text-[30px] md:text-[32px] ">
              Building a Better
              <br />
              Standard for{" "}
              <span className="text-[#159dcc]">
                Tomorrow.
              </span>
            </h2>

            <p
              className=" mt-5 text-[12px] font-medium leading-[1.7] text-[#151515] sm:text-[14px] md:text-[16px] lg:text-[17px] lg:leading-[1.65] ">
              To become one of the region's most trusted construction
              companies by delivering innovative, sustainable, and
              high-quality developments that redefine urban living while
              creating lasting value for communities.
            </p>

            <div className="mt-auto pt-8">
              <div className="h-[4px] w-[70px] bg-[#159dcc] sm:w-[80px] md:w-[92px]" />
            </div>
          </div>

          {/* ========================= MISSION ========================= */}

          <div
            className=" flex min-h-[430px] flex-col rounded-[18px] border-2 border-[#8bcfe3] bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[450px] sm:px-7 sm:py-7 md:min-h-[500px] md:px-8 md:py-8 ">
            <div
              className=" mb-4 flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full bg-[#dff3fa] sm:h-[74px] sm:w-[74px] md:h-[82px  md:w-[82px]">
              <Target
                size={38}
                strokeWidth={2.8}
                className="text-[#159dcc] sm:h-10 sm:w-10 md:h-[47px] md:w-[47px]"
              />
            </div>

            <h3
              className=" mb-4 text-[14px] font-extrabold tracking-[2px] text-[#159dcc] sm:text-[17px] md:mb-5 md:text-[20px] ">
              OUR MISSION
            </h3>

            <h2
              className=" text-[26px] font-extrabold leading-[1.2] text-black sm:text-[30px] md:text-[32px]
              "
            >
              Engineering with
              <br />
              <span className="text-[#159dcc]">
                Responsibility.
              </span>
            </h2>

            <p
              className=" mt-5 text-[12px] font-medium leading-[1.7] text-[#151515] sm:text-[14px] md:text-[16px] lg:text-[17px] lg:leading-[1.65]
              "
            >
              Our mission is to design and deliver world-class construction
              projects by applying advanced engineering technologies,
              maintaining the highest quality standards, ensuring safety,
              and creating modern environments for living and investment.
            </p>

            <div className="mt-auto pt-8">
              <div className="h-[4px] w-[70px] bg-[#159dcc] sm:w-[80px] md:w-[92px]" />
            </div>
          </div>
        </div>

        {/* =====================================================
            WHAT WE BUILD ON
        ====================================================== */}

        <div
          className=" relative z-10 mx-auto mt-12 w-full max-w-[1150px] sm:mt-14 md:mt-16 lg:mt-20 ">
          {/* HEADING */}

          <h2
            className=" mb-7 text-center text-[28px] font-extrabold leading-tight text-black sm:text-[32px] md:mb-9 md:text-[38px] lg:text-[40px] ">
            What We{" "}
            <span className="text-[#159dcc]">
              Build
            </span>{" "}
            On.
          </h2>

          {/* =================================================
              FIRST ROW — 4 CARDS
          ================================================= */}

          <div
            className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 ">
            {values.slice(0, 4).map((item, index) => {
              const Icon = item.icon;

              return (
                <ValueCard
                  key={index}
                  icon={Icon}
                  title={item.title}
                />
              );
            })}
          </div>

          {/* =================================================
              SECOND ROW — 3 CARDS CENTERED
          ================================================= */}

          <div
            className=" mt-4 flex flex-wrap justify-center gap-4 "
          >
            {values.slice(4).map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index + 4}
                  className=" w-full sm:w-[calc(50%-8px)] md:w-[calc(25%-12px)]
                  "
                >
                  <ValueCard
                    icon={Icon}
                    title={item.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

/* ============================================================
   VALUE CARD
============================================================ */

function ValueCard({ icon: Icon, title }) {
  return (
    <div
      className="
   flex min-h-[150px] w-full flex-col items-center justify-center rounded-[17px] border-2 border-[#8bcfe3] bg-white px-4 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#159dcc] hover:shadow-md sm:min-h-[165px] md:min-h-[175px] lg:min-h-[187px] "
    >
      {/* ICON */}

      <div
        className="  mb-3  flex  h-[62px]  w-[62px]  items-center  justify-center  rounded-full  bg-[#dff3fa]  sm:h-[68px]  sm:w-[68px]  md:h-[72px]  md:w-[72px]
        "
      >
        <Icon
          size={34}
          strokeWidth={2.7}
          className=" text-[#159dcc] sm:h-9 sm:w-9 md:h-10 md:w-10
          "
        />
      </div>

      {/* TITLE */}

      <h3
        className=" text-[14px] font-extrabold leading-[1.3] text-black sm:text-[16px] md:text-[18px] lg:text-[19px]
        "
      >
        {title}
      </h3>
    </div>
  );
};

export default AboutValues;

