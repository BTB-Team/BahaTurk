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
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20" fill="none">
       <path d="M16.0833 17.164C15.9298 17.307 15.8067 17.4795 15.7213 17.6712C15.6359 17.8629 15.59 18.0698 15.5863 18.2796C15.5826 18.4894 15.6212 18.6978 15.6997 18.8923C15.7783 19.0869 15.8953 19.2636 16.0437 19.412C16.192 19.5604 16.3688 19.6773 16.5633 19.7559C16.7579 19.8345 16.9663 19.8731 17.1761 19.8694C17.3859 19.8657 17.5928 19.8198 17.7845 19.7344C17.9761 19.649 18.1486 19.5258 18.2917 19.3723L26.625 11.039C26.9176 10.746 27.082 10.3489 27.082 9.93482C27.082 9.52076 26.9176 9.12362 26.625 8.83065L18.2917 0.497321C18.1486 0.343806 17.9761 0.220677 17.7844 0.135278C17.5928 0.049878 17.3859 0.0039586 17.1761 0.000256451C16.9663 -0.00344379 16.7579 0.0351476 16.5633 0.113732C16.3688 0.192319 16.192 0.309287 16.0437 0.45766C15.8953 0.606032 15.7783 0.782769 15.6997 0.977328C15.6212 1.17189 15.5826 1.38028 15.5863 1.59008C15.59 1.79987 15.6359 2.00678 15.7213 2.19844C15.8067 2.39011 15.9298 2.56261 16.0833 2.70566L21.75 8.37232L1.5625 8.37232C1.1481 8.37232 0.750667 8.53694 0.457641 8.82997C0.164615 9.12299 -2.81211e-06 9.52042 -2.77588e-06 9.93482C-2.73965e-06 10.3492 0.164615 10.7467 0.457641 11.0397C0.750667 11.3327 1.1481 11.4973 1.5625 11.4973L21.75 11.4973L16.0833 17.164Z" fill="#0F99CC"/>
    </svg>
  );
}

/* ==================== IMAGES ==================== */

const IMAGE_BASE = `${import.meta.env.BASE_URL}images/`;

const LEFT_IMAGE = `${IMAGE_BASE}building-left-2.webp`;
const RIGHT_IMAGE = `${IMAGE_BASE}building-right.webp`;
const BUILDING_IMAGE = `${IMAGE_BASE}about.webp`;

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
        // {/* 👈 رنگ بک‌گراند ثابت حذف شد تا عکس و گرادینت با هم ترکیب شوند */}
        className="relative isolate mx-auto w-full max-w-[1200px] overflow-hidden rounded-[36px] bg-[#0F99CC] lg:h-[539px]"
      >
        {/* Background image */}
        <img
          src={BUILDING_IMAGE}
          alt=""
          aria-hidden="true"
          loading="lazy"
          // {/* 👈 کدهای مسدودکننده ماسک حذف شدند. عرض عکس w-full شد تا ساختمان‌ها تا زیر متن‌های سمت چپ کشیده شوند */}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-right opacity-40 lg:opacity-90"
        />

