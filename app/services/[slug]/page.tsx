import Breadcumb from "@/components/common/Breadcumb";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Fresh Clean Carpet Cleaning`,
    description: service.intro,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Breadcumb title={service.title} />
      <ServiceDetailContent service={service} />
    </>
  );
}
