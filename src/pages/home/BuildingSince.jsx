import React from "react";

/* =========================================================
   BAHA TURK — HOME
   Hero + About + Statistics
   Font: Montserrat from index.css
   ========================================================= */

const IMG = {
  left: "/images/building-left.webp",
  right: "/images/building-right.webp",
  about: "/images/building-left.webp",
};

const BLUE = "#1296D0";
const BLUE_DARK = "#0E78A8";
const BLUE_SOFT = "#E5F5FC";

/* ============================ SPARKLE ================================== */

const Sparkle = ({ className = "" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="#008FD1" aria-hidden="true">
    <path d="M24 0c1.6 12.6 10.8 21.8 24 24-13.2 2.2-22.4 11.4-24 24C22.4 35.4 13.2 26.2 0 24 13.2 21.8 22.4 12.6 24 0z" />
  </svg>
);

/* ================================ARROW =========================== */

const ArrowRight = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 12h18M14 5l7 7-7 7" />
  </svg>
);

/* ===================================ICON PROPS======================= */

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11",
  "aria-hidden": true,
};

/* =========================================================
   CALENDAR ICON
   ========================================================= */

const CalendarIcon = () => (
  <svg {...iconProps}>
    <rect x="6" y="9" width="36" height="32" rx="6" />
    <path d="M15 5v8M33 5v8M6 19h36" />
    <circle cx="16" cy="27" r="1.4" fill="currentColor" />
    <circle cx="24" cy="27" r="1.4" fill="currentColor" />
    <circle cx="32" cy="27" r="1.4" fill="currentColor" />
    <circle cx="16" cy="34" r="1.4" fill="currentColor" />
    <circle cx="24" cy="34" r="1.4" fill="currentColor" />
  </svg>
);

/* =========================================================
   BUILDING ICON
   ========================================================= */

const BuildingIcon = () => (
  <svg {...iconProps}>
    <path d="M6 42V18a3 3 0 0 1 3-3h8M42 42V22a3 3 0 0 0-3-3h-6" />
    <rect x="15" y="6" width="18" height="36" rx="3" />
    <path d="M21 14h6M21 20h6M21 26h6" />
    <path d="M20 42v-8a4 4 0 0 1 8 0v8" />
    <path d="M4 42h40" />
  </svg>
);

/* ==================================CRANE ICON ================================ */

const CraneIcon = () => (
  <svg {...iconProps}>
    <path d="M8 42V6M8 6h30M8 12h30M38 6v8M14 6l-6 6M20 6l-12 6" />
    <path d="M38 14v3" />
    <rect x="16" y="26" width="26" height="16" rx="1" />
    <path d="M22 26v16M28 26v16M34 26v16M16 34h26" />
  </svg>
);

/* ==================================LOCATION ICON=================================== */

const PinIcon = () => (
  <svg {...iconProps}>
    <path d="M24 42s11-10.5 11-20a11 11 0 0 0-22 0c0 9.5 11 20 11 20z" />
    <circle cx="24" cy="22" r="4" />
    <path d="M8 40l5-4M40 40l-5-4M8 40h8M40 40h-8" />
  </svg>
);

/* ================================================= LEAF ICON ========================================== */

const LeafIcon = () => (
  <svg {...iconProps}>
    <path d="M24 44c0-14 6-26 18-34 2 14-2 30-18 34z" />
    <path d="M24 44c2-10 6-18 12-24" />
    <path d="M18 12c-6 0-10 4-10 10 6 0 10-4 10-10z" />
    <path d="M16 28c-5 0-8 3-8 8 5 0 8-3 8-8z" />
  </svg>
);

/* ==============================STATISTICS DATA ============================== */

const STATS = [
  {
    icon: <CalendarIcon />,
    value: "2001",
    label: "Established",
  },
  {
    icon: <BuildingIcon />,
    value: "118",
    label: "Residential Blocks Planned at Solh Residential Project",
  },
  {
    icon: <CraneIcon />,
    value: "20",
    label: "Residential Blocks in Phase One",
  },
  {
    icon: <PinIcon />,
    value: "32 Jeribs",
    label: "Phase One Project Area",
  },
  {
    icon: <LeafIcon />,
    value: "75%",
    label: "Planned Green & Open Space",
  },
];

