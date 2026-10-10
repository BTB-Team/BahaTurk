import React from "react";
import { ArrowRight, Layers } from "lucide-react";
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
    <section className="w-full bg-white px-3 py-[30px] md:px-6 md:py-[60px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 rounded-[20px]  p-3 md:flex-row md:items-center md:justify-between md:gap-8 md:rounded-[29px] md:p-6 lg:p-[32px]">
        <div className="order-2 w-full md:order-1 md:w-[55%] lg:max-w-[561px]">
          {/* Technology label */}
          <div className="mb-[6px] md:mb-[10px] flex items-center gap-[6px] md:gap-[14px]">
            <div className="h-[2px] md:h-[3px] w-[20px] md:w-[41px] bg-[#299BC1]" />
            <h2 className="font-inter font-semibold text-[11px] md:text-[18px] text-[#299BC1] tracking-wide">
              TECHNOLOGY
            </h2>
          </div>

          {/* Small heading */}
          <p className="mb-[4px] md:mb-[8px] font-inter font-normal text-[10px] md:text-[16px] text-gray-500 whitespace-nowrap">
            ADVANCED CONSTRUCTION TECHNOLOGY
          </p>

          {/* Main title */}
          <h1 className="mb-[10px] text-[20px] font-extrabold leading-tight text-[#299BC1] md:mb-[16px] md:text-[34px] lg:text-[40px]">
            {technologyData?.technology_title || "Tunnel Form System"}
            <span className="text-[#299BC1]">.</span>
          </h1>

          {/* Paragraphs */}
          <div className="mb-[14px] md:mb-[24px] font-inter font-medium text-[11px] md:text-[16px] leading-[16px] md:leading-[27px] text-black space-y-2">
            <p className="line-clamp-3 md:line-clamp-none">
              {technologyData?.technology_description ||
                "One of the defining features of Solh Residential Project is the use of the Tunnel Form System, introduced by Baha Turk in Afghanistan."}
            </p>
          </div>

          {/* Supports heading */}
          <h3 className="mb-[10px] md:mb-[18px] font-inter font-bold text-[12px] md:text-[20px] text-black">
            The system supports:
          </h3>
          <div className="mb-[16px] grid grid-cols-1 gap-2 sm:grid-cols-2 md:mb-[28px] md:gap-2.5">
            {technologyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={`${feature.title}-${index}`}
                  className="flex min-w-0 items-center gap-2 rounded-[8px] border border-[#E5EEF2] bg-white px-2 py-2 md:gap-2.5 md:rounded-[12px] md:px-3"
                >
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#EBF8FD] text-[#299BC1] md:h-[51px] md:w-[51px]">
                    <IconComponent
                      className="h-[24px] w-[24px] md:h-[32px] md:w-[32px]"
                      strokeWidth={2.5}
                    />
                  </div>

                  <p className="min-w-0 flex-1 font-inter text-[9px] leading-tight text-gray-500 md:text-[13px]">
                    <span className="block text-[8px] font-bold tracking-wide text-gray-500 md:text-[11px]">
                      {feature.title}
                    </span>
                    <span className="font-bold text-gray-600">
                      {feature.subtitle}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>

          {/* BUTTON */}
          <button className="flex h-[32px] md:h-[46px] w-fit items-center justify-center gap-2 rounded-full bg-[#299BC1] px-3 md:px-6 font-inter font-medium text-[10px] md:text-[15px] text-white transition hover:bg-[#2189aa]">
            <span className="whitespace-nowrap">
              Explore Tunnel Form Technology
            </span>
            <ArrowRight
              className="w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
              strokeWidth={2}
            />
          </button>
        </div>

        <div className="order-1 relative w-full max-w-[580px] pb-[30px] sm:pb-[100px] md:order-2 md:w-[42%] md:items-end lg:pb-[120px]">
          <div className="relative ml-auto w-full rounded-[12px] md:w-[85%] md:rounded-[24px]">
            <img
              src={
                technologyData?.technology_image || "/images/Rectangle39.webp"
              }
              alt="Tunnel Form Building Construction"
              className="block h-auto w-full rounded-[12px] object-cover md:rounded-[24px]"
            />

            <div className="absolute top-1 right-1 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm rounded-[6px] sm:rounded-[16px] p-1 sm:p-3 shadow-md flex flex-col items-center max-w-[55px] sm:max-w-[120px] text-center border border-gray-100">
              <div className="text-[#299BC1] mb-0">
                <Layers
                  className="w-[10px] h-[10px] sm:w-[22px] sm:h-[22px]"
                  strokeWidth={2}
                />
              </div>
              <span className="font-inter text-[6px] sm:text-[11px] font-bold text-gray-800 leading-none sm:leading-tight">
                Integrated structure
              </span>
            </div>
          </div>
          <img
            src={
              technologyData?.technology_image_secondary ||
              "/images/Rectangle40.webp"
            }
            alt="Construction interior showing the tunnel form structure"
            className="absolute bottom-0 left-0 z-10 w-[54%] rounded-[12px] border-2 border-white object-cover shadow-md sm:rounded-[16px] md:rounded-[20px] md:border-4"
          />
        </div>
      </div>
    </section>
  );
}
