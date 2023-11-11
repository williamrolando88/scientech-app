import CTASection from "@/src/components/HomePage/CTASection";
import CardSection from "@/src/components/HomePage/CardSection";
import HeroSection from "@/src/components/HomePage/HeroSection";
import ProvidersLogos from "@/src/components/HomePage/ProvidersLogo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
};

export default function page() {
  return (
    <main className="mb-16 flex flex-col gap-20 lg:mb-40">
      <HeroSection />
      <CardSection />
      <ProvidersLogos />
      <CTASection />
      {/* <ClientsMarquee /> */}
    </main>
  );
}
