
import Container from "../../../components/ui/project-ui/Container";
import SectionLabel from "../../../components/ui/project-ui/SectionLabel";
import { PROJECT_PAGE_CONTENT } from "../content";

const TILE_PATTERN = [
  "md:row-span-2",
  "md:col-span-2",
  "",
  "",
  "md:col-span-2",
  "",
];

function tileClass(index, total) {
  const position = index % TILE_PATTERN.length;

  if (index === total - 1) {
    if (position === 0 || position === 4) {
      return "md:col-span-3";
    }

    if (position === 2) {
      return "md:col-span-2";
    }
  }

  return TILE_PATTERN[position];
}

export default function ProjectGallery({ images }) {
  if (!images?.length) return null;

  return (
    <section className="py-6 md:py-8">
      <Container>
        <SectionLabel>
          {PROJECT_PAGE_CONTENT.gallery.eyebrow}
        </SectionLabel>

        <ul
          className="
            mt-6 grid grid-cols-1 gap-3
            auto-rows-[220px]
            sm:grid-cols-2 sm:auto-rows-[240px]
            md:grid-cols-3 md:auto-rows-[240px] md:gap-4
            lg:auto-rows-[260px]
            xl:auto-rows-[300px]
          "
        >
          {images.map((image, index) => (
          <li
  key={image.id}
  className={`
    min-h-0 min-w-0 overflow-hidden rounded-[25px]
    ${tileClass(index, images.length)}
  `}
>
  <img
    src={image.image_url}
    alt={image.alt_text || "Project gallery image"}
    loading="lazy"
    className={`
      block h-full w-full object-cover
      ${index === 1 ? "object-[center_35%]" : "object-center"}
    `}
  />
</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
