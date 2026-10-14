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
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-white/75" aria-hidden="true" />

      <Container className="py-14 text-center md:py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent md:text-base">
          {eyebrow}
        </p>
        <h2 className="heading mt-3 md:text-[40px]">
          {title.plain} <span className="text-accent">{title.accent}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base font-medium text-text md:text-lg">
          {text(project.title)}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to={primary.to} className="btn bg-accent px-5 text-white hover:bg-accent-hover">
            {primary.label}
          </Link>
          <Link
            to={secondary.to}
            className="btn border border-border bg-white px-5 text-accent hover:bg-icon-bg"
          >
            {secondary.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
