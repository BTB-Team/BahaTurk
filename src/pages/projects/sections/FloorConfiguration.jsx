
import Container from "../../../components/ui/project-ui/Container";
import SectionLabel from "../../../components/ui/project-ui/SectionLabel";
import {
  PROJECT_PAGE_CONTENT,
  describeFloorGroup,
} from "../content";
import { groupByUnitsPerFloor } from "../floorConfiguration";

export default function FloorConfiguration({ residenceTypes }) {
  const groups = groupByUnitsPerFloor(residenceTypes);

  if (groups.length === 0) return null;

  return (
    <section className="py-6 md:py-8">
      <Container>
        <SectionLabel>
          {PROJECT_PAGE_CONTENT.floorConfiguration.eyebrow}
        </SectionLabel>

        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {groups.map((group) => {
            const [firstWord, ...restOfNoun] =
              group.unitsNoun.split(" ");

            const isVip = group.unitsNoun
              .toLowerCase()
              .includes("residence");

            return (
              <li
                key={group.unitsPerFloor}
                className="min-w-0 rounded-[20px] bg-[#0F99CC2B] p-5 font-bahaturk-inter sm:p-6 lg:min-h-[376px] lg:p-[26px]"
              >
                <p className="m-0 text-[20px] font-bold leading-[30px] text-accent sm:text-[24px] sm:leading-[37px]">
                  {group.label}
                </p>

                <div className="mt-5 flex min-w-0 items-center gap-4 sm:mt-6 sm:gap-6">
                  <span className="shrink-0 text-[100px] font-bold leading-none text-accent sm:text-[120px] lg:text-[150px]">
                    {group.unitsPerFloor}
                  </span>

                  <p className="m-0 min-w-0 text-[26px] font-semibold leading-[1.12] text-black sm:text-[32px] sm:leading-[1.15] lg:text-[40px] lg:leading-[45px]">
                    {firstWord}
                    <span className="block">
                      {[...restOfNoun, "Per Floor"].join(" ")}
                    </span>
                  </p>
                </div>

                <p
                  className={`mt-6 mb-0 w-full font-bahaturk-inter text-[16px] font-normal leading-[30px] tracking-[0] text-black sm:text-[18px] sm:leading-[34px] lg:text-[20px] lg:leading-[37px] ${
                    isVip ? "lg:max-w-[533px]" : "lg:max-w-full"
                  }`}
                >
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
