import { Link } from "react-router-dom";
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

const LEFT_IMAGE = `${IMAGE_BASE}building-left-2.webp`;
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
    // تگ والد اصلی - کلاس h-[620px] فقط در اسکرین‌های بسیار بزرگ (2xl) اعمال می‌شود
    <div className="relative w-full mx-auto overflow-hidden max-w-[1658px] bg-white min-h-[620px] 2xl:h-[620px]">
      
      {/* 
        تصویر سمت چپ:
        👈 کلاس‌ها به 2xl:block و 2xl:left-... تغییر یافتند تا در اسکرین‌های زیر ۱۲۸۰ و خود ۱۲۸۰ کاملاً مخفی بماند و تداخل ایجاد نکند
      */}
      <img
        src={LEFT_IMAGE}
        alt="Baha Turk residential towers"
        loading="lazy"
        className="absolute top-[71px] z-0 hidden h-[383px] w-[490px] max-w-none rounded-r-[36px] bg-slate-200 object-cover 2xl:block 2xl:left-[calc(50%-800px)]"
      />

      {/* 
        تصویر سمت راست:
        👈 کلاس‌ها به 2xl:block و 2xl:left-... تغییر یافتند تا در اسکرین‌های زیر ۱۲۸۰ و خود ۱۲۸۰ کاملاً مخفی بماند و تداخل ایجاد نکند
      */}
      <img  
        src={RIGHT_IMAGE}  
        alt="Baha Turk residential tower"  
        loading="lazy"  
        className="absolute top-[231px] z-0 hidden h-[389px] w-[490px] max-w-none rounded-l-[36px] bg-slate-200 object-cover 2xl:block 2xl:left-[calc(50%+286px)]"
      />

      {/* باکس محتوای وسط که همیشه در مرکز هندسی مانیتور قفل است */}
      {/* تمام بریک‌پوینت‌های موقعیت‌دهی مطلق وسط به 2xl: تبدیل شدند تا در اسکرین‌های متوسط فضای متن کاملاً باز بماند */}
      <div className="relative z-10 2xl:ml-[-10px] flex flex-col items-center px-10 py-20 text-center sm:px-8 2xl:absolute 2xl:bottom-3 2xl:left-1/2 2xl:-translate-x-1/2 2xl:h-full 2xl:w-[590px] 2xl:justify-center 2xl:px-0 2xl:py-0">
        <Sparkle className="h-14 w-14 2xl:h-[88px] 2xl:w-[88px] 2xl:mb-10" />

        <h2 className="font-bahaturk-inter text-center mt-4 w-full text-[32px] font-extrabold leading-tight tracking-[-0.48px] text-black sm:text-[40px] 2xl:mt-[14px] 2xl:w-[750px] 2xl:text-[48px] 2xl:leading-[65px] tracking-[-1px]">
          If you can <span style={{ color: BLUE }}>dream</span> it,
          <br />
          We can <span style={{ color: BLUE }}>build</span> it.
        </h2>

        <p className="font-inter-medium mt-3 px-7 w-full max-w-[600px] text-center text-base font-medium leading-8 text-black sm:text-lg 2xl:mt-[6px] 2xl:text-[20px] 2xl:leading-[40px]">
          We bring a modern and engineering-driven approach to every project, creating durable spaces built for long-term value. With decades of experience, advanced construction technology, and a strong commitment to quality, Baha Turk delivers reliable residential developments with precision and confidence.
        </p>

        {/* Contact button converted to React Router Link */}
        <Link
          to="/contact" // 👈 Changed from href="#contact" to a clean SPA route path string
          style={{ backgroundColor: BLUE }}
          className="font-inter-medium mt-6 inline-flex h-[54px] w-[226px] shrink-0 items-center justify-center rounded-[12px] text-[18px] font-semibold text-white transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 2xl:mt-[22px]"
        >
          Get in touch
        </Link>
      </div>

      {/* نمایش تصاویر در حالت موبایل، تبلت و دسکتاپ‌های تا مرز ۱۲۸۰ پیکسل */}
      {/* 👈 کلاس به 2xl:hidden تغییر یافت تا در اسکرین‌های ۱۰۲۴px و ۱۲۸۰px این گریدِ دو ستونه‌ی زیبا و امن نمایش داده شود */}
      <div className="relative z-10 grid grid-cols-2 gap-3 px-5 pb-10 sm:px-8 2xl:hidden">
        <img
          src={LEFT_IMAGE}
          alt="Baha Turk residential towers"
          loading="lazy"
          className="h-44 w-full rounded-[36px] bg-slate-200 object-cover sm:h-64 lg:h-80"
        />
        <img
          src={RIGHT_IMAGE}
          alt="Baha Turk residential tower"
          loading="lazy"
          className="h-44 w-full rounded-[36px] bg-slate-200 object-cover sm:h-64 lg:h-80"
        />
      </div>

    </div>
  );
}