{/*         
          Soft overlay:
          گرادینت کاملاً مایل (۱۵۵ درجه) که از گوشه بالا چپ غلیظ شروع می‌شود 
          و به صورت کاملاً کج به پایین سمت راست محو می‌شود تا ساختمان‌ها نمایان شوند
        */}
        <div  
          aria-hidden="true"  
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(103.86deg,#0F99CC_0%,#0F99CC_30.77%,rgba(15,153,204,0.5)_71.63%,rgba(15,153,204,0)_100%)]"
        />

        {/* About content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-6 py-12 sm:px-10 lg:px-[57px] lg:py-0">
          {/* Heading */}
          <h2 className="w-full text-center text-[32px] font-serif font-extrabold leading-[45px] tracking-[-0.48px] text-white sm:text-[40px] sm:leading-[55px] lg:w-[464px] lg:text-left lg:text-[48px] lg:leading-[65px] lg:tracking-[-0.48px]">
            Building Since 2001
          </h2>

          {/* Description */}
          <div className="mt-4 w-full max-w-[540px] text-[15px] font-normal font-bahaturk-inter leading-[24px] text-white sm:text-[17px] sm:leading-[27px] lg:mt-[6px] lg:h-[270px] lg:text-[20px] lg:leading-[30px]">
            <p>
              Founded in Turkey in 2001, Baha Turk Construction Company brings together international experience, technical expertise, advanced construction technology, and a strong commitment to quality.
              <br /><br />
              Our presence in Afghanistan reflects our vision to introduce modern construction methods, raise building standards, and develop projects designed around safety, durability, quality, and long-term value.
            </p>
          </div>

          {/* About button rewritten with React Router Link */}
          <Link
            to="/about"
            style={{ color: BLUE }}
            className="mt-6 inline-flex h-12 w-fit items-center justify-center gap-2.5 rounded-xl bg-white px-4 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1496D3] lg:mt-[25px] lg:w-[228px] leading-[30px] lg:text-[20px]"
          >
            <ArrowIcon className="h-6 w-6 shrink-0" />
            <span className="font-bahaturk-inter font-semibold tracking-[0%] text-justify">About Baha Turk</span>
          </Link>

        </div>
      </div>
    </div>
  );
}


/* ==================== STATISTICS BLOCK ==================== */

function Stats() {
  return (
    <section className="px-4 py-14 -mt-10 sm:py-16 md:py-20">
      
      {/* باکس والد اصلی برای تراز مرکز */}
      <div className="w-full flex flex-col items-center justify-center">
        
        {/* 
          🔄 سوییچ کامل به سیستم فلکس‌باکس هوشمند:
          - flex-wrap: به کارت‌ها اجازه می‌دهد با کوچک شدن صفحه، به ردیف بعدی هدایت شوند.
          - justify-center: 👈 شاه‌کلید طلایی؛ تضمین می‌کند کارت‌های ردیف دوم همیشه در وسط ردیف قرار بگیرند.
          - gap-6: ایجاد فاصله مساوی و استاندارد بین تک‌تک کارت‌ها در تمام جهات.
        */}
        <ul className="mt-10 flex flex-wrap justify-center gap-6 w-full max-w-[1240px] mx-auto sm:mt-12 lg:mt-14">
          {STATS.map((stat, index) => (
            <li
              key={`${stat.label}-${index}`}
              // {/* عرض ثابت کارت بر اساس ابعاد فیکس فیگما (w-[228px]) حفظ شد تا ساختار داخلی آن در لپ‌تاپ و تبلت هرگز مچاله نشود */}
              className="group flex min-h-[275px] w-[228px] shrink-0 flex-col items-center rounded-[24px] border bg-white px-5 pb-7 pt-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[290px] sm:rounded-[28px] lg:min-h-[315px] lg:rounded-[20px] lg:px-5 lg:pb-8 lg:pt-8"
              style={{ border: "2px solid #0F99CC" }}
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
                className="mt-4 bg-clip-text text-center text-[28px] font-serif font-extrabold leading-[100%] tracking-normal text-transparent sm:mt-5 sm:text-[32px] lg:text-[36px]"
                style={{
                  backgroundImage: STAT_GRADIENT,
                  lineHeight: "100%",
                }}
              >
                {stat.value}
              </p>

              {/* 
                Statistic description:
                👈 بازگشت به فونت اصلی پروژه شما با اصلاح پیکسلی ارتفاع خط (leading-[100%]) برای تطابق مو به مو با فیگما
              */}
              <p className="mt-3 w-[203px] h-[44px] flex items-center justify-center text-center text-[15px] sm:text-[17px] lg:text-[18px] font-bahaturk-inter font-normal leading-[100%] tracking-normal text-black">
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
