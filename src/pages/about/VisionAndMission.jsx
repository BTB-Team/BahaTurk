import { Target, Eye } from "lucide-react";
import mission from "../../assets/vector/mission.webp";
import eye from "../../assets/vector/eye.webp";

const VisionAndMission = () => {
  return (
    <div className="relative bahaturk-inter mt-9">
      {/* BLUE BACKGROUND STRIP */}
      <div className=" left-1/2 -translate-x-1/2 max-w-[1440px] pointer-events-none absolute  top-[165px] z-0 h-[110px] w-full bg-[#149dcc] sm:top-[180px] sm:h-[130px] md:top-[210px] md:h-[150px] lg:top-[165px] lg:h-[182px]" />

      {/* VISION & MISSION */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-7">
        {/* VISION */}
        <div className="flex min-h-[420px] w-full flex-col rounded-[17px] border-2 border-[#8bcfe3] bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[440px] sm:rounded-[18px] sm:px-7 sm:py-7 md:min-h-[480px] md:px-8 md:py-8 lg:min-h-[500px]">
          {/* ICON */}
          <div className="mb-4 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[#dff3fa] sm:h-[72px] sm:w-[72px] md:h-[82px] md:w-[82px]">
            <img src={eye} />
          </div>

          {/* LABEL */}
          <h3 className="mb-2 text-[13px] font-[700] tracking-[1.7px] text-[#159dcc] sm:text-[16px]  md:text-[20px]">
            OUR VISION
          </h3>

          {/* TITLE */}
          <h2 className="text-[25px] font-[700] leading-[52px]   sm:text-[29px] md:text-[40px]">
            Building a Better
            <br />
            Standard for <span className="text-[#159dcc]">Tomorrow.</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="tracking-[0.4px] mt-2 text-[12px] font-medium leading-[1.75] text-[#151515] sm:text-[14px] md:text-[15px] lg:text-[20px] lg:leading-[30px] text-justify">
            To become one of the region's most trusted construction companies by
            delivering innovative, sustainable, and high-quality developments
            that redefine urban living while creating lasting value for
            communities.
          </p>

          {/* BOTTOM LINE */}
          <div className="mt-auto pt-7 sm:pt-11">
            <div className="h-[4px] w-[65px] bg-[#159dcc] sm:w-[80px] md:w-[92px]" />
          </div>
        </div>

        {/* MISSION */}
        <div className="flex min-h-[420px] w-full flex-col rounded-[17px] border-2 border-[#8bcfe3] bg-white px-5 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[440px] sm:rounded-[18px] sm:px-7 sm:py-7 md:min-h-[480px] md:px-8 md:py-8 lg:min-h-[500px]">
          {/* ICON */}
          <div className="mb-4 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[#dff3fa] sm:h-[72px] sm:w-[72px] md:h-[82px] md:w-[82px]">
            <img src={mission} />
          </div>

          {/* LABEL */}
          <h3 className="mb-2 text-[13px] font-[700] tracking-[1.7px] text-[#159dcc] sm:text-[16px]  md:text-[20px]">
            OUR MISSION
          </h3>

          {/* TITLE */}
          <h2 className="text-[25px] font-[700] leading-[1.2]  text-black sm:text-[29px] md:text-[32px] lg:text-[40px] leading-[56px]">
            Engineering with
            <br />
            <span className="text-[#159dcc]">Responsibility.</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-1 tracking-[0.6px] text-justify text-[12px] font-medium leading-[1.75] text-[#151515] sm:text-[14px] md:text-[15px] lg:text-[20px] lg:leading-[30px]">
            Our mission is to design and deliver world-class construction
            projects by applying advanced engineering technologies, maintaining
            the highest quality standards, ensuring safety, and creating modern
            environments for living and investment.
          </p>

          {/* BOTTOM LINE */}
          <div className="mt-auto pt-7 sm:pt-8">
            <div className="h-[4px] w-[65px] bg-[#159dcc] sm:w-[80px] md:w-[92px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionAndMission;
