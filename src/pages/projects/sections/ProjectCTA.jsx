
import { Link } from "react-router-dom";
import Container from "../../../components/ui/project-ui/Container";
import { PROJECT_PAGE_CONTENT } from "../content";

export default function ProjectCTA({ project }) {
  const {
    eyebrow,
    title,
    text,
    image,
    primary,
    secondary,
  } = PROJECT_PAGE_CONTENT.cta;

  return (

<section className="relative min-h-[356px] py-10 md:py-16 flex flex-col justify-center isolate mt-8 overflow-hidden bg-white">
  <img
    src={image}
    alt=""
    aria-hidden="true"
    className="absolute inset-0 -z-10 h-full w-full object-cover [object-position:center_calc(70%_+_0px)]"
  />

  <div
    className="absolute inset-0 -z-10 bg-white/90"
    aria-hidden="true"
  />

  <Container className="text-center w-full">
    {/* باکس eyebrow */}
    <div className="mb-4 md:mb-6 w-full mx-auto flex justify-center">
      {/* 👈 حذف text-justify و تنظیم leading متناسب با موبایل و دسکتاپ */}
      <p className="text-sm sm:text-base md:text-lg lg:text-[24px] font-bold font-bahaturk-inter leading-normal lg:leading-[34px] uppercase tracking-normal text-center text-accent">
        {eyebrow}
      </p>
    </div>

    {/* باکس عنوان H2 ریسپانسیو پله‌ای */}
    <h2 className="mt-2 font-serif text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight lg:leading-[54px] text-text">
      {title.plain}{" "}
      <span className="text-accent">{title.accent}</span>
    </h2>

    {/* 
      توضیحات داینامیک:
      👈 کلاس leading-relaxed در موبایل فعال شد تا کلمات روی هم سوار نشوند.
      👈 سایز متن پله‌ای شد (text-sm در موبایل، md:text-base در تبلت، lg:text-[24px] در دسکتاپ) 
      تا نظم پاراگراف‌ها با تغییر مانیتور کاملاً حفظ شود.
    */}
    <p className="mx-auto mt-4 max-w-3xl font-inter-medium text-sm sm:text-base md:text-lg lg:text-[24px] leading-relaxed lg:leading-[42px] tracking-normal text-text whitespace-pre-line select-text text-center">
      {text(project.title)}
    </p>

    {/* 
      باکس دکمه‌ها (Responsive Buttons):
      - ابعاد دکمه‌ها در موبایل کمی جمع‌تر (h-[48px] text-[16px]) شد تا در صفحه‌های کوچک زیباتر بنشینند.
      - در دسکتاپ (md به بالا) به همان سایز بزرگ ۵۴ پیکسلی و ۲۰ پیکسلی فیگما ارتقا می‌یابند.
    */}
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

      <Link
        to={primary.to}
        className="inline-flex h-[48px] md:h-[54px] items-center justify-center rounded-[9px] bg-accent px-6 md:px-8 font-sans text-[16px] md:text-[20px] font-medium leading-none tracking-normal text-white transition-colors hover:bg-accent-hover text-center"
      >
        {primary.label}
      </Link>

      <Link
        to={secondary.to}
        className="inline-flex h-[48px] md:h-[54px] items-center justify-center rounded-[9px] border border-border bg-white px-6 md:px-8 font-sans text-[16px] md:text-[20px] font-medium leading-none tracking-normal text-accent transition-colors hover:bg-icon-bg text-center"
      >
        {secondary.label}
      </Link>

    </div>

  </Container>
</section>

  );
}
