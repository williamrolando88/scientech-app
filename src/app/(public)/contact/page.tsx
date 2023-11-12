import ContactCTA from "@/src/components/Public/ContactPage/ContactCTA";
import ContactHero from "@/src/components/Public/ContactPage/ContactHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
};

function page() {
  return (
    <main className="mb-16 flex flex-col">
      <ContactHero />
      <ContactCTA />
    </main>
  );
}

export default page;
