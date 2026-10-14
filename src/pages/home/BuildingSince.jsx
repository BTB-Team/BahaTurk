import React from "react";

/* ==================== COLORS ==================== */

const BLUE = "#1496D3";

const STAT_GRADIENT = "linear-gradient(180deg, #0F99CC 0%, #084D66 100%)";

const fadeLeft = "linear-gradient(to right, transparent 0%, #000 45%)";

/* ==================== ICONS ==================== */

function Sparkle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill={BLUE}
    >
      <path d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z" />
    </svg>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h18M14 5l7 7-7 7" />
    </svg>
  );
}

/* ==================== IMAGES ==================== */

const IMAGE_BASE = `${import.meta.env.BASE_URL}images/`;

const LEFT_IMAGE = `${IMAGE_BASE}building-left.webp`;
const RIGHT_IMAGE = `${IMAGE_BASE}building-right.webp`;
const BUILDING_IMAGE = `${IMAGE_BASE}building-since.webp`;

/* ==================== STATISTICS DATA ==================== */

const STATS = [
  {
    image: `${IMAGE_BASE}established.svg`,
    value: "2001",
    label: "Established",
    imageAlt: "Company establishment",
  },
  {
    image: `${IMAGE_BASE}residential-blocks.svg`,
    value: "118",
    label: "Residential Blocks Planned at Solh Residential Project",
    imageAlt: "Residential apartment blocks",
  },
  {
    image: `${IMAGE_BASE}phase-one.svg`,
    value: "20",
    label: "Residential Blocks in Phase One",
    imageAlt: "Residential construction project",
  },
  {
    image: `${IMAGE_BASE}project-area.svg`,
    value: "32 Jeribs",
    label: "Phase One Project Area",
    imageAlt: "Residential project area",
  },
  {
    image: `${IMAGE_BASE}green-space.svg`,
    value: "75%",
    label: "Planned Green & Open Space",
    imageAlt: "Green residential community",
  },
];

/* ==================== CTA BLOCK ==================== */

function CtaBlock() {
  return (
    <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 overflow-x-clip">
      <div
        id="contact"
        className="relative isolate min-h-[549px] w-full overflow-hidden bg-white lg:h-[549px] lg:rounded-none"
      >
        {/* Left image */}

        <img
          src={LEFT_IMAGE}
          alt="Baha Turk residential towers"
          loading="lazy"
          className="absolute left-0 top-[80px] z-0 hidden h-[330px] w-[24.43%] rounded-r-[40px] bg-slate-200 object-cover lg:block"
        />

        {/* Right image */}

        <img
          src={RIGHT_IMAGE}
          alt="Baha Turk residential tower"
          loading="lazy"
          className="absolute right-0 bottom-0 z-0 hidden h-[334px] w-[24.37%] rounded-l-[40px] bg-slate-200 object-cover lg:block"
        />

        {/* CTA content */}

        <div className="relative z-10 mx-auto flex flex-col items-center px-5 pb-10 pt-10 text-center sm:px-8 lg:h-full lg:justify-center lg:px-0 lg:py-0">
          <Sparkle className="h-14 w-14 lg:h-[72px] lg:w-[72px]" />

          <h2 className="mt-4 w-full text-[32px] font-extrabold leading-tight tracking-[-0.48px] text-black sm:text-[40px] lg:mt-[14px] lg:w-[590px] lg:text-[48px] lg:leading-[65px]">
            If you can <span style={{ color: BLUE }}>dream</span> it,
            <br />
            We can <span style={{ color: BLUE }}>build</span> it.
          </h2>

          <p className="mt-3 w-full max-w-[534px] text-center text-base font-medium leading-8 text-black sm:text-lg lg:mt-[6px] lg:text-[20px] lg:leading-[40px]">
            We bring a modern and engineering-driven approach to every project,
            creating durable spaces built for long-term value. With decades of
            experience, advanced construction technology, and a strong
            commitment to quality, Baha Turk delivers reliable residential
            developments with precision and confidence.
          </p>

          <a
            href="#contact-form"
            style={{ backgroundColor: BLUE }}
            className="mt-6 inline-flex h-[54px] w-[226px] shrink-0 items-center justify-center rounded-[12px] text-[18px] font-semibold text-white transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:mt-[22px]"
          >
            Get in touch
          </a>
        </div>

        {/* Images: mobile and tablet */}

        <div className="relative z-10 grid grid-cols-2 gap-3 px-5 pb-10 sm:px-8 lg:hidden">
          <img
            src={LEFT_IMAGE}
            alt="Baha Turk residential towers"
            loading="lazy"
            className="h-44 w-full rounded-2xl bg-slate-200 object-cover sm:h-64"
          />

          <img
            src={RIGHT_IMAGE}
            alt="Baha Turk residential tower"
            loading="lazy"
            className="h-44 w-full rounded-2xl bg-slate-200 object-cover sm:h-64"
          />
        </div>
      </div>
    </div>
  );
}

