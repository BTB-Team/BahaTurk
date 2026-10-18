
import Container from "../../../components/ui/project-ui/Container";
import { SparkleIcon } from "../../../components/ui/project-ui/icons";
import {
  PROJECT_PAGE_CONTENT,
  buildOverviewParagraphs,
} from "../content";

export default function ProjectOverview({ project, company }) {
  const { title, image, imageAlt } = PROJECT_PAGE_CONTENT.overview;
  const paragraphs = buildOverviewParagraphs(project, company);

  return (
    <section id="overview" className="py-6 md:py-8">
      <Container>
        <div className="flex w-full items-center gap-4 bg-[#0F99CC2B] px-4 py-5 sm:gap-5 sm:px-6 md:min-h-[150px] lg:gap-6">
          <SparkleIcon className="h-12 w-12 shrink-0 text-accent sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-[98px] lg:w-[98px]" />

          <h2 className="min-w-0 font-bahaturk-inter text-[28px] font-extrabold leading-[1.15] tracking-[0] sm:text-[36px] md:text-[42px] lg:max-w-[630px] lg:text-[48px] lg:leading-[54px]">
            {title.plain}
            <span className="block text-accent decoration-2 underline-offset-2">
              {title.accent}
            </span>
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 items-center gap-6 sm:gap-8 lg:mt-12 lg:grid-cols-[minmax(0,618fr)_minmax(0,505fr)] lg:gap-10 xl:gap-[54px]">
          <div className="min-w-0 font-bahaturk-inter text-base font-medium leading-7 tracking-[0] text-black sm:text-lg sm:leading-8 lg:text-[20px] lg:leading-[34px]">
            {paragraphs.map((text, index) => (
              <p key={`${index}-${text}`} className="m-0 text-justify">
                {text}
              </p>
            ))}
          </div>

          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="block h-auto w-full min-w-0 aspect-[505/337] rounded-[24px] object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
