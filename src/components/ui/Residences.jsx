import { useState } from "react";
import projectData from "../../../db.json";

const residenceList = (projectData?.residence_types || []).map((item) => ({
  id: item.id,
  name: item.name || item.title,
  area: item.area || item.size,
  description: item.description,
  image: item.image || item.image_url || `/images/room-${item.id}.webp`,
  href: item.href || "#",
}));

export default function ResidencesSection() {
  const [residences] = useState(residenceList);
  const [status] = useState(residenceList.length ? "ready" : "error");

  return (
    <section className="mx-auto mt-10 max-w-[1200px] rounded-[30px] border border-border bg-white px-4 py-6 sm:px-6">
      <div className="mb-10 w-full">
        <p className="eyebrow mb-3 text-[18px] leading-[24px]">RESIDENCES</p>

        <div className="flex w-full flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="w-full md:w-fit">
            <p className="w-[305px] max-w-full text-[16px] font-normal leading-[100%] tracking-[0] text-text">
              DESIGNED FOR DIFFERENT LIFESTYLES
            </p>

            <h2 className="heading mt-[10px] text-[26px] sm:text-[30px] lg:text-[40px] md:whitespace-nowrap">
              Find a Home
              <span className="block text-text sm:inline">
                That Fits Your Life.
              </span>
            </h2>

            <p className="muted mt-4 max-w-[650px] text-[14px] font-medium sm:text-[16px]">
              Soft Residential Project offers a selection of thoughtfully
              planned residential units designed around space, natural light,
              functionality, comfort, and quality.
            </p>
          </div>

          <a
            href="#"
            className="btn btn-primary mt-0 w-fit shrink-0 gap-2 px-5 py-3 text-sm font-medium md:mt-[62px]"
          >
            Explore Residences
            <svg
              width="21.1239"
              height="15.4375"
              viewBox="0 0 21.1239 15.4375"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[15px] w-[21px]"
              aria-hidden="true"
            >
              <path
                d="M10.8887 2.8614C10.6735 2.6303 10.5563 2.3248 10.5618 2.009C10.5674 1.6933 10.6953 1.392 10.9186 1.1687C11.1419 0.9454 11.4432 0.8175 11.7589 0.812C12.0746 0.8064 12.3802 0.9236 12.6112 1.1389L19.1112 7.6389C19.3395 7.8674 19.4677 8.1771 19.4677 8.5001C19.4677 8.8231 19.3395 9.1329 19.1112 9.3614L12.6112 15.8614C12.4997 15.9811 12.3651 16.0771 12.2156 16.1438C12.0661 16.2104 11.9047 16.2462 11.7411 16.2491C11.5775 16.252 11.4149 16.2219 11.2632 16.1606C11.1114 16.0993 10.9735 16.008 10.8578 15.8923C10.7421 15.7766 10.6508 15.6387 10.5895 15.487C10.5283 15.3352 10.4982 15.1727 10.501 15.009C10.5039 14.8454 10.5397 14.684 10.6064 14.5345C10.673 14.385 10.769 14.2504 10.8887 14.1389L15.3087 9.7189H0.5625C0.2393 9.7189 -0.0707 9.5905 -0.2993 9.3619C-0.5279 9.1333 -0.6563 8.8233 -0.6563 8.5001C-0.6563 8.1769 -0.5279 7.8669 -0.2993 7.6383C-0.0707 7.4098 0.2393 7.2814 0.5625 7.2814H15.3087L10.8887 2.8614Z"
                fill="#FFFFFF"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Content row: hero image + 4 residence cards, all side by side */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {status === "loading" && (
          <div className="col-span-full flex items-center justify-center py-12 text-slate-500 lg:col-span-4">
            Loading residences…
          </div>
        )}

        {status === "error" && (
          <div className="col-span-full flex items-center justify-center py-12 text-slate-500 lg:col-span-4">
            Couldn't load residences right now. Please try again shortly.
          </div>
        )}

        {status === "ready" &&
          residences.map((residence) => (
            <ResidenceCard key={residence.id} residence={residence} />
          ))}
      </div>
    </section>
  );
}

function ResidenceCard({ residence }) {
  return (
    <div className="mx-auto h-full w-full max-w-[275px]">
      <a
        href={residence.href || "#"}
        className="card group flex h-full flex-col overflow-hidden rounded-2xl"
      >
        <div className="overflow-hidden">
          <img
            src={residence.image}
            alt={residence.name}
            className="h-[221px] w-full object-cover transition-transform duration-300"
          />
        </div>

        <div className="relative flex flex-1 flex-col gap-1 px-4 py-4">
          <h3 className="text-base font-semibold text-text">
            {residence.name}
          </h3>
          <p className="text-[16px] font-semibold leading-[24px] text-accent">
            {residence.area}
          </p>
          <p className="mt-1 pr-8 text-sm text-muted">
            {residence.description}
          </p>

          <span className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-accent/20 bg-icon-bg text-accent">
            <ArrowIcon className="h-4 w-4" />
          </span>
        </div>
      </a>
    </div>
  );
}

// Small inline arrow icon — no external icon library needed.
function ArrowIcon({ className }) {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="19.5" cy="19.5" r="19.5" fill="#0F99CC" fill-opacity="0.17" />
      <path
        d="M21.8887 13.8614C21.6735 13.6303 21.5563 13.3248 21.5618 13.009C21.5674 12.6933 21.6953 12.392 21.9186 12.1687C22.1419 11.9454 22.4432 11.8175 22.7589 11.812C23.0746 11.8064 23.3802 11.9236 23.6112 12.1389L30.1112 18.6389C30.3395 18.8674 30.4677 19.1771 30.4677 19.5001C30.4677 19.8231 30.3395 20.1328 30.1112 20.3614L23.6112 26.8614C23.4997 26.9811 23.3651 27.0771 23.2156 27.1438C23.0661 27.2104 22.9047 27.2462 22.7411 27.2491C22.5775 27.252 22.4149 27.2219 22.2632 27.1606C22.1114 27.0993 21.9735 27.008 21.8578 26.8923C21.7421 26.7766 21.6508 26.6387 21.5896 26.487C21.5283 26.3352 21.4981 26.1727 21.501 26.009C21.5039 25.8454 21.5397 25.684 21.6064 25.5345C21.673 25.385 21.769 25.2504 21.8887 25.1389L26.3088 20.7189H10.5625C10.2393 20.7189 9.92927 20.5905 9.70071 20.3619C9.47215 20.1333 9.34375 19.8233 9.34375 19.5001C9.34375 19.1769 9.47215 18.8669 9.70071 18.6383C9.92927 18.4098 10.2393 18.2814 10.5625 18.2814H26.3088L21.8887 13.8614Z"
        fill="#0F99CC"
      />
    </svg>
  );
}
