// Complete Amazon India Category and Referral Fee Data
export interface CategoryData {
  id: string;
  name: string;
  subcategories: SubCategoryData[];
}

export interface SubCategoryData {
  id: string;
  name: string;
  priceRanges: PriceRange[];
}

export interface PriceRange {
  minPrice: number;
  maxPrice: number | null;
  referralFeePercent: number;
}

export const AMAZON_CATEGORIES: CategoryData[] = [
  {
    id: "automotive",
    name: "Automotive",
    subcategories: [
      {
        id: "helmets-gloves",
        name: "Helmets & Riding Gloves",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 6.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 8.5 }
        ]
      },
      {
        id: "tyres-rims",
        name: "Tyres & Rims",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 5.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 7.0 }
        ]
      },
      {
        id: "vehicles",
        name: "Vehicles – 2-Wheelers, 4-Wheelers & Electric Vehicles",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 50000, referralFeePercent: 5.0 },
          { minPrice: 50001, maxPrice: null, referralFeePercent: 2.0 }
        ]
      },
      {
        id: "car-bike-parts",
        name: "Car & Bike Parts, Brakes, Engine, Exhaust, Suspension, Wipers, Body Fittings",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 14.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 15.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 16.0 }
        ]
      },
      {
        id: "cleaning-kits",
        name: "Cleaning Kits, Car Interior/Exterior Care, Lighting & Paints",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 11.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 13.0 }
        ]
      },
      {
        id: "accessories",
        name: "Accessories (Floor Mats, Covers, Riding Gear)",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 14.0 }
        ]
      },
      {
        id: "vehicle-tools",
        name: "Vehicle Tools & Appliances",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 8.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 8.5 }
        ]
      },
      {
        id: "oils-lubricants",
        name: "Oils, Lubricants",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 11.5 }
        ]
      },
      {
        id: "batteries-air-fresheners",
        name: "Batteries & Air Fresheners",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 8.5 }
        ]
      },
      {
        id: "car-electronics-devices",
        name: "Car Electronics – Devices",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 7.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 9.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.0 }
        ]
      },
      {
        id: "car-electronics-accessories",
        name: "Car Electronics – Accessories",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 11.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 15.0 }
        ]
      }
    ]
  },
  {
    id: "baby-toys",
    name: "Baby Products, Toys & Education",
    subcategories: [
      {
        id: "baby-hardlines",
        name: "Baby Hardlines (Swings, Bouncers, Carriers, Safety, Décor, Furniture, Car Seats & Accessories)",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 9.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 6.5 }
        ]
      },
      {
        id: "baby-strollers",
        name: "Baby Strollers",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 6.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 8.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 9.0 }
        ]
      },
      {
        id: "baby-diapers",
        name: "Baby Diapers",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 5.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 9.5 }
        ]
      },
      {
        id: "toys-drones",
        name: "Toys – Drones",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 30.0 }
        ]
      },
      {
        id: "toys-party-supplies",
        name: "Toys – Party Supplies (Balloons, Banners, Masks, Confetti, etc.)",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 8.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.5 }
        ]
      },
      {
        id: "toys-games-puzzles",
        name: "Toys – Games & Puzzles, Board Games, Adult Games, Building Sets",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 8.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.5 }
        ]
      },
      {
        id: "toys-infant-preschool",
        name: "Toys – Infant & Pre-school Toys (Electronic/Non-Electronic)",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 8.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 11.5 }
        ]
      },
      {
        id: "toys-outdoor-activity",
        name: "Toys – Outdoor, Activity & Sports Toys",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 9.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 10.5 }
        ]
      },
      {
        id: "toys-plush-dolls",
        name: "Toys – Plush Toys, Action Figures & Dolls",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 10.5 }
        ]
      },
      {
        id: "toys-vehicles",
        name: "Toys – Remote & Non-Remote Controlled Vehicles & Vehicle Sets",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 8.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 10.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.5 }
        ]
      },
      {
        id: "toys-stem-art",
        name: "Toys – STEM, Art & Craft, Learning & Development",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 8.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 11.5 }
        ]
      },
      {
        id: "baby-kids-furniture",
        name: "Baby & Kids Furniture and Home Décor",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 8.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 6.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 8.5 }
        ]
      },
      {
        id: "baby-walker",
        name: "Baby Walker",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 9.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 7.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 5.0 }
        ]
      }
    ]
  },
  {
    id: "books-media",
    name: "Books, Music, Movies, Video Games & Entertainment",
    subcategories: [
      {
        id: "books",
        name: "Books",
        priceRanges: [
          { minPrice: 0, maxPrice: 250, referralFeePercent: 3.0 },
          { minPrice: 251, maxPrice: 500, referralFeePercent: 4.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 9.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 13.5 }
        ]
      },
      {
        id: "school-textbooks",
        name: "School Textbook Bundles",
        priceRanges: [
          { minPrice: 0, maxPrice: 250, referralFeePercent: 2.0 },
          { minPrice: 251, maxPrice: 1000, referralFeePercent: 3.0 },
          { minPrice: 1001, maxPrice: 1500, referralFeePercent: 4.0 },
          { minPrice: 1501, maxPrice: null, referralFeePercent: 4.5 }
        ]
      },
      {
        id: "movies",
        name: "Movies",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 6.5 }
        ]
      },
      {
        id: "music",
        name: "Music",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 6.5 }
        ]
      },
      {
        id: "email-gift-cards",
        name: "Email Gift Cards",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 0.0 }
        ]
      },
      {
        id: "musical-instruments-guitars",
        name: "Musical Instruments – Guitars",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 10.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 8.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 10.0 }
        ]
      },
      {
        id: "musical-instruments-keyboards",
        name: "Musical Instruments – Keyboards",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 8.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 12.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 8.0 }
        ]
      },
      {
        id: "musical-instruments-microphones",
        name: "Musical Instruments – Microphones",
        priceRanges: [
          { minPrice: 0, maxPrice: 1000, referralFeePercent: 9.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 11.5 }
        ]
      },
      {
        id: "musical-instruments-others",
        name: "Musical Instruments – Others",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 10.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 7.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 10.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 11.0 }
        ]
      },
      {
        id: "musical-instruments-dj",
        name: "Musical Instruments – DJ & VJ Equipment, Recording, Computer, Cables, PA & Stage",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 6.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 4.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 5.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 11.0 }
        ]
      },
      {
        id: "video-games-online-services",
        name: "Video Games – Online Game Services",
        priceRanges: [
          { minPrice: 0, maxPrice: 1000, referralFeePercent: 0.0 },
          { minPrice: 1001, maxPrice: 2000, referralFeePercent: 2.0 },
          { minPrice: 2001, maxPrice: null, referralFeePercent: 3.0 }
        ]
      },
      {
        id: "video-games-accessories",
        name: "Video Games – Accessories",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 10.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 12.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 13.5 }
        ]
      },
      {
        id: "video-games-consoles",
        name: "Video Games – Consoles",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 7.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 5.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 9.0 }
        ]
      },
      {
        id: "video-games-other",
        name: "Video Games – Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 9.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 10.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.0 }
        ]
      }
    ]
  },
  {
    id: "industrial-medical",
    name: "Industrial, Medical, Scientific Supplies & Office Products",
    subcategories: [
      {
        id: "scientific-supplies",
        name: "Business and Industrial Supplies - Scientific Supplies",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 15000, referralFeePercent: 11.5 },
          { minPrice: 15001, maxPrice: null, referralFeePercent: 7.0 }
        ]
      },
      {
        id: "otc-medicine",
        name: "OTC Medicine",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 12.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 15.0 }
        ]
      },
      {
        id: "masks",
        name: "Masks",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 8.0 }
        ]
      },
      {
        id: "weighing-scales",
        name: "Weighing Scales & Fat Analyzers",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 11.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 13.5 }
        ]
      },
      {
        id: "3d-printers",
        name: "3D Printers",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 12.0 }
        ]
      },
      {
        id: "electrical-testing",
        name: "Business & Industrial Supplies - Electrical Testing, Dimensional Measurement, Thermal Printers, Barcode Scanners",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 6.0 }
        ]
      },
      {
        id: "commercial-equipment",
        name: "Business & Industrial Supplies - Commercial, Food Handling Equipment and Health Supplies",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 5.5 }
        ]
      },
      {
        id: "body-support",
        name: "Body Support - Wearables and Soft Aids",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 6.0 }
        ]
      },
      {
        id: "stethoscopes",
        name: "Stethoscopes",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 10.5 }
        ]
      },
      {
        id: "packing-materials",
        name: "Packing Materials",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 5.0 }
        ]
      },
      {
        id: "power-hand-tools",
        name: "Power & Hand Tools and Water Dispenser",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 8.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 10.0 }
        ]
      },
      {
        id: "office-supplies",
        name: "Office Products - Office Supplies",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 12.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 13.0 }
        ]
      },
      {
        id: "office-furniture",
        name: "Office Furniture - Study Table, Office and Gaming Chairs",
        priceRanges: [
          { minPrice: 0, maxPrice: 1000, referralFeePercent: 16.5 },
          { minPrice: 1001, maxPrice: 15000, referralFeePercent: 15.5 },
          { minPrice: 15001, maxPrice: null, referralFeePercent: 11.0 }
        ]
      },
      {
        id: "office-electronic-devices",
        name: "Office Products - Electronic Devices",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 4.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 10.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 11.5 }
        ]
      },
      {
        id: "arts-crafts",
        name: "Office Products - Arts and Crafts",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 2.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 5.0 }
        ]
      },
      {
        id: "writing-instruments",
        name: "Office Products - Writing Instruments",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 11.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 14.0 }
        ]
      }
    ]
  },
  {
    id: "clothing-fashion",
    name: "Clothing, Fashion, Fashion Accessories, Jewellery, Luggage & Shoes",
    subcategories: [
      {
        id: "apparel-accessories",
        name: "Apparel – Accessories",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 13.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 17.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 19.0 }
        ]
      },
      {
        id: "apparel-sweatshirts-jackets",
        name: "Apparel – Sweat Shirts and Jackets",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 14.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 18.0 }
        ]
      },
      {
        id: "apparel-shorts",
        name: "Apparel – Shorts",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 2.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 19.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 24.0 }
        ]
      },
      {
        id: "apparel-baby",
        name: "Apparel – Baby",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 7.0 }
        ]
      },
      {
        id: "apparel-ethnic-wear",
        name: "Apparel – Ethnic Wear",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 1.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 10.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 16.5 }
        ]
      },
      {
        id: "apparel-other-innerwear",
        name: "Apparel – Other Innerwear",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 7.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 16.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 18.5 }
        ]
      },
      {
        id: "apparel-sleepwear",
        name: "Apparel – Sleepwear",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 5.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 13.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 19.0 }
        ]
      },
      {
        id: "apparel-sarees-dress-materials",
        name: "Apparel – Sarees and Dress Materials",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 4.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 12.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 23.0 }
        ]
      },
      {
        id: "apparel-dress",
        name: "Apparel – Dress",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 4.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 15.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 19.0 }
        ]
      },
      {
        id: "apparel-shirts",
        name: "Apparel – Shirts",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 4.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 12.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 21.0 }
        ]
      },
      {
        id: "apparel-socks-stockings",
        name: "Apparel – Socks and Stockings",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 11.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 19.0 }
        ]
      },
      {
        id: "apparel-thermals",
        name: "Apparel – Thermals",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 4.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 11.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 19.0 }
        ]
      },
      {
        id: "apparel-tshirts",
        name: "Apparel – Men's T-Shirts (except Tank Tops and Full Sleeve Tops)",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 5.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 17.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 23.0 }
        ]
      },
      {
        id: "apparel-womens-innerwear",
        name: "Apparel – Women's Innerwear / Lingerie",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 12.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 18.0 }
        ]
      },
      {
        id: "pants-trousers",
        name: "Pants – Trousers, Jeans, Trackpants and Leggings",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 4.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 15.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 19.0 }
        ]
      },
      {
        id: "backpacks",
        name: "Backpacks",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 12.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 14.5 }
        ]
      },
      {
        id: "eyewear",
        name: "Eyewear – Sunglasses, Frames and Zero Power Glasses",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 9.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 14.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 18.5 }
        ]
      },
      {
        id: "fashion-jewellery",
        name: "Fashion Jewellery",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 17.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 22.5 }
        ]
      },
      {
        id: "fine-jewellery-gold-coins",
        name: "Fine Jewellery – Gold Coins",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 5.0 }
        ]
      },
      {
        id: "fine-jewellery-studded",
        name: "Fine Jewellery – Studded",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 13.0 }
        ]
      },
      {
        id: "fine-jewellery-unstudded",
        name: "Fine Jewellery – Unstudded and Solitaire",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 5.0 }
        ]
      },
      {
        id: "silver-jewellery",
        name: "Silver Jewellery",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 10.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 13.0 }
        ]
      },
      {
        id: "flip-flops-sandals",
        name: "Flip Flops, Fashion Sandals and Slippers",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 4.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 12.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 15.0 }
        ]
      },
      {
        id: "handbags",
        name: "Handbags",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 6.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 11.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.0 }
        ]
      },
      {
        id: "luggage-suitcase-trolleys",
        name: "Luggage – Suitcase & Trolleys",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 1.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 6.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 5.5 }
        ]
      },
      {
        id: "luggage-travel-accessories",
        name: "Luggage – Travel Accessories",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 9.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 10.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.0 }
        ]
      },
      {
        id: "kids-shoes",
        name: "Kids' Shoes",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 14.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 16.0 }
        ]
      },
      {
        id: "shoes",
        name: "Shoes",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 6.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 10.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 16.5 }
        ]
      },
      {
        id: "wallets",
        name: "Wallets",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 12.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 14.0 }
        ]
      },
      {
        id: "watches",
        name: "Watches",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 14.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 8.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 15.0 }
        ]
      }
    ]
  },
  {
    id: "electronics",
    name: "Electronics (Camera, Mobile, PC, Wireless) & Accessories",
    subcategories: [
      {
        id: "cables-adapters",
        name: "Cables and Adapters",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 21.5 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 17.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 20.0 }
        ]
      },
      {
        id: "camera-accessories",
        name: "Camera Accessories",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 11.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 12.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 13.5 }
        ]
      },
      {
        id: "camera-lenses",
        name: "Camera Lenses",
        priceRanges: [
          { minPrice: 0, maxPrice: 1000, referralFeePercent: 7.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 10.0 }
        ]
      },
      {
        id: "camera-camcorder",
        name: "Camera and Camcorder",
        priceRanges: [
          { minPrice: 0, maxPrice: 1000, referralFeePercent: 5.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 7.0 }
        ]
      },
      {
        id: "cases-covers-screen-guards",
        name: "Cases, Covers, Skins, Screen Guards",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 22.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 25.0 }
        ]
      },
      {
        id: "desktops",
        name: "Desktops",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 8.0 }
        ]
      },
      {
        id: "electronic-accessories",
        name: "Electronic Accessories (Electronics, PC & Wireless)",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 17.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 15.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 17.0 }
        ]
      },
      {
        id: "electronic-devices",
        name: "Electronic Devices (except TV, Camera, Camcorder, Camera Lenses & Accessories, GPS Devices, Speakers)",
        priceRanges: [
          { minPrice: 0, maxPrice: 1000, referralFeePercent: 9.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 11.0 }
        ]
      },
      {
        id: "entertainment-collectibles",
        name: "Entertainment Collectibles",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 13.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 17.0 }
        ]
      },
      {
        id: "gps-devices",
        name: "GPS Devices",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 13.5 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 12.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 13.5 }
        ]
      },
      {
        id: "hard-disks",
        name: "Hard Disks",
        priceRanges: [
          { minPrice: 0, maxPrice: 1000, referralFeePercent: 9.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.5 }
        ]
      },
      {
        id: "headphones",
        name: "Headsets, Headphones and Earphones",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 18.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 17.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 18.0 }
        ]
      },
      {
        id: "keyboards-mouse",
        name: "Computer & Laptop - Keyboards & Mouse",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 14.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 14.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 17.0 }
        ]
      },
      {
        id: "kindle-accessories",
        name: "Kindle Accessories",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 25.0 }
        ]
      },
      {
        id: "laptop-bags-sleeves",
        name: "Laptop Bags & Sleeves",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 12.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 14.5 }
        ]
      },
      {
        id: "laptop-camera-battery",
        name: "Laptop and Camera Battery",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 14.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 12.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 14.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 15.5 }
        ]
      },
      {
        id: "laptops",
        name: "Laptops",
        priceRanges: [
          { minPrice: 0, maxPrice: 70000, referralFeePercent: 6.0 },
          { minPrice: 70001, maxPrice: null, referralFeePercent: 7.0 }
        ]
      },
      {
        id: "memory-cards",
        name: "Memory Cards",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 16.0 }
        ]
      },
      {
        id: "mobile-phones",
        name: "Mobile Phones",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 5.0 }
        ]
      },
      {
        id: "tablets",
        name: "Tablets (including Graphic Tablets)",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 12000, referralFeePercent: 6.0 },
          { minPrice: 12001, maxPrice: null, referralFeePercent: 10.0 }
        ]
      },
      {
        id: "modems-networking",
        name: "Modems & Networking Devices",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 14.0 }
        ]
      },
      {
        id: "monitors",
        name: "Monitors",
        priceRanges: [
          { minPrice: 0, maxPrice: 1000, referralFeePercent: 6.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 8.0 }
        ]
      },
      {
        id: "pc-components",
        name: "PC Components (RAM, Motherboards)",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 5.5 }
        ]
      },
      {
        id: "power-banks-chargers",
        name: "Power Banks & Chargers",
        priceRanges: [
          { minPrice: 0, maxPrice: 1000, referralFeePercent: 20.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 20.5 }
        ]
      },
      {
        id: "printers-scanners",
        name: "Printers & Scanners",
        priceRanges: [
          { minPrice: 0, maxPrice: 1000, referralFeePercent: 9.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 10.5 }
        ]
      },
      {
        id: "software-products",
        name: "Software Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 0.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 8.0 },
          { minPrice: 1001, maxPrice: 2000, referralFeePercent: 7.5 },
          { minPrice: 2001, maxPrice: null, referralFeePercent: 9.5 }
        ]
      },
      {
        id: "speakers",
        name: "Speakers",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 11.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 11.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 14.0 }
        ]
      },
      {
        id: "television",
        name: "Television",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 6.0 }
        ]
      },
      {
        id: "landline-phones",
        name: "Landline Phones",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 7.0 }
        ]
      },
      {
        id: "smart-watches",
        name: "Smart Watches & Accessories",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 15.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 16.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 17.0 }
        ]
      },
      {
        id: "usb-flash-drives",
        name: "USB Flash Drives (Pen Drives)",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 16.0 }
        ]
      },
      {
        id: "projectors-home-theatre",
        name: "Projectors, Home Theatre Systems, Binoculars and Telescopes",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 6.0 }
        ]
      }
    ]
  },
  {
    id: "grocery-pet",
    name: "Grocery, Food & Pet Supplies",
    subcategories: [
      {
        id: "grocery-herbs-spices",
        name: "Grocery - Herbs and Spices",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 5.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 8.0 }
        ]
      },
      {
        id: "grocery-oils",
        name: "Grocery & Gourmet - Oils",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 1.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 7.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 9.0 }
        ]
      },
      {
        id: "grocery-dried-fruits-nuts",
        name: "Grocery - Dried Fruits and Nuts",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 6.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 8.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 9.0 }
        ]
      },
      {
        id: "grocery-hampers-gifting",
        name: "Grocery - Hampers and Gifting",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 5.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 9.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 11.5 }
        ]
      },
      {
        id: "grocery-beverages",
        name: "Grocery & Gourmet - Beverages",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 6.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 7.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 10.0 }
        ]
      },
      {
        id: "pet-food",
        name: "Pet Food",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 11.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.5 }
        ]
      },
      {
        id: "pet-aquatics",
        name: "Pet - Aquatics Supplies",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 14.0 }
        ]
      },
      {
        id: "pet-products",
        name: "Pet Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 2.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 12.0 }
        ]
      },
      {
        id: "pet-comforters",
        name: "Pet Comforters (Bed, Feeder, Cages, Carriers, Crates, Kennels, Doors)",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 11.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.5 }
        ]
      },
      {
        id: "pet-essentials",
        name: "Pet Essentials (Health Care, Grooming, Bath Supplies, Supplements, Tick/Flea, Dental)",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 12.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 13.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 14.0 }
        ]
      },
      {
        id: "pet-accessories",
        name: "Pet Accessories (Apparel, Collar, Leash, Harness)",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 11.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 12.5 }
        ]
      }
    ]
  },
  {
    id: "health-beauty",
    name: "Health, Beauty, Personal Care & Personal Care Appliances",
    subcategories: [
      {
        id: "beauty-fragrance",
        name: "Beauty - Fragrance",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 12.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 14.0 }
        ]
      },
      {
        id: "beauty-haircare-bath",
        name: "Beauty - Haircare, Bath and Shower",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 5.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 8.0 }
        ]
      },
      {
        id: "beauty-makeup",
        name: "Beauty - Makeup",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 2.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 3.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 7.0 }
        ]
      },
      {
        id: "face-wash",
        name: "Face Wash",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 5.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 9.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 9.5 }
        ]
      },
      {
        id: "moisturizer-cream",
        name: "Moisturizer Cream",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 6.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 9.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 9.5 }
        ]
      },
      {
        id: "sunscreen",
        name: "Sunscreen",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 6.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 9.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 9.5 }
        ]
      },
      {
        id: "deodorants",
        name: "Deodorants",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 6.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 7.0 }
        ]
      },
      {
        id: "facial-steamers",
        name: "Facial Steamers",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 2.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 7.0 }
        ]
      },
      {
        id: "health-personal-care-ayurvedic",
        name: "Health & Personal Care - Ayurvedic, Oral Care, Sanitizers, Pooja Supplies",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 6.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 7.0 }
        ]
      },
      {
        id: "health-sports-nutrition",
        name: "Health & Household - Sports Nutrition & Meal Replacement Shakes",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 9.0 }
        ]
      },
      {
        id: "health-cleaning-supplies",
        name: "Health & Household - Cleaning, Laundry, Air Fresheners, Hygiene",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 4.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 6.5 }
        ]
      }
    ]
  },
  {
    id: "home-garden",
    name: "Home, Décor, Home Improvement, Furniture, Outdoor, Lawn & Garden",
    subcategories: [
      {
        id: "bean-bags-inflatables",
        name: "Bean Bags & Inflatables",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 8.0 }
        ]
      },
      {
        id: "mattresses",
        name: "Mattresses",
        priceRanges: [
          { minPrice: 0, maxPrice: 1000, referralFeePercent: 25.5 },
          { minPrice: 1001, maxPrice: 20000, referralFeePercent: 16.0 },
          { minPrice: 20001, maxPrice: null, referralFeePercent: 13.5 }
        ]
      },
      {
        id: "rugs-doormats",
        name: "Rugs and Doormats",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 2.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 9.0 }
        ]
      },
      {
        id: "clocks",
        name: "Clocks",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 0.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 9.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 10.0 }
        ]
      },
      {
        id: "wall-art",
        name: "Wall Art",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 11.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 13.5 }
        ]
      },
      {
        id: "home-fragrance-candles",
        name: "Home - Fragrance & Candles",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 6.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 12.5 }
        ]
      },
      {
        id: "bedsheets-blankets-covers",
        name: "Bedsheets, Blankets and Covers",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 0.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 7.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 8.5 }
        ]
      },
      {
        id: "home-furnishing",
        name: "Home Furnishing (Excluding Curtain and Accessories)",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 0.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 7.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 11.0 }
        ]
      },
      {
        id: "containers-kitchen-storage",
        name: "Containers, Boxes, Bottles & Kitchen Storage",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 5.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 12.0 }
        ]
      },
      {
        id: "home-improvement-accessories",
        name: "Home Improvement - Accessories",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 2.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 13.5 }
        ]
      },
      {
        id: "home-decor-products",
        name: "Home Decor Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 3.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 12.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 17.0 }
        ]
      },
      {
        id: "indoor-lighting",
        name: "Indoor Lighting",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 6.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 14.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.5 }
        ]
      },
      {
        id: "curtains-accessories",
        name: "Curtains and Accessories",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 16.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 11.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 16.5 }
        ]
      },
      {
        id: "lawn-garden-plants",
        name: "Lawn & Garden - Plants, Seeds & Bulbs",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 9.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 11.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 11.0 }
        ]
      }
    ]
  },
  {
    id: "kitchen-appliances",
    name: "Kitchen, Large & Small Appliances",
    subcategories: [
      {
        id: "kitchen-glassware-ceramicware",
        name: "Kitchen - Glassware & Ceramicware",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 4.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 11.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.5 }
        ]
      },
      {
        id: "kitchen-gas-stoves-pressure-cookers",
        name: "Kitchen - Gas Stoves & Pressure Cookers",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1500, referralFeePercent: 6.0 },
          { minPrice: 1501, maxPrice: null, referralFeePercent: 10.0 }
        ]
      },
      {
        id: "cookware",
        name: "Cookware, Tableware & Dinnerware",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 5.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 9.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.5 }
        ]
      },
      {
        id: "kitchen-tools-supplies",
        name: "Kitchen Tools & Supplies - Choppers, Knives, Bakeware & Accessories",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 5.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 12.5 }
        ]
      },
      {
        id: "large-appliances",
        name: "Large Appliances (excl. Accessories, Refrigerators and Chimneys)",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 5.5 }
        ]
      },
      {
        id: "large-appliances-accessories",
        name: "Large Appliances - Accessories",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 16.0 }
        ]
      },
      {
        id: "large-appliances-chimneys",
        name: "Large Appliances - Chimneys",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 9.5 }
        ]
      },
      {
        id: "large-appliances-refrigerators",
        name: "Large Appliances – Refrigerators",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 5.0 }
        ]
      },
      {
        id: "small-appliances",
        name: "Small Appliances",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 6.5 },
          { minPrice: 1001, maxPrice: 5000, referralFeePercent: 4.5 },
          { minPrice: 5001, maxPrice: null, referralFeePercent: 8.0 }
        ]
      },
      {
        id: "fans-robotic-vacuums",
        name: "Fans and Robotic Vacuums",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 3000, referralFeePercent: 6.5 },
          { minPrice: 3001, maxPrice: null, referralFeePercent: 8.0 }
        ]
      }
    ]
  },
  {
    id: "sports-fitness",
    name: "Sports, Gym & Sporting Equipment",
    subcategories: [
      {
        id: "bicycles",
        name: "Bicycles",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 5.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 6.0 }
        ]
      },
      {
        id: "gym-equipment",
        name: "Gym Equipments",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 6.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 10.0 },
          { minPrice: 1001, maxPrice: 35000, referralFeePercent: 12.0 },
          { minPrice: 35001, maxPrice: null, referralFeePercent: 10.0 }
        ]
      },
      {
        id: "sports-equipment",
        name: "Sports - Cricket & Badminton Equipments, Tennis, Table Tennis, Squash, Football, Volleyball, Basketball, Throwball, Swimming",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 6.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 8.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 8.5 }
        ]
      },
      {
        id: "sports-collectibles",
        name: "Sports Collectibles",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 17.0 }
        ]
      },
      {
        id: "sports-bats-racquets",
        name: "Sports - Cricket Bats, Badminton Racquets, Tennis Racquets, Pickleball Paddles, Squash Racquets & TT Tables",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 5.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 7.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 7.5 }
        ]
      },
      {
        id: "sports-footwear",
        name: "Sports & Outdoors - Footwear",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 12.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 14.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 16.0 }
        ]
      }
    ]
  },
  {
    id: "others",
    name: "Others",
    subcategories: [
      {
        id: "coin-collectibles",
        name: "Coin Collectibles",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 15.0 }
        ]
      },
      {
        id: "silver-coins-bars",
        name: "Silver Coins & Bars",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 5.0 }
        ]
      },
      {
        id: "furniture-other-products",
        name: "Furniture - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 1000, referralFeePercent: 13.5 },
          { minPrice: 1001, maxPrice: 15000, referralFeePercent: 15.5 },
          { minPrice: 15001, maxPrice: null, referralFeePercent: 11.0 }
        ]
      },
      {
        id: "toys-other-products",
        name: "Toys - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 9.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 11.5 }
        ]
      },
      {
        id: "grocery-gourmet-other-products",
        name: "Grocery & Gourmet - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 1000, referralFeePercent: 7.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 9.0 }
        ]
      },
      {
        id: "office-other-products",
        name: "Office - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 10.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 11.5 }
        ]
      },
      {
        id: "personal-care-appliances-other",
        name: "Personal Care Appliances - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 7.5 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 11.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 7.5 }
        ]
      },
      {
        id: "beauty-other-products",
        name: "Beauty - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 7.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 9.0 }
        ]
      },
      {
        id: "health-personal-care-household-supplies",
        name: "Health & Personal Care - Other Household Supplies",
        priceRanges: [
          { minPrice: 0, maxPrice: 500, referralFeePercent: 4.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 6.5 }
        ]
      },
      {
        id: "health-household-other-products",
        name: "Health & Household - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: null, referralFeePercent: 11.5 }
        ]
      },
      {
        id: "business-industrial-other-products",
        name: "Business & Industrial Supplies - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 15000, referralFeePercent: 8.0 },
          { minPrice: 15001, maxPrice: null, referralFeePercent: 5.0 }
        ]
      },
      {
        id: "kitchen-other-products",
        name: "Kitchen - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 5.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 11.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 12.5 }
        ]
      },
      {
        id: "lawn-garden-other-products",
        name: "Lawn & Garden - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 9.0 },
          { minPrice: 301, maxPrice: 15000, referralFeePercent: 10.0 },
          { minPrice: 15001, maxPrice: null, referralFeePercent: 5.0 }
        ]
      },
      {
        id: "luggage-other-products",
        name: "Luggage - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 9.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 8.0 }
        ]
      },
      {
        id: "baby-other-products",
        name: "Baby - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 6.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 8.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 7.5 }
        ]
      },
      {
        id: "pet-other-products",
        name: "Pet - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 10.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 12.0 }
        ]
      },
      {
        id: "apparel-other-products",
        name: "Apparel - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 4.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 11.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 19.0 }
        ]
      },
      {
        id: "home-other-products",
        name: "Home - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 5.0 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 13.0 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 18.0 }
        ]
      },
      {
        id: "home-improvement-other-products",
        name: "Home Improvement - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 4.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 13.5 }
        ]
      },
      {
        id: "indoor-lighting-other-products",
        name: "Indoor Lighting - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 8.5 },
          { minPrice: 501, maxPrice: 1000, referralFeePercent: 10.5 },
          { minPrice: 1001, maxPrice: null, referralFeePercent: 16.0 }
        ]
      },
      {
        id: "sports-other-products",
        name: "Sports - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 9.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 13.0 }
        ]
      },
      {
        id: "automotive-other-products",
        name: "Automotive - Other Products",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 0.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 15.5 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 16.0 }
        ]
      },
      {
        id: "consumable-physical-gift-card",
        name: "Consumable Physical Gift Card",
        priceRanges: [
          { minPrice: 0, maxPrice: null, referralFeePercent: 5.0 }
        ]
      },
      {
        id: "warranty-services",
        name: "Warranty Services",
        priceRanges: [
          { minPrice: 0, maxPrice: 300, referralFeePercent: 10.0 },
          { minPrice: 301, maxPrice: 500, referralFeePercent: 29.0 },
          { minPrice: 501, maxPrice: null, referralFeePercent: 30.0 }
        ]
      }
    ]
  }
];

