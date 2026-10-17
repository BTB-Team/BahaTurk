import React from "react";
import { Layers } from "lucide-react";
import { Link } from "react-router-dom";
import projectData from "../../../db.json";

function GreaterIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M19.1286 26.0387L16.9019 27.596C16.4538 27.9095 15.9202 28.0777 15.3733 28.0777C14.8264 28.0777 14.2927 27.9095 13.8446 27.596L11.6179 26.0387C8.77059 24.0463 6.56659 21.2663 5.27626 18.0396C3.98594 14.8128 3.6654 11.2796 4.35395 7.87333C4.38835 7.70547 4.46082 7.54774 4.56576 7.41228C4.67071 7.27682 4.80533 7.16725 4.95928 7.092L15.3726 2L25.7873 7.092C25.941 7.16741 26.0753 7.27705 26.18 7.4125C26.2848 7.54795 26.357 7.7056 26.3913 7.87333C27.08 11.2795 26.7596 14.8126 25.4695 18.0393C24.1795 21.2661 21.9757 24.0462 19.1286 26.0387Z"
        stroke="#0F99CC"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ConsistentIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6.66666 28V20M16 28V12M25.3333 28V4"
        stroke="#0F99CC"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FasterIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24.016 9.9865L26.0027 7.99984M7.35867 25.3332C9.13747 27.428 11.6169 28.8052 14.3353 29.2083C17.0538 29.6114 19.8262 29.013 22.1363 27.5245C24.4465 26.0359 26.1371 23.7587 26.8934 21.1166C27.6497 18.4745 27.4203 15.6476 26.2477 13.1621C25.0752 10.6766 23.0395 8.70182 20.5195 7.60535C17.9995 6.50887 15.1669 6.36542 12.5491 7.20168C9.93117 8.03795 7.70634 9.79696 6.28869 12.1513C4.87103 14.5056 4.35714 17.2949 4.84267 19.9998M19.3333 2.6665H12.6667M16 17.9998L20.6667 13.3332"
        stroke="#0F99CC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3333 24.2946C11.3333 24.2946 6.96 23.6306 6.29467 24.2946C5.63067 24.9586 6.29467 29.3333 6.29467 29.3333"
        stroke="#0F99CC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ReducedIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18.6667 4.3585C18.6667 3.42384 17.9093 2.6665 16.9747 2.6665H15.0267C14.0907 2.6665 13.3333 3.42384 13.3333 4.3585C13.3333 5.12917 12.8053 5.7905 12.0867 6.07317C11.9729 6.11939 11.8604 6.1665 11.7493 6.2145C11.0413 6.52117 10.2 6.42784 9.65332 5.8825C9.33587 5.56578 8.90575 5.3879 8.45732 5.3879C8.00889 5.3879 7.57877 5.56578 7.26132 5.8825L5.88266 7.26117C5.56593 7.57862 5.38806 8.00874 5.38806 8.45717C5.38806 8.9056 5.56593 9.33572 5.88266 9.65317C6.42932 10.1998 6.52266 11.0398 6.21332 11.7492C6.16473 11.8608 6.11806 11.9733 6.07332 12.0865C5.79066 12.8052 5.12932 13.3332 4.35866 13.3332C3.42399 13.3332 2.66666 14.0905 2.66666 15.0252V16.9745C2.66666 17.9092 3.42399 18.6665 4.35866 18.6665C5.12932 18.6665 5.79066 19.1945 6.07332 19.9132C6.11954 20.0269 6.16621 20.1394 6.21332 20.2505C6.52132 20.9585 6.42799 21.7998 5.88266 22.3465C5.56593 22.664 5.38806 23.0941 5.38806 23.5425C5.38806 23.9909 5.56593 24.4211 5.88266 24.7385L7.26132 26.1172C7.57877 26.4339 8.00889 26.6118 8.45732 26.6118C8.90575 26.6118 9.33587 26.4339 9.65332 26.1172C10.2 25.5705 11.04 25.4772 11.7493 25.7852C11.8604 25.8341 11.9729 25.8812 12.0867 25.9265C12.8053 26.2092 13.3333 26.8705 13.3333 27.6412C13.3333 28.5758 14.0907 29.3332 15.0253 29.3332H16.9747C17.9093 29.3332 18.6667 28.5758 18.6667 27.6412C18.6667 26.8705 19.1947 26.2092 19.9133 25.9252C20.0271 25.8807 20.1395 25.8345 20.2507 25.7865C20.9587 25.4772 21.8 25.5718 22.3453 26.1172C22.6628 26.4343 23.0932 26.6124 23.542 26.6124C23.9907 26.6124 24.4212 26.4343 24.7387 26.1172L26.1173 24.7385C26.434 24.4211 26.6119 23.9909 26.6119 23.5425C26.6119 23.0941 26.434 22.664 26.1173 22.3465C25.5707 21.7998 25.4773 20.9598 25.7853 20.2505C25.8342 20.1394 25.8813 20.0269 25.9267 19.9132C26.2093 19.1945 26.8707 18.6665 27.6413 18.6665C28.576 18.6665 29.3333 17.9092 29.3333 16.9745V15.0265C29.3333 14.0918 28.576 13.3345 27.6413 13.3345C26.8707 13.3345 26.2093 12.8065 25.9253 12.0878C25.8806 11.9746 25.8339 11.8621 25.7853 11.7505C25.4787 11.0425 25.572 10.2012 26.1173 9.6545C26.434 9.33705 26.6119 8.90693 26.6119 8.4585C26.6119 8.01007 26.434 7.57995 26.1173 7.2625L24.7387 5.88384C24.4212 5.56711 23.9911 5.38924 23.5427 5.38924C23.0942 5.38924 22.6641 5.56711 22.3467 5.88384C21.8 6.4305 20.96 6.52384 20.2507 6.21584C20.139 6.1668 20.0266 6.11968 19.9133 6.0745C19.1947 5.7905 18.6667 5.12784 18.6667 4.3585Z"
        stroke="#0F99CC"
        strokeWidth="2.5"
      />
      <path
        d="M21.3333 15.9998C21.3333 17.4143 20.7714 18.7709 19.7712 19.7711C18.771 20.7713 17.4145 21.3332 16 21.3332C14.5855 21.3332 13.2289 20.7713 12.2288 19.7711C11.2286 18.7709 10.6667 17.4143 10.6667 15.9998C10.6667 14.5853 11.2286 13.2288 12.2288 12.2286C13.2289 11.2284 14.5855 10.6665 16 10.6665C17.4145 10.6665 18.771 11.2284 19.7712 12.2286C20.7714 13.2288 21.3333 14.5853 21.3333 15.9998Z"
        stroke="#0F99CC"
        strokeWidth="2.5"
      />
    </svg>
  );
}

