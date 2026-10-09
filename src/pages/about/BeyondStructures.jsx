const BeyondStructures = () => {
  {
    /* =====================================================
          1. BEYOND STRUCTURES
      ====================================================== */
  }
  return (
    <section
      className="mt-15 bahaturk-inter relative z-[20]  flex min-h-[290px] items-center justify-center overflow-hidden bg-white bg-cover bg-center px-4 py-12 sm:min-h-[340px] sm:px-6 sm:py-14 md:min-h-[400px] md:px-8 md:py-18 lg:min-h-[429px] max-w-[1440px]  m-auto lg:py-20"
      style={{
        backgroundImage: "url('/images/blueprint-bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/24" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[850px] px-1 text-center">
        <h1 className="text-[28px] font-[700] leading-[1.1]  text-black sm:text-[36px] md:text-[46px] lg:text-[64px] lg:leading-[33px]">
          Beyond <span className="text-[#159dcc]">Structures.</span>
        </h1>

        <p className="mx-auto mt-4 max-w-[780px] text-[11px] font-medium leading-[1.8] text-[#151515] sm:mt-7 sm:text-[13px] md:text-[17px] lg:text-[24px] lg:leading-[36px] tracking-[0.7px]">
          We believe every building should be more than a structure. It should
          be a place where people live safely, families grow with confidence,
          and investments continue to create value. This philosophy drives every
          decision we make from engineering design to project execution.
        </p>
      </div>
    </section>
  );
};

export default BeyondStructures;
