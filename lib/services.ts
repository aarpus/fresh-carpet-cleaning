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

const defaultAccordion: ServiceAccordionItem[] = [
  {
    question: "How often should I schedule this service?",
    answer:
      "Most homes benefit from professional cleaning every 6–12 months, depending on foot traffic, pets, and allergies. High-traffic areas or households with children and pets may need service more frequently.",
  },
  {
    question: "Is the cleaning process safe for my family and pets?",
    answer:
      "Yes. We use eco-friendly, non-toxic products that are tough on dirt and stains but safe for children and pets. Our technicians follow proven methods to protect your surfaces while delivering a deep clean.",
    defaultOpen: true,
  },
  {
    question: "How long does a typical appointment take?",
    answer:
      "Timing depends on the size of the area and its condition. Most residential appointments take between 1–3 hours. We provide an estimated timeframe when you book.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Absolutely. Contact us by phone or through our booking form for a free, no-obligation quote tailored to your space and cleaning needs.",
  },
];

export const services: Service[] = [
  {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    cardImage: "/assets/images/service/service-6.png",
    heroImage: "/assets/images/service-single/img-1.jpg",
    intro:
      "Professional carpet cleaning removes embedded dirt, allergens, and stains that regular vacuuming cannot reach. Our deep-cleaning process restores freshness, improves indoor air quality, and extends the life of your carpets.",
    sectionTitle: "Deep steam cleaning for lasting results",
    sectionBody:
      "We use industry-leading equipment and proven techniques to extract soil, neutralize odors, and revive carpet fibers. From high-traffic hallways to delicate bedroom rugs, every area receives careful attention for a uniform, like-new finish.",
    videoTitle: "Why professional carpet cleaning matters",
    videoDescription:
      "Regular professional cleaning protects your investment and keeps your home healthier.",
    videoPoints: [
      "Removes deep-set dirt and allergens",
      "Eliminates stubborn stains and odors",
      "Extends carpet lifespan significantly",
    ],
    closingParagraph:
      "Whether you need a one-time deep clean or ongoing maintenance, our trained technicians deliver reliable results with minimal disruption to your day. Schedule your appointment and experience the difference a truly clean carpet makes.",
    quote:
      "A clean carpet is more than appearance — it is a healthier, more comfortable home for everyone who walks through your door.",
    galleryTitle: "What we treat:",
    galleryImages: defaultGallery,
    accordion: defaultAccordion,
  },
  {
    slug: "upholstery-cleaning",
    title: "Upholstery Cleaning",
    cardImage: "/assets/images/service/service-1.png",
    heroImage: "/assets/images/service-single/img-1.jpg",
    intro:
      "Restore the look and feel of your sofas, chairs, and fabric furniture with our professional upholstery cleaning service. We safely remove stains, odors, and everyday buildup without damaging delicate fabrics.",
    sectionTitle: "Gentle care for every fabric type",
    sectionBody:
      "Different upholstery materials require different approaches. Our team identifies fabric types and applies the appropriate cleaning method — from steam extraction to low-moisture techniques — to achieve a thorough clean without shrinkage or discoloration.",
    videoTitle: "Why upholstery cleaning is essential",
    videoDescription:
      "Furniture absorbs oils, dust, and allergens over time. Professional cleaning keeps it fresh and hygienic.",
    videoPoints: [
      "Safe for most fabric and microfiber types",
      "Removes pet odors and food stains",
      "Fast drying with minimal downtime",
    ],
    closingParagraph:
      "Bring new life to your living spaces with upholstery cleaning that removes what household products cannot. Contact us today for a free assessment of your furniture.",
    quote:
      "Clean upholstery transforms a room — it looks better, smells fresher, and feels more inviting instantly.",
    galleryTitle: "Items we clean:",
    galleryImages: defaultGallery,
    accordion: defaultAccordion,
  },
  {
    slug: "tile-grout-cleaning",
    title: "Tile & Grout Cleaning",
    cardImage: "/assets/images/service/service-5.png",
    heroImage: "/assets/images/service-single/img-1.jpg",
    intro:
      "Tile surfaces may look clean on top, but grout lines trap dirt, mold, and bacteria over time. Our tile and grout cleaning service restores brightness to floors, showers, and kitchen backsplashes.",
    sectionTitle: "Restore grout lines to their original color",
    sectionBody:
      "We apply specialized cleaners and high-pressure extraction to lift grime from porous grout and sealed tile surfaces. The result is a noticeably brighter, more sanitary finish in bathrooms, kitchens, and entryways.",
    videoTitle: "Why grout cleaning makes a difference",
    videoDescription:
      "Discolored grout ages a space. Professional cleaning delivers dramatic before-and-after results.",
    videoPoints: [
      "Removes mold, mildew, and soap scum",
      "Safe for ceramic, porcelain, and stone tile",
      "Optional sealing to prevent future staining",
    ],
    closingParagraph:
      "Do not let dingy grout detract from your beautiful tile. Our team has the tools and expertise to make floors and walls look new again.",
    quote:
      "Bright grout lines are the secret to making tile surfaces look freshly installed — even years later.",
    galleryTitle: "Surfaces we service:",
    galleryImages: defaultGallery,
    accordion: defaultAccordion,
  },
  {
    slug: "odor-control",
    title: "Odor Control",
    cardImage: "/assets/images/service/service-4.png",
    heroImage: "/assets/images/service-single/img-1.jpg",
    intro:
      "Persistent odors from pets, smoke, moisture, or spills can linger in carpets and upholstery long after the source is gone. Our odor control treatments neutralize smells at the source rather than masking them.",
    sectionTitle: "Eliminate odors — do not just cover them up",
    sectionBody:
      "We use enzyme-based and professional-grade deodorizing treatments that break down odor-causing bacteria and compounds embedded in fibers. The result is a genuinely fresh-smelling home, not a temporary fragrance overlay.",
    videoTitle: "Why odor control requires professional treatment",
    videoDescription:
      "Household sprays only mask odors temporarily. We target the root cause for lasting freshness.",
    videoPoints: [
      "Pet urine and smoke odor removal",
      "Enzyme treatments for organic sources",
      "Works on carpets, upholstery, and rugs",
    ],
    closingParagraph:
      "If unwanted smells persist despite regular cleaning, our odor control specialists can diagnose the problem and recommend the most effective treatment plan for your home.",
    quote:
      "True odor removal means addressing the source — not spraying over it. That is the Fresh Clean difference.",
    galleryTitle: "Common odor sources we treat:",
    galleryImages: defaultGallery,
    accordion: defaultAccordion,
  },
  {
    slug: "hardwood-floor-cleaning",
    title: "Hardwood Floor Cleaning",
    cardImage: "/assets/images/service/service-2.png",
    heroImage: "/assets/images/service-single/img-1.jpg",
    intro:
      "Hardwood floors add warmth and elegance to any home, but they require proper care to maintain their beauty. Our hardwood floor cleaning service safely removes dirt and buildup without damaging the finish.",
    sectionTitle: "Protect your floors with expert care",
    sectionBody:
      "We use pH-balanced cleaners and techniques suited to your floor's finish — whether site-finished, pre-finished, or engineered hardwood. Our process cleans thoroughly while preserving the protective coating that keeps your floors looking their best.",
    videoTitle: "Why professional hardwood cleaning matters",
    videoDescription:
      "Wrong products and excess water can ruin hardwood. Trust trained professionals for safe, effective results.",
    videoPoints: [
      "Safe for sealed and finished hardwood",
      "Removes ground-in dirt from grain and seams",
      "No excess moisture — fast, safe drying",
    ],
    closingParagraph:
      "Keep your hardwood investment looking beautiful for years with cleaning that respects the wood and its finish. Book a consultation to discuss your floor type and care needs.",
    quote:
      "Well-maintained hardwood floors get more beautiful with age — professional cleaning keeps them that way.",
    galleryTitle: "Floor types we clean:",
    galleryImages: defaultGallery,
    accordion: defaultAccordion,
  },
  {
    slug: "carpet-repair",
    title: "Carpet Repair Services",
    cardImage: "/assets/images/service/service-3.png",
    heroImage: "/assets/images/service-single/img-1.jpg",
    intro:
      "Burns, tears, loose seams, and permanent stains do not always mean replacing your entire carpet. Our carpet repair services restore damaged areas so your flooring looks seamless and extends its useful life.",
    sectionTitle: "Expert repairs that blend seamlessly",
    sectionBody:
      "From re-stretching loose carpet and repairing seams to patching damaged sections with matching material, our technicians deliver repairs that are virtually invisible. Save money and avoid the hassle of full replacement when targeted repair is the smarter choice.",
    videoTitle: "When repair beats replacement",
    videoDescription:
      "Many carpet problems are localized. Professional repair restores appearance at a fraction of replacement cost.",
    videoPoints: [
      "Seam repair and re-stretching",
      "Burn and tear patching",
      "Stain treatment for set-in marks",
    ],
    closingParagraph:
      "Not sure if your carpet can be saved? Our team will assess the damage and recommend the most cost-effective solution — repair or replacement — with honest, upfront guidance.",
    quote:
      "A skilled repair can make damaged carpet look like the problem never happened — saving you time and money.",
    galleryTitle: "Repairs we handle:",
    galleryImages: defaultGallery,
    accordion: defaultAccordion,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