/* ====================================HERO ============================ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-12 pt-6 sm:px-6 sm:pb-16 md:px-8 lg:px-10 lg:pb-24 xl:px-12">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex justify-center">
          <Sparkle className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11" />
        </div>

        <div className="relative mt-6 sm:mt-8 lg:mt-10 lg:min-h-[560px] xl:min-h-[590px]">

          <img
            src={IMG.left}
            alt="Baha Turk residential towers"
            className="absolute left-[-20px] top-[-10px] hidden h-[320px] w-[340px] rounded-r-[38px] object-cover shadow-sm lg:block xl:left-[-70px] xl:top-[-20px] xl:h-[390px] xl:w-[410px] xl:rounded-r-[45px]"
          />

          <img
            src={IMG.right}
            alt="Baha Turk residential building"
            className="absolute right-[-20px] top-[170px] hidden h-[320px] w-[340px] rounded-l-[38px] object-cover shadow-sm lg:block xl:right-[-70px] xl:top-[175px] xl:h-[390px] xl:w-[410px] xl:rounded-l-[45px]"
          />

          <div className="mx-auto flex w-full max-w-[690px] flex-col items-center px-1 text-center sm:px-3 lg:px-0">
            <h1 className="text-[34px] font-extrabold leading-[1.14] tracking-[-1px] text-black sm:text-[42px] md:text-[50px] lg:text-[58px] xl:text-[60px]">
              If you can{" "}
              <span style={{ color: BLUE }}>dream</span> it,
              <br />
              We can{" "}
              <span style={{ color: BLUE }}>build</span> it.
            </h1>

            <p className="mt-5 max-w-[610px] text-[13px] font-medium leading-[1.8rem] text-neutral-800 sm:mt-6 sm:text-[15px] sm:leading-[1.9rem] md:text-[16px] lg:mt-7">
              We bring a modern and engineering-driven approach to every
              project, creating durable spaces built for long-term value.
              With decades of experience, advanced construction technology,
              and a strong commitment to quality, Baha Turk delivers reliable
              residential developments with precision and confidence.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex w-full max-w-[190px] items-center justify-center rounded-[8px] px-7 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none sm:mt-8 sm:w-auto sm:max-w-none sm:px-9 sm:py-3.5 sm:text-[15px] lg:mt-9"
              style={{ backgroundColor: BLUE }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = BLUE_DARK;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = BLUE;
              }}
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          <img
            src={IMG.left}
            alt="Baha Turk building"
            className="h-[220px] w-full rounded-[24px] object-cover sm:h-[250px] sm:rounded-[28px] md:h-[280px]"
          />

          <img
            src={IMG.right}
            alt="Baha Turk building"
            className="h-[220px] w-full rounded-[24px] object-cover sm:h-[250px] sm:rounded-[28px] md:h-[280px]"
          />
        </div>
      </div>
    </section>
  );
}

/* ===========================ABOUT================================ */

function About() {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-10 xl:px-12">
      <div
        className="relative mx-auto min-h-[500px] w-full max-w-[1200px] overflow-hidden rounded-[26px] sm:min-h-[520px] sm:rounded-[30px] md:min-h-[540px] lg:min-h-[560px] lg:rounded-[40px]"
        style={{ backgroundColor: BLUE }}
      >
        <img
          src={IMG.about}
          alt="Baha Turk construction project"
          className="absolute inset-0 z-0 h-full w-full object-cover object-[72%_center] opacity-100 sm:object-[75%_center] lg:object-right"
        />

        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#1296D0] from-0% via-[#1296D0]/90 via-35% to-transparent to-[75%] sm:via-[#1296D0]/80 sm:to-[72%]" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-[38%] bg-gradient-to-l from-[#1296D0]/[0.10] via-[#1296D0]/[0.04] to-transparent blur-[12px] md:block" />

        <div className="relative z-[3] px-6 py-12 sm:px-10 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
          <h2 className="max-w-[600px] text-[30px] font-extrabold leading-tight tracking-[-0.8px] text-white sm:text-[38px] md:text-[44px] lg:text-[46px]">
            Building Since 2001
          </h2>

          <div className="mt-5 max-w-[570px] space-y-5 text-[13px] font-medium leading-[1.8rem] text-white sm:mt-6 sm:space-y-6 sm:text-[15px] sm:leading-[1.9rem] md:text-[16px]">
            <p>
              Founded in Turkey in 2001, Baha Turk Construction Company brings
              together international experience, technical expertise, advanced
              construction technology, and a strong commitment to quality.
            </p>

            <p>
              Our presence in Afghanistan reflects our vision to introduce
              modern construction methods, raise building standards, and
              develop projects designed around safety, durability, quality,
              and long-term value.
            </p>
          </div>

          <a
            href="#about"
            className="mt-7 inline-flex w-full max-w-[210px] items-center justify-center gap-3 rounded-[8px] bg-white px-5 py-3 text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-100 sm:mt-9 sm:w-auto sm:max-w-none sm:px-6 sm:py-3.5 sm:text-[14px]"
            style={{ color: BLUE }}
          >
            <ArrowRight className="h-5 w-5" />
            About Baha Turk
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================================ STATISTICS =========================== */

function Stats() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <Sparkle className="h-7 w-7 shrink-0 sm:h-9 sm:w-9 lg:h-10 lg:w-10" />

          <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.5px] text-black sm:text-[30px] md:text-[34px] lg:text-[37px]">
            Experience.{" "}
            <span style={{ color: BLUE }}>Scale.</span> Engineering.
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-5">
          {STATS.map((stat) => (
            <li
              key={stat.value}
              className="group flex min-h-[275px] flex-col items-center rounded-[24px] border bg-white px-5 pb-7 pt-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[290px] sm:rounded-[28px] lg:min-h-[315px] lg:rounded-[30px] lg:px-5 lg:pb-8 lg:pt-8"
              style={{ borderColor: `${BLUE}70` }}
            >
              <div
                className="flex h-[95px] w-[95px] shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 sm:h-[105px] sm:w-[105px] lg:h-[118px] lg:w-[118px]"
                style={{ backgroundColor: BLUE_SOFT, color: BLUE }}
              >
                {stat.icon}
              </div>

              <p
                className="mt-4 text-[26px] font-extrabold leading-tight sm:mt-5 sm:text-[28px] lg:text-[30px]"
                style={{ color: BLUE_DARK }}
              >
                {stat.value}
              </p>

              <p className="mt-2 max-w-[205px] text-[13px] font-medium leading-[1.45rem] text-neutral-800 sm:mt-3 sm:text-[14px] sm:leading-[1.55rem]">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ========================================================= MAIN COMPONEN   ========================================================= */

export default function BuildingSince() {
  return (
    <main className="font-english min-h-screen w-full overflow-x-hidden bg-white text-neutral-900 antialiased">
      <Hero />
      <About />
      <Stats />
    </main>
  );
}