const technologyData = projectData.projects?.[0]?.engineering;
const technologyDescription = technologyData?.technology_description || "";
const technologyDetailsStart = technologyDescription.indexOf(
  "Through this method,",
);
const technologyIntro =
  technologyDetailsStart === -1
    ? technologyDescription
    : technologyDescription.slice(0, technologyDetailsStart).trim();
const technologyDetails =
  technologyDetailsStart === -1
    ? ""
    : technologyDescription.slice(technologyDetailsStart).trim();
const technologyFeatures = [
  { title: "Greater", subtitle: "Structural Integrity", icon: GreaterIcon },
  {
    title: "Consistent",
    subtitle: "Construction Quality",
    icon: ConsistentIcon,
  },
  { title: "Faster", subtitle: "Construction Execution", icon: FasterIcon },
  { title: "Reduced", subtitle: "Execution Errors", icon: ReducedIcon },
].map((feature, index) => {
  const sourceFeature = technologyData?.technology_features?.[index];

  return {
    ...feature,
    title: sourceFeature ? sourceFeature.split(" ")[0] : feature.title,
    subtitle: sourceFeature
      ? sourceFeature.replace(sourceFeature.split(" ")[0], "").trim() ||
        feature.subtitle
      : feature.subtitle,
  };
});

export default function Technology() {
  return (
    <section className="bahaturk-inter w-full bg-white px-3 py-[30px] md:px-6 md:py-[60px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 rounded-[20px] p-3 md:rounded-[29px] md:p-6 lg:min-h-[676px] lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:p-[32px] xl:h-[676px] xl:min-h-[676px] xl:max-w-[1200px] xl:justify-start xl:gap-[33px] xl:p-0">
        <div className="order-2 w-full lg:order-1 lg:w-1/2 lg:flex-1 xl:w-[561px] xl:flex-none">
          {/* Technology label */}
          <div className="mb-[6px] flex items-center gap-[6px] md:mb-[10px] md:gap-[14px] lg:gap-[5px]">
            <div className="h-[3px] w-[41px] shrink-0 bg-[#0F99CC]" />
            <h2 className="bahaturk-inter h-[24px] w-[127px] shrink-0 text-[18px] font-semibold leading-[24px] tracking-[0] text-[#0F99CC]">
              TECHNOLOGY
            </h2>
          </div>

          {/* Small heading */}
          <p className="mb-[4px] text-[10px] font-normal text-gray-500 md:mb-[8px] md:text-[16px] lg:mt-[7px] lg:min-h-[19px] lg:w-full lg:max-w-[336px] lg:text-left lg:text-[16px] lg:font-normal lg:leading-[100%] lg:tracking-[0] lg:text-[#000000] xl:min-h-[19px] xl:w-full xl:flex-none">
            ADVANCED CONSTRUCTION TECHNOLOGY
          </p>

          {/* Main title */}
          <h1 className="mb-[10px] text-[20px] font-extrabold leading-tight text-[#299BC1] md:mb-[16px] md:text-[34px] lg:mt-[14px] lg:mb-[11px] lg:min-h-[48px] lg:w-full lg:max-w-[560px] lg:text-left lg:text-[40px] lg:font-extrabold lg:leading-[100%] lg:tracking-[0] lg:text-[#0F99CC] xl:min-h-[48px] xl:w-full xl:flex-none">
            {technologyData?.technology_title || "Tunnel Form System"}
            <span className="text-[#299BC1]">.</span>
          </h1>

          {/* Paragraphs */}
          <div className="mb-[14px] space-y-2 font-medium text-[11px] leading-[16px] text-black md:mb-[24px] md:text-[16px] md:leading-[27px] lg:space-y-[10px]">
            <p className="md:line-clamp-none lg:min-h-[81px] lg:w-full lg:max-w-[561px] lg:text-left lg:text-[16px] lg:font-medium lg:leading-[27px] lg:tracking-[0] lg:text-[#000000] xl:min-h-[81px] xl:w-full xl:max-w-none xl:flex-none">
              {technologyIntro}
            </p>
            {technologyDetails && (
              <p className="lg:min-h-[54px] lg:w-full lg:max-w-[561px] lg:text-left lg:text-[16px] lg:font-medium lg:leading-[27px] lg:tracking-[0] lg:text-[#000000] xl:min-h-[54px] xl:w-full xl:max-w-none xl:flex-none">
                {technologyDetails}
              </p>
            )}
          </div>

          {/* Supports heading */}
          <h3 className="mb-[10px] font-bold text-[12px] text-black md:mb-[18px] md:text-[20px] lg:min-h-[27px] lg:w-full lg:max-w-[561px] lg:text-left lg:text-[20px] lg:leading-[27px] xl:min-h-[27px] xl:w-full xl:max-w-none xl:flex-none xl:font-bold xl:text-[20px] xl:leading-[27px] xl:text-[#000000]">
            The system supports:
          </h3>
          <div className="mb-[16px] grid grid-cols-1 gap-2 sm:grid-cols-2 md:mb-[28px] md:gap-2.5 lg:w-full lg:max-w-[400px] lg:grid-cols-2 lg:gap-2 xl:max-w-[510px]">
            {technologyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={`${feature.title}-${index}`}
                  className="flex min-w-0 items-center gap-2 rounded-[8px] border border-[#E5EEF2] bg-white px-2 py-2 md:gap-2.5 md:rounded-[12px] md:px-3 lg:min-h-[60px] lg:w-full lg:gap-1.5 lg:border-[#0F99CC2B] lg:px-2 lg:py-1.5 xl:min-h-[68px] xl:gap-2 xl:px-[10px] xl:py-2"
                >
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#0F99CC2B] text-[#299BC1] md:h-[51px] md:w-[51px] lg:h-[40px] lg:w-[40px] xl:h-[51px] xl:w-[51px]">
                    <IconComponent
                      className="h-[24px] w-[24px] md:h-[32px] md:w-[32px] lg:h-[24px] lg:w-[24px] xl:h-[32px] xl:w-[32px]"
                      strokeWidth={2.5}
                    />
                  </div>

                  <p className="min-w-0 flex-1 text-[9px] leading-tight text-gray-500 md:text-[13px] lg:text-[11px] xl:text-[14px] lg:font-medium lg:leading-[16px] xl:leading-[18px] lg:text-black">
                    <span className="block text-[8px] font-bold tracking-wide text-gray-500 md:text-[11px] lg:text-[11px] xl:text-[14px] lg:font-medium lg:leading-[16px] xl:leading-[18px] lg:tracking-normal lg:text-black">
                      {feature.title}
                    </span>
                    <span className="font-bold text-gray-600 lg:font-medium lg:text-black">
                      {feature.subtitle}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>

          {/* BUTTON */}
          <Link
            to="/projects"
            className="flex h-[32px] w-fit items-center justify-center gap-2 rounded-[12px] bg-[#299BC1] px-3 text-[10px] font-medium text-white transition hover:bg-[#2189aa] md:h-[46px] md:px-6 md:text-[15px] lg:ml-0 lg:mt-0 lg:h-[52px] lg:w-[327px] lg:flex-none lg:gap-[2px] lg:pl-[19px] lg:pr-[18px]"
          >
            <span className="whitespace-nowrap lg:h-[27px] lg:w-[249px] lg:text-left lg:text-[16px] lg:font-medium lg:leading-[27px]">
              Explore Tunnel Form Technology
            </span>
            <span className="flex h-[39px] w-[39px] shrink-0 items-center justify-center">
              <svg
                viewBox="0 0 21.124 15.438"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[12px] w-[12px] md:h-[18px] md:w-[18px] lg:h-[15.44px] lg:w-[21.12px]"
                aria-hidden="true"
              >
                <path
                  d="M2.56 7.719H18.564M13.5 2.17L18.564 7.719L13.5 13.268"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        <div className="order-1 relative mx-auto aspect-[606/676] w-[90.991%] max-w-[606px] lg:order-2 lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 xl:w-auto xl:min-w-0">
          <div className="@container absolute inset-y-0 left-[-9.90099%] h-full w-[109.90099%] translate-y-[8px] xl:translate-x-[7.5px]">
            <div className="absolute right-0 top-0 h-[90.6065%] w-[88.5886%]">
              <img
                src={
                  technologyData?.technology_image ||
                  "/images/Rectangle39-flat.webp"
                }
                alt="Tunnel Form Building Construction"
                className="h-full w-full object-fill"
              />
            </div>

            <div className="absolute right-0 top-0 z-20 flex h-[21.4497%] w-[26.4264%] items-center rounded-[4.5cqw] border border-white bg-white shadow-md">
              <div className="absolute left-[4%] top-[6%] flex aspect-square w-[38%] items-center justify-center text-[#0F99CC]">
                <Layers className="h-[70%] w-[70%]" strokeWidth={2} />
              </div>
              <span className="absolute left-[8%] top-[55%] h-[45%] w-[84%] text-left text-[clamp(6px,2.2523cqw,15px)] font-medium leading-[1.05] text-black">
                <span className="block">Integrated</span>
                <span className="block whitespace-nowrap">
                  Concrete Structure
                </span>
              </span>
            </div>

            <div className="absolute left-0 top-[64.9408%] z-10 h-[35.0592%] w-[57.2072%] overflow-hidden rounded-[4.5cqw] border-[-0.75cqw] border-white shadow-md">
              <img
                src={
                  technologyData?.technology_image_secondary ||
                  "/images/Rectangle40.webp"
                }
                alt="Construction interior showing the tunnel form structure"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
