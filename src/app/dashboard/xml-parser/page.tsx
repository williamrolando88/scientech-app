import XmlParser from "@/src/components/Private/XMLParser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analizador XML",
};

const page = () => {
  return (
    <main>
      <XmlParser />
    </main>
  );
};

export default page;
