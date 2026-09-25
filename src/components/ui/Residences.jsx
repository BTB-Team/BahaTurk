import { useEffect, useState } from "react";

/**
 * ResidencesSection
 * ------------------
 * A section inside the homepage. Header copy and hero image are static
 * (owned by this page), only the four residence cards come from the API.
 *
 *   npx json-server --watch db.json --port 3001
 *
 * Expected db.json shape:
 *
 * {
 *   "residences": [
 *     { "id": 1, "name": "3-Room Residence", "area": "Approx. 157 m²", "description": "...", "image": "..." },
 *     { "id": 2, "name": "4-Room Residence", "area": "Approx. 187 m²", "description": "...", "image": "..." },
 *     { "id": 3, "name": "5-Room Residence", "area": "Approx. 213 m²", "description": "...", "image": "..." },
 *     { "id": 4, "name": "VIP Residence",    "area": "Approx. 308 m²", "description": "...", "image": "..." }
 *   ]
 * }
 */

const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL || "http://localhost:3001";

export default function ResidencesSection() {
    const [residences, setResidences] = useState([]);
    const [status, setStatus] = useState("loading"); // loading | ready | error

    useEffect(() => {
        let cancelled = false;

        async function loadData() {
            setStatus("loading");
            try {
                const res = await fetch(`${API_BASE_URL}/residences`);

                if (!res.ok) {
                    throw new Error("Failed to fetch residences data");
                }

                const residencesData = await res.json();

                if (!cancelled) {
                    setResidences(residencesData);
                    setStatus("ready");
                }
            } catch (err) {
                if (!cancelled) {
                    console.error(err);
                    setStatus("error");
                }
            }
        }

        loadData();
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <section className="mx-auto max-w-[1200px] px-6 py-6 border border-[#0F99CC2B] rounded-[30px]">
            {/* Header row (static content, lives with this page) */}
            <div className="mb-10 w-full">
                {/* Label */}
                <p className="mb-3 flex items-center gap-2 text-[18px] font-semibold leading-[24px] text-accent">
                    <span className="w-[41px] border-t-[3px] border-accent"></span>
                    RESIDENCES
                </p>

                {/* Flex Row spanning full width */}
                <div className="flex w-full items-end justify-between gap-6">

                    {/* Left Side: Title and Paragraph locked to the same width */}
                    <div className="w-fit">
                        <h2 className="whitespace-nowrap text-[30px] font-extrabold leading-none text-accent sm:text-[40px]">
                            Find a Home <span className="text-slate-900">That Fits Your Life.</span>
                        </h2>

                        <p className="mt-4 text-[16px] font-medium">
                            Soft Residential Project offers a selection of thoughtfully planned
                            residential units designed around space, natural light,
                            functionality, comfort, and quality.
                        </p>
                    </div>

                    {/* Right Side: Button */}
                    <a
                        href="#"
                        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-700"
                    >
                        Explore Residences
                        <ArrowIcon className="h-4 w-4" />
                    </a>
                </div>
            </div>

            {/* Content row: hero image + 4 residence cards, all side by side */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">


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
        <div className="w-[275px] h-[393px]">
            <a
                href={residence.href || "#"}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-shadow hover:shadow-md"
            >
                <div className="overflow-hidden">
                    <img
                        src={residence.image}
                        alt={residence.name}
                        className="h-[221px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="relative flex flex-1 flex-col gap-1 px-4 py-4">
                    <h3 className="text-base font-semibold text-slate-900">{residence.name}</h3>
                    <p className="text-sm text-slate-400">{residence.area}</p>
                    <p className="mt-1 pr-8 text-sm text-slate-500">{residence.description}</p>

                    <span className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-sky-200 text-sky-600 transition-colors group-hover:bg-sky-600 group-hover:text-white">
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
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="19.5" cy="19.5" r="19.5" fill="#0F99CC" fill-opacity="0.17" />
            <path d="M21.8887 13.8614C21.6735 13.6303 21.5563 13.3248 21.5618 13.009C21.5674 12.6933 21.6953 12.392 21.9186 12.1687C22.1419 11.9454 22.4432 11.8175 22.7589 11.812C23.0746 11.8064 23.3802 11.9236 23.6112 12.1389L30.1112 18.6389C30.3395 18.8674 30.4677 19.1771 30.4677 19.5001C30.4677 19.8231 30.3395 20.1328 30.1112 20.3614L23.6112 26.8614C23.4997 26.9811 23.3651 27.0771 23.2156 27.1438C23.0661 27.2104 22.9047 27.2462 22.7411 27.2491C22.5775 27.252 22.4149 27.2219 22.2632 27.1606C22.1114 27.0993 21.9735 27.008 21.8578 26.8923C21.7421 26.7766 21.6508 26.6387 21.5896 26.487C21.5283 26.3352 21.4981 26.1727 21.501 26.009C21.5039 25.8454 21.5397 25.684 21.6064 25.5345C21.673 25.385 21.769 25.2504 21.8887 25.1389L26.3088 20.7189H10.5625C10.2393 20.7189 9.92927 20.5905 9.70071 20.3619C9.47215 20.1333 9.34375 19.8233 9.34375 19.5001C9.34375 19.1769 9.47215 18.8669 9.70071 18.6383C9.92927 18.4098 10.2393 18.2814 10.5625 18.2814H26.3088L21.8887 13.8614Z" fill="#0F99CC" />
        </svg>
    );
}