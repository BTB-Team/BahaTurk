import React from "react";

export default function Engineering() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-20 2xl:px-24">
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          overflow-hidden
          rounded-[24px]
          border-2
          border-[#e3f2f5]
          bg-white
          p-4
          sm:rounded-[28px]
          sm:p-6
          md:p-7
          lg:p-8
          xl:rounded-[30px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-10
            xl:gap-12
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="flex min-w-0 flex-col">
            {/* LABEL */}

            <div className="mb-4 flex items-center gap-2 sm:mb-5">
              <span className="h-[3px] w-8 shrink-0 bg-[#159FD3] sm:w-11" />

              <span className="text-[14px] font-semibold tracking-wide text-[#159FD3] sm:text-[16px] md:text-[17px]">
                ENGINEERING
              </span>
            </div>

            {/* SMALL TITLE */}

            <p className="mb-3 text-[13px] font-medium text-[#111827] sm:mb-4 sm:text-[15px] md:text-[16px]">
              ENGINEERED FROM THE GROUND UP
            </p>

            {/* MAIN TITLE */}

            <h2
              className="
                max-w-[600px]
                text-[32px]
                font-extrabold
                leading-[1.12]
                tracking-[-1.2px]
                sm:text-[38px]
                md:text-[44px]
                lg:text-[42px]
                xl:text-[46px]
              "
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <span className="text-[#159FD3]">
                Strength Begins
              </span>

              <br />

              <span className="text-[#050505]">
                Below the Surface.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <div
              className="
                mt-5
                max-w-[650px]
                text-[13px]
                font-medium
                leading-[1.8]
                text-[#171b24]
                sm:mt-6
                sm:text-[14px]
                sm:leading-[1.9]
                md:text-[15px]
              "
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <p>
                The strength of Solh Residential Project begins with
                its foundation.
              </p>

              <p className="mt-2">
                Each building is constructed on 96 piles extending
                approximately 20 meters into the ground, followed by
                a reinforced foundation approximately 1.5 meters thick.
              </p>

              <p className="mt-2">
                This engineered foundation system is designed to provide
                effective load transfer, structural stability, and
                long-term durability.
              </p>
            </div>

            {/* =================================================
                STAT CARDS
            ================================================== */}

            <div
              className="
                mt-6
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-3
                sm:gap-3
                lg:mt-7
              "
            >
              <EngineeringCard
                icon="piles"
                value="96"
                title="Piles per Building"
              />

              <EngineeringCard
                icon="depth"
                value="~20 m"
                title="Pile Depth"
              />

              <EngineeringCard
                icon="layers"
                value="1.5 m"
                title="Foundation Thickness"
              />
            </div>

            {/* BUTTON */}

            <div className="mt-6 sm:mt-7">
              <button
                type="button"
                className="
                  group
                  inline-flex
                  w-full
                  max-w-[280px]
                  items-center
                  justify-between
                  gap-5
                  rounded-[12px]
                  bg-[#159FD3]
                  px-5
                  py-3
                  text-[13px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#078bbb]
                  hover:shadow-[0_10px_25px_rgba(21,159,211,0.25)]
                  sm:w-auto
                  sm:max-w-none
                  sm:gap-7
                  sm:rounded-[14px]
                  sm:px-5
                  sm:py-3.5
                  sm:text-[14px]
                  md:text-[15px]
                "
                style={{
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <span>Discover Our Engineering</span>

                <span
                  className="
                    text-[22px]
                    leading-none
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    sm:text-[25px]
                  "
                >
                  →
                </span>
              </button>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <div className="w-full min-w-0">
            <div
              className="
                h-[260px]
                w-full
                overflow-hidden
                rounded-[20px]
                sm:h-[340px]
                sm:rounded-[22px]
                md:h-[430px]
                lg:h-[540px]
                lg:rounded-[25px]
                xl:h-[600px]
              "
            >
              <img
                src="/images/engineering1.png"
                alt="Engineering Construction"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-500
                  hover:scale-[1.02]
                "
              />
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
      className="
        flex
        min-h-[125px]
        flex-col
        rounded-[12px]
        bg-[#d9f3fa]
        px-4
        py-3
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_8px_20px_rgba(21,159,211,0.12)]
        sm:min-h-[135px]
        sm:rounded-[13px]
      "
      style={{
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* ICON */}

      <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#bceaf5] sm:h-[42px] sm:w-[42px]">
        <EngineeringIcon type={icon} />
      </div>

      {/* VALUE */}

      <h3
        className="
          mt-2
          text-[22px]
          font-extrabold
          leading-none
          tracking-[-0.6px]
          text-[#087fae]
          sm:text-[24px]
        "
      >
        {value}
      </h3>

      {/* TITLE */}

      <p className="mt-2 text-[11px] font-semibold leading-[1.35] text-[#17202d] sm:text-[12px]">
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
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7 25V10"
          stroke="#159FD3"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M13 25V6"
          stroke="#159FD3"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M19 25V3"
          stroke="#159FD3"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M25 25V9"
          stroke="#159FD3"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M4 28H28"
          stroke="#159FD3"
          strokeWidth="2"
          strokeLinecap="round"
        />
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
        aria-hidden="true"
      >
        <path
          d="M16 4V28"
          stroke="#159FD3"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path
          d="M11 9L16 4L21 9"
          stroke="#159FD3"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M11 23L16 28L21 23"
          stroke="#159FD3"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  /* LAYERS ICON */

  if (type === "layers") {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 5L27 11L16 17L5 11L16 5Z"
          stroke="#159FD3"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <path
          d="M5 16L16 22L27 16"
          stroke="#159FD3"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <path
          d="M5 21L16 27L27 21"
          stroke="#159FD3"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return null;
}