import type { Metadata } from "next";
import Breadcumb from "@/components/common/Breadcumb";
import AboutSection from "@/components/about/AboutSection";
import AboutCTA from "@/components/about/AboutCTA";
import FunFact from "@/components/about/FunFact";
import HowItWorks from "@/components/about/HowItWorks";
import BeforeAfter from "@/components/home/BeforeAfter";
import ContactForm from "@/components/home/ContactForm";
import FAQ from "@/components/home/FAQ";
import Partners from "@/components/home/Partners";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us | Totally Flooring Carpet Cleaning",
  description:
    "Learn about Totally Flooring — professional carpet, upholstery, and floor cleaning with care you can trust across Maryland.",
};

export default function AboutPage() {
  return (
    <>
      <Breadcumb title="About us" />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <FunFact />
      <BeforeAfter />
      <AboutCTA />
      <FAQ />
      <ContactForm />
      <Partners />
    </>
  );
}
