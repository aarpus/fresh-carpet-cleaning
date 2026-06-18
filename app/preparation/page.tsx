import type { Metadata } from "next";
import Breadcumb from "@/components/common/Breadcumb";
import PreparationContent from "@/components/preparation/PreparationContent";

export const metadata: Metadata = {
  title: "Preparation | Fresh Clean Carpet Cleaning",
  description:
    "How to prepare your home before Fresh Clean Carpet Cleaning arrives — payment, parking, pets, drying tips, and what to expect on service day.",
};

export default function PreparationPage() {
  return (
    <>
      <Breadcumb title="Preparation" />
      <PreparationContent />
    </>
  );
}
