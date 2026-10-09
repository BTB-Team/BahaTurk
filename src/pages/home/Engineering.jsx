import React from "react";
import { ArrowRight } from "lucide-react";
import projectData from "../../../db.json";

function PileIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="21" y="8" width="4" height="29" fill="#0F99CC" />
      <rect x="28" y="15" width="4" height="22" fill="#0F99CC" />
      <rect x="14" y="15" width="4" height="22" fill="#0F99CC" />
    </svg>
  );
}

function DepthIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M15 27.5V2.5M20 22.5L15 27.5L10 22.5M20 7.5L15 2.5L10 7.5"
        stroke="#0F99CC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ThicknessIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M21.1961 5.42288L31.274 12.141C31.4908 12.2856 31.6686 12.4814 31.7916 12.7112C31.9146 12.9411 31.9789 13.1977 31.9789 13.4583C31.9789 13.7189 31.9146 13.9755 31.7916 14.2053C31.6686 14.4351 31.4908 14.631 31.274 14.7756L21.1961 21.4953C20.5458 21.9289 19.7816 22.1604 19 22.1604C18.2184 22.1604 17.4542 21.9289 16.8039 21.4953L6.72599 14.7756C6.50914 14.631 6.33134 14.4351 6.20837 14.2053C6.0854 13.9755 6.02106 13.7189 6.02106 13.4583C6.02106 13.1977 6.0854 12.9411 6.20837 12.7112C6.33134 12.4814 6.50914 12.2856 6.72599 12.141L16.8039 5.42288C17.4542 4.98923 18.2184 4.75781 19 4.75781C19.7816 4.75781 20.5458 4.98923 21.1961 5.42288ZM31.7078 19.304C31.4729 19.6801 31.1617 20.0026 30.7942 20.2508L21.2151 26.7171C20.5608 27.1589 19.7894 27.3949 19 27.3949C18.2106 27.3949 17.4392 27.1589 16.7849 26.7171L7.20574 20.2508C6.63243 19.864 6.20149 19.3002 5.97877 18.6455C5.75605 17.9907 5.75378 17.2811 5.97233 16.625L16.8039 23.845C17.412 24.2502 18.1204 24.4792 18.8506 24.5066C19.5809 24.534 20.3044 24.3587 20.9412 24.0001L21.1945 23.845L32.0261 16.625C32.1736 17.0674 32.2215 17.5369 32.1665 18C32.1115 18.4632 31.9549 18.9084 31.7078 19.304ZM31.7078 24.4498C31.4729 24.8259 31.1617 25.1485 30.7942 25.3966L21.2151 31.863C20.5608 32.3047 19.7894 32.5408 19 32.5408C18.2106 32.5408 17.4392 32.3047 16.7849 31.863L7.20574 25.3966C6.63243 25.0099 6.20149 24.446 5.97877 23.7913C5.75605 23.1366 5.75378 22.4269 5.97233 21.7708L16.8039 28.9908C17.412 29.396 18.1204 29.625 18.8506 29.6524C19.5809 29.6798 20.3044 29.5045 20.9412 29.146L21.1945 28.9908L32.0261 21.7708C32.1736 22.2132 32.2215 22.6828 32.1665 23.1459C32.1115 23.609 31.9549 24.0542 31.7078 24.4498Z"
        fill="#0F99CC"
      />
    </svg>
  );
}

const engineeringData = projectData.projects?.[0]?.engineering;
const engineeringTitle =
  engineeringData?.title?.replace(/\.$/, "") ||
  "Strength Begins Below the Surface";
const engineeringPrimaryTitle = engineeringTitle.includes("Below the Surface")
  ? engineeringTitle.replace("Below the Surface", "").trim() ||
    "Strength Begins"
  : engineeringTitle;
const engineeringSecondaryTitle = engineeringTitle.includes("Below the Surface")
  ? "Below the Surface."
  : "";

