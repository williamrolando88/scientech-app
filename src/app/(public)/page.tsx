import CTASection from "@/src/components/Public/HomePage/CTASection";
import CardSection from "@/src/components/Public/HomePage/CardSection";
import HeroSection from "@/src/components/Public/HomePage/HeroSection";
import ClientsMarquee from "@/src/components/Public/HomePage/MarqueeSection";
import ProvidersLogos from "@/src/components/Public/HomePage/ProvidersLogo";
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
      <ClientsMarquee />
    </main>
  );
}
