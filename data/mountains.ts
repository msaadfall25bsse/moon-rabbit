export interface Mountain {
  id: string;
  title: string;
  description: string;
  range?: string;
  heightMeters?: string;
  heightFeet?: string;
  image: string;
}

export const MOUNTAINS_DATA: Mountain[] = [
  {
    id: "mountain-01",
    title: "“The Abode of Snow”",
    description:
      "Spanning over 8 countries the mighty Himalayan family of mountains display a total disregard for all human made borders. For millennia they have towered over humanity never letting down their guard. Only a lucky few have dared to enter this realm to reveal the most heavily guarded of secrets.",
    range: "Himalaya Range",
    image: "/images/mountains/mountain-01.jpg",
  },
  {
    id: "mountain-02",
    title: "“The Black Mountains”",
    description:
      "Home to K2; the most savage of the mountains, the Karakoram are World renowned for their impossible summits. In addition to Mountains, this range also hosts the most (7000+) Glaciers in the World outside of the Polar regions. Sacred, mysterious, and life altering - this is the height of adventure.",
    range: "Karakoram Range",
    image: "/images/mountains/mountain-02.jpg",
  },
  {
    id: "mountain-03",
    title: "“The Mountains of the Indus”",
    description:
      "The entire World's supply of the finest Lapis Lazuli stone is stored within the Hindu Kush range of mountains. Along with hidden gems, ancient cultures like the Kalash have also found protection under these behemoths. Peril, history, and treasure - this mountain range turns imagination into reality.",
    range: "Hindu Kush Range",
    image: "/images/mountains/mountain-03.jpg",
  },
  {
    id: "mountain-04",
    title: "“The Mountain of the Gods”",
    description: "8,126 meters / 26,660 feet",
    heightMeters: "8,126 meters",
    heightFeet: "26,660 feet",
    range: "Himalaya Range",
    image: "/images/mountains/mountain-04.jpg",
  },
  {
    id: "mountain-05",
    title: "“The Cathedrals”",
    description: "7,478 meters / 24,534 feet",
    heightMeters: "7,478 meters",
    heightFeet: "24,534 feet",
    range: "Karakoram Range",
    image: "/images/mountains/mountain-05.jpg",
  },
  {
    id: "mountain-06",
    title: "“The King of Darkness”",
    description: "7,708 meters / 25,288 feet",
    heightMeters: "7,708 meters",
    heightFeet: "25,288 feet",
    range: "Hindu Kush Range",
    image: "/images/mountains/mountain-06.jpg",
  },
  {
    id: "mountain-07",
    title: "“The Mountain of Mountains”",
    description: "8,611 meters / 28,251 feet",
    heightMeters: "8,611 meters",
    heightFeet: "28,251 feet",
    range: "Karakoram Range",
    image: "/images/mountains/mountain-07.jpg",
  },
  {
    id: "mountain-08",
    title: "“The Shining Wall”",
    description: "7,788 meters / 25,551 feet",
    heightMeters: "7,788 meters",
    heightFeet: "25,551 feet",
    range: "Karakoram Range",
    image: "/images/mountains/mountain-08.jpg",
  },
  {
    id: "mountain-09",
    title: "“The Mountain of the Night”",
    description: "6,096 meters / 20,000 feet",
    heightMeters: "6,096 meters",
    heightFeet: "20,000 feet",
    range: "Karakoram Range",
    image: "/images/mountains/mountain-09.jpg",
  },
  {
    id: "mountain-10",
    title: "“The Queen of Peaks”",
    description: "7,821 meters / 25,659 feet",
    heightMeters: "7,821 meters",
    heightFeet: "25,659 feet",
    range: "Karakoram Range",
    image: "/images/mountains/mountain-10.jpg",
  },
];
