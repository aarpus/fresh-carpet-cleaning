import type { Metadata } from "next";
import Breadcumb from "@/components/common/Breadcumb";
import FrederickAreaPage from "@/components/service-area/FrederickAreaPage";
import MyersvilleAreaPage from "@/components/service-area/MyersvilleAreaPage";
import UrbanaAreaPage from "@/components/service-area/UrbanaAreaPage";
import {
  getAllServiceAreaSlugs,
  getServiceAreaBySlug,
} from "@/lib/serviceAreas";
import { notFound } from "next/navigation";

type ServiceAreaDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const layoutComponents = {
  frederick: FrederickAreaPage,
  urbana: UrbanaAreaPage,
  myersville: MyersvilleAreaPage,
} as const;

export async function generateStaticParams() {
  return getAllServiceAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceAreaDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    return { title: "Service Area Not Found" };
  }

  return {
    title: `${area.name}, ${area.state} Carpet Cleaning | Fresh Clean`,
    description: area.excerpt,
  };
}

export default async function ServiceAreaDetailPage({
  params,
}: ServiceAreaDetailPageProps) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const LayoutComponent = layoutComponents[area.layout];
  const showBreadcrumb = area.layout !== "frederick" && area.layout !== "urbana";

  return (
    <>
      {showBreadcrumb && (
        <Breadcumb title={`${area.name}, ${area.state}`} />
      )}
      <LayoutComponent />
    </>
  );
}
