import { clientsSectionContent } from "@/src/constants/staticContent/homePage";
import Image from "next/image";
import { FC } from "react";
import Marquee from "react-fast-marquee";

const ClientsMarquee: FC = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-2 text-center sm:px-6 lg:gap-12 lg:px-8">
      <h3 className="text-center">{clientsSectionContent.title}</h3>

      <Marquee className="mt-10 lg:mt-20" gradient gradientWidth={100}>
        {clientsSectionContent.logos.map((logo, index) => (
          <Image
            key={`${logo.alt}-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="h-24 w-auto"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default ClientsMarquee;
