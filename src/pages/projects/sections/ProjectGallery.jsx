import Container from "../../../components/ui/project-ui/Container";
import SectionLabel from "../../../components/ui/project-ui/SectionLabel";
import { PROJECT_PAGE_CONTENT } from "../content";

/**
 * Figma layout repeats every 6 images on a 3-column grid:
 * tall | wide(2) / small | small / wide(2) | small
 * If the last image would leave a hole, it stretches to fill the row,
 * so any number of images (5 today) still looks finished.
 */
const TILE_PATTERN = ["md:row-span-2", "md:col-span-2", "", "", "md:col-span-2", ""];

function tileClass(index, total) {
  const position = index % TILE_PATTERN.length;
  if (index === total - 1) {
    if (position === 0 || position === 4) return "md:col-span-3";
    if (position === 2) return "md:col-span-2";
  }
  return TILE_PATTERN[position];
}

export default function ProjectGallery({ images }) {
  if (images.length === 0) return null;

  return (
    <section className="py-6 md:py-8">
      <Container>
        <SectionLabel>{PROJECT_PAGE_CONTENT.gallery.eyebrow}</SectionLabel>

        <ul className="mt-6 grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[210px] md:grid-cols-3 md:gap-4">
          {images.map((image, index) => (
            <li
              key={image.id}
              className={`overflow-hidden rounded-2xl ${tileClass(index, images.length)}`}
            >
              <img
                src={image.image_url}
                alt={image.alt_text}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
