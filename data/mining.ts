export interface MiningMapZone {
  id: string;
  zone: string;
  region: string;
  image: string;
}

export interface MiningEquipmentItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface MiningTeamMember {
  id: string;
  role: string;
  description: string;
  image: string;
}

export interface MiningMethodologyStep {
  step: string;
  title: string;
  description: string;
}

export interface MiningInvestmentOption {
  id: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

// Internal Navigation Links
export const MINING_NAV_LINKS = [
  { label: "Maps", target: "#maps" },
  { label: "Equipment", target: "#equipment" },
  { label: "Team", target: "#team" },
  { label: "Methodology", target: "#methodology" },
  { label: "Investment", target: "#investment" },
  { label: "Contact", target: "#contact" },
];

// Wooden Plank Banners
export const MINING_BANNERS = {
  heroQuote: "/images/banners/Life-is-a-treasure-hunt-you-just-have-to-know-where-to-look.-3-e1780662551985.png",
  maps: "/images/banners/aged_wooden_plank_maps-e1780921812113.png",
  equipment: "/images/banners/aged_wooden_plank_equipment-e1780921894713.png",
  team: "/images/banners/aged_wooden_plank_team-e1780921976415.png",
  methodology: "/images/banners/aged_wooden_plank_methodology-e1780922043204.png",
  investment: "/images/banners/aged_wooden_plank_investment-removebg-preview-e1780922169744.png",
  contact: "/images/banners/aged_wooden_plank_contact-e1780840422598.png",
};

// 1. Maps Section
export const MINING_MAPS: MiningMapZone[] = [
  {
    id: "zone-a",
    zone: "Zone A - All Minerals",
    region: "Gilgit Baltistan & KPK Regions of Pakistan.",
    image: "/images/mining/Moon-Rabbit-Mining-Map-1.png",
  },
  {
    id: "zone-b",
    zone: "Zone B – Gold Specific",
    region: "Gilgit Baltistan & KPK Regions of Pakistan.",
    image: "/images/mining/ChatGPT-Image-May-21-2026-09_18_40-PM.png",
  },
  {
    id: "zone-c",
    zone: "Zone C – Gem Stones",
    region: "Gilgit Baltistan & KPK Regions of Pakistan.",
    image: "/images/mining/ChatGPT-Image-May-21-2026-09_22_15-PM.png",
  },
];

// 2. Equipment Section
export const MINING_EQUIPMENT: MiningEquipmentItem[] = [
  {
    id: "gpz-8000",
    name: "GPZ 8000 Field Detection System",
    subtitle: "GPZ 8000: Final Search",
    description:
      "The GPZ 8000 is an advanced gold detection system designed for mineral exploration in challenging and highly mineralized ground. It delivers strong depth penetration and signal clarity across rugged mountainous terrains.",
    image: "/images/mining/GPZ8000_web_z17_hero_dt_v01_1_-removebg-preview.png",
  },
  {
    id: "gpx-6000",
    name: "GPX 6000",
    subtitle: "GPX 6000: Deep Field Search",
    description:
      "High-precision pulse-induction technology designed for deep field scanning and rapid ground coverage, identifying nuggets across diverse soil conditions.",
    image: "/images/mining/Banner_GPX6000.1-1-1024x529.webp",
  },
  {
    id: "gold-pan",
    name: "GOLD PAN PREMIUM KIT",
    subtitle: "PANNING TOOLS",
    description:
      "Professional panning tools used for primary riverbed sampling, gravity separation, and initial alluvial sediment verification in field exploration.",
    image: "/images/mining/116-1024x538.webp",
  },
  {
    id: "gold-monster",
    name: "GOLD MONSTER 1000",
    subtitle: "GM 1000: Shallow Search",
    description:
      "High-frequency automated detection tailored for pinpointing fine gold and shallow targets in high-variability mountain soils.",
    image: "/images/mining/WhatsApp_Image_2026-05-23_at_10_52_36_PM-Picsart-AiImageEnhancer-removebg-preview.png",
  },
];

// 3. Team Section
export const MINING_TEAM: MiningTeamMember[] = [
  {
    id: "team-lead",
    role: "Lead Prospector",
    description:
      "Responsible for planning and managing field exploration activities and coordinating survey operations.",
    image: "/images/mining/Untitled-design-2026-06-03T153804.867.png",
  },
  {
    id: "team-analyst",
    role: "Geological Analyst",
    description:
      "Handles terrain interpretation, mapping data analysis, and mineral signal evaluation during field surveys.",
    image: "/images/mining/silhouette_female_final.png",
  },
  {
    id: "team-tech",
    role: "Equipment Technician",
    description:
      "Manages detection equipment setup, calibration, and technical support for field operations.",
    image: "/images/mining/silhouette_variation_2_final.png",
  },
];

// 4. Methodology Section
export const MINING_METHODOLOGY: MiningMethodologyStep[] = [
  {
    step: "Step 01",
    title: "Site Reconnaissance",
    description:
      "Initial terrain inspection and evaluation of access routes and geological conditions.",
  },
  {
    step: "Step 02",
    title: "Surface Mapping",
    description:
      "Recording geological formations and structural features across the exploration zone.",
  },
  {
    step: "Step 03",
    title: "Signal Detection",
    description:
      "Using detection equipment to identify potential subsurface mineral indicators.",
  },
  {
    step: "Step 04",
    title: "Astro-Geology",
    description:
      "Correlating celestial and seasonal cycles with high-altitude mineral accessibility and terrain stability.",
  },
];

// 5. Investment Section
export const MINING_INVESTMENT: MiningInvestmentOption[] = [
  {
    id: "inv-entry",
    title: "Entry Level",
    description:
      "Early-stage participation focused on foundational funding support for exploration setup, initial site assessment, and preparatory geological surveys.",
  },
  {
    id: "inv-lease",
    title: "Mining Lease Investment",
    description:
      "Mid-stage investment involving secured mining lease participation, regulated site access, and organized extraction planning across licensed zones.",
    highlighted: true,
  },
  {
    id: "inv-machinery",
    title: "Heavy Machinery Investment",
    description:
      "Final-stage investment focused on active extraction operations, deployment of heavy mining equipment, and large-scale resource processing.",
  },
];
