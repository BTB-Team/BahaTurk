
const BG_IMAGE = `${import.meta.env.BASE_URL}images/hero-bg.webp`;

export default function Hero() {
  return (
    <section className="relative isolate mt-0 h-auto w-full max-w-none overflow-hidden bg-white lg:mt-[190px] lg:h-[461px]">
      {/* Background image - full width */}
      <div
        aria-hidden="true"  className="absolute inset-0 -z-20 bg-cover bg-center"  style={{ backgroundImage: `url("${BG_IMAGE}")` }}
      />

      {/* White overlay gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,rgba(255,255,255,0.81)_50%,#ffffff_100%)]"
      />

      {/* Hero content */}
      <div className="mx-auto flex h-full w-full max-w-[1100px] flex-col items-center justify-center px-5 py-16 text-center sm:px-8">
        <h1 className="text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-[#1496D3] sm:text-[44px] lg:text-[56px] lg:leading-[74px]">
          Building Afghanistan’s Future
          <br className="hidden sm:block" /> with Strength &amp; Precision
        </h1>

        <p className="mt-5 max-w-[840px] text-base font-medium leading-8 text-neutral-950 sm:text-lg lg:text-[20px] lg:leading-9">
          Baha Turk Construction delivers modern, durable, and high-quality
          residential projects through advanced engineering and Tunnel Form
          construction technology.
        </p>

        <div className="mt-8 flex items-center justify-center gap-[11px]">
          <span
            aria-hidden="true"
            className="h-px w-8 bg-[#1496D3] sm:w-14 lg:w-[76px]"
          />

          <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-[#1496D3] px-4 py-2.5 text-base font-medium text-white transition hover:bg-[#0F7DB3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1496D3] focus-visible:ring-offset-2 lg:h-[42px] lg:px-3 lg:py-0 lg:text-[20px]">
            Explore Our Projects
          </a>

          <span aria-hidden="true" className="h-px w-8 bg-[#1496D3] sm:w-14 lg:w-[76px]"/>
        </div>
      </div>
    </section>
  );
}