// Helper function to get referral fee percentage for a given category, subcategory, and price
export function getReferralFeePercent(categoryId: string, subcategoryId: string, price: number): number {
  const category = AMAZON_CATEGORIES.find(cat => cat.id === categoryId);
  if (!category) return 0;

  const subcategory = category.subcategories.find(sub => sub.id === subcategoryId);
  if (!subcategory) return 0;

  // Find the appropriate price range
  for (const range of subcategory.priceRanges) {
    if (price >= range.minPrice && (range.maxPrice === null || price <= range.maxPrice)) {
      return range.referralFeePercent;
    }
  }

  return 0;
}

// Closing fee exception categories for FC (Fulfillment by Amazon)
export const FC_CLOSING_FEE_EXCEPTIONS = {
  // Categories with ₹12 closing fee for price range ₹0-300
  priceRange0To300: ['books', 'school-textbooks'],
  // Categories with ₹12 closing fee for price range ₹301-500
  priceRange301To500: ['books', 'school-textbooks']
};

// Fulfillment methods
export const FULFILLMENT_METHODS = [
  { id: 'fba', name: 'Fulfillment by Amazon (FBA)', shortName: 'FBA' },
  { id: 'easy-ship', name: 'Easy Ship', shortName: 'Easy Ship' },
  { id: 'self-ship', name: 'Self Ship', shortName: 'Self Ship' },
  { id: 'seller-flex', name: 'Seller Flex', shortName: 'Seller Flex' }
];

// STEP levels
export const STEP_LEVELS = [
  { id: 'basic', name: 'Basic' },
  { id: 'standard', name: 'Standard' },
  { id: 'advanced', name: 'Advanced' },
  { id: 'premium', name: 'Premium' }
];

// Shipping regions
export const SHIPPING_REGIONS = [
  { id: 'local', name: 'Local (Same City)' },
  { id: 'regional', name: 'Regional (Same Region)' },
  { id: 'national', name: 'National (Cross Region)' }
];