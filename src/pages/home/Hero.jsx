import { Link } from "react-router-dom";
const BG_IMAGE = `${import.meta.env.BASE_URL}images/hero-bg.webp`;

export default function Hero() {
  return (
    <section className="bahaturk-inter relative isolate mt-9 h-auto w-full max-w-none overflow-hidden bg-white  lg:h-[461px]">
      {/* Background image - full width */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center lg:left[-11px]"
        style={{ backgroundImage: `url("${BG_IMAGE}")` }}
      />

      {/* White overlay gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.81)_62.67%,#FFFFFF_101.84%)]"
      />

      {/* Hero content */}
      <div className="mx-auto flex h-full w-full max-w-[1100px] lg:mt-10 flex-col items-center justify-start px-5 py-16 text-center sm:px-8 lg:pt-2">
        {/* Main heading */}
        <h1 className="text-[36px] text-center font-serif font-extrabold leading-[1.2] tracking-[0%] text-[#1496D3] sm:text-[48px] lg:w-[933px] lg:text-[64px] lg:leading-[75px]">
          Building Afghanistan’s Future
          <br className="hidden sm:block" /> with Strength &amp; Precision
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-[840px] text-center font-inter-medium leading-8 text-neutral-950 sm:text-lg lg:text-[20px] lg:leading-[37px] tracking-[0%]">
          Baha Turk Construction delivers modern, durable, and high-quality
          residential projects through advanced engineering and Tunnel Form
          construction technology.
        </p>

        {/* Projects button */}
        <div className="mt-8 flex items-center justify-center gap-[11px]">
          <span
            aria-hidden="true"
            className="h-[2px] w-8 bg-[#1496D3] sm:w-14 lg:w-[76px]"
          />

          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-xl bg-[#1496D3] px-4 py-2.5 text-base font-medium text-white transition hover:bg-[#0F7DB3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1496D3] focus-visible:ring-offset-2 lg:h-[42px] lg:px-3 lg:py-0 lg:text-[20px]"
          >
            Explore Our Projects
          </Link>

          <span
            aria-hidden="true"
            className="h-[2px] w-8 bg-[#1496D3] sm:w-14 lg:w-[76px]"
          />
        </div>
      </div>
    </section>
  );
}
