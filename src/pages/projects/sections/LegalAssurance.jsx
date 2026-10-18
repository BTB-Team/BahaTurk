
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

        <div className="mt-6 grid grid-cols-1 items-center gap-8 xl:grid-cols-2 xl:gap-12">
          <div className="min-w-0 w-full">
            {legal.title && (
              <h2 className="heading font-bahaturk-inter text-[32px] leading-tight font-extrabold sm:text-[40px] xl:text-[48px] xl:leading-[72px]">
                {firstWord}
                <span className="block text-accent">
                  {restOfTitle.join(" ")}
                </span>
              </h2>
            )}

            <div className="mt-6 flex flex-col gap-5 text-[16px] md:text-[18px] xl:text-[20px] font-medium leading-[26px] md:leading-[30px] xl:leading-[34px] font-sans text-black text-left xl:text-justify whitespace-pre-line select-text">
              {/* <p>{intro}</p> */}
              <p>{legal.description}</p>
            </div>

          </div>

          <div className="w-full min-w-0 overflow-hidden rounded-[32px] border border-accent sm:rounded-[40px] xl:h-[427px] xl:w-full xl:max-w-[570px] xl:justify-self-end xl:rounded-[53px]">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="block aspect-[4/3] w-full object-contain sm:aspect-[3/2] xl:aspect-auto xl:h-full xl:object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
