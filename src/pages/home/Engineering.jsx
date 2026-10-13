import React from "react";
import { Link } from "react-router-dom";
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
const engineeringDescription =
  engineeringData?.description ||
  "The strength of Solh Residential Project begins with its foundation. Each building is constructed on 96 piles extending approximately 20 meters into the ground, followed by a reinforced foundation approximately 1.5 meters thick.";
const engineeringDetailsStart = engineeringDescription.indexOf("Each building");
const engineeringIntro =
  engineeringDetailsStart === -1
    ? engineeringDescription
    : engineeringDescription.slice(0, engineeringDetailsStart).trim();
const engineeringDetails =
  engineeringDetailsStart === -1
    ? ""
    : engineeringDescription.slice(engineeringDetailsStart).trim();
const engineeringSystemStart = engineeringDetails.indexOf(
  "This engineered foundation system",
);
const engineeringBuildingDetails =
  engineeringSystemStart === -1
    ? engineeringDetails
    : engineeringDetails.slice(0, engineeringSystemStart).trim();
const engineeringSystemDescription =
  engineeringSystemStart === -1
    ? ""
    : engineeringDetails.slice(engineeringSystemStart).trim();

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
    <section className="bahaturk-inter w-full bg-white px-4 pt-[40px] pb-[40px] md:px-6 md:pt-[60px] md:pb-[60px] lg:pt-[41px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-stretch justify-between gap-8 rounded-[30px] border border-[#0F99CC2B] bg-white p-4 md:gap-10 md:rounded-[30px] md:p-6 lg:h-[640px] lg:flex-row lg:gap-[18px] lg:pr-[24px] lg:pl-[29px] lg:py-[29px]">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-between flex-1 w-full lg:max-w-[561px] order-2 lg:order-1">
          <div>
            {/* Engineering label */}
            <div className="mb-[10px] flex items-center gap-[14px] lg:mb-[15px] lg:gap-[5px]">
              <div className="h-[3px] w-[41px] shrink-0 bg-[#0F99CC]" />
              <h3 className="text-[16px] font-semibold leading-[24px] text-[#299BC1] md:text-[18px] lg:h-[24px] lg:w-[122px] lg:-translate-y-[2px] lg:text-[18px] lg:font-semibold lg:leading-[24px] lg:tracking-[0] lg:text-[#0F99CC]">
                ENGINEERING
              </h3>
            </div>

            {/* Small heading */}
            <p className="mb-[8px] h-[19px] w-[288px] text-[14px] font-normal leading-[16px] text-black md:text-[16px] lg:mb-[8px] lg:h-[19px] lg:w-[288px] lg:text-left lg:text-[16px] lg:font-normal lg:leading-[100%] lg:tracking-[0] lg:text-[#000000]">
              ENGINEERED FROM THE GROUND UP
            </p>

            {/* Main heading */}
            <h2 className="mb-[16px] text-[28px] font-extrabold leading-[34px] md:text-[34px] md:leading-[40px] lg:h-[96px] lg:w-[560px] lg:text-[40px] lg:leading-[48px]">
              <span className="text-[#299BC1]">{engineeringPrimaryTitle}</span>
              <br />
              <span className="text-black">{engineeringSecondaryTitle}</span>
            </h2>

            {/* Description */}
            <div className="mb-[24px] text-[15px] font-medium leading-[24px] text-black md:text-[16px] md:leading-[27px]">
              <p className="lg:mb-[4px] lg:h-[27px] lg:w-[561px] lg:text-left lg:text-[16px] lg:font-medium lg:leading-[27px] lg:tracking-[0] lg:text-[#000000]">
                {engineeringIntro}
              </p>
              {engineeringBuildingDetails && (
                <p className="lg:mb-[4px] lg:h-[81px] lg:w-[561px] lg:text-left lg:text-[16px] lg:font-medium lg:leading-[27px] lg:tracking-[0] lg:text-[#000000]">
                  {engineeringBuildingDetails}
                </p>
              )}
              {engineeringSystemDescription && (
                <p className="lg:h-[54px] lg:w-[561px] lg:text-left lg:text-[16px] lg:font-medium lg:leading-[27px] lg:tracking-[0] lg:text-[#000000]">
                  {engineeringSystemDescription}
                </p>
              )}
            </div>

            {/* STAT CARDS*/}
            <div className="mb-[24px] grid grid-cols-2 gap-[8px] md:grid-cols-3 lg:grid-cols-[179px_179px_179px] lg:gap-x-[12px]">
              {engineeringStats.map(({ icon: Icon, value, label }, index) => (
                <div
                  key={label}
                  className={`flex h-[127px] flex-col rounded-[12px] px-[12px] py-[12px] ${index === 2 ? "col-span-2 md:col-span-1" : ""} ${index === 0 ? "bg-[#0F99CC2B] lg:h-[127px] lg:w-[179px] lg:pt-[11px]" : index === 1 ? "bg-[#D8F2FA] lg:h-[127px] lg:w-[179px]" : index === 2 ? "bg-[#D8F2FA] lg:h-[127px] lg:w-[182px]" : "bg-[#D8F2FA]"}`}
                >
                  <div
                    className={`mb-[4px] flex items-center justify-center bg-[#0F99CC2B] ${index === 1 ? "h-[45px] w-[45px] rounded-[22.5px] lg:mt-[-1px]" : "h-[45px] w-[45px] rounded-[22.5px]"}`}
                  >
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
                  <span
                    className={`text-[22px] font-extrabold leading-[27px] md:text-[24px] ${index === 0 ? "h-[27px] w-[33px] whitespace-nowrap bg-gradient-to-r from-[#0F99CC] to-[#084D66] bg-clip-text text-transparent lg:text-[24px]" : index === 1 ? "h-[27px] w-[76px] whitespace-nowrap bg-gradient-to-r from-[#0F99CC] to-[#084D66] bg-clip-text text-transparent lg:text-[24px]" : index === 2 ? "whitespace-nowrap bg-gradient-to-r from-[#0F99CC] to-[#084D66] bg-clip-text text-transparent" : "text-[#299BC1]"}`}
                  >
                    {value}
                  </span>
                  <span
                    className={`text-[11px] font-medium leading-[14px] text-[#111111] md:text-[12px] md:leading-[16px] ${index === 0 ? "lg:h-[27px] lg:w-[124px] lg:text-[15px] lg:font-medium lg:leading-[27px] lg:tracking-[0] lg:text-[#000000]" : ""}`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* BUTTON */}
          <Link
            to="/projects"
            className="flex h-[46px] w-full items-center justify-center gap-[10px] rounded-full bg-[#299BC1] px-[24px] text-[15px] font-medium text-white transition hover:bg-[#2189aa] sm:w-fit lg:relative lg:h-[49px] lg:w-[257px] lg:flex-none lg:gap-0 lg:px-0"
          >
            <span className="whitespace-nowrap text-[clamp(10px,4vw,15px)] font-medium leading-[27px] text-white lg:absolute lg:left-[12px] lg:top-[11px] lg:h-[27px] lg:w-[195px] lg:whitespace-nowrap lg:text-[16px] lg:leading-[27px] lg:tracking-[0]">
              Discover Our Engineering
            </span>
            <span
              className="flex h-[39px] w-[39px] shrink-0 items-center justify-center lg:absolute lg:left-[209px] lg:top-[5px]"
              aria-hidden="true"
            >
              <svg
                className="h-[15px] w-[21px] lg:absolute lg:left-[9.34px] lg:top-[11.81px] lg:h-[15.4375px] lg:w-[21.1239px]"
                width="21.1239"
                height="15.4375"
                viewBox="0 0 21.1239 15.4375"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8887 2.8614C10.6735 2.6303 10.5563 2.3248 10.5618 2.009C10.5674 1.6933 10.6953 1.392 10.9186 1.1687C11.1419 0.9454 11.4432 0.8175 11.7589 0.812C12.0746 0.8064 12.3802 0.9236 12.6112 1.1389L19.1112 7.6389C19.3395 7.8674 19.4677 8.1771 19.4677 8.5001C19.4677 8.8231 19.3395 9.1329 19.1112 9.3614L12.6112 15.8614C12.4997 15.9811 12.3651 16.0771 12.2156 16.1438C12.0661 16.2104 11.9047 16.2462 11.7411 16.2491C11.5775 16.252 11.4149 16.2219 11.2632 16.1606C11.1114 16.0993 10.9735 16.008 10.8578 15.8923C10.7421 15.7766 10.6508 15.6387 10.5895 15.487C10.5283 15.3352 10.4982 15.1727 10.501 15.009C10.5039 14.8454 10.5397 14.684 10.6064 14.5345C10.673 14.385 10.769 14.2504 10.8887 14.1389L15.3087 9.7189H0.5625C0.2393 9.7189 -0.0707 9.5905 -0.2993 9.3619C-0.5279 9.1333 -0.6563 8.8233 -0.6563 8.5001C-0.6563 8.1769 -0.5279 7.8669 -0.2993 7.6383C-0.0707 7.4098 0.2393 7.2814 0.5625 7.2814H15.3087L10.8887 2.8614Z"
                  fill="#FFFFFF"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 h-[240px] w-full overflow-hidden rounded-[20px] md:h-[350px] lg:order-2 lg:h-[581px] lg:w-[566px] lg:flex-none lg:rounded-[29px]">
          <img
            src={engineeringData?.image || "/images/engineering1.webp"}
            alt={engineeringData?.title || "Engineering construction workers"}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
