const AboutHeroSection = () => {
  return (
    <section
      className="m-auto max-w-[1440px] relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#1499c5] bg-cover bg-center px-4 py-12 sm:min-h-[320px] sm:px-6 sm:py-14 md:min-h-[360px] md:px-8 md:py-16 lg:min-h-[390px] lg:py-20 "
      style={{
        backgroundImage: "url('/images/aboutPageHeroImage.webp')",
      }}
    >
      {/* BLUE OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-l from-[#084D66]/95 to-[#0F99CC]/95" />

      {/*============================= CONTENT================================== */}

      <div className=" relative z-10    text-center text-white ">
        {/* =======================LABEL========================== */}

        <p className="bahaturk-inter  text-[14px]  md:text-[16px] lg:text-xl font-bold  uppercase leading-[30px]">
          ◆ about baha turk ◆
        </p>

        {/*============================ TITLE =================================*/}

        <h1 className="bahaturk-inter max-w-[799px] text-[22px] min-[480px]:text-[26px] font-[700]   sm:text-[28px] md:text-[38px] lg:text-[48px] xl:leading-[79px]   ">
          Building with Purpose Since 2001.
        </h1>

        {/*================================= DESCRIPTION ==================================*/}

        <p className="bahaturk-inter  mx-auto  max-w-[626px] text-sm font-medium leading-[1.8] sm:text-lg md:text-xl md:leading-[1.7] lg:text-2xl lg:leading-[38px] font-[500]">
          Experience, engineering, innovation, and responsibility brought
          together to create lasting value.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
