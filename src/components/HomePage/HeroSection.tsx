import PICTURES from "@/src/constants/pictures";
import { heroSectionContent } from "@/src/constants/staticContent/homePage";
import { APP_ROUTES } from "@/src/routes/appRoutes";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Button from "../Shared/Button";

const HeroSection: FC = () => {
  return (
    <section className="relative h-100 w-full overflow-hidden md:h-100 lg:h-125 ">
      <div className="h-full w-full grayscale">
        <Image
          src={PICTURES.homePage.hero}
          alt="hero-picture"
          className="h-full w-auto object-cover md:h-auto md:w-full 2xl:-mt-40"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 75vw, 100vw"
          placeholder="blur"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 z-10 mx-auto h-full max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-full flex-col items-center justify-center text-center text-white md:gap-2 xl:gap-4">
          <h2>{heroSectionContent.title}</h2>

          <p>{heroSectionContent.subtitle}</p>

          <Link className="mt-4" href={APP_ROUTES.public.contact}>
            <Button className="text-secondary-lighter hover:bg-primary-dark">
              <h5>{heroSectionContent.CTALabel}</h5>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
