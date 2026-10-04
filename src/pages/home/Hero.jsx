
import React from "react";

import {
  ArrowRight,
  Building2,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="  relative  h-[620px]  w-full  overflow-hidden  bg-white " >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <img
        src="/images/Rectangle115.png"
        alt="Baha Turk construction project"
        className=" absolute inset-0 h-full w-full object-cover object-center " />

      {/* =====================================================
          UNIFORM WHITE DUST / FOG
          Same soft haze across the entire image
      ===================================================== */}

      <div
        className=" pointer-events-none absolute inset-0 z-[1] bg-white/[0.58] "/>

      {/* =====================================================
          SOFT WHITE FOG
      ===================================================== */}

      <div
        className=" pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-white/[0.62] via-white/[0.55] to-white/[0.62] blur-[18px] " />

      {/* =====================================================
          SUBTLE CENTER FOG
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[3]
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0.13)_40%,rgba(255,255,255,0.06)_70%,transparent_100%)]
        "
      />

      {/* =====================================================
          TOP RIGHT DECORATIVE CIRCLE
      ===================================================== */}

      <div
        className=" pointer-events-none absolute -right-32 -top-32 z-[4] h-[450px] w-[450px] rounded-full border-[70px] border-white/20 " />

      {/* =====================================================
          CENTER CONTENT
      ===================================================== */}

      <div
        className=" relative z-[10] mx-auto flex h-full w-full max-w-[1200px] items-center justify-center px-6 text-center lg:px-10 " >
        <div
          className=" flex max-w-[850px] flex-col items-center" >
          {/* =================================================
              SECTION LABEL
          ================================================= */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#079bc5]" />

            <span
              className=" text-[10px] font-bold uppercase tracking-[0.22em] text-[#079bc5] " >
              BAHA TURK
            </span>

            <span className="h-[2px] w-10 bg-[#079bc5]" />
          </div>

          {/* =================================================
              SMALL HEADING
          ================================================= */}

          <p
            className="  mb-3  text-xs  font-bold  uppercase  tracking-[0.18em]  text-[#079bc5]/80 ">
            AFGHANISTAN BUILDING THE FUTURE
          </p>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1
            className=" text-3xl font-black leading-[1.03] text-[#079bc5] sm:text-4xl md:text-5xl lg:text-6xl ">
            Building Afghanistan&apos;s
            <br />

            <span className="text-[#079bc5]">
              Future
            </span>{" "}
            with Strength
            <br />

            &amp; Precision.
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className=" mt-5 max-w-[650px] text-sm leading-6 text-black md:text-[15px]  ">
            We build residential, commercial, and infrastructure
            projects with modern engineering, advanced technology,
            and a commitment to quality that lasts.
          </p>

          {/* =================================================
              BUTTON
          ================================================= */}

          <div
            className="  mt-6  flex  flex-wrap  items-center  justify-center  gap-3 ">
            <a
              href="#projects"
              className=" group inline-flex items-center gap-2 rounded-full bg-[#079bc5] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-[#079bc5]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#067f9f] " >
              Explore Our Projects

              <ArrowRight
                size={16}
                className=" transition-transform duration-300 group-hover:translate-x-1 "/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

