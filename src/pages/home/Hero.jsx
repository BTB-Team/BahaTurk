import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[540px] w-full overflow-hidden bg-white sm:min-h-[580px] md:min-h-[600px] lg:h-[620px] lg:min-h-0">
      {/* ============================ BACKGROUND IMAGE ============================ */}
      <img
        src="/images/Rectangle-115.webp"
        alt="Baha Turk construction project"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* ============================ UNIFORM WHITE DUST / FOG ============================ */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-white/[0.58]" />

      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-white/[0.68] via-white/[0.55] to-white/[0.68] blur-[18px]" />

      {/* ============================ SUBTLE CENTER FOG ============================ */}
      <div className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.14)_40%,rgba(255,255,255,0.06)_70%,transparent_100%)]" />

      {/* ============================ TOP RIGHT DECORATIVE CIRCLE ============================ */}
      <div className="pointer-events-none absolute -right-24 -top-24 z-[4] h-[280px] w-[280px] rounded-full border-[40px] border-white/20 sm:-right-28 sm:-top-28 sm:h-[360px] sm:w-[360px] sm:border-[55px] md:-right-32 md:-top-32 md:h-[420px] md:w-[420px] md:border-[65px] lg:h-[450px] lg:w-[450px] lg:border-[70px]" />

      {/* ============================ CENTER CONTENT ============================ */}
      <div className="font-english relative z-[10] mx-auto flex min-h-[540px] w-full max-w-[1200px] items-center justify-center px-4 py-16 text-center sm:min-h-[580px] sm:px-6 sm:py-20 md:min-h-[600px] md:px-8 lg:h-full lg:min-h-0 lg:px-10">
        <div className="flex w-full max-w-[850px] flex-col items-center">

          <div className="mb-3 flex items-center justify-center gap-2 sm:mb-4 sm:gap-3">
            <span className="h-[2px] w-7 bg-[#079bc5] sm:w-10" />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#079bc5] sm:text-[10px] sm:tracking-[0.22em]">
              BAHA TURK
            </span>

            <span className="h-[2px] w-7 bg-[#079bc5] sm:w-10" />
          </div>

          {/* ============================ SMALL HEADING ============================ */}
          <p className="mb-3 max-w-[90%] text-[10px] font-bold uppercase tracking-[0.12em] text-[#079bc5]/80 sm:text-xs sm:tracking-[0.18em]">
            AFGHANISTAN BUILDING THE FUTURE
          </p>

          {/* ============================ MAIN HEADING ============================ */}
          <h1 className="max-w-[900px] text-[32px] font-black leading-[1.06] tracking-[-0.8px] text-[#079bc5] sm:text-[40px] sm:tracking-[-1px] md:text-[50px] lg:text-[60px] xl:text-[64px]">
            Building Afghanistan&apos;s
            <br />
            <span className="text-[#079bc5]">Future</span> with Strength
            <br />
            &amp; Precision.
          </h1>

          {/* ============================ DESCRIPTION ============================ */}
          <p className="mt-5 max-w-[580px] px-2 text-[12px] font-medium leading-[1.7] text-black sm:mt-6 sm:px-0 sm:text-[14px] sm:leading-6 md:max-w-[650px] md:text-[15px]">
            We build residential, commercial, and infrastructure projects with
            modern engineering, advanced technology, and a commitment to
            quality that lasts.
          </p>

          {/* ============================ BUTTON ============================ */}
          <div className="mt-6 flex w-full items-center justify-center sm:mt-7">
            <a
              href="#projects"
              className="group inline-flex w-full max-w-[230px] items-center justify-center gap-2 rounded-full bg-[#079bc5] px-5 py-3 text-[11px] font-bold text-white shadow-lg shadow-[#079bc5]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#067f9f] sm:w-auto sm:max-w-none sm:px-6 sm:py-3 sm:text-xs"
            >
              Explore Our Projects

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}