
/* =========================================================
   BAHA TURK — HOME
   Hero + About + Statistics
   Font: Montserrat
   Main Color: #1296D0
   ========================================================= */

const IMG = {
  left: "/images/building-left.png",
  right: "/images/building-right.png",
  about: "/images/building-since1.png",
};

const BLUE = "#1296D0";
const BLUE_DARK = "#0E78A8";
const BLUE_SOFT = "#E5F5FC";

/* =========================================================
   SPARKLE — BLUE
   ========================================================= */

const Sparkle = ({ className = "" }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    fill="#008FD1"
    aria-hidden="true"
  >
    <path d="M24 0c1.6 12.6 10.8 21.8 24 24-13.2 2.2-22.4 11.4-24 24C22.4 35.4 13.2 26.2 0 24 13.2 21.8 22.4 12.6 24 0z" />
  </svg>
);

/* =========================================================
   ARROW
   ========================================================= */

const ArrowRight = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 12h18M14 5l7 7-7 7" />
  </svg>
);

/* =========================================================
   ICON PROPS
   ========================================================= */

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-11 w-11",
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

/* =========================================================
   CRANE ICON
   ========================================================= */

const CraneIcon = () => (
  <svg {...iconProps}>
    <path d="M8 42V6M8 6h30M8 12h30M38 6v8M14 6l-6 6M20 6l-12 6" />
    <path d="M38 14v3" />
    <rect x="16" y="26" width="26" height="16" rx="1" />
    <path d="M22 26v16M28 26v16M34 26v16M16 34h26" />
  </svg>
);

/* =========================================================
   LOCATION ICON
   ========================================================= */

const PinIcon = () => (
  <svg {...iconProps}>
    <path d="M24 42s11-10.5 11-20a11 11 0 0 0-22 0c0 9.5 11 20 11 20z" />
    <circle cx="24" cy="22" r="4" />
    <path d="M8 40l5-4M40 40l-5-4M8 40h8M40 40h-8" />
  </svg>
);

/* =========================================================
   LEAF ICON
   ========================================================= */

const LeafIcon = () => (
  <svg {...iconProps}>
    <path d="M24 44c0-14 6-26 18-34 2 14-2 30-18 34z" />
    <path d="M24 44c2-10 6-18 12-24" />
    <path d="M18 12c-6 0-10 4-10 10 6 0 10-4 10-10z" />
    <path d="M16 28c-5 0-8 3-8 8 5 0 8-3 8-8z" />
  </svg>
);

/* =========================================================
   STATISTICS DATA
   ========================================================= */

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

/* =========================================================
   HERO
   ========================================================= */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-6 sm:px-8 lg:pb-28">
      <div className="mx-auto max-w-[1440px]">

        {/* Top Sparkle */}
        <div className="flex justify-center">
          <Sparkle className="h-9 w-9 sm:h-11 sm:w-11" />
        </div>

        <div className="relative mt-8 min-h-[560px] lg:mt-10">

          {/* LEFT IMAGE */}
          <img
            src={IMG.left}
            alt="Baha Turk residential towers"
            className=" absolute left-[-30px] -top-[20px] hidden h-[390px] w-[410px] rounded-r-[45px] object-cover shadow-sm lg:block xl:left-[-70px] " />

          {/* RIGHT IMAGE */}
          <img
            src={IMG.right}
            alt="Baha Turk residential building"
            className=" absolute right-[-30px] top-[175px] hidden h-[390px] w-[410px] rounded-l-[45px] object-cover shadow-sm lg:block xl:right-[-70px] "/>

          {/* CENTER CONTENT */}
          <div className="mx-auto flex max-w-[690px] flex-col items-center text-center">

            <h1
              className=" text-[42px] font-extrabold leading-[1.12] tracking-[-1.5px] text-black sm:text-[52px] lg:text-[58px] "
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              If you can{" "}
              <span style={{ color: BLUE }}>dream</span> it,
              <br />
              We can{" "}
              <span style={{ color: BLUE }}>build</span> it.
            </h1>

            <p
              className=" mt-7 max-w-[610px] text-[15px] font-medium leading-[2rem] text-neutral-800 sm:text-[16px]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              We bring a modern and engineering-driven approach to every
              project, creating durable spaces built for long-term value.
              With decades of experience, advanced construction technology,
              and a strong commitment to quality, Baha Turk delivers reliable
              residential developments with precision and confidence.
            </p>

            {/* BUTTON */}
            <a
              href="#contact"
              className=" mt-9 inline-flex items-center justify-center rounded-[8px] px-9 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none"
              style={{
                backgroundColor: BLUE,
                fontFamily: "Montserrat, sans-serif",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = BLUE_DARK)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = BLUE)
              }
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* MOBILE IMAGES */}
        <div className="mt-[-20px] grid grid-cols-2 gap-4 lg:hidden">
          <img
            src={IMG.left}
            alt="Baha Turk building"
            className="h-48 w-full rounded-[28px] object-cover"
          />

          <img
            src={IMG.right}
            alt="Baha Turk building"
            className="h-48 w-full rounded-[28px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ABOUT
   ========================================================= */

