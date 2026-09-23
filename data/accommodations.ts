export interface AccommodationItem {
  id: string;
  name: string;
  location: string;
  images: string[];
}

export interface AccommodationSectionData {
  id: string;
  bannerImage: string;
  bannerAlt: string;
  items: AccommodationItem[];
}

// 1. Official Residence Section
export const OFFICIAL_RESIDENCE: AccommodationItem = {
  id: "residence-01",
  name: "Residence",
  location: "Location – Oghi",
  images: [
    "/images/accommodations/residence-01.jpg",
    "/images/accommodations/residence-02.jpg",
    "/images/accommodations/residence-03.jpg",
  ],
};

// 2. Moonrabbit Approved Hotels & Guest Houses Section (10 Verified Properties)
export const APPROVED_HOTELS: AccommodationItem[] = [
  {
    id: "hotel-serena",
    name: "serena hotel",
    location: "Location – Islamabad | Swat | Gilgit | Hunza | Khaplu | Shigar",
    images: [
      "/images/accommodations/serena-01.jpg",
      "/images/accommodations/serena-02.jpg",
      "/images/accommodations/serena-03.jpg",
      "/images/accommodations/serena-04.jpg",
    ],
  },
  {
    id: "hotel-roomys",
    name: "roomys",
    location: "Location – Islamabad | Hunza Dastaan | Minapin | Batakundi | Kalam",
    images: [
      "/images/accommodations/roomy-01.jpg",
      "/images/accommodations/roomy-02.jpg",
      "/images/accommodations/roomy-03.jpg",
      "/images/accommodations/roomy-04.jpg",
    ],
  },
  {
    id: "hotel-hindukush",
    name: "Hindukush Heights",
    location: "Location – Chitral | Mastuj Fort",
    images: [
      "/images/accommodations/hindukush-01.jpg",
      "/images/accommodations/hindukush-02.jpg",
      "/images/accommodations/hindukush-03.jpg",
      "/images/accommodations/hindukush-04.jpg",
    ],
  },
  {
    id: "hotel-khoj",
    name: "Khoj Resorts",
    location: "Location – Shigar/Skardu",
    images: [
      "/images/accommodations/khoj-01.jpg",
      "/images/accommodations/khoj-02.jpg",
      "/images/accommodations/khoj-03.jpg",
    ],
  },
  {
    id: "hotel-pc",
    name: "Pearl Continental",
    location: "Location – Malam Jabba, Legacy Hunza, Bhurban Murree",
    images: [
      "/images/accommodations/pc-01.jpg",
      "/images/accommodations/pc-02.jpg",
      "/images/accommodations/pc-03.jpg",
    ],
  },
  {
    id: "hotel-alpine",
    name: "Alpine Resort",
    location: "Location – Nathiagali",
    images: [
      "/images/accommodations/alpine-01.jpg",
      "/images/accommodations/alpine-02.jpg",
      "/images/accommodations/alpine-03.jpg",
    ],
  },
  {
    id: "hotel-magpie",
    name: "Magpie Lodge",
    location: "Location – Thandiani",
    images: [
      "/images/accommodations/magpie-01.jpg",
      "/images/accommodations/magpie-02.jpg",
      "/images/accommodations/magpie-03.jpg",
    ],
  },
  {
    id: "hotel-ayun-fort",
    name: "Ayun Fort Inn",
    location: "Location – Chitral (near Kalash Valley)",
    images: [
      "/images/accommodations/ayun-01.jpg",
      "/images/accommodations/ayun-02.jpg",
      "/images/accommodations/ayun-03.jpg",
      "/images/accommodations/ayun-04.jpg",
    ],
  },
  {
    id: "hotel-2-magpies",
    name: "2 Magpies",
    location: "Madal Gan (Near Boys Degree College), Ali Abad",
    images: [
      "/images/accommodations/2magpies-01.jpg",
      "/images/accommodations/2magpies-02.jpg",
      "/images/accommodations/2magpies-03.jpg",
    ],
  },
  {
    id: "hotel-luxus",
    name: "Luxus Hotels",
    location: "Location – Lahore, Skardu & Hunza",
    images: [
      "/images/accommodations/luxus-01.jpg",
      "/images/accommodations/luxus-02.jpg",
      "/images/accommodations/luxus-03.jpg",
    ],
  },
];

// 3. Tents Section
export const TENTS_DATA: AccommodationItem = {
  id: "tents-01",
  name: "Tents",
  location: "Available at any location upon request.",
  images: [
    "/images/accommodations/tents-01.jpg",
    "/images/accommodations/tents-02.jpg",
    "/images/accommodations/tents-03.jpg",
    "/images/accommodations/tents-04.jpg",
  ],
};

// Section Banners
export const ACCOMMODATION_BANNERS = {
  residenceBanner: "/images/accommodations/residence-banner.png",
  hotelsBanner: "/images/accommodations/hotels-banner.png",
  tentsBanner: "/images/accommodations/tents-banner.png",
};
