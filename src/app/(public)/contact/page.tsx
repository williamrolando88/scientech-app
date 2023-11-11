import ContactHero from "@/src/components/Public/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
};

function page() {
  return (
    <main className="mb-16 flex flex-col">
      <ContactHero />
      {/* <ContactCTA /> */}
    </main>
  );
}

export default page;