function About() {
  return (
    <section className="px-5 py-6 sm:px-8 lg:py-10">
      <div
        className=" relative mx-auto max-w-[1200px] overflow-hidden rounded-[34px] lg:rounded-[40px]"
        style={{ backgroundColor: BLUE }} >

        {/* =====================================================
            BUILDING SINCE IMAGE
            z-index: 1
           ===================================================== */}
        <img
          src={IMG.about}
          alt=""
          className=" absolute inset-0 z-[0] h-full w-full object-cover object-right opacity-100"/>

        {/* =====================================================
            BLUE OVERLAY
            z-index: 2
           ===================================================== */}
        <div
          className=" absolute inset-0 z-[2] bg-gradient-to-r from-[#1296D0] from-0% via-[#1296D0]/80 via-35% to-transparent to-70% " />

        {/* =====================================================
            VERY LIGHT BLUE DUST
            z-index: 2
           ===================================================== */}
        <div
          className=" pointer-events-none absolute inset-y-0 right-0 z-[2] w-[38%] bg-gradient-to-l from-[#1296D0]/[0.14] via-[#1296D0]/[0.07] to-transparent blur-[12px]"/>

        {/* =====================================================
            CONTENT
            z-index: 3
           ===================================================== */}
        <div
          className=" relative z-[3] px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <h2
            className=" text-[38px] font-extrabold leading-tight tracking-[-1px] text-white sm:text-[46px]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Building Since 2001
          </h2>

          <div
            className=" mt-6 max-w-[570px] space-y-6 text-[15px] font-medium leading-[1.9rem] text-white sm:text-[16px]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
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

          {/* ABOUT BUTTON */}
          <a
            href="#about"
            className=" mt-9 inline-flex items-center gap-3 rounded-[8px] bg-white px-6 py-3.5 text-[14px] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-100"
            style={{
              color: BLUE,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <ArrowRight className="h-5 w-5" />
            About Baha Turk
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATISTICS
   ========================================================= */

function Stats() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">

        {/* TITLE */}
        <div className="flex items-center justify-center gap-3 text-center">
          <Sparkle className="h-8 w-8 shrink-0 sm:h-10 sm:w-10" />

          <h2
            className=" text-[29px] font-extrabold leading-tight tracking-[-0.7px] text-black sm:text-[37px] "
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Experience.{" "}
            <span style={{ color: BLUE }}>Scale.</span>{" "}
            Engineering.
          </h2>
        </div>

        {/* CARDS */}
        <ul
          className=" mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STATS.map((stat) => (
            <li
              key={stat.value}
              className=" group flex min-h-[315px] flex-col items-center rounded-[30px] border bg-white px-5 pb-8 pt-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                borderColor: `${BLUE}70`,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {/* ICON CIRCLE */}
              <div
                className=" flex h-[118px] w-[118px] shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: BLUE_SOFT,
                  color: BLUE,
                }}
              >
                {stat.icon}
              </div>

              {/* NUMBER */}
              <p
                className=" mt-5 text-[30px] font-extrabold leading-tight"
                style={{ color: BLUE_DARK }}
              >
                {stat.value}
              </p>

              {/* LABEL */}
              <p
                className=" mt-3 max-w-[205px] text-[14px] font-medium leading-[1.55rem] text-neutral-800">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function BuildingSince() {
  return (
    <main
      className="min-h-screen bg-white text-neutral-900 antialiased"
      style={{
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <Hero />
      <About />
      <Stats />
    </main>
  );
}

