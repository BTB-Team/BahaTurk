import Container from "../../../components/ui/project-ui/Container";
import { SparkleIcon } from "../../../components/ui/project-ui/icons";
import { PROJECT_PAGE_CONTENT, buildOverviewParagraphs } from "../content";

export default function ProjectOverview({ project, company }) {
  const { title, image, imageAlt } = PROJECT_PAGE_CONTENT.overview;

  return (
    <section id="overview" className="py-6 md:py-8">
      <Container>
        <div className="flex items-center gap-4 bg-tint px-5 py-5 md:px-6">
          <SparkleIcon className="h-12 w-12 shrink-0 text-accent md:h-14 md:w-14" />
          <h2 className="heading md:text-[32px]">
            {title.plain}
            <span className="block text-accent">{title.accent}</span>
          </h2>
        </div>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <div className="text-justify text-[20px] font-medium leading-[34px] tracking-normal text-text">
            {buildOverviewParagraphs(project, company).map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <img
            src={image}
            alt={imageAlt}
            className="aspect-[618/339] w-full rounded-2xl object-cover"
          />
        </div>
      </Container>
    </section>
  );
}