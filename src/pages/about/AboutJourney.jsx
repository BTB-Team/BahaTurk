import Handshake from "../../assets/vector/ph_handshake.webp";
import HardHat from "../../assets/vector/catppuccin_hardhat.webp";
import UsersRound from "../../assets/vector/fluent_people-team-20-regular.webp";
import Award from "../../assets/vector/hugeicons_star-award-02.webp";

// ============================================================
// ABOUT JOURNEY
// ============================================================

const AboutJourney = () => {
  const messages = [
    {
      icon: Handshake,
      text: "At Baha Turk, we respect the trust placed in us and accept the responsibility that comes with it.",
    },
    {
      icon: HardHat,
      text: "Every project is approached with the level of care, quality, and responsibility that we would expect for our own families.",
    },
    {
      icon: UsersRound,
      text: "We sincerely thank our investors, partners, and families who choose Baha Turk as part of their future.",
    },
    {
      icon: Award,
      text: "We believe the best projects are those that continue to make their builders proud and their residents satisfied long after completion.",
    },
  ];

  return (
    <main
      className="w-full overflow-x-hidden bg-white  max-w-[1440px] m-auto"
      style={{ fontFamily: "bahaturk-inter, sans-serif" }}
    >
      {/* =====================================================
          3. MANAGEMENT MESSAGE
      ====================================================== */}

      <section className="w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-16">
        <div className="mx-auto w-full max-w-[1200px]">
          {/* SMALL HEADING */}
          <div className="mb-3 flex items-end ">
            <div className="relative bottom-1  md:bottom-2 h-[2px] w-8 bg-[#159dcc] sm:w-[55px]" />

            <div className="text-[12px] font-[700] tracking-[0.5px] text-[#159dcc] sm:text-[12px] md:text-[15px] lg:text-[20px]">
              <p>MANAGEMENT MESSAGE</p>
            </div>
          </div>

          {/* MAIN HEADING */}
          <h2 className="mb-7 text-[26px] font-[700] leading-tight text-black sm:mb-8 sm:text-[31px] md:text-[34px] lg:text-[36px]">
            Trust Is Our <span className="text-[#159dcc]">Greatest Asset.</span>
          </h2>

          {/* CONTENT */}
          <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            {/* LEFT CONTENT */}
            <div className="space-y-5">
              {messages.map((message, index) => {
                const Icon = message.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center sm:items-start gap-3 sm:gap-4"
                  >
                    {/* ICON */}
                    <div className="flex h-[42px] w-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#def3fa] sm:h-[58px] sm:w-[70px] sm:rounded-[14px]">
                      <img src={Icon} />
                    </div>

                    {/* VERTICAL LINE */}
                    <div className="hidden h-[60px] w-[2px] shrink-0 bg-[#d9eef4] sm:block" />

                    {/* TEXT */}
                    <p className="min-w-0 pt-1 text-[14px] font-medium leading-[1.7] text-[#161616]  md:text-[16px] lg:text-[20px] lg:leading-[35px]">
                      {message.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative top-0 w-full overflow-hidden rounded-[15px] sm:rounded-[17px] lg:top-[-20px]">
              <img
                src="/images/management.png"
                alt="Baha Turk Management Team"
                className="h-[220px] w-full  object-top transition-transform duration-500 hover:scale-[1.02] sm:h-[280px] md:h-[320px] lg:h-[350px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutJourney;
