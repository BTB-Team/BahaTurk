import Container from "../../../components/ui/project-ui/Container";
import { SparkleIcon } from "../../../components/ui/project-ui/icons";
import { PROJECT_PAGE_CONTENT } from "../content"; 

export default function ProjectOverview({ project, company }) {
  const { title, image, imageAlt } = PROJECT_PAGE_CONTENT.overview;

  return (
    <section id="overview" className="py-6 md:py-8 bg-white">
      <Container>
        {/* Title banner area */}
        <div className="flex w-full items-center gap-4 bg-[#0F99CC2B] px-4 py-5 sm:gap-5 sm:px-6 md:min-h-[150px] lg:gap-6">
          {/* آیکون ستاره که بالاتر با هم فیکس کردیم */}
          <SparkleIcon className="h-12 w-12 shrink-0 text-accent sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-[98px] lg:w-[98px]" />

          <h2 className="min-w-0 font-bahaturk-inter text-[28px] font-extrabold leading-[1.15] tracking-normal sm:text-[36px] md:text-[42px] lg:max-w-[630px] lg:text-[48px] lg:leading-[54px]">
            {title.plain}
            <span className="block text-accent decoration-2 underline-offset-2">
              {title.accent}
            </span>
          </h2>
        </div>

        {/* باکس ردیف اصلی دو ستونه بدون مچاله شدن در لپ‌تاپ */}
        <div className="mt-8 grid grid-cols-1 justify-items-center gap-8 xl:mt-12 xl:grid-cols-[618px_1fr] xl:gap-10 2xl:gap-[54px]">
          
          {/* متن اوورویو با شکستگی‌های دقیق بعد از نقطه طبق فرمول فیگما */}
          <p className="w-full max-w-[618px] font-sans text-[16px] md:text-[18px] xl:text-[20px] font-medium leading-[26px] md:leading-[30px] xl:leading-[34px] tracking-normal text-black text-left md:text-justify whitespace-pre-line select-text">
            {PROJECT_PAGE_CONTENT.overview.text}
          </p>

          {/* تصویر سمت راست کاملاً منطبق و قرینه */}
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="block h-auto w-full max-w-[505px] min-w-0 aspect-[505/337] rounded-[24px] object-cover xl:ml-auto"
          />
        </div>
      </Container>
    </section>
  );
}
