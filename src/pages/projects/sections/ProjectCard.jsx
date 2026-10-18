
import { Link } from "react-router-dom"; 
import Container from "../../../components/ui/project-ui/Container";
import { PinIcon, STAT_ICONS } from "../../../components/ui/project-ui/icons";
import { CARD_STATS, PROJECT_PAGE_CONTENT } from "../content";

export default function ProjectCard({ project }) {
  const { card, country } = PROJECT_PAGE_CONTENT;
  const [firstWord, ...restOfTitle] = project.title.split(" ");
  const [place, ...region] = (project.specs?.location ?? "").split(",");
  const regionText = [region.join(",").trim(), country]
    .filter(Boolean)
    .join(", ");

  return (
    <section
      aria-labelledby="project-card-title"
      className="py-6 sm:py-8 lg:pb-[33px] lg:pt-9"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-5">
    
          <div className="relative min-w-0 w-full">
            <img
              src={project.cover_image}
              alt={project.title}
              className="block aspect-[590/506] w-full rounded-2xl object-cover sm:rounded-[24px] lg:rounded-[28px]"
            />

            {place && (
              <div className="absolute left-2 top-2 flex max-w-[calc(100%-1rem)] items-center gap-2 rounded-xl bg-white p-2 shadow-md sm:left-3 sm:top-3 sm:gap-2.5 sm:rounded-[14px] lg:left-[13px] lg:top-[15px] lg:gap-[7px] lg:py-[10px] lg:pl-[11px] lg:pr-[15px]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/17 text-accent sm:h-10 sm:w-10 lg:h-[46px] lg:w-[46px]">
                  <PinIcon
                    className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
                    strokeWidth={1.9}
                  />
                </span>

                <div className="min-w-0">
                  <p className="break-words text-xs font-extrabold leading-tight text-black sm:text-sm lg:text-[15px]">
                    {place.trim()},
                  </p>
                  <p className="mt-1 break-words text-[10px] leading-tight text-black sm:text-[11px] lg:mt-[5px] lg:text-xs">
                    {regionText}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="min-w-0 w-full">
            <h2
              id="project-card-title"
              className="break-words text-[26px] font-extrabold leading-tight text-black sm:text-[32px] sm:leading-[1.35] md:text-[40px] lg:text-[44px] lg:leading-[60px]"
            >
              <span className="text-accent">{firstWord}</span>{" "}
              {restOfTitle.join(" ")}
            </h2>

            <p className="mt-3 max-w-[590px] text-sm font-medium leading-6 text-black sm:text-base sm:leading-7 md:text-lg lg:mt-[10px] lg:text-justify lg:text-[20px] lg:leading-[40px]">
              {card.description}
            </p>

            <dl className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4 lg:mt-[18px] lg:grid-cols-2 lg:gap-x-[15px] lg:gap-y-[10px]">
              {CARD_STATS.map(({ icon, label, getValue }) => {
                const value = getValue(project);

                if (value == null) return null;

                const StatIcon = STAT_ICONS[icon];

                return (
                  <div
                    key={label}
                    className="flex min-w-0 items-center gap-3 rounded-[13px] border-2 border-accent bg-white px-3 py-3 sm:gap-3 sm:px-4 sm:py-4 lg:h-[89px] lg:gap-[18px] lg:px-3 lg:py-0 lg:pl-[19px]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/17 text-accent sm:h-11 sm:w-11 lg:h-[50px] lg:w-[50px]">
                      <StatIcon
                        className="h-6 w-6 sm:h-7 sm:w-7 lg:h-[37.5px] lg:w-[37.5px]"
                        strokeWidth={1.9}
                      />
                    </span>

                    <div className="min-w-0 flex-1">
                      <dt className="text-xs font-inter-medium leading-[40px] text-justify text-muted sm:text-sm lg:text-base">
                        {label}:
                      </dt>
                      <dd className="break-words text-sm font-semibold leading-[40px] font-inter-medium py-0 text-black sm:text-sm lg:text-base">
                        {value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>


{/* Interactive button rewritten with React Router Link */}
{/* <Link
  to="/" // 👈 Swapped from href="#overview" to a clean destination route path string
  className="btn mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-accent px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover sm:mt-4 sm:w-fit sm:min-w-[185px] sm:text-lg lg:h-[55px] lg:min-w-[185px] lg:px-6 lg:py-0 lg:text-xl"
>
  {card.ctaLabel}
</Link> */}

          </div>
        </div>
      </Container>
    </section>
  );
}
