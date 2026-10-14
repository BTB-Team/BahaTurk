import Container from "../../../components/ui/project-ui/Container";
import { PROJECT_PAGE_CONTENT } from "../content";

export default function ProjectHero() {
  const { eyebrow, title, text, image } = PROJECT_PAGE_CONTENT.hero;

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-r from-white via-white/75 to-transparent md:via-white/40"
        aria-hidden="true"
      />

      <Container className="py-14 md:py-24">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </p>
          <h1 className="heading mt-6 md:text-[40px]">
            {title.plain}
            <span className="block text-accent">{title.accent}</span>
          </h1>
          <span className="mt-4 block h-px w-64 max-w-full bg-accent/60" aria-hidden="true" />
          <p className="mt-5 max-w-md text-lg font-medium leading-snug text-accent">
            {text}
          </p>
        </div>
      </Container>
    </section>
  );
}
