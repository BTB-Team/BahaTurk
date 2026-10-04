import React from "react";

import {
  Target,
  Eye,
  Award,
  Lightbulb,
  ShieldCheck,
  Sprout,
  HardHat,
  Headphones,
  Gem,
} from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      icon: Award,
      title: (
        <>
          Uncompromising
          <br />
          Quality
        </>
      ),
    },
    {
      icon: Lightbulb,
      title: "Innovation",
    },
    {
      icon: ShieldCheck,
      title: (
        <>
          Integrity &
          <br />
          Transparency
        </>
      ),
    },
    {
      icon: Sprout,
      title: "Responsibility",
    },
    {
      icon: HardHat,
      title: "Safety First",
    },
    {
      icon: Headphones,
      title: (
        <>
          Customer
          <br />
          Commitment
        </>
      ),
    },
    {
      icon: Gem,
      title: (
        <>
          Sustainable
          <br />
          Development
        </>
      ),
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:px-12
        lg:py-16
        xl:px-16
      "
      style={{
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* =====================================================
          BLUE BACKGROUND STRIP
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-[165px]
          z-0
          h-[110px]
          w-full
          bg-[#149dcc]
          sm:top-[180px]
          sm:h-[130px]
          md:top-[210px]
          md:h-[150px]
          lg:top-[225px]
          lg:h-[170px]
        "
      />

      {/* =====================================================
          VISION & MISSION
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1100px]
          grid-cols-1
          gap-5
          sm:gap-6
          lg:grid-cols-2
          lg:gap-7
        "
      >
        {/* ========================= VISION ========================= */}

        <div
          className="
            flex
            min-h-[420px]
            w-full
            flex-col
            rounded-[17px]
            border-2
            border-[#8bcfe3]
            bg-white
            px-5
            py-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
            sm:min-h-[440px]
            sm:rounded-[18px]
            sm:px-7
            sm:py-7
            md:min-h-[480px]
            md:px-8
            md:py-8
            lg:min-h-[500px]
          "
        >
          {/* ICON */}

          <div
            className="
              mb-4
              flex
              h-[62px]
              w-[62px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#dff3fa]
              sm:h-[72px]
              sm:w-[72px]
              md:h-[82px]
              md:w-[82px]
            "
          >
            <Eye
              size={36}
              strokeWidth={2.8}
              className="
                text-[#159dcc]
                sm:h-10
                sm:w-10
                md:h-[47px]
                md:w-[47px]
              "
            />
          </div>

          {/* LABEL */}

          <h3
            className="
              mb-4
              text-[13px]
              font-extrabold
              tracking-[1.7px]
              text-[#159dcc]
              sm:text-[16px]
              md:mb-5
              md:text-[19px]
            "
          >
            OUR VISION
          </h3>

          {/* TITLE */}

          <h2
            className="
              text-[25px]
              font-extrabold
              leading-[1.2]
              tracking-[-0.5px]
              text-black
              sm:text-[29px]
              md:text-[32px]
            "
          >
            Building a Better
            <br />
            Standard for{" "}
            <span className="text-[#159dcc]">
              Tomorrow.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-5
              text-[12px]
              font-medium
              leading-[1.75]
              text-[#151515]
              sm:text-[14px]
              md:text-[15px]
              lg:text-[16px]
              lg:leading-[1.7]
          "
          >
            To become one of the region's most trusted construction
            companies by delivering innovative, sustainable, and
            high-quality developments that redefine urban living while
            creating lasting value for communities.
          </p>

          {/* BOTTOM LINE */}

          <div className="mt-auto pt-7 sm:pt-8">
            <div
              className="
                h-[4px]
                w-[65px]
                bg-[#159dcc]
                sm:w-[80px]
                md:w-[92px]
              "
            />
          </div>
        </div>

        {/* ========================= MISSION ========================= */}

        <div
          className="
            flex
            min-h-[420px]
            w-full
            flex-col
            rounded-[17px]
            border-2
            border-[#8bcfe3]
            bg-white
            px-5
            py-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
            sm:min-h-[440px]
            sm:rounded-[18px]
            sm:px-7
            sm:py-7
            md:min-h-[480px]
            md:px-8
            md:py-8
            lg:min-h-[500px]
          "
        >
          {/* ICON */}

          <div
            className="
              mb-4
              flex
              h-[62px]
              w-[62px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#dff3fa]
              sm:h-[72px]
              sm:w-[72px]
              md:h-[82px]
              md:w-[82px]
            "
          >
            <Target
              size={36}
              strokeWidth={2.8}
              className="
                text-[#159dcc]
                sm:h-10
                sm:w-10
                md:h-[47px]
                md:w-[47px]
              "
            />
          </div>

          {/* LABEL */}

          <h3
            className="
              mb-4
              text-[13px]
              font-extrabold
              tracking-[1.7px]
              text-[#159dcc]
              sm:text-[16px]
              md:mb-5
              md:text-[19px]
            "
          >
            OUR MISSION
          </h3>

          {/* TITLE */}

          <h2
            className="
              text-[25px]
              font-extrabold
              leading-[1.2]
              tracking-[-0.5px]
              text-black
              sm:text-[29px]
              md:text-[32px]
            "
          >
            Engineering with
            <br />
            <span className="text-[#159dcc]">
              Responsibility.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-5
              text-[12px]
              font-medium
              leading-[1.75]
              text-[#151515]
              sm:text-[14px]
              md:text-[15px]
              lg:text-[16px]
              lg:leading-[1.7]
            "
          >
            Our mission is to design and deliver world-class construction
            projects by applying advanced engineering technologies,
            maintaining the highest quality standards, ensuring safety,
            and creating modern environments for living and investment.
          </p>

          {/* BOTTOM LINE */}

          <div className="mt-auto pt-7 sm:pt-8">
            <div
              className="
                h-[4px]
                w-[65px]
                bg-[#159dcc]
                sm:w-[80px]
                md:w-[92px]
              "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          WHAT WE BUILD ON
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-10
          w-full
          max-w-[1150px]
          sm:mt-12
          md:mt-16
          lg:mt-20
        "
      >
        {/* HEADING */}

        <h2
          className="
            mb-6
            text-center
            text-[27px]
            font-extrabold
            leading-tight
            tracking-[-0.5px]
            text-black
            sm:mb-8
            sm:text-[32px]
            md:mb-9
            md:text-[38px]
            lg:text-[40px]
          "
        >
          What We{" "}
          <span className="text-[#159dcc]">
            Build
          </span>{" "}
          On.
        </h2>

        {/* =================================================
            FIRST ROW — 4 CARDS
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {values.slice(0, 4).map((item, index) => {
            const Icon = item.icon;

            return (
              <ValueCard
                key={index}
                icon={Icon}
                title={item.title}
              />
            );
          })}
        </div>

        {/* =================================================
            SECOND ROW — 3 CARDS
        ================================================= */}

        <div
          className="
            mt-4
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:mx-auto
            lg:max-w-[870px]
            lg:grid-cols-3
          "
        >
          {values.slice(4).map((item, index) => {
            const Icon = item.icon;

            return (
              <ValueCard
                key={index + 4}
                icon={Icon}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ============================================================
// VALUE CARD
// ============================================================

function ValueCard({ icon: Icon, title }) {
  return (
    <div
      className="
        flex
        min-h-[145px]
        w-full
        flex-col
        items-center
        justify-center
        rounded-[16px]
        border-2
        border-[#8bcfe3]
        bg-white
        px-4
        py-5
        text-center
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#159dcc]
        hover:shadow-md
        sm:min-h-[160px]
        sm:rounded-[17px]
        md:min-h-[170px]
        lg:min-h-[180px]
      "
    >
      {/* ICON */}

      <div
        className="
          mb-3
          flex
          h-[58px]
          w-[58px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#dff3fa]
          sm:h-[66px]
          sm:w-[66px]
          md:h-[72px]
          md:w-[72px]
        "
      >
        <Icon
          size={32}
          strokeWidth={2.7}
          className="
            text-[#159dcc]
            sm:h-9
            sm:w-9
            md:h-10
            md:w-10
          "
        />
      </div>

      {/* TITLE */}

      <h3
        className="
          text-[13px]
          font-extrabold
          leading-[1.3]
          text-black
          sm:text-[15px]
          md:text-[17px]
          lg:text-[18px]
        "
      >
        {title}
      </h3>
    </div>
  );
}

export default AboutValues;