import { providersSectionContent } from "@/src/constants/staticContent/homePage";
import Image from "next/image";
import { FC } from "react";

const ProvidersLogos: FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 text-center lg:px-8">
      <h3 className="text-center">{providersSectionContent.title}</h3>
      <div className="mx-auto mt-10 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:mt-20 lg:grid-cols-6">
        {providersSectionContent.logos.map((logo) => (
          <div key={logo.alt} className="!flex items-center">
            <Image src={logo.src} alt={logo.alt} height={100} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProvidersLogos;
