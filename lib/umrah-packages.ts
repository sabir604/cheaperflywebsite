export type UmrahPackage = {
  package_name: string;
  option: string;
  duration_days: number;
  dates: string;
  image: string;
  hotels: {
    makkah: { hotel_name: string; rating: string; room_type: string };
    madinah: { hotel_name: string; rating: string; room_type: string };
  };
  includes: string[];
  price: { currency: string; amount: number; per: string };
};

export const umrahPackages: UmrahPackage[] = [
  {
    package_name: "Five Star Package",
    option: "Option 1 – Exclusive",
    duration_days: 7,
    dates: "1st Sep – 8th Sep",
    image: "banner/umrah/3.jpg",
    hotels: {
      makkah: { hotel_name: "Makkah Clock Royal Tower - Fairmont Hotel", rating: "5 Star", room_type: "Quad Room" },
      madinah: { hotel_name: "Anwar Al Madinah Movenpick Hotel", rating: "5 Star", room_type: "Quad Room" },
    },
    includes: ["Round-trip flights", "Saudi Visa", "Private hotel accommodations", "Jeddah Airport → Makkah transfer", "Makkah → Madinah transfer", "Madinah Hotel → Jeddah Airport transfer"],
    price: { currency: "GBP", amount: 879, per: "person" },
  },
  {
    package_name: "4 Star Package",
    option: "Option 2 – Exclusive",
    duration_days: 7,
    dates: "1st Sep – 8th Sep",
    image: "banner/umrah/4.jpg",
    hotels: {
      makkah: { hotel_name: "Emaar Grand", rating: "4 Star", room_type: "Quad Room" },
      madinah: { hotel_name: "Gulnar Taibah", rating: "4 Star", room_type: "Quad Room" },
    },
    includes: ["Round-trip flights", "Saudi Visa", "Private hotel accommodations", "Jeddah Airport → Makkah transfer", "Makkah → Madinah transfer", "Madinah Hotel → Jeddah Airport transfer"],
    price: { currency: "GBP", amount: 779, per: "person" },
  },
  {
    package_name: "3 Star Package",
    option: "Option 3 – Exclusive",
    duration_days: 7,
    dates: "1st Sep – 8th Sep",
    image: "banner/umrah/5.jpg",
    hotels: {
      makkah: { hotel_name: "Emaar Al Khalil or Similar", rating: "3 Star", room_type: "Quad Room" },
      madinah: { hotel_name: "Emaar Taibah or Similar", rating: "3 Star", room_type: "Quad Room" },
    },
    includes: ["Round-trip flights", "Saudi Visa", "Private hotel accommodations", "Jeddah Airport → Makkah transfer", "Makkah → Madinah transfer", "Madinah Hotel → Jeddah Airport transfer"],
    price: { currency: "GBP", amount: 679, per: "person" },
  },
  {
    package_name: "Economy Package",
    option: "Option 4 – Exclusive",
    duration_days: 7,
    dates: "1st Sep – 8th Sep",
    image: "banner/umrah/3.jpg",
    hotels: {
      makkah: { hotel_name: "Diyar Mathar or Johar Muyassar", rating: "Economy", room_type: "Quad Room" },
      madinah: { hotel_name: "Raghad Al Madina / Burj Al Madinah", rating: "Economy", room_type: "Quad Room" },
    },
    includes: ["Round-trip flights", "Saudi Visa", "Private hotel accommodations", "Jeddah Airport → Makkah transfer", "Makkah → Madinah transfer", "Madinah Hotel → Jeddah Airport transfer"],
    price: { currency: "GBP", amount: 579, per: "person" },
  },
];