/* ==================== ABOUT BLOCK ==================== */

function AboutBlock() {
  return (
    <div className="px-5 py-12 sm:px-8 lg:pb-[60px] lg:pt-[102px]">
      <div
        id="about"
        style={{ backgroundColor: BLUE }}
        className="relative isolate mx-auto w-full max-w-[1200px] overflow-hidden rounded-[36px] lg:h-[539px]"
      >
        {/* Background image */}

        <img
          src={BUILDING_IMAGE}
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{
            WebkitMaskImage: fadeLeft,
            maskImage: fadeLeft,
          }}
          className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-full object-cover object-right opacity-20 lg:w-[62%] lg:opacity-70"
        />

        {/* Soft overlay */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-[#1496D3]/15"
        />

        {/* Blue gradient */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#1296D0] via-[#1496D3]/45 to-transparent"
        />

        {/* About content */}

        <div className="relative z-10 flex h-full flex-col justify-center px-6 py-12 sm:px-10 lg:px-[57px] lg:py-0">
          <h2 className="text-[32px] font-extrabold leading-tight tracking-[-0.48px] text-white sm:text-[40px] lg:w-[464px] lg:text-[48px] lg:leading-[65px]">
            Building Since 2001
          </h2>

          <div className="mt-2 max-w-[547px] text-base font-normal leading-7 text-white lg:mt-0 lg:h-[270px] lg:text-[20px] lg:leading-[30px]">
            <p>
              Founded in Turkey in 2001, Baha Turk Construction Company brings
              together international experience, technical expertise, advanced
              construction technology, and a strong commitment to quality.
            </p>

            <p className="mt-7 lg:mt-[30px]">
              Our presence in Afghanistan reflects our vision to introduce
              modern construction methods, raise building standards, and develop
              projects designed around safety, durability, quality, and
              long-term value.
            </p>
          </div>

          <a
            href="#about-baha-turk"
            style={{ color: BLUE }}
            className="mt-6 inline-flex h-12 w-fit items-center gap-2.5 rounded-xl bg-white px-4 text-base font-semibold transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1496D3] lg:mt-[25px] lg:w-[228px] lg:text-[18px]"
          >
            <ArrowIcon className="h-6 w-6" />
            About Baha Turk
          </a>
        </div>
      </div>
    </div>
  );
}

/* ==================== STATISTICS BLOCK ==================== */

function Stats() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Section heading */}

        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="flex min-h-[65px] w-full max-w-[671px] items-center justify-center gap-2 px-2 text-center text-[28px] font-extrabold leading-[40px] tracking-[-0.4px] sm:text-[34px] lg:h-[65px] lg:text-[40px] lg:leading-[65px]">
            <Sparkle className="h-6 w-6 shrink-0 sm:h-8 sm:w-8 lg:h-9 lg:w-9" />

            <span className="text-black">Experience.</span>
            <span className="text-[#0F99CC]">Scale.</span>
            <span className="text-black">Engineering.</span>
          </h2>
        </div>

        {/* Statistics cards */}

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-5">
          {STATS.map((stat, index) => (
            <li
              key={`${stat.label}-${index}`}
              className="group flex min-h-[275px] flex-col items-center rounded-[24px] border bg-white px-5 pb-7 pt-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[290px] sm:rounded-[28px] lg:min-h-[315px] lg:rounded-[30px] lg:px-5 lg:pb-8 lg:pt-8"
              style={{ borderColor: `${BLUE}70` }}
            >
              {/* Statistic image */}

              <div className="flex h-[95px] w-[95px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#E5F5FC] transition-transform duration-300 group-hover:scale-105 sm:h-[105px] sm:w-[105px] lg:h-[118px] lg:w-[118px]">
                <img
                  src={stat.image}
                  alt={stat.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Gradient statistic value */}

              <p
                className="mt-4 bg-clip-text text-center text-[28px] font-extrabold leading-[1] tracking-normal text-transparent sm:mt-5 sm:text-[32px] lg:text-[36px]"
                style={{
                  backgroundImage: STAT_GRADIENT,
                  lineHeight: "100%",
                }}
              >
                {stat.value}
              </p>

              {/* Statistic description */}

              <p className="mt-3 max-w-[205px] text-center text-[13px] font-medium leading-[1.45rem] text-neutral-800 sm:text-[14px] sm:leading-[1.55rem]">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ==================== MAIN COMPONENT ==================== */

export default function BuildingSince() {
  return (
    <section>
      <CtaBlock />
      <AboutBlock />
      <Stats />
    </section>
  );
}
