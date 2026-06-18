import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";
import BeforeAfter from "@/components/home/BeforeAfter";
import FAQ from "@/components/home/FAQ";
import ContactForm from "@/components/home/ContactForm";
import ServiceAreas from "@/components/home/ServiceAreas";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partners />
      <Services />
      <WhyChooseUs />
      <CTA />
      <BeforeAfter />
      <FAQ />
      <ContactForm />
      <ServiceAreas />
    </div>
  );
}
