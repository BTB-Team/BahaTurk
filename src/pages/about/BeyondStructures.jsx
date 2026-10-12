const BeyondStructures = () => {
  return (
    <section
      className="relative z-[20] mx-auto mt-15 flex min-h-[290px] w-full max-w-[1440px] items-center justify-center overflow-hidden bg-white bg-cover bg-center px-4 py-10 bahaturk-inter sm:min-h-[320px] sm:px-6 sm:py-12 md:min-h-[360px] md:px-8 md:py-14 min-[769px]:max-[1200px]:min-h-[390px] min-[769px]:max-[1200px]:px-10 min-[769px]:max-[1200px]:py-16 lg:min-h-[429px] lg:py-20"
      style={{
        backgroundImage: "url('/images/blueprint-bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* LIGHT OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-white/24" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[850px] px-1 text-center min-[769px]:max-[1200px]:max-w-[760px]">
        {/* HEADING */}
        <h1 className="text-[28px] font-[700]  text-black sm:text-[34px] md:text-[42px] min-[769px]:max-[1200px]:text-[52px] lg:text-[64px] lg:leading-[1.2]">
          Beyond <span className="text-[#159dcc]">Structures.</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-1 max-w-[780px] text-[13px] font-medium leading-[1.8] text-[#151515] sm:mt-2 sm:text-[14px] md:mt-3 md:text-[16px] md:leading-[1.8] min-[769px]:max-[1200px]:mt-7 min-[769px]:max-[1200px]:text-[19px] min-[769px]:max-[1200px]:leading-[1.9] lg:mt-7 lg:text-[24px] lg:leading-[36px]">
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
