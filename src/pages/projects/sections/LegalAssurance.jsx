import Container from "../../../components/ui/project-ui/Container";
import SectionLabel from "../../../components/ui/project-ui/SectionLabel";
import { PROJECT_PAGE_CONTENT } from "../content";

export default function LegalAssurance({ legal }) {
  if (!legal) return null;
  const { eyebrow, intro, image, imageAlt } = PROJECT_PAGE_CONTENT.legal;
  const [firstWord, ...restOfTitle] = (legal.title ?? "").split(" ");

  return (
    <section className="py-6 md:py-8">
      <Container>
        <SectionLabel>{eyebrow}</SectionLabel>

        <div className="mt-6 grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            {legal.title && (
              <h2 className="heading font-serif text-[32px] md:text-[40px] leading-[1.15]">
                {firstWord}
                <span className="block text-accent">{restOfTitle.join(" ")}</span>
              </h2>
            )}
            <div className="mt-6 space-y-5 text-base leading-[1.7] text-text font-inter-medium md:text-justify">
              <p>{intro}</p>
              <p>{legal.description}</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[53px] border border-accent">
            <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}