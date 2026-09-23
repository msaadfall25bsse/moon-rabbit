export interface MiningMap {
  id: string;
  zone: string;
  title: string;
  description: string;
  image: string;
}

export interface Equipment {
  id: string;
  name: string;
  specs: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface MethodologyStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface InvestmentOption {
  id: string;
  level: string;
  title: string;
  description: string;
  features: string[];
}

export const MINING_MAPS: MiningMap[] = [
  {
    id: "map-01",
    zone: "Zone A",
    title: "All Minerals & Precious Stones",
    description: "Geological survey mapping top mineral deposits including Aquamarine, Tourmaline, Topaz, and Quartz across Gilgit-Baltistan.",
    image: "/images/mining/map-01.jpg",
  },
  {
    id: "map-02",
    zone: "Zone B",
    title: "Gold Specific Veins & Placer Deposits",
    description: "Indus and Hunza riverbed placer gold mapping, identifying ancient alluvial deposits and bedrock gold veins.",
    image: "/images/mining/map-02.jpg",
  },
  {
    id: "map-03",
    zone: "Zone C",
    title: "Gem Stones & Lapis Lazuli Belts",
    description: "Deep mountain range mapping focused on Lapis Lazuli, Emeralds, and Ruby deposits in Hindu Kush and Karakoram belts.",
    image: "/images/mining/map-03.jpg",
  },
];

export const MINING_EQUIPMENT: Equipment[] = [
  {
    id: "eq-01",
    name: "GPZ 7000 / 8000 Field Detection System",
    specs: "Extreme Depth & Ground Balance",
    description: "Industry-leading ZVT technology detector for deep gold nugget discovery in mineralized ground.",
    image: "/images/mining/equipment-01.jpg",
  },
  {
    id: "eq-02",
    name: "GPX 6000 Deep Gold Detector",
    specs: "GeoSense-PI Technology",
    description: "Lightweight pulse induction detector built for discovering all gold sizes across rugged mountain terrain.",
    image: "/images/mining/equipment-02.jpg",
  },
  {
    id: "eq-03",
    name: "Gold Pan Premium Prospecting Kit",
    specs: "Heavy-Duty Polypropylene Pans",
    description: "Professional sluice and panning gear for sampling riverbed gravels along the Indus and Shyok rivers.",
    image: "/images/mining/equipment-03.jpg",
  },
  {
    id: "eq-04",
    name: "Gold Monster 1000",
    specs: "Fully Automatic 45 kHz VLF",
    description: "High-frequency sensitive detector optimized for tiny gold particles and fine vein prospecting.",
    image: "/images/mining/equipment-04.jpg",
  },
];

export const MINING_TEAM: TeamMember[] = [
  {
    id: "team-01",
    name: "Lead Prospector",
    role: "Field Exploration Chief",
    bio: "Over 15 years of mountain prospecting experience tracking placer gold veins and high-altitude mineral deposits.",
    image: "/images/mining/team-01.jpg",
  },
  {
    id: "team-02",
    name: "Geological Analyst",
    role: "Astro-Geology Specialist",
    bio: "Expert in remote sensing, satellite spectral mapping, and structural geology of Northern Pakistan ranges.",
    image: "/images/mining/team-02.jpg",
  },
  {
    id: "team-03",
    name: "Equipment Technician",
    role: "Detection Operations Lead",
    bio: "Specialist in high-tech ground detection calibration, heavy machinery logistics, and site safety.",
    image: "/images/mining/team-03.jpg",
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    stepNumber: "Step 01",
    title: "Site Reconnaissance",
    description: "Historical archival research combined with initial field sampling along mountain rivers and historical mining trails.",
  },
  {
    stepNumber: "Step 02",
    title: "Surface Mapping",
    description: "GPS structural geological mapping, rock sampling, and mineral density cataloging across targeted zones.",
  },
  {
    stepNumber: "Step 03",
    title: "Signal Detection",
    description: "Deploying GPZ and pulse-induction detection arrays to pinpoint subsurface metallic anomalies and gem pockets.",
  },
  {
    stepNumber: "Step 04",
    title: "Astro-Geology & Satellite Analysis",
    description: "Integrating satellite multispectral imagery with field data for precision extraction planning and environmental safety.",
  },
];

export const INVESTMENT_OPTIONS: InvestmentOption[] = [
  {
    id: "inv-01",
    level: "Entry Level",
    title: "Prospecting Partnership",
    description: "Initial participation in small-scale placer gold sampling and gemstone exploration projects.",
    features: [
      "Access to Zone A & B Field Reports",
      "Quarterly Prospecting Updates",
      "Direct Exploration Transparency",
    ],
  },
  {
    id: "inv-02",
    level: "Intermediate",
    title: "Mining Lease Investment",
    description: "Direct joint-venture participation in registered mineral claims and gemstone lease areas.",
    features: [
      "Dedicated Lease Rights",
      "Full On-site Equipment Deployment",
      "Priority Gemstone Allocation",
    ],
  },
  {
    id: "inv-03",
    level: "Institutional",
    title: "Heavy Machinery & Extraction",
    description: "Large-scale infrastructure investment for crushing, washing, and deep vein extraction plants.",
    features: [
      "Full Plant Operations",
      "Custom Mining Concession Agreements",
      "Executive Board Oversight",
    ],
  },
];
