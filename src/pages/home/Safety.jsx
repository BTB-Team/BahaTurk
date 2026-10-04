import React from "react";


   <link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
  rel="stylesheet"
/>


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
  >
    <path d="M4 12h16" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

const EarthquakeCard = () => (
  <div className="relative h-[545px] w-[545px] shrink-0 origin-top scale-[0.62] min-[640px]:scale-100 -mb-[207px] min-[640px]:mb-0">
    {/* Big circle */}
    <div className="absolute inset-0 rounded-full bg-[#d7eef7]" />

    {/* Card */}
    <div className="absolute -top-[35px] left-1/2 flex h-[463px] w-[313px] -translate-x-1/2 flex-col items-center rounded-[30px] border-[3px] border-[#bfe3f3] bg-gradient-to-bl from-[#d2edf8] via-white to-white shadow-[0_22px_45px_-8px_rgba(18,150,208,0.35)]">
      <p className="mt-[38px] text-[15px] font-medium uppercase tracking-[0.28em] text-gray-400">
        Earthquake Resistance
      </p>

      <p className="mt-[34px] text-[36px] font-extrabold leading-none text-black">
        Up To
      </p>

      <p className="mt-[6px] bg-gradient-to-b from-[#1a9ad6] to-[#0a5a80] bg-clip-text text-[168px] font-extrabold leading-[1.05] tracking-tight text-transparent">
        10
      </p>

      <p className="-mt-[6px] text-[32px] font-bold leading-none text-black">
        Richter scale
      </p>

      <div className="mt-[44px] flex w-full items-center justify-center gap-2 px-[48px]">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#119ad4]" />
        <PulseIcon />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#119ad4]" />
      </div>
    </div>
  </div>
);

export default function Safety() {
  return (
    <section
      className="w-full overflow-hidden bg-white py-16 lg:py-24"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="mx-auto flex max-w-[1456px] flex-col items-center gap-10 px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:px-[120px]">
        {/* ===== Left: text ===== */}
        <div className="w-full max-w-[561px]">
          {/* Label */}
          <div className="flex items-center gap-2">
            <span className="h-[3px] w-10 bg-[#119ad4]" />
            <span className="text-[18px] font-medium text-[#119ad4]">Safety</span>
          </div>

          <p className="mt-3 text-[15px] font-normal uppercase text-gray-900">
            Built with safety in mind
          </p>

          <h2 className="mt-5 text-[38px] font-extrabold leading-[1.15] tracking-tight sm:text-[42px]">
            <span className="block text-[#119ad4]">Engineering for Strength.</span>
            <span className="block text-black">Building for Peace of Mind.</span>
          </h2>

          <div className="mt-8 text-justify text-[15px] font-normal leading-[28px] text-gray-900">
            <p>
              Safety is a fundamental priority in the design and construction of
              Solh Residential Project.
            </p>
            <p>
              Through its integrated structural system and engineering approach,
              the project is designed to deliver strong performance against
              lateral forces and seismic activity.
            </p>
            <p>
              According to the project&apos;s specifications, the structural
              system is designed for earthquake resistance of up to 10 on the
              Richter scale.
            </p>
          </div>

          <a
            href="#quality-safety"
            className="mt-9 inline-flex items-center gap-2 rounded-[14px] bg-[#119ad4] px-5 py-[15px] text-[16px] font-medium text-white transition-colors hover:bg-[#0d86bb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#119ad4]"
          >
            Quality &amp; Safety
            <ArrowRight />
          </a>
        </div>

        {/* ===== Right: card on circle ===== */}
        <div className="flex w-full justify-center overflow-hidden pt-10 lg:w-auto lg:overflow-visible lg:pt-0">
          <EarthquakeCard />
        </div>
      </div>
    </section>
  );
}