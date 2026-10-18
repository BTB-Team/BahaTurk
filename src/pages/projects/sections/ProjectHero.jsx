import Container from "../../../components/ui/project-ui/Container";
import { PROJECT_PAGE_CONTENT } from "../content";

export default function ProjectHero() {
  const { eyebrow, title, text, image } = PROJECT_PAGE_CONTENT.hero;

  return (
<section className="relative isolate overflow-hidden flex flex-col md:block bg-white min-h-[480px]">
  {/* 
    Background image:
    👈 کلاس absolute فقط از تبلت به بالا فعال می‌شود.
    با تغییر به order-1، تصویر در موبایل دقیقاً در بالاترین نقطه (بالای متن) لود می‌شود.
  */}
  <img
    src={image}
    alt=""
    aria-hidden="true"
    className="w-full h-[280px] sm:h-[350px] object-cover object-right order-1 md:absolute md:inset-0 md:-z-20 md:h-full md:w-full"
  />

{/* 
  Figma Gradient Overlay (پخش شدن بیشتر سفیدی به سمت راست در تبلت):
  👈 نقطه غلظت ۱۰۰٪ سفید را از ۳۵٪ به ۵۰٪ افزایش دادم تا سفیدی بیشتر جلو بیاید.
  نقاط بعدی شفافیت (۸۵٪ و ۴۵٪) را هم جلوتر بردم تا محو شدگی با شیبی بسیار نرم‌تر 
  تا نقطه ۹2٪ مانیتور منتشر شود و کلمه technology کاملاً در امان و خوانا باشد.
*/}
<div
  aria-hidden="true"
  className="absolute inset-x-0 top-0 h-[280px] sm:h-[350px] -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)] md:inset-0 md:h-full md:bg-[linear-gradient(90deg,#FFFFFF_0%,#FFFFFF_50%,rgba(255,255,255,0.85)_70%,rgba(255,255,255,0.45)_82%,rgba(255,255,255,0)_92%)] lg:bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)]"
/>



  {/* 
    Container content:
    👈 با تغییر به order-2، در موبایل به صورت کاملاً دلباز و با پس‌زمینه سفید در زیر عکس رندر می‌شود.
    در تبلت و دسکتاپ به صورت مطلق روی عکس شناور می‌گردد.
  */}
  <Container className="py-10 sm:py-12 md:py-16 order-2 md:relative md:z-10 lg:pb-[89px] lg:pt-[103px]">
    <div className="relative z-10 max-w-[610px]">
{/* 
  توضیحات هیرو:
  👈 کلاس md:max-w-[430px] اضافه شد تا عرض متن در تبلت کمی جمع‌تر شود.
  این محدودیت هوشمند باعث می‌شود کلمه‌ی technology خودبخود به خط بعدی بشکند 
  و در فضای سفید و ۱۰۰٪ خوانا قرار بگیرد، در حالی که در دسکتاپ بزرگ (lg:max-w-[534px]) متن دوباره باز می‌شود.
*/}
<p className="mt-4 w-full max-w-[534px] md:max-w-[430px] lg:max-w-[534px] text-[20px] font-bahaturk-inter font-bold leading-[100%] tracking-normal text-accent sm:text-lg sm:leading-[30px] md:text-xl lg:mt-[18px] lg:text-2xl lg:leading-[35px]">
  {eyebrow}
</p>


      <h1 className="mt-5 max-w-full text-[clamp(30px,5.5vw,48px)] font-bold leading-[1.18] tracking-normal text-black sm:mt-6 md:leading-[1.2] lg:mt-[27px] lg:text-[48px] lg:leading-[65px]">
        {title.plain}
        <span className="mt-1 block text-accent">
          {title.accent}
        </span>
      </h1>

      <span
        className="mt-3 block h-[2px] max-w-[360px] bg-accent sm:mt-4 lg:mt-3"
        aria-hidden="true"
      />

      <p className="mt-4 max-w-[534px] text-base font-semibold leading-7 tracking-normal text-accent sm:text-lg sm:leading-[30px] md:text-xl lg:mt-[18px] lg:text-2xl lg:leading-[35px]">
        {text}
      </p>
    </div>
  </Container>
</section>



  );
}