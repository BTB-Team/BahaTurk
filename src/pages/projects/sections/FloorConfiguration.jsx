import Container from "../../../components/ui/project-ui/Container";
import SectionLabel from "../../../components/ui/project-ui/SectionLabel";
import { PROJECT_PAGE_CONTENT, describeFloorGroup } from "../content";
import { groupByUnitsPerFloor } from "../floorConfiguration";

export default function FloorConfiguration({ residenceTypes }) {
  const groups = groupByUnitsPerFloor(residenceTypes);
  if (groups.length === 0) return null;

  return (
    <section className="py-6 md:py-8">
      <Container>
        <SectionLabel>{PROJECT_PAGE_CONTENT.floorConfiguration.eyebrow}</SectionLabel>

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {groups.map((group) => {
            const [firstWord, ...restOfNoun] = group.unitsNoun.split(" ");
            return (
              <li key={group.unitsPerFloor} className="rounded-2xl bg-tint p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  {group.label}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="text-[96px] font-bold leading-none text-accent md:text-[120px]">
                    {group.unitsPerFloor}
                  </span>
                  <p className="text-2xl font-semibold leading-tight text-text md:text-[28px]">
                    {firstWord}
                    <span className="block">{[...restOfNoun, "Per Floor"].join(" ")}</span>
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text">
                  {describeFloorGroup(group)}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
