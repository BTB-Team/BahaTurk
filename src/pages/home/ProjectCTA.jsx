import { AiOutlineArrowRight } from "react-icons/ai";

const ProjectCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* background glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[1200px]
          px-6
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#DFF6FC]
          opacity-100
          blur-[40px]
        "
      />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-[800px] px-5 text-center">
        <p className="text-sm font-medium uppercase text-black sm:text-base">
          Your Future Starts Here
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-10 sm:leading-14 lg:leading-20 text-black sm:text-4xl lg:text-5xl">
          More Than a Home.
          <br />
          An Investment in <span className="text-accent">Your Future.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-[740px] text-black text-sm leading-10 sm:text-2xl font-medium">
          Discover a modern residential community built around engineering,
          safety, comfort, and long-term value.
        </p>

        {/* buttons */}
        <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-accent
              px-5
              py-3
              text-xs
              sm:text-xl
              font-semibold
              text-white
              transition
              hover:bg-accent-hover
              cursor-pointer
            "
          >
            Explore Solh Project
            <AiOutlineArrowRight className="font-black text-2xl" />
          </button>

          <button
            type="button"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-xl
              border
              border-accent
              bg-white
              px-5
              py-3
              text-sm
              sm:text-xl
              font-semibold
              text-accent
              transition
              hover:bg-tint
              cursor-pointer
            "
          >
            Contact Our Team
            <AiOutlineArrowRight className="font-black text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;
