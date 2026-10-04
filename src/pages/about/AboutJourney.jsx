
import React from "react";

import {
  Handshake,
  HardHat,
  UsersRound,
  Award,
} from "lucide-react";

// ============================================================
// ABOUT JOURNEY
// ============================================================

const AboutJourney = () => {
  const journey = [
    {
      title: "2001",
      text: "Baha Turk begins its journey in Turkey.",
    },
    {
      title: "International Experience",
      text: "Technical knowledge, construction expertise, and modern methods become central to our approach.",
    },
    {
      title: "Afghanistan",
      text: "Baha Turk enters Afghanistan with a vision to contribute to modern construction and urban development.",
    },
    {
      title: "Solh Residential Project",
      text: "Our first and largest project in Afghanistan brings our engineering approach to the heart of Kabul.",
    },
    {
      title: "The Future",
      text: "We aim to expand through larger developments, advanced construction technologies, and new investment opportunities across Afghanistan.",
    },
  ];

  const messages = [
    {
      icon: Handshake,
      text: "At Baha Turk, we respect the trust placed in us and accept the responsibility that comes with it.",
    },
    {
      icon: HardHat,
      text: "Every project is approached with the level of care, quality, and responsibility that we would expect for our own families.",
    },
    {
      icon: UsersRound,
      text: "We sincerely thank our investors, partners, and families who choose Baha Turk as part of their future.",
    },
    {
      icon: Award,
      text: "We believe the best projects are those that continue to make their builders proud and their residents satisfied long after completion.",
    },
  ];

  return (
    <>
      {/* =====================================================
          MONTSERRAT FONT
      ====================================================== */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

        .about-journey-page {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      <main className="about-journey-page w-full overflow-hidden bg-white">

        {/* =====================================================
            1. BEYOND STRUCTURES
        ====================================================== */}

        <section
          className=" relative flex min-h-[320px] items-start justify-center overflow-hidden bg-white bg-cover bg-center px-5 py-14 sm:min-h-[360px] sm:px-6 sm:py-16 md:min-h-[420px] md:px-8 md:py-20 lg:min-h-[440px] "
          style={{
            backgroundImage: "url('/images/blueprint-bg.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* LIGHT OVERLAY */}

          <div className="absolute inset-0 bg-white/[0.72]" />

          {/* CONTENT */}

          <div
            className=" relative z-10 mx-auto w-full max-w-[850px] px-1 text-center ">
            <h1
              className=" text-[30px] font-extrabold leading-[1.1] tracking-tight text-black sm:text-[38px] md:text-[48px] lg:text-[52px]">
              Beyond{" "}
              <span className="text-[#159dcc]">
                Structures.
              </span>
            </h1>

            <p
              className=" mx-auto mt-5 max-w-[780px] text-[12px] font-medium leading-[1.8] text-[#151515] sm:text-[14px] md:text-[18px] lg:text-[20px] ">
              We believe every building should be more than a structure.
              It should be a place where people live safely, families grow
              with confidence, and investments continue to create value.
              This philosophy drives every decision we make from engineering
              design to project execution.
            </p>
          </div>
        </section>

        {/* =====================================================
            2. OUR JOURNEY
        ====================================================== */}

        <section
          className=" relative w-full bg-[#edfaff] px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 " >
          <div className="mx-auto max-w-[1100px]">

            {/* HEADING */}

            <h2
              className=" mb-6 text-center text-[28px] font-extrabold leading-tight text-black sm:text-[34px] md:text-[40px] ">
              OUR{" "}
              <span className="text-[#159dcc]">
                JOURNEY.
              </span>
            </h2>

            {/* =================================================
                FIRST ROW — 3 CARDS
            ================================================= */}

            <div
              className="  grid  grid-cols-1  gap-4  sm:grid-cols-2  lg:grid-cols-3 ">
              {journey.slice(0, 3).map((item, index) => (
                <JourneyCard
                  key={index}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>

            {/* =================================================
                SECOND ROW — 2 CARDS CENTERED + EQUAL SIZE
            ================================================= */}

            <div
              className=" mt-4 flex flex-wrap justify-center gap-4 ">
              {journey.slice(3).map((item, index) => (
                <div
                  key={index + 3}
                  className=" w-full sm:w-[calc(50%-8px)] lg:h-[170px] lg:w-[360px] "
                >
                  <JourneyCard
                    title={item.title}
                    text={item.text}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            3. MANAGEMENT MESSAGE
        ====================================================== */}

        <section
          className=" w-full bg-white px-5 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-20 " >
          <div className="mx-auto max-w-[1100px]">

            {/* SMALL HEADING */}

            <div
              className=" mb-4 flex items-center gap-2 sm:mb-5 "
            >
              <div className="h-[2px] w-[40px] bg-[#159dcc] sm:w-[55px]" />

              <span
                className=" text-[10px] font-extrabold tracking-[0.14em] text-[#159dcc] sm:text-[12px] md:text-[15px] ">
                MANAGEMENT MESSAGE
              </span>
            </div>

            {/* MAIN HEADING */}

            <h2
              className=" mb-8 text-[27px] font-extrabold leading-tight text-black sm:text-[31px] md:text-[34px]" >
              Trust Is Our{" "}
              <span className="text-[#159dcc]">
                Greatest Asset.
              </span>
            </h2>

            {/* CONTENT */}

            <div
              className=" grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12" >
              {/* LEFT CONTENT */}

              <div className="space-y-5">
                {messages.map((message, index) => {
                  const Icon = message.icon;

                  return (
                    <div
                      key={index}
                      className=" flex items-start gap-3 sm:gap-4 "
>
                      {/* ICON */}

                      <div
                        className=" flex h-[44px] w-[50px] shrink-0 items-center justify-center rounded-[11px] bg-[#def3fa] sm:h-[48px] sm:w-[60px] ">
                        <Icon
                          size={23}
                          strokeWidth={2.3}
                          className="text-[#159dcc] sm:h-7 sm:w-7"
                        />
                      </div>

                      {/* VERTICAL LINE */}

                      <div
                        className=" hidden h-[48px] w-[2px] bg-[#d9eef4] sm:block " />

                      {/* TEXT */}

                      <p
                        className=" pt-1 text-[11px] font-medium leading-[1.7] text-[#161616] sm:text-[13px] md:text-[15px] lg:text-[16px]
                        "
                      >
                        {message.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* =================================================
                  RIGHT IMAGE
              ================================================= */}

              <div
                className=" relative top-0 w-full overflow-hidden rounded-[17px] lg:top-[-20px] ">
                <img
                  src="/images/management.png"
                  alt="Baha Turk Management Team"
                  className=" h-[240px] w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02] sm:h-[280px] md:h-[320px] lg:h-[350px] " />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

/* ============================================================
   JOURNEY CARD
============================================================ */

function JourneyCard({ title, text }) {
  return (
    <div
      className=" flex h-full min-h-[145px] w-full flex-col rounded-[16px] border-2 border-[#8bcfe3] bg-white px-4 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:min-h-[155px] lg:min-h-0 lg:h-full">
      <h3
        className=" text-[17px] font-extrabold leading-tight text-[#159dcc] sm:text-[18px] ">
        {title}
      </h3>

      <p
        className=" mt-3 text-[11px] font-medium leading-6 text-[#161616] sm:text-[12px] md:text-[13px]
        "
      >
        {text}
      </p>
    </div>
  );
}

export default AboutJourney;

