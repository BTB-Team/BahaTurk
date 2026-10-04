import React from "react";

import {
  ShieldCheck,
  BarChart3,
  Timer,
  Settings,
  Layers3,
  ArrowRight,
} from "lucide-react";

const Technology = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Greater",
      subtitle: "Structural Integrity",
    },
    {
      icon: BarChart3,
      title: "Consistent",
      subtitle: "Construction Quality",
    },
    {
      icon: Timer,
      title: "Faster",
      subtitle: "Construction Execution",
    },
    {
      icon: Settings,
      title: "Reduced",
      subtitle: "Execution Errors",
    },
  ];

  return (
    <section
      className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-16 2xl:px-24"
      style={{
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1400px]">
        {/* =====================================================
            MAIN LAYOUT
        ====================================================== */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div className="w-full min-w-0">
            
            {/* Section Label */}
            <div className="mb-4 flex items-center gap-2 sm:mb-5">
              <span className="h-[3px] w-8 bg-[#159fd0] sm:w-10" />
              <span className="text-[13px] font-semibold uppercase tracking-wide text-[#159fd0] sm:text-sm">
                Technology
              </span>
            </div>

            {/* Small Heading */}
            <p className="mb-3 text-[12px] font-medium uppercase text-[#111827] sm:mb-4 sm:text-sm md:text-base">
              Advanced Construction Technology
            </p>

            {/* Main Heading */}
            <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-[-1px] text-[#159fd0] sm:text-[40px] md:text-[46px] lg:text-[48px] xl:text-[52px]">
              Tunnel Form System.
            </h2>

            {/* Description */}
            <div className="mt-5 max-w-[680px] space-y-3 text-[13px] font-medium leading-[1.8] text-[#222] sm:mt-6 sm:space-y-4 sm:text-sm sm:leading-7 md:text-base">
              <p>
                One of the defining features of Solh Residential Project is
                the use of the Tunnel Form System, introduced by Baha Turk in
                Afghanistan for the first time in its construction projects.
              </p>

              <p>
                Through this method, structural walls and slabs are cast
                together, creating an integrated concrete structure.
              </p>
            </div>

            {/* Supports Title */}
            <h3 className="mt-6 text-lg font-extrabold text-[#101828] sm:mt-8 sm:text-xl md:text-2xl">
              The system supports:
            </h3>

            {/* Benefits */}
            <div className="mt-5 grid max-w-[700px] grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2">
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex min-h-[68px] items-center gap-3 rounded-xl border border-[#d5edf4] bg-white px-3 py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:min-h-[70px] sm:gap-4 sm:px-4"
                  >
                    {/* Icon Circle */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e1f5fb] sm:h-11 sm:w-11">
                      <Icon
                        className="h-5 w-5 text-[#159fd0] sm:h-6 sm:w-6"
                        strokeWidth={2}
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold leading-5 text-[#172033] sm:text-sm">
                        {item.title}
                      </p>

                      <p className="text-[12px] font-semibold leading-5 text-[#172033] sm:text-sm">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <button
              type="button"
              className="group mt-6 flex w-full max-w-[300px] items-center justify-center gap-4 rounded-xl bg-[#159fd0] px-5 py-3.5 text-[13px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#078bb9] hover:shadow-lg sm:mt-8 sm:w-auto sm:max-w-none sm:gap-5 sm:px-6 sm:py-4 sm:text-sm"
            >
              <span>Explore Tunnel Form Technology</span>

              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </button>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="relative min-h-[430px] w-full sm:min-h-[500px] md:min-h-[560px] lg:min-h-[560px]">
            
            {/* Main Construction Image */}
            <div className="absolute right-0 top-0 h-[330px] w-[88%] overflow-hidden rounded-[28px] rounded-bl-[65px] rounded-tr-[32px] sm:h-[400px] sm:w-[84%] sm:rounded-[36px] sm:rounded-bl-[80px] md:h-[460px] lg:h-[480px] lg:w-[82%] lg:rounded-[45px] lg:rounded-bl-[100px] lg:rounded-tr-[45px]">
              <img
                src="/images/Rectangle39.png"
                alt="Construction site"
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Integrated Concrete Structure Card */}
            <div className="absolute right-0 top-[-12px] z-20 w-[145px] rounded-[20px] border border-[#d8edf3] bg-white p-4 shadow-[0_12px_30px_rgba(20,160,210,0.15)] sm:right-[-5px] sm:top-[-10px] sm:w-[175px] sm:rounded-[24px] sm:p-5 md:w-[190px] lg:w-[200px] lg:rounded-[28px]">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#e3f6fb] sm:mb-4 sm:h-12 sm:w-12">
                <Layers3
                  className="h-6 w-6 text-[#159fd0] sm:h-8 sm:w-8"
                  strokeWidth={2}
                />
              </div>

              <p className="text-[12px] font-semibold leading-5 text-[#172033] sm:text-sm">
                Integrated
              </p>

              <p className="text-[12px] font-semibold leading-5 text-[#172033] sm:text-sm">
                concrete structure
              </p>
            </div>

            {/* Tunnel Image */}
            <div className="absolute bottom-0 left-0 z-20 h-[180px] w-[72%] overflow-hidden rounded-[22px] border-[4px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.15)] sm:left-[3%] sm:h-[220px] sm:w-[68%] sm:rounded-[25px] md:h-[245px] lg:h-[245px] lg:w-[65%] lg:rounded-[28px] lg:border-[5px]">
              <img
                src="/images/Rectangle40.png"
                alt="Tunnel construction"
                className="h-full w-full object-cover object-center"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;