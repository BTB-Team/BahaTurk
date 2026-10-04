
import React from "react";

export default function Engineering() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div
        className=" mx-auto max-w-[1280px] overflow-hidden rounded-[30px] border-2 border-[#e3f2f5] bg-white p-5 sm:p-7  md:p-8  lg:p-7  xl:p-8 ">
        <div
          className=" grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center" >
          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div className="flex flex-col">
            {/* LABEL */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-[3px] w-11 bg-[#159FD3]" />

              <span className="text-[17px] font-semibold text-[#159FD3]">
                ENGINEERING
              </span>
            </div>

            {/* SMALL TITLE */}
            <p className="mb-4 text-[15px] font-medium text-[#111827] sm:text-[16px]">
              ENGINEERED FROM THE GROUND UP
            </p>

            {/* MAIN TITLE */}
            <h1
              className="max-w-[600px] text-[36px] font-extrabold leading-[1.12] tracking-[-1.5px]  sm:text-[42px]  md:text-[46px]  " >
              <span className="text-[#159FD3]">
                Strength Begins
              </span>

              <br />

              <span className="text-[#050505]">
                Below the Surface.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <div
              className=" mt-6 max-w-[650px] text-[14px] font-medium leading-[1.9] text-[#171b24] sm:text-[15px] ">
              <p>
                The strength of Solh Residential Project begins with
                its foundation.
              </p>

              <p className="mt-1">
                Each building is constructed on 96 piles extending
                approximately 20 meters into the ground, followed by
                a reinforced foundation approximately 1.5 meters thick.
              </p>

              <p className="mt-1">
                This engineered foundation system is designed to provide
                effective load transfer, structural stability, and
                long-term durability.
              </p>
            </div>

            {/* =========================
                STAT CARDS
            ========================== */}

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <EngineeringCard icon="piles" value="96" title="Piles per Building" />

              <EngineeringCard icon="depth" value="~20 m" title="Pile Depth" />

              <EngineeringCard icon="layers" value="1.5 m" title="Foundation Thickness" />
            </div>

            {/* BUTTON */}
            <div className="mt-6">
              <button
                type="button"
                className=" group inline-flex  items-center  gap-7  rounded-[14px]  bg-[#159FD3]  px-5  py-3.5  text-[15px]  font-semibold  text-white  transition-all duration-300
                  hover:bg-[#078bbb]
                  hover:shadow-[0_10px_25px_rgba(21,159,211,0.25)]
                "
              >
                <span>
                  Discover Our Engineering
                </span>

                <span
                  className=" text-[25px] leading-none transition-transform duration-300 group-hover:translate-x-1 " >
                  →
                </span>
              </button>
            </div>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================== */}

          <div className="w-full">
            <div
              className="h-[380px]  w-full  overflow-hidden  rounded-[25px]  sm:h-[440px]  md:h-[500px] lg:h-[600px] " >
              <img
                src="/images/engineering1.png"
                alt="Engineering Construction"
                className=" h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02] " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ENGINEERING CARD
============================================================ */

function EngineeringCard({ icon, value, title }) {
  return (
    <div
      className=" min-h-[135px] rounded-[13px] bg-[#d9f3fa] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(21,159,211,0.12)] " >
      {/* ICON */}
      <div
        className=" flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#bceaf5]  " >
        <EngineeringIcon type={icon} />
      </div>

      {/* VALUE */}
      <h3
        className="mt-2 text-[24px] font-extrabold leading-none tracking-[-0.8px]  text-[#087fae] "  >
        {value}
      </h3>

      {/* TITLE */}
      <p
        className=" mt-2 text-[12px] font-semibold leading-[1.35] text-[#17202d] " >
        {title}
      </p>
    </div>
  );
}

/* ============================================================
   ENGINEERING ICONS
============================================================ */

function EngineeringIcon({ type }) {
  /* PILES ICON */
  if (type === "piles") {
    return (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none"
      >
        <path d="M7 25V10" stroke="#159FD3" strokeWidth="3"  strokeLinecap="round"/>

        <path d="M13 25V6" stroke="#159FD3" strokeWidth="3" strokeLinecap="round"  />

        <path  d="M19 25V3"  stroke="#159FD3"  strokeWidth="3"  strokeLinecap="round" />

        <path  d="M25 25V9"  stroke="#159FD3"  strokeWidth="3"  strokeLinecap="round" />

        <path  d="M4 28H28"  stroke="#159FD3"  strokeWidth="2"  strokeLinecap="round" />
      </svg>
    );
  }

  /* DEPTH ICON */
  if (type === "depth") {
    return (
      <svg
        width="29"
        height="29"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M16 4V28"
          stroke="#159FD3"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path d="M11 9L16 4L21 9" stroke="#159FD3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        <path  d="M11 23L16 28L21 23"  stroke="#159FD3"  strokeWidth="2.5"  strokeLinecap="round"  strokeLinejoin="round"
        />
      </svg>
    );
  }

  /* LAYERS ICON */
  if (type === "layers") {
    return (
      <svg  width="30"  height="30"  viewBox="0 0 32 32"  fill="none">
        <path  d="M16 5L27 11L16 17L5 11L16 5Z"  stroke="#159FD3"  strokeWidth="2.5"  strokeLinejoin="round"/>

        <path  d="M5 16L16 22L27 16"  stroke="#159FD3"  strokeWidth="2.5"  strokeLinejoin="round"/>

        <path d="M5 21L16 27L27 21"  stroke="#159FD3" strokeWidth="2.5" strokeLinejoin="round"
        />
      </svg>
    );
  }

  return null;
}

