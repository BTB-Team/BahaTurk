import { Link } from "react-router-dom";
import Container from "../../../components/ui/project-ui/Container";
import { PROJECT_PAGE_CONTENT } from "../content";

export default function ProjectCTA({ project }) {
  const { eyebrow, title, text, image, primary, secondary } = PROJECT_PAGE_CONTENT.cta;

  return (
    <section className="relative isolate mt-8 overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-white/75" aria-hidden="true" />

      <Container className="py-16 text-center md:py-20">
        <p className="text-base font-bold uppercase tracking-wide text-accent md:text-lg">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-serif text-[32px] leading-tight text-text md:text-[48px]">
          {title.plain} <span className="text-accent">{title.accent}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed font-inter-medium text-text md:text-lg">
          {text(project.title)}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to={primary.to}
            className="btn rounded-lg bg-accent px-6 text-white hover:bg-accent-hover"
          >
            {primary.label}
          </Link>
          <Link
            to={secondary.to}
            className="btn rounded-lg border border-border bg-white px-6 text-accent hover:bg-icon-bg"
          >
            {secondary.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}