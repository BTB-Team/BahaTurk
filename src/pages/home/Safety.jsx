import React from "react";

const PulseIcon = () => (
  <svg
    width="60"
    height="62"
    viewBox="0 0 60 62"
    fill="none"
    stroke="#119ad4"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[42px] w-[42px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px]"
  >
    <path d="M3 28 L17 26 L24 54 L34 4 L44 40 L48 24 L57 32" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-5 w-5 sm:h-6 sm:w-6"
  >
    <path d="M4 12h16" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

const EarthquakeCard = () => {
  return (
    <div
      className="
        relative
        h-[400px]
        w-[400px]
        shrink-0
        sm:h-[480px]
        sm:w-[480px]
        md:h-[545px]
        md:w-[545px]
      "
    >
      {/* Big circle */}

      <div className="absolute inset-0 rounded-full bg-[#d7eef7]" />

      {/* Card */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-[340px]
          w-[245px]
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
          rounded-[24px]
          border-[2px]
          border-[#bfe3f3]
          bg-gradient-to-bl
          from-[#d2edf8]
          via-white
          to-white
          shadow-[0_18px_35px_-8px_rgba(18,150,208,0.35)]
          sm:h-[410px]
          sm:w-[280px]
          sm:rounded-[27px]
          sm:border-[3px]
          md:-top-[35px]
          md:h-[463px]
          md:w-[313px]
          md:-translate-y-0
          md:rounded-[30px]
        "
      >
        {/* Label */}

        <p
          className="
            mt-[28px]
            px-3
            text-center
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-gray-400
            sm:mt-[32px]
            sm:text-[12px]
            sm:tracking-[0.22em]
            md:mt-[38px]
            md:text-[15px]
            md:tracking-[0.28em]
          "
        >
          Earthquake Resistance
        </p>

        {/* Up To */}

        <p
          className="
            mt-[22px]
            text-[25px]
            font-extrabold
            leading-none
            text-black
            sm:mt-[28px]
            sm:text-[30px]
            md:mt-[34px]
            md:text-[36px]
          "
        >
          Up To
        </p>

        {/* 10 */}

        <p
          className="
            mt-[4px]
            bg-gradient-to-b
            from-[#1a9ad6]
            to-[#0a5a80]
            bg-clip-text
            text-[105px]
            font-extrabold
            leading-[1]
            tracking-tight
            text-transparent
            sm:text-[135px]
            md:mt-[6px]
            md:text-[168px]
            md:leading-[1.05]
          "
        >
          10
        </p>

        {/* Richter scale */}

        <p
          className="
            -mt-[3px]
            text-[22px]
            font-bold
            leading-none
            text-black
            sm:text-[27px]
            md:-mt-[6px]
            md:text-[32px]
          "
        >
          Richter scale
        </p>

        {/* Pulse */}

        <div
          className="
            mt-[30px]
            flex
            w-full
            items-center
            justify-center
            gap-2
            px-7
            sm:mt-[36px]
            sm:px-9
            md:mt-[44px]
            md:px-[48px]
          "
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#119ad4]" />

          <PulseIcon />

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#119ad4]" />
        </div>
      </div>
    </div>
  );
};

export default function Safety() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        py-12
        sm:py-16
        md:py-20
        lg:py-24
      "
      style={{
        fontFamily: "Montserrat, Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1456px]
          flex-col
          items-center
          gap-10
          px-4
          sm:px-6
          md:px-8
          lg:flex-row
          lg:items-start
          lg:justify-between
          lg:gap-12
          lg:px-12
          xl:px-[80px]
          2xl:px-[120px]
        "
      >
        {/* =====================================================
            LEFT: TEXT
        ====================================================== */}

        <div className="w-full max-w-[650px] min-w-0 lg:max-w-[561px]">
          {/* Label */}

          <div className="flex items-center gap-2">
            <span className="h-[3px] w-8 bg-[#119ad4] sm:w-10" />

            <span className="text-[14px] font-medium text-[#119ad4] sm:text-[16px] md:text-[18px]">
              Safety
            </span>
          </div>

          {/* Small title */}

          <p className="mt-3 text-[12px] font-normal uppercase text-gray-900 sm:text-[14px] md:text-[15px]">
            Built with safety in mind
          </p>

          {/* Main title */}

          <h2
            className="
              mt-4
              text-[30px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.8px]
              sm:mt-5
              sm:text-[36px]
              md:text-[42px]
              lg:text-[38px]
              xl:text-[42px]
            "
          >
            <span className="block text-[#119ad4]">
              Engineering for Strength.
            </span>

            <span className="block text-black">
              Building for Peace of Mind.
            </span>
          </h2>

          {/* Description */}

          <div
            className="
              mt-6
              text-justify
              text-[13px]
              font-normal
              leading-[1.85]
              text-gray-900
              sm:mt-7
              sm:text-[14px]
              sm:leading-[1.9]
              md:mt-8
              md:text-[15px]
              md:leading-[28px]
            "
          >
            <p>
              Safety is a fundamental priority in the design and construction
              of Solh Residential Project.
            </p>

            <p className="mt-4">
              Through its integrated structural system and engineering
              approach, the project is designed to deliver strong performance
              against lateral forces and seismic activity.
            </p>

            <p className="mt-4">
              According to the project's specifications, the structural system
              is designed for earthquake resistance of up to 10 on the Richter
              scale.
            </p>
          </div>

          {/* Button */}

          <a
            href="#quality-safety"
            className="
              mt-7
              inline-flex
              w-full
              max-w-[250px]
              items-center
              justify-center
              gap-2
              rounded-[12px]
              bg-[#119ad4]
              px-5
              py-3
              text-[14px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0d86bb]
              hover:shadow-[0_10px_25px_rgba(17,154,212,0.22)]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#119ad4]
              sm:mt-8
              sm:w-auto
              sm:max-w-none
              sm:rounded-[14px]
              sm:px-5
              sm:py-[15px]
              sm:text-[16px]
            "
          >
            Quality &amp; Safety

            <ArrowRight />
          </a>
        </div>

        {/* =====================================================
            RIGHT: EARTHQUAKE CARD
        ====================================================== */}

        <div
          className="
            flex
            w-full
            justify-center
            overflow-hidden
            pt-2
            sm:pt-4
            md:pt-6
            lg:w-auto
            lg:shrink-0
            lg:overflow-visible
            lg:pt-0
          "
        >
          <EarthquakeCard />
        </div>
      </div>
    </section>
  );
}