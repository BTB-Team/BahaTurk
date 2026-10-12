import { Eye } from "lucide-react";
import mission from "../../assets/vector/mission.webp";
import eye from "../../assets/vector/eye.webp";

const VisionAndMission = () => {
  return (
    <div className="relative mt-9 bahaturk-inter">
      {/* BLUE BACKGROUND STRIP */}
      <div className="pointer-events-none absolute left-1/2 top-[105px] z-0 h-[180px] w-full max-w-[1440px] -translate-x-1/2 bg-[#149dcc] sm:top-[115px] sm:h-[200px] md:top-[145px] md:h-[220px] lg:top-[165px] lg:h-[182px]" />
      {/* BLUE BACKGROUND STRIP when the screen size become smaller than 1024px */}
      <div className="pointer-events-none absolute left-1/2 top-[525px] z-0 h-[180px] w-full max-w-[1440px] -translate-x-1/2 bg-[#149dcc] sm:top-[560px] sm:h-[200px] md:top-[615px] md:h-[220px] lg:hidden" />

      {/* VISION & MISSION */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-5 px-4 sm:gap-6 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-7 lg:px-8">
        {/* VISION */}
        <div className="flex min-h-[400px] w-full flex-col rounded-[17px] border-2 border-[#8bcfe3] bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[420px] sm:rounded-[18px] sm:px-7 sm:py-7 md:min-h-[450px] md:px-8 md:py-8 lg:min-h-[500px]">
          {/* ICON */}
          <div className="mb-4 flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#dff3fa] sm:h-[68px] sm:w-[68px] md:h-[82px] md:w-[82px]">
            <img
              src={eye}
              alt="Vision"
              className="h-[32px] w-[32px] object-contain sm:h-[38px] sm:w-[38px] md:h-[45px] md:w-[45px]"
            />
          </div>

          {/* LABEL */}
          <h3 className="mb-2 text-[12px] font-[700] tracking-[1.5px] text-[#159dcc] sm:text-[14px] md:text-[17px] lg:text-[20px]">
            OUR VISION
          </h3>

          {/* TITLE */}
          <h2 className="text-[24px] font-[700] leading-[1.25] text-black sm:text-[28px] md:text-[34px] lg:text-[40px] lg:leading-[52px]">
            Building a Better <br className="hidden sm:block" />
            Standard for <span className="text-[#159dcc]">Tomorrow.</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-3 text-justify text-[14px] font-medium leading-[1.7] text-[#151515]  sm:leading-[1.75] md:text-[16px] md:leading-[1.8] lg:text-[20px] lg:leading-[30px]">
            To become one of the region's most trusted construction companies by
            delivering innovative, sustainable, and high-quality developments
            that redefine urban living while creating lasting value for
            communities.
          </p>

          {/* BOTTOM LINE */}
          <div className="mt-auto pt-8 sm:pt-10 md:pt-11">
            <div className="h-[4px] w-[60px] bg-[#159dcc] sm:w-[75px] md:w-[92px]" />
          </div>
        </div>

        {/* MISSION */}
        <div className="flex min-h-[400px] w-full flex-col rounded-[17px] border-2 border-[#8bcfe3] bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[420px] sm:rounded-[18px] sm:px-7 sm:py-7 md:min-h-[450px] md:px-8 md:py-8 lg:min-h-[500px]">
          {/* ICON */}
          <div className="mb-4 flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#dff3fa] sm:h-[68px] sm:w-[68px] md:h-[82px] md:w-[82px]">
            <img
              src={mission}
              alt="Mission"
              className="h-[32px] w-[32px] object-contain sm:h-[38px] sm:w-[38px] md:h-[45px] md:w-[45px]"
            />
          </div>

          {/* LABEL */}
          <h3 className="mb-2 text-[12px] font-[700] tracking-[1.5px] text-[#159dcc] sm:text-[14px] md:text-[17px] lg:text-[20px]">
            OUR MISSION
          </h3>

          {/* TITLE */}
          <h2 className="text-[24px] font-[700] leading-[1.25] text-black sm:text-[28px] md:text-[34px] lg:text-[40px] lg:leading-[56px]">
            Engineering with <br className="hidden sm:block" />
            <span className="text-[#159dcc]">Responsibility.</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-3 text-justify text-[14px] font-medium leading-[1.7] text-[#151515]  sm:leading-[1.75] md:text-[16px] md:leading-[1.8] lg:text-[20px] lg:leading-[30px]">
            Our mission is to design and deliver world-class construction
            projects by applying advanced engineering technologies, maintaining
            the highest quality standards, ensuring safety, and creating modern
            environments for living and investment.
          </p>

          {/* BOTTOM LINE */}
          <div className="mt-auto pt-8 sm:pt-10 md:pt-11">
            <div className="h-[4px] w-[60px] bg-[#159dcc] sm:w-[75px] md:w-[92px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionAndMission;
