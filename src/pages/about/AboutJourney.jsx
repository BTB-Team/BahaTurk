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
    <main
      className="w-full overflow-x-hidden bg-white"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* =====================================================
          1. BEYOND STRUCTURES
      ====================================================== */}

      <section
        className="relative flex min-h-[290px] items-start justify-center overflow-hidden bg-white bg-cover bg-center px-4 py-12 sm:min-h-[340px] sm:px-6 sm:py-14 md:min-h-[400px] md:px-8 md:py-18 lg:min-h-[440px] lg:py-20"
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
        <div className="relative z-10 mx-auto w-full max-w-[850px] px-1 text-center">
          <h1 className="text-[28px] font-extrabold leading-[1.1] tracking-[-0.7px] text-black sm:text-[36px] md:text-[46px] lg:text-[52px]">
            Beyond{" "}
            <span className="text-[#159dcc]">
              Structures.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-[780px] text-[11px] font-medium leading-[1.8] text-[#151515] sm:mt-5 sm:text-[13px] md:text-[17px] lg:text-[20px]">
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

      <section className="relative w-full overflow-hidden bg-[#edfaff] px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1100px]">
          {/* HEADING */}
          <h2 className="mb-6 text-center text-[27px] font-extrabold leading-tight text-black sm:mb-8 sm:text-[34px] md:text-[40px]">
            OUR{" "}
            <span className="text-[#159dcc]">
              JOURNEY.
            </span>
          </h2>

          {/* FIRST ROW */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {journey.slice(0, 3).map((item, index) => (
              <JourneyCard
                key={index}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>

          {/* SECOND ROW */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-auto lg:max-w-[744px]">
            {journey.slice(3).map((item, index) => (
              <JourneyCard
                key={index + 3}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          3. MANAGEMENT MESSAGE
      ====================================================== */}

      <section className="w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-16">
        <div className="mx-auto w-full max-w-[1100px]">
          {/* SMALL HEADING */}
          <div className="mb-4 flex items-center gap-2 sm:mb-5">
            <div className="h-[2px] w-8 bg-[#159dcc] sm:w-[55px]" />

            <span className="text-[9px] font-extrabold tracking-[0.12em] text-[#159dcc] sm:text-[12px] md:text-[15px]">
              MANAGEMENT MESSAGE
            </span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="mb-7 text-[26px] font-extrabold leading-tight text-black sm:mb-8 sm:text-[31px] md:text-[34px]">
            Trust Is Our{" "}
            <span className="text-[#159dcc]">
              Greatest Asset.
            </span>
          </h2>

          {/* CONTENT */}
          <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="space-y-5">
              {messages.map((message, index) => {
                const Icon = message.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    {/* ICON */}
                    <div className="flex h-[42px] w-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#def3fa] sm:h-[48px] sm:w-[60px] sm:rounded-[11px]">
                      <Icon
                        size={21}
                        strokeWidth={2.3}
                        className="text-[#159dcc] sm:h-7 sm:w-7"
                      />
                    </div>

                    {/* VERTICAL LINE */}
                    <div className="hidden h-[48px] w-[2px] shrink-0 bg-[#d9eef4] sm:block" />

                    {/* TEXT */}
                    <p className="min-w-0 pt-1 text-[11px] font-medium leading-[1.7] text-[#161616] sm:text-[13px] md:text-[15px] lg:text-[16px]">
                      {message.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative top-0 w-full overflow-hidden rounded-[15px] sm:rounded-[17px] lg:top-[-20px]">
              <img
                src="/images/management.png"
                alt="Baha Turk Management Team"
                className="h-[220px] w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02] sm:h-[280px] md:h-[320px] lg:h-[350px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// ============================================================
// JOURNEY CARD
// ============================================================

function JourneyCard({ title, text }) {
  return (
    <div className="flex min-h-[145px] w-full flex-col rounded-[15px] border-2 border-[#8bcfe3] bg-white px-4 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:min-h-[155px] sm:rounded-[16px]">
      <h3 className="text-[16px] font-extrabold leading-tight text-[#159dcc] sm:text-[18px]">
        {title}
      </h3>

      <p className="mt-3 text-[11px] font-medium leading-6 text-[#161616] sm:text-[12px] md:text-[13px]">
        {text}
      </p>
    </div>
  );
}

export default AboutJourney;