export type AreaLayout = "frederick" | "urbana" | "myersville";

export type ServiceAreaMeta = {
  slug: string;
  name: string;
  state: string;
  layout: AreaLayout;
  excerpt: string;
  hubImage: string;
  mapQuery: string;
};

export const serviceAreas: ServiceAreaMeta[] = [
  {
    slug: "frederick-md",
    name: "Frederick",
    state: "MD",
    layout: "frederick",
    excerpt:
      "Full-service carpet cleaning for Frederick homes and businesses — deep cleaning, pet stains, rugs, and upholstery.",
    hubImage: "/assets/images/service/service-6.png",
    mapQuery: "Frederick,+MD",
  },
  {
    slug: "urbana-md",
    name: "Urbana",
    state: "MD",
    layout: "urbana",
    excerpt:
      "Trusted carpet care for Urbana and the Villages of Urbana — hot water extraction, eco-friendly products, free estimates.",
    hubImage: "/assets/images/choose/choose.png",
    mapQuery: "Urbana,+MD+21704",
  },
  {
    slug: "myersville-md",
    name: "Myersville",
    state: "MD",
    layout: "myersville",
    excerpt:
      "Reliable carpet cleaning for Myersville families — personalized service, honest pricing, and spotless results.",
    hubImage: "/assets/images/work/image-1.jpg",
    mapQuery: "Myersville,+MD",
  },
];

export function getServiceAreaBySlug(slug: string): ServiceAreaMeta | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getAllServiceAreaSlugs(): string[] {
  return serviceAreas.map((area) => area.slug);
}
