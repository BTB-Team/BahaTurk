import Container from "../../../components/ui/project-ui/Container";
import { PinIcon, STAT_ICONS } from "../../../components/ui/project-ui/icons";
import { CARD_STATS, PROJECT_PAGE_CONTENT } from "../content";

export default function ProjectCard({ project }) {
  const { card, country } = PROJECT_PAGE_CONTENT;
  const [firstWord, ...restOfTitle] = project.title.split(" ");
  const [place, ...region] = (project.specs?.location ?? "").split(",");
  const regionText = [region.join(",").trim(), country].filter(Boolean).join(", ");

  return (
    <section aria-labelledby="project-card-title" className="py-8 md:py-12">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,590px)] lg:gap-[34px]">
          <div className="relative">
            <img
              src={project.cover_image}
              alt={project.title}
              className="aspect-[6/5] w-full rounded-2xl object-cover"
            />
            {place && (
              <div className="absolute left-3 top-3 flex items-center gap-2 rounded-lg bg-white px-2.5 py-2 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-icon-bg text-accent">
                  <PinIcon className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-text">{place},</p>
                  <p className="text-[11px] text-muted">{regionText}</p>
                </div>
              </div>
            )}
          </div>

          <div>
            <h2
              id="project-card-title"
              className="heading md:text-[40px]"
            >
              <span className="text-accent">{firstWord}</span> {restOfTitle.join(" ")}
            </h2>

            <p className="mt-4 max-w-[590px] text-justify text-[20px] font-medium leading-[40px] tracking-normal text-text">
              {card.description}
            </p>

            <dl className="mt-6 grid max-w-[536px] grid-cols-[258px_258px] justify-between gap-y-4">
              {CARD_STATS.map(({ icon, label, getValue }) => {
                const value = getValue(project);
                if (value == null) return null;
                const StatIcon = STAT_ICONS[icon];
                return (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-accent bg-white px-3.5 py-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-icon-bg text-accent">
                      <StatIcon className="h-6 w-6" />
                    </span>
                    <div className="leading-snug">
                      <dt className="text-xs text-muted">{label}:</dt>
                      <dd className="text-[15px] font-semibold text-text">{value}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>

            <a
              href="#overview"
              className="btn mt-5 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
            >
              {card.ctaLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}