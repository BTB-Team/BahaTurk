import uncompromising from "../../assets/vector/uncompromising.webp";
import innovation from "../../assets/vector/innovation.webp";
import integrity from "../../assets/vector/integrity.webp";
import responsible from "../../assets/vector/responsibilty.webp";
import safety from "../../assets/vector/saftey.webp";
import customer from "../../assets/vector/customer.webp";
import sustainable from "../../assets/vector/sustainable.webp";

const AboutValues = () => {
  const values = [
    {
      icon: uncompromising,
      title: (
        <>
          Uncompromising
          <br />
          Quality
        </>
      ),
    },
    {
      icon: innovation,
      title: "Innovation",
    },
    {
      icon: integrity,
      title: (
        <>
          Integrity &
          <br />
          Transparency
        </>
      ),
    },
    {
      icon: responsible,
      title: "Responsibility",
    },
    {
      icon: safety,
      title: "Safety First",
    },
    {
      icon: customer,
      title: (
        <>
          Customer
          <br />
          Commitment
        </>
      ),
    },
    {
      icon: sustainable,
      title: (
        <>
          Sustainable
          <br />
          Development
        </>
      ),
    },
  ];

  return (
<section
  className="w-full overflow-hidden bg-white px-4 sm:px-6 md:px-8 lg:px-12"
  style={{ fontFamily: "bahaturk-inter, sans-serif" }}
>
  {/* WHAT WE BUILD ON */}
  <div className="relative z-10 mx-auto mt-10 w-full max-w-[1200px] sm:mt-12 md:mt-18 md:mb-12">
    {/* HEADING - Untouched */}
    <h2 className="mb-6 text-center text-[27px] font-[700] text-black sm:mb-8 sm:text-[32px] md:mb-9 md:text-[38px] lg:text-[48px]">
      What We <span className="text-[#159dcc]">Build</span> On.
    </h2>

{/*     
      FIRST ROW — 4 CARDS (ردیف اول - اصلاح‌شده):
      👈 سیستم گرید مچاله‌کننده حذف شد و به flex-wrap متصل گردید.
      حالا ۴ کارت اول دقیقاً هم‌سایز، هم‌عرض و موازات با ردیف دوم باز می‌شوند و دیگر فشرده نخواهند شد.
      از سایز تبلت به بالا (sm:grid) خودکار فیتِ سیستم گرید ۴ ستونه دسکتاپ می‌شود.
    */}
    <div className="flex flex-wrap justify-center gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
      {values.slice(0, 4).map((item, index) => {
        const Icon = item.icon;
        return <ValueCard key={index} image={Icon} title={item.title} />;
      })}
    </div>

    {/* SECOND ROW — 3 CARDS (ردیف دوم - بدون تغییر) */}
    <div className="mt-4 flex flex-wrap justify-center gap-4 sm:grid sm:grid-cols-2 lg:mx-auto lg:max-w-[890px] lg:grid-cols-3">
      {values.slice(4).map((item, index) => {
        const Icon = item.icon;
        return (
          <ValueCard key={index + 4} image={Icon} title={item.title} />
        );
      })}
    </div>
  </div>
</section>




  );
};

// ============================================================
// VALUE CARD
// ============================================================

function ValueCard({ image, title }) {
return (
  <div 
    key={title}
    // {/* 
    //   👈 عرض کارت در موبایل روی w-[calc(50%-8px)] تنظیم شد تا هم در گرید و هم در فلکس، 
    //   دقیقاً نصف عرض صفحه موبایل را دلباز پر کند و مچاله نشود. در اسکرین‌های بزرگ (sm:w-full) فیت گرید می‌گردد.
    // */}
    className="flex min-h-[145px] w-[calc(50%-8px)] sm:w-full shrink-0 flex-col items-center justify-start rounded-[16px] border-2 border-[#8bcfe3] bg-white px-4 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#159dcc] hover:shadow-md sm:min-h-[160px] sm:rounded-[17px] md:min-h-[170px] lg:min-h-[180px]"
  >
    {/* ICON - Untouched */}
    <div className="mb-3 flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#dff3fa] sm:h-[66px] sm:w-[66px] md:h-[72px] md:w-[72px]">
      <img src={image} alt="" />
    </div>

    {/* TITLE - Untouched */}
    <h3 className="flex md:leading-[33px] text-[14px] font-[700] text-black sm:text-[16px] md:text-[20px] lg:text-[24px]">
      {title}
    </h3>
  </div>
);



}

export default AboutValues;
