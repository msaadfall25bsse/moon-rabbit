export interface TourItem {
  id: string;
  title: string;
  link: string;
  image: string;
}

export const TOURS_DATA: TourItem[] = [
  {
    id: "ghk",
    title: "Gilgit-Hunza-Khunjerab",
    link: "/ghk",
    image: "/images/tours/tour-ghk.jpg",
  },
  {
    id: "sks",
    title: "Skardu-Khaplu-Shigar",
    link: "/sks",
    image: "/images/tours/tour-sks.jpg",
  },
  {
    id: "gyp",
    title: "Gilgit-Yasin-Phandar",
    link: "/gyp",
    image: "/images/tours/tour-gyp.jpg",
  },
  {
    id: "skc",
    title: "Swat-Kalash-Chitral",
    link: "/skc",
    image: "/images/tours/tour-skc.jpg",
  },
  {
    id: "fm",
    title: "Fairy Meadows",
    link: "/fm",
    image: "/images/tours/tour-fm.jpg",
  },
  {
    id: "yah",
    title: "Yougo - Asokole - Hushe",
    link: "/yah",
    image: "/images/tours/tour-yah.jpg",
  },
  {
    id: "bms",
    title: "Booni - Mastuj - Shandur",
    link: "/bms",
    image: "/images/tours/tour-bms.jpg",
  },
  {
    id: "da",
    title: "Deosai & Astore",
    link: "/da",
    image: "/images/tours/tour-da.jpg",
  },
];
