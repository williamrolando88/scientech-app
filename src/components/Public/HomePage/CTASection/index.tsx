import Button from "@/src/components/Shared/Button";
import { CTASectionContent } from "@/src/constants/staticContent/homePage";
import { APP_ROUTES } from "@/src/routes/appRoutes";
import Link from "next/link";
import { FC } from "react";

const CTASection: FC = () => {
  return (
    <section className="bg-gray-300 text-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-2 py-12 text-center sm:px-6 sm:py-16 lg:flex-row lg:justify-between lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 lg:w-2/3 lg:text-left">
          <h3>{CTASectionContent.title}</h3>
          <p>{CTASectionContent.description}</p>
        </div>
        <Link href={APP_ROUTES.public.contact}>
          <Button>
            <h5 className="p-1 lg:p-2">{CTASectionContent.CTALabel}</h5>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