/* ==================== ABOUT BLOCK ==================== */

function AboutBlock() {
  return (
    <div className="bahaturk-inter px-5 py-12 sm:px-8 lg:pb-[60px] lg:pt-[102px]">
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
          className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-full object-cover object-right opacity-40 lg:w-[62%] lg:opacity-90"
        />

        {/* Soft overlay */}
        <div  aria-hidden="true"  className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(103.86deg,rgba(15,153,204,0.95)_0%,rgba(15,153,204,0.85)_25%,rgba(15,153,204,0.4)_65%,rgba(15,153,204,0)_100%)]
"
        />

        {/* Soft blue gradient behind the text */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(103.86deg, rgba(15, 153, 204, 0.01) 0%, rgba(15, 153, 204, 0.02) 30.77%, rgba(15, 153, 204, 0.04) 55%, rgba(15, 153, 204, 0.03) 80%, rgba(15, 153, 204, 0.01) 100%)",
          }}
        />

        {/* Subtle blue tint at the top-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{ background: "radial-gradient(ellipse at top right, rgba(20, 150, 211, 0.12) 0%, rgba(20, 150, 211, 0.05) 28%, transparent 58%)",
          }}
        />

        {/* About content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-6 py-12 sm:px-10 lg:px-[57px] lg:py-0">
          {/* Heading */}
          <h2 className="w-full text-center text-[32px] font-extrabold leading-[45px] tracking-[-0.48px] text-white sm:text-[40px] sm:leading-[55px] lg:w-[464px] lg:text-left lg:text-[48px] lg:leading-[65px] lg:tracking-[-0.48px]">
            Building Since 2001
          </h2>

          {/* Description */}
          <div className="mt-4 w-full max-w-[547px] text-[15px] font-normal leading-[24px] text-white sm:text-[17px] sm:leading-[27px] lg:mt-[6px] lg:h-[270px] lg:text-[18px] lg:leading-[28px]">
            <p>
              Founded in Turkey in 2001, Baha Turk Construction Company brings
              together international experience, technical expertise, advanced
              construction technology, and a strong commitment to quality.
            </p>

            <p className="mt-5 lg:mt-[30px]">
              Our presence in Afghanistan reflects our vision to introduce
              modern construction methods, raise building standards, and
              develop projects designed around safety, durability, quality,
              and long-term value.
            </p>
          </div>


          {/* About button rewritten with React Router Link */}
          <Link
            to="/about" // 👈 Changed from href="#about-baha-turk" to clean route path string
            style={{ color: BLUE }}
            className="mt-6 inline-flex h-12 w-fit items-center justify-center gap-2.5 rounded-xl bg-white px-4 text-base font-semibold transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1496D3] lg:mt-[25px] lg:w-[228px] lg:text-[18px]"
          >
            <ArrowIcon className="h-6 w-6 shrink-0" />
            <span>About Baha Turk</span>
          </Link>

        </div>
      </div>
    </div>
  );
}

/* ==================== STATISTICS BLOCK ==================== */

function Stats() {
  return (
    <section className="bahaturk-inter px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Section heading */}
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="flex min-h-[65px] w-full max-w-[671px] flex-wrap items-center justify-center gap-x-2 gap-y-0 px-2 text-center text-[28px] font-extrabold leading-[40px] tracking-[-0.4px] sm:flex-nowrap sm:text-[34px] lg:h-[65px] lg:text-[40px] lg:leading-[65px]">
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
                <img  src={stat.image}  alt={stat.imageAlt}  loading="lazy"  className="h-full w-full object-cover"
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
              <p className="mt-3 w-full max-w-[203px] text-center text-[16px] font-normal leading-[1.2] tracking-normal text-neutral-800 sm:text-[17px] lg:text-[18px] lg:leading-[100%]">
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
