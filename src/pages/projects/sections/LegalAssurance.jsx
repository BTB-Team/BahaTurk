import Container from "../../../components/ui/project-ui/Container";
import SectionLabel from "../../../components/ui/project-ui/SectionLabel";
import { PROJECT_PAGE_CONTENT } from "../content";

export default function LegalAssurance({ legal }) {
  if (!legal) return null;
  const { eyebrow, intro, image, imageAlt } = PROJECT_PAGE_CONTENT.legal;
  // db title "Ownership Built on Confidence." -> "Ownership" / "Built on Confidence."
  const [firstWord, ...restOfTitle] = (legal.title ?? "").split(" ");

  return (
    <section className="py-6 md:py-8">
      <Container>
        <SectionLabel>{eyebrow}</SectionLabel>

        <div className="mt-6 grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            {legal.title && (
              <h2 className="heading md:text-[40px]">
                {firstWord}
                <span className="block text-accent">{restOfTitle.join(" ")}</span>
              </h2>
            )}
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-text md:text-justify">
              <p>{intro}</p>
              <p>{legal.description}</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-accent">
            <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
