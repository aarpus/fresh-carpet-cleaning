export type ServiceAccordionItem = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export type Service = {
  slug: string;
  title: string;
  cardImage: string;
  heroImage: string;
  intro: string;
  sectionTitle: string;
  sectionBody: string;
  videoTitle: string;
  videoDescription: string;
  videoPoints: string[];
  videoImage: string;
  closingParagraph: string;
  quote: string;
  galleryTitle: string;
  galleryImages: string[];
  accordion: ServiceAccordionItem[];
};

const defaultGallery = [
  "/assets/images/image-gallery/1.jpg",
  "/assets/images/image-gallery/2.jpg",
  "/assets/images/image-gallery/3.jpg",
  "/assets/images/image-gallery/4.jpg",
];

const carpetCleaningGallery = [
  "/assets/images/service-single/carpet-cleaning/3.png",
  "/assets/images/service-single/carpet-cleaning/4.png",
  "/assets/images/service-single/carpet-cleaning/5.png",
  "/assets/images/service-single/carpet-cleaning/6.png",
];

const upholsteryCleaningGallery = [
  "/assets/images/service-single/upholstery-cleaning/3.png",
  "/assets/images/service-single/upholstery-cleaning/4.png",
  "/assets/images/service-single/upholstery-cleaning/5.png",
  "/assets/images/service-single/upholstery-cleaning/6.png",
];

const tileGroutCleaningGallery = [
  "/assets/images/service-single/tile-grout-cleaning/3.png",
  "/assets/images/service-single/tile-grout-cleaning/4.png",
  "/assets/images/service-single/tile-grout-cleaning/5.png",
  "/assets/images/service-single/tile-grout-cleaning/6.png",
];

const odorControlGallery = [
  "/assets/images/service-single/odor-control/3.png",
  "/assets/images/service-single/odor-control/4.png",
  "/assets/images/service-single/odor-control/5.png",
  "/assets/images/service-single/odor-control/6.png",
];

const hardwoodFloorCleaningGallery = [
  "/assets/images/service-single/hardwood-floor-cleaning/3.png",
  "/assets/images/service-single/hardwood-floor-cleaning/4.png",
  "/assets/images/service-single/hardwood-floor-cleaning/5.png",
  "/assets/images/service-single/hardwood-floor-cleaning/6.png",
];

const carpetRepairGallery = [
  "/assets/images/service-single/carpet-repair/3.png",
  "/assets/images/service-single/carpet-repair/4.png",
  "/assets/images/service-single/carpet-repair/5.png",
  "/assets/images/service-single/carpet-repair/6.png",
];

const defaultAccordion: ServiceAccordionItem[] = [
  {
    question: "How often should I schedule this service?",
    answer:
      "For most homes, professional carpet cleaning every 6–12 months is a good starting point. How often you need it can depend on foot traffic, pets, spills, and everyday wear. Homes with children, pets, or busy living areas may benefit from more frequent cleaning",
  },
  {
    question: "Is the cleaning process safe for my family and pets?",
    answer:
      "Yes. We take care to choose cleaning products and methods that are appropriate for your carpet and your home. If you have children, pets, allergies, or specific concerns about the products we use, let our team know before the cleaning so we can take the right precautions",
    defaultOpen: true,
  },
  {
    question: "How long does a typical appointment take?",
    answer:
      "The time needed depends on the size of the area, the type of flooring, and its condition. Most residential appointments take around 1–3 hours, and we’ll give you an estimated timeframe when you schedule your service",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Contact Totally Flooring by phone or through our booking form to request a free, no-obligation estimate. We’ll learn more about your space and cleaning needs so we can provide you with the right service and an accurate quote",
  },
];

const carpetCleaningAccordion: ServiceAccordionItem[] = [
  {
    question: "How often should I schedule this service?",
    answer:
      "For most homes, professional carpet cleaning every 6–12 months is a good starting point. How often you need it can depend on foot traffic, pets, spills, and everyday wear. Homes with children, pets, or busy living areas may benefit from more frequent cleaning",
  },
  {
    question: "Is the cleaning process safe for my family and pets?",
    answer:
      "Yes. We take care to choose cleaning products and methods that are appropriate for your carpet and your home. If you have children, pets, allergies, or specific concerns about the products we use, let our team know before the cleaning so we can take the right precautions",
    defaultOpen: true,
  },
  {
    question: "How long does a typical appointment take?",
    answer:
      "The time needed depends on the size of the area, the type of flooring, and its condition. Most residential appointments take around 1–3 hours, and we’ll give you an estimated timeframe when you schedule your service",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Contact Totally Flooring by phone or through our booking form to request a free, no-obligation estimate. We’ll learn more about your space and cleaning needs so we can provide you with the right service and an accurate quote",
  },
];

