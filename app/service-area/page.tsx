import type { Metadata } from "next";
import Breadcumb from "@/components/common/Breadcumb";
import ServiceAreaHub from "@/components/service-area/ServiceAreaHub";

export const metadata: Metadata = {
  title: "We Serve Area | Fresh Clean Carpet Cleaning",
  description:
    "Fresh Clean Carpet Cleaning serves Frederick, Urbana, Myersville, and surrounding Maryland communities. Find your local service area.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <ServiceAreaHub />
    </>
  );
}