const engineeringStats = [
  {
    icon: PileIcon,
    value: engineeringData?.piles_per_building || "96",
    label: "Piles per Building",
  },
  {
    icon: DepthIcon,
    value: engineeringData?.pile_depth || "~20 m",
    label: "Pile Depth",
  },
  {
    icon: ThicknessIcon,
    value: engineeringData?.foundation_thickness || "1.5 m",
    label: "Foundation Thickness",
  },
];

export default function Engineering() {
  return (
    <section className="w-full bg-white px-4 md:px-6 py-[40px] md:py-[60px]">
      <div className="mx-auto flex flex-col lg:flex-row max-w-[1200px] w-full gap-8 lg:gap-10 items-stretch justify-between rounded-[24px] md:rounded-[29px] border border-[#E5EEF2] p-4 md:p-6 lg:p-[32px]">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-between flex-1 w-full lg:max-w-[561px] order-2 lg:order-1">
          <div>
            {/* Engineering label */}
            <div className="mb-[10px] flex items-center gap-[14px]">
              <div className="h-[3px] w-[41px] bg-[#299BC1]" />
              <h3 className="font-inter text-[16px] md:text-[18px] font-semibold leading-[24px] text-[#299BC1]">
                ENGINEERING
              </h3>
            </div>

            {/* Small heading */}
            <p className="mb-[8px] font-inter text-[14px] md:text-[16px] font-normal leading-[16px] text-black">
              ENGINEERED FROM THE GROUND UP
            </p>

            {/* Main heading */}
            <h2 className="mb-[16px] font-inter text-[28px] md:text-[34px] lg:text-[40px] font-extrabold leading-[34px] md:leading-[40px] lg:leading-[44px]">
              <span className="text-[#299BC1]">{engineeringPrimaryTitle}</span>
              <br />
              <span className="text-black">{engineeringSecondaryTitle}</span>
            </h2>

            {/* Description */}
            <div className="mb-[24px] font-inter text-[15px] md:text-[16px] font-medium leading-[24px] md:leading-[27px] text-black">
              <p>
                {engineeringData?.description ||
                  "The strength of Solh Residential Project begins with its foundation. Each building is constructed on 96 piles extending approximately 20 meters into the ground."}
              </p>
            </div>

            {/* STAT CARDS*/}
            <div className="mb-[24px] grid grid-cols-2 md:grid-cols-3 gap-[8px]">
              {engineeringStats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex h-[127px] flex-col rounded-[12px] bg-[#D8F2FA] px-[12px] py-[12px]"
                >
                  <div className="mb-[4px] flex h-[45px] w-[45px] items-center justify-center rounded-[22.5px] bg-[#0F99CC2B]">
                    <Icon
                      className={
                        Icon === PileIcon
                          ? "h-[45px] w-[45px] text-[#299BC1]"
                          : Icon === DepthIcon
                            ? "h-[30px] w-[30px] text-[#299BC1]"
                            : "h-[38px] w-[38px] text-[#299BC1]"
                      }
                    />
                  </div>
                  <span className="font-inter text-[22px] md:text-[24px] font-extrabold leading-[27px] text-[#299BC1]">
                    {value}
                  </span>
                  <span className="font-inter text-[11px] md:text-[12px] font-medium leading-[14px] md:leading-[16px] text-[#111111]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* BUTTON */}
          <button className="flex h-[46px] w-full sm:w-fit items-center justify-center gap-[10px] rounded-full bg-[#299BC1] px-[24px] font-inter text-[15px] font-medium text-white transition hover:bg-[#2189aa]">
            <span>Discover Our Engineering</span>
            <ArrowRight size={18} strokeWidth={2} />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:flex-1 lg:max-w-[566px] h-[240px] md:h-[350px] lg:h-auto overflow-hidden rounded-[20px] order-1 lg:order-2">
          <img
            src={engineeringData?.image || "/images/Rectangle31.png"}
            alt={engineeringData?.title || "Engineering construction workers"}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
