export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  description: string;
  inclusions: string[];
  image: string;
}

export const TOURS_DATA: TourPackage[] = [
  {
    id: "tour-01",
    title: "Gilgit - Hunza - Khunjerab",
    location: "Gilgit Baltistan & China Border",
    duration: "7 Days / 6 Nights",
    description:
      "A breathtaking journey through Hunza Valley, Karimabad, Attabad Lake, Passu Cones, and up to the majestic Khunjerab Pass (Pakistan-China Border).",
    inclusions: ["Dedicated 4x4 Vehicle", "Luxury Accommodations", "Boating & Guided Tour"],
    image: "/images/tours/tour-01.jpg",
  },
  {
    id: "tour-02",
    title: "Skardu - Khaplu - Shigar",
    location: "Baltistan Region",
    duration: "8 Days / 7 Nights",
    description:
      "Explore the cold desert of Skardu, historical Shigar Fort, Shangrila Resort, Mantoka Waterfall, and Khaplu Palace nestled in the Karakoram range.",
    inclusions: ["4x4 Transport", "Heritage Hotels", "Airport Pick & Drop"],
    image: "/images/tours/tour-02.jpg",
  },
  {
    id: "tour-03",
    title: "Gilgit - Yasin - Phandar",
    location: "Ghizer District",
    duration: "6 Days / 5 Nights",
    description:
      "Discover the turquoise waters of Phandar Lake, lush green Yasin Valley, and tranquil trout fishing lakes in the Ghizer valley of Gilgit-Baltistan.",
    inclusions: ["4x4 SUV", "Mountain Bikes", "Lakeside Guest Houses"],
    image: "/images/tours/tour-03.jpg",
  },
  {
    id: "tour-04",
    title: "Swat - Kalash - Chitral",
    location: "Khyber Pakhtunkhwa & Hindu Kush",
    duration: "7 Days / 6 Nights",
    description:
      "Immerse yourself in the ancient culture of Kalash Valley, historic Chitral Fort, Lowari Pass, and the emerald rivers of Swat Valley.",
    inclusions: ["Private Transport", "Cultural Tour Guide", "Traditional Cuisine"],
    image: "/images/tours/tour-04.jpg",
  },
  {
    id: "tour-05",
    title: "Fairy Meadows & Nanga Parbat Base Camp",
    location: "Diamer District",
    duration: "5 Days / 4 Nights",
    description:
      "An adventurous trek to the legendary Fairy Meadows with panoramic views of the Killer Mountain - Nanga Parbat (8,126m) and Beyal Camp.",
    inclusions: ["Jeep Ride to Tato", "Wooden Cabin Stay", "Trekking Guide"],
    image: "/images/tours/tour-05.jpg",
  },
  {
    id: "tour-06",
    title: "Yougo - Askole - Hushe",
    location: "Central Karakoram National Park",
    duration: "9 Days / 8 Nights",
    description:
      "The gateway to K2 and Concordia. Travel through Askole village, Hushe Valley, and experience the raw beauty of glacier streams.",
    inclusions: ["High-clearance 4x4", "Camping Gear", "Local Expeditions Guide"],
    image: "/images/tours/tour-06.jpg",
  },
  {
    id: "tour-07",
    title: "Booni - Mastuj - Shandur",
    location: "Chitral to Gilgit Highway",
    duration: "6 Days / 5 Nights",
    description:
      "Cross the highest polo ground in the world at Shandur Pass (3,700m), visiting Booni and Mastuj in the shadow of Tirich Mir peak.",
    inclusions: ["4x4 Transport", "Local Heritage Lodging", "All Meals"],
    image: "/images/tours/tour-07.jpg",
  },
  {
    id: "tour-08",
    title: "Deosai Plateau & Astore Valley",
    location: "Deosai National Park & Astore",
    duration: "7 Days / 6 Nights",
    description:
      "Explore the second highest plateau in the world, Sheosar Lake, brown bear habitats, and lush meadows of Astore Valley.",
    inclusions: ["4x4 Prado/V8", "Safari Permits", "Resort Stay"],
    image: "/images/tours/tour-08.jpg",
  },
];
