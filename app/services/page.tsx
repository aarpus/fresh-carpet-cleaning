import Breadcumb from "@/components/common/Breadcumb";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import ServicesPageSection from "@/components/services/ServicesPageSection";

export default function ServicesPage() {
  return (
    <>
      <Breadcumb title="Services" />
      <ServicesPageSection />
      <CTA />
      <FAQ />
    </>
  );
}
