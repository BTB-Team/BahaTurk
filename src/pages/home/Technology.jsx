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
    <section className="w-full overflow-hidden bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1400px]">

        {/* Main Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">

          {/* ================= LEFT SIDE ================= */}
          <div className="w-full">

            {/* Section Label */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-[3px] w-10 bg-[#159fd0]" />

              <span className="text-sm font-semibold uppercase tracking-wide text-[#159fd0]">
                Technology
              </span>
            </div>

            {/* Small Heading */}
            <p className="mb-4 text-sm font-medium uppercase text-[#111827] sm:text-base">
              Advanced Construction Technology
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl font-extrabold leading-tight text-[#159fd0] sm:text-5xl lg:text-[48px] xl:text-[52px]">
              Tunnel Form System.
            </h2>

            {/* Description */}
            <div className="mt-6 max-w-[680px] space-y-4 text-sm font-medium leading-7 text-[#222] sm:text-base">

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
            <h3 className="mt-8 text-xl font-extrabold text-[#101828] sm:text-2xl">
              The system supports:
            </h3>

            {/* Benefits */}
            <div className="mt-6 grid max-w-[700px] grid-cols-1 gap-3 sm:grid-cols-2">

              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="  flex  min-h-[70px]  items-center  gap-4  rounded-xl  border  border-[#d5edf4]  bg-white  px-4  py-3  transition-all  duration-300  hover:-translate-y-1  hover:shadow-md ">
                    {/* Icon Circle */}
                    <div
                      className=" flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e1f5fb] ">
                      <Icon
                        className="h-6 w-6 text-[#159fd0]"
                        strokeWidth={2}
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-sm font-semibold leading-5 text-[#172033]">
                        {item.title}
                      </p>

                      <p className="text-sm font-semibold leading-5 text-[#172033]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Button */}
            <button
              className=" mt-8 flex items-center gap-5 rounded-xl bg-[#159fd0] px-6 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#078bb9] hover:shadow-lg " >
              <span>Explore Tunnel Form Technology</span>

              <ArrowRight
                className="h-5 w-5"
                strokeWidth={2}
              />
            </button>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative min-h-[560px] w-full">

            {/* Main Construction Image */}
            <div
              className=" absolute right-0 top-0 h-[480px] w-[82%] overflow-hidden rounded-[45px] rounded-bl-[100px] rounded-tr-[45px] " >
              <img
                src="/images/Rectangle39.png"
                alt="Construction site"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Integrated Concrete Structure Card */}
            <div
              className=" absolute right-[-5px] top-[-10px] z-20 w-[180px] rounded-[28px] border border-[#d8edf3] bg-white p-5 shadow-[0_12px_30px_rgba(20,160,210,0.15)] sm:w-[200px] ">
              <div
                className=" mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#e3f6fb] " >
                <Layers3
                  className="h-8 w-8 text-[#159fd0]"
                  strokeWidth={2}
                />
              </div>

              <p className="text-sm font-semibold leading-5 text-[#172033]">
                Integrated
              </p>

              <p className="text-sm font-semibold leading-5 text-[#172033]">
                concrete structure
              </p>
            </div>

            {/* Tunnel Image */}
            <div
              className="  absolute  bottom-0  left-[3%]  z-20  h-[245px]  w-[65%]  overflow-hidden  rounded-[28px]  border-[5px]  border-white  shadow-[0_15px_35px_rgba(0,0,0,0.15)]  sm:h-[260px] " >
              <img
                src="/images/Rectangle40.png"
                alt="Tunnel construction"
                className="h-full w-full object-cover"
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