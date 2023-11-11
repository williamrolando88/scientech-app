import PICTURES from "@/src/constants/pictures";
import Image from "next/image";
import { FC } from "react";

const ContactHero: FC = () => {
  return (
    <section className="relative h-100 w-full overflow-hidden xl:h-125">
      <Image
        alt="Call center assistant"
        src={PICTURES.contactPage.callCenter}
        className="h-full w-auto object-cover xl:w-full"
      />
      <div className="absolute inset-0 z-10 bg-black/25" />
    </section>
  );
};

export default ContactHero;