export const services: Service[] = [
  {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    cardImage: "/assets/images/service-single/carpet-cleaning/1.png",
    heroImage: "/assets/images/service-single/carpet-cleaning/1.png",
    intro:
      "Professional carpet cleaning removes embedded dirt, allergens, and stains that regular vacuuming cannot reach. Our deep-cleaning process restores freshness, improves indoor air quality, and extends the life of your carpets.",
    sectionTitle: "Deep steam cleaning for lasting results",
    sectionBody:
      "Our thorough cleaning process helps remove dirt, buildup, and everyday wear that can settle deep into your carpet. We pay close attention to high-traffic areas, stairs, and individual rooms, using the right approach for each carpet to help restore its clean, fresh appearance.",
    videoTitle: "Why professional carpet cleaning matters",
    videoDescription:
      "Regular professional cleaning helps keep your carpets looking their best while removing the dirt and buildup that everyday cleaning can leave behind.",
    videoPoints: [
      "Left Away Deep-Set Dirt and Buildup",
      "Helps Remove Stubborn Stains and Odors",
      "Heps Keep Your Carpets Looking Their Best",
    ],
    videoImage: "/assets/images/service-single/carpet-cleaning/2.png",
    closingParagraph:
      "Whether your carpets need a one-time deep clean or regular maintenance, Totally Flooring takes the time to clean them carefully and thoroughly. We work around your schedule and pay attention to the areas that need a little extra care.",
    quote:
      "A clean carpet can make a noticeable difference in how fresh, comfortable, and welcoming your home feels.",
    galleryTitle: "What we treat:",
    galleryImages: carpetCleaningGallery,
    accordion: carpetCleaningAccordion,
  },
  {
    slug: "upholstery-cleaning",
    title: "Upholstery Cleaning",
    cardImage: "/assets/images/service-single/upholstery-cleaning/1.png",
    heroImage: "/assets/images/service-single/upholstery-cleaning/1.png",
    intro:
      "Give your sofas, chairs, and other upholstered furniture a fresh start with professional cleaning from Totally Flooring. Our service helps lift away everyday dirt, stains, and odors while taking care to preserve the look and feel of your furniture.",
    sectionTitle: "Care That’s Right for Your Upholstery",
    sectionBody:
      "Every fabric is different, so we choose the cleaning approach based on the material and its condition. Our team takes the time to identify what your upholstery needs and uses the appropriate cleaning method to give it a thorough clean while helping protect the fabric from unnecessary wear.",
    videoTitle: "Why Professional Upholstery Cleaning Matters",
    videoDescription:
      "Over time, sofas and upholstered furniture naturally pick up dust, dirt, spills, and everyday odors. Professional cleaning helps refresh the fabric and remove buildup that regular household cleaning may not fully reach.",
    videoPoints: [
      "Careful Cleaning for Different Fabrics",
      "Helps Lift Stains and Everyday Odors",
      "A Fresher Look With Minimal Downtime",
    ],
    videoImage: "/assets/images/service-single/upholstery-cleaning/2.png",
    closingParagraph:
      "Give your furniture a fresh start with upholstery cleaning from Totally Flooring. We take the time to understand the fabric and its condition before choosing the right cleaning approach. Contact us today for a free estimate.",
    quote:
      "Fresh upholstery can make the whole room feel cleaner, brighter, and more inviting.",
    galleryTitle: "Items we clean:",
    galleryImages: upholsteryCleaningGallery,
    accordion: defaultAccordion,
  },
  {
    slug: "tile-grout-cleaning",
    title: "Tile & Grout Cleaning",
    cardImage: "/assets/images/service-single/tile-grout-cleaning/1.png",
    heroImage: "/assets/images/service-single/tile-grout-cleaning/1.png",
    intro:
      "Tile can look clean at first glance while dirt and grime gradually build up in the grout lines. Totally Flooring provides professional tile and grout cleaning to refresh floors, bathroom surfaces, kitchen areas, and other tiled spaces.",
    sectionTitle: "Bring Back the Look of Clean Grout",
    sectionBody:
      "Grout can be especially difficult to clean with everyday household products. We use the appropriate cleaning methods for your tile and grout to help loosen and remove built-up dirt, leaving your surfaces looking cleaner, brighter, and refreshed.",
    videoTitle: "Why Professional Grout Cleaning Makes a Difference",
    videoDescription:
      "Over time, grout can become discolored from everyday dirt, spills, soap residue, and moisture. Professional cleaning helps refresh those hard-to-reach areas and brings back a cleaner, more even look to your tile surfaces.",
    videoPoints: [
      "•	Helps Remove Dirt, Soap Scum, and Buildup",
      "•	Suitable for a Variety of Tile Surfaces",
      "•	Sealing Options Available for Added Protection",
    ],
    videoImage: "/assets/images/service-single/tile-grout-cleaning/2.png",
    closingParagraph:
      "Don’t let dingy grout take away from the look of your tile. Totally Flooring can help refresh your floors, walls, and other tiled surfaces with a thorough, professional clean.",
    quote:
      "Clean grout can make your entire tile surface look brighter, fresher, and better cared for.",
    galleryTitle: "Surfaces we service:",
    galleryImages: tileGroutCleaningGallery,
    accordion: defaultAccordion,
  },
  {
    slug: "odor-control",
    title: "Odor Control",
    cardImage: "/assets/images/service-single/odor-control/1.png",
    heroImage: "/assets/images/service-single/odor-control/1.png",
    intro:
      "Unwanted odors from pets, spills, moisture, smoke, and everyday use can settle into carpets and upholstery and become difficult to remove. Totally Flooring provides professional odor control treatments designed to help freshen the fibers and address lingering smells rather than simply covering them up.",
    sectionTitle: "Treat Lingering Odors at the Source",
    sectionBody:
      "A fresh fragrance may only hide an odor temporarily. We use appropriate cleaning and deodorizing methods based on the source and condition of the affected area, helping remove odor-causing buildup from carpets and upholstery for a cleaner, fresher space.",
    videoTitle: "Why Professional Odor Control Makes a Difference",
    videoDescription:
      "Lingering odors can be difficult to get rid of when they’ve settled deep into carpet, upholstery, or rugs. Professional odor control focuses on the affected area and the source of the smell instead of simply covering it with fragrance.",
    videoPoints: [
      "Helps Treat Pet, Smoke, and Spill-Related Odors",
      "Targeted Treatments for Organic Odor Sources",
      "Suitable for Carpets, Upholstery, and Rugs",
    ],
    videoImage: "/assets/images/service-single/odor-control/2.png",
    closingParagraph:
      "If an unwanted smell keeps coming back after regular cleaning, Totally Flooring can assess the affected area and recommend an appropriate treatment based on the source and condition of the material.",
    quote:
      "A fresher space starts with treating the source of the odor, not simply covering it up",
    galleryTitle: "Common odor sources we treat:",
    galleryImages: odorControlGallery,
    accordion: defaultAccordion,
  },
  {
    slug: "hardwood-floor-cleaning",
    title: "Hardwood Floor Cleaning",
    cardImage: "/assets/images/service-single/hardwood-floor-cleaning/1.png",
    heroImage: "/assets/images/service-single/hardwood-floor-cleaning/1.png",
    intro:
      "Hardwood floors can add warmth and character to a space, but regular foot traffic can leave behind dirt, dust, and buildup that dull their appearance. Totally Flooring provides careful hardwood floor cleaning to refresh your floors while taking the condition and finish of the wood into account.",
    sectionTitle: "Give Your Hardwood Floors the Care They Deserve",
    sectionBody:
      "Every hardwood floor is different, so the right cleaning approach matters. We use methods suited to the type and condition of your flooring to remove everyday buildup without unnecessary moisture or harsh treatment, helping your floors stay clean and look their best.",
    videoTitle: "Why Professional Hardwood Cleaning Matters",
    videoDescription:
      "Hardwood floors need the right care to keep their finish looking its best. Using too much water or the wrong cleaning products can leave behind residue or cause unnecessary damage. Totally Flooring uses careful cleaning methods suited to your flooring to help remove everyday dirt while respecting the wood and its finish.",
    videoPoints: [
      "Careful Cleaning for Finished Hardwood Floors",
      "Helps Remove Dirt and Buildup From Seams",
      "Low-Moisture Cleaning for Easier Drying",
    ],
    videoImage: "/assets/images/service-single/hardwood-floor-cleaning/2.png",
    closingParagraph:
      "Keep your hardwood floors looking clean and well cared for with a cleaning approach that works with your floor—not against it. Contact Totally Flooring to discuss your flooring and cleaning needs.",
    quote:
      "The right professional care helps your hardwood floors stay clean, beautiful, and ready for everyday life.",
    galleryTitle: "Floor types we clean:",
    galleryImages: hardwoodFloorCleaningGallery,
    accordion: defaultAccordion,
  },
  {
    slug: "carpet-repair",
    title: "Carpet Repair Services",
    cardImage: "/assets/images/service-single/carpet-repair/1.png",
    heroImage: "/assets/images/service-single/carpet-repair/1.png",
    intro:
      "Not every damaged carpet needs to be replaced. Totally Flooring can help with common issues such as tears, burns, loose seams, and damaged sections, giving your carpet a chance to look better without the cost and disruption of replacing the entire floor.",
    sectionTitle: "Repairs That Help Restore Your Carpet",
    sectionBody:
      "From loose carpet and separated seams to damaged spots that need patching, we carefully assess the problem and determine the right repair approach. When suitable matching material is available, we work to blend the repaired area with the surrounding carpet for a cleaner, more natural-looking finish.",
    videoTitle: "When Carpet Repair Makes More Sense",
    videoDescription:
      "Carpet damage is often limited to a specific area, so replacing the entire carpet may not always be necessary. Totally Flooring can assess the damage and help determine whether a targeted repair is a practical option for your space.",
    videoPoints: [
      "Seam Repair and Carpet Re-Stretching",
      "Burn, Tear, and Spot Patching",
      "Treatment for Stubborn Carpet Stains",
    ],
    videoImage: "/assets/images/service-single/carpet-repair/2.png",
    closingParagraph:
      "Not sure whether your carpet can be repaired? We’ll take a look at the condition of the affected area and explain your options clearly, whether that means repairing the damage or considering replacement.",
    quote:
      "The right repair can give damaged carpet a cleaner, more finished appearance without replacing the entire floor.",
    galleryTitle: "Repairs we handle:",
    galleryImages: carpetRepairGallery,
    accordion: defaultAccordion,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
