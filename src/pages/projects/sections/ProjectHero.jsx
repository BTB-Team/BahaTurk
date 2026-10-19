import Container from "../../../components/ui/project-ui/Container";
import { PROJECT_PAGE_CONTENT } from "../content";

export default function ProjectHero() {
  const { eyebrow, title, text, image } = PROJECT_PAGE_CONTENT.hero;

  return (
    <section className="relative isolate overflow-hidden lg:min-h-[480px]">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
      />

      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          bg-white/55
          sm:bg-white/40
          md:bg-white/25
          lg:bg-linear-to-r
          lg:from-white/35
          lg:via-white/10
          lg:to-transparent
        "
      />

      <Container className="py-10 sm:py-12 md:py-16 lg:pb-[89px] lg:pt-[103px]">
        <div className="relative z-10 max-w-[610px]">
          <p className="text-sm font-semibold uppercase leading-6 tracking-normal text-accent sm:text-base lg:text-xl lg:leading-[30px]">
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-full text-[clamp(30px,5.5vw,48px)] font-bold leading-[1.18] tracking-normal text-black sm:mt-6 md:leading-[1.2] lg:mt-[27px] lg:text-[48px] lg:leading-[65px]">
            {title.plain}
            <span className="mt-1 block text-accent">
              {title.accent}
            </span>
          </h1>

          <span
            className="mt-3 block h-[2px]  max-w-[360px] bg-accent sm:mt-4 lg:mt-3"
            aria-hidden="true"
          />

          <p className="mt-4 max-w-[534px] text-base font-semibold leading-7 tracking-normal text-accent sm:text-lg sm:leading-[30px] md:text-xl lg:mt-[18px] lg:text-2xl lg:leading-[35px]">
            {text}
          </p>
        </div>
      </Container>
    </section>
  );
}