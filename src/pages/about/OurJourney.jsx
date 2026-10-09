const OurJourney = () => {
  // ============================================================
  // ABOUT JOURNEY
  // ============================================================

  const journey = [
    {
      title: "2001",
      text: "Baha Turk begins its journey in Turkey.",
    },
    {
      title: "International Experience",
      text: "Technical knowledge, construction expertise, and modern methods become central to our approach.",
    },
    {
      title: "Afghanistan",
      text: "Baha Turk enters Afghanistan with a vision to contribute to modern construction and urban development.",
    },
    {
      title: "Solh Residential Project",
      text: "Our first and largest project in Afghanistan brings our engineering approach to the heart of Kabul.",
    },
    {
      title: "The Future",
      text: "We aim to expand through larger developments, advanced construction technologies, and new investment opportunities across Afghanistan.",
    },
  ];

  return (
    <div>
      {/* =====================================================
          2. OUR JOURNEY
      ====================================================== */}
      <section className="bahaturk-inter max-w-[1440px] m-auto relative w-full overflow-hidden bg-[#edfaff] px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:py-16">
        <div className="mx-auto w-full max-w-[1124px] lg:tracking-[0.7px]">
          {/* HEADING */}
          <h2 className="mb-6 text-center text-[27px] font-[700] leading-tight text-black sm:mb-8 sm:text-[34px] md:text-[40px] lg:text-[48px] ">
            OUR <span className="text-[#159dcc]">JOURNEY.</span>
          </h2>

          {/* FIRST ROW */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {journey.slice(0, 3).map((item, index) => (
              <JourneyCard key={index} title={item.title} text={item.text} />
            ))}
          </div>

          {/* SECOND ROW */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-auto lg:max-w-[744px]">
            {journey.slice(3).map((item, index) => (
              <JourneyCard
                key={index + 3}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurJourney;

// ============================================================
// JOURNEY CARD
// ============================================================

function JourneyCard({ title, text }) {
  return (
    <div className="flex min-h-[145px] w-full flex-col rounded-[15px] border-2 border-[#8bcfe3] bg-white px-4 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:min-h-[155px] sm:rounded-[16px]">
      <h3 className="text-[16px] font-[700] leading-tight text-[#159dcc] sm:text-[18px] lg:text-[24px]">
        {title}
      </h3>

      <p className="mt-2 mb-2 text-[13px] font-medium leading-6 text-[#161616]  lg:text-[16px] lg:leading-[25px] ">
        {text}
      </p>
    </div>
  );
}
