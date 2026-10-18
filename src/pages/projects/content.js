import { assetUrl } from "./data/assetUrl";

const IMG = assetUrl("/images/projects");

export const PROJECT_PAGE_CONTENT = {
  country: "Afghanistan",
  hero: {
    eyebrow: " Our Projects",
    title: { plain: "Engineering Ideas", accent: "Into Lasting Places." },
    text: "Explore developments shaped by quality, technology, safety, and long-term thinking.",
    image: `${IMG}/project-hero.webp`,
  },
  card: {
    description:
      "A modern residential development designed to combine engineering quality, urban convenience, community facilities, green spaces, and long-term investment value.",
    ctaLabel: "View Project",
  },
  overview: {
    title: { plain: "Designed for Life.", accent: "Engineered for the Future." },
    image: `${IMG}/image2.webp`,
    imageAlt: "Construction workers on site",

    // 👈 با گذاشتن یک \n بعد از هر نقطه، متن را مجبور می‌کنیم دقیقاً مثل فیگما به خط بعدی سقوط کند
    text: "Solh Residential Project is Baha Turk Construction Company's first and largest project in Afghanistan.\n Developed in cooperation with the Ministry of Urban Development and Housing, the project aims to create a modern, safe, and well-planned residential community for Afghan \nfamilies.\nPhase One is being developed across approximately 32 jeribs in Makroyan 5, Kabul.\nThe overall development is planned to include 118 residential blocks, with 20 blocks included in Phase One."
  },

  floorConfiguration: { 
    eyebrow: "Floor Configuration" 
  },
  gallery: { 
    eyebrow: "Project Gallery" 
  },

  legal: {
    eyebrow: "Legal Assurance",
    // intro: "Transparency and legal assurance are essential to long-term property ownership.",
    image: `${IMG}/legal-deeds.webp`,
    imageAlt: "Official property deed folders",
  },

  cta: {
    eyebrow: "Find Your Future Home",
    title: { plain: "Live Better.", accent: "Invest with Confidence." },
    text: (projectTitle) =>
      `Explore the available residence types at ${projectTitle} and speak with our team for more information.`,
    image: `${IMG}/cta-bg.webp`,
    primary: { label: "Contact Sales", to: "/contact" },
    secondary: { label: "Request Information", to: "/contact" },
  },
};

export const CARD_STATS = [
  { icon: "status", label: "Status", getValue: (p) => p.status },
  { icon: "totalBlocks", label: "Total Planned blocks", getValue: (p) => p.specs?.total_planned_blocks },
  { icon: "phaseBlocks", label: "Phase One", getValue: (p) => p.specs?.blocks },
  { icon: "phaseArea", label: "Phase One Area", getValue: (p) => p.specs?.area },
];

/* 💡 توابع پیچیده buildOverviewParagraphs و شروط اضافه کاملاً از این بخش پاک‌سازی شدند */

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const toWord = (n) => NUMBER_WORDS[n] ?? String(n);

function joinWithAnd(items) {
  if (items.length <= 2) return items.join(" and ");
  return `${items.slice(0, -1).join(", ")}, and ${items.at(-1)}`;
}

export function describeFloorGroup(group) {
  const count = toWord(group.unitsPerFloor);
  if (group.kind === "rooms") {
    const rooms = joinWithAnd(group.shortNames.map((n) => `${n}-room`));
    return `In the ${rooms} residential blocks, each floor includes ${count} residential units.`;
  }
  return `${joinWithAnd(group.shortNames)} blocks are designed with only ${count} residences per floor, providing residents with greater space and privacy.`;
}
