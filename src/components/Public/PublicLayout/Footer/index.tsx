import Iconify from "@/src/components/Shared/Iconify";
import ScientechLogo from "@/src/components/Shared/ScientechLogo";
import { footerContent } from "@/src/constants/staticContent/footer";
import { APP_ROUTES } from "@/src/routes/appRoutes";
import { footerNavigation, socialMediaLinks } from "@/src/routes/publicLinks";
import Link from "next/link";
import { FC } from "react";
import FooterLink from "./FooterLink";

/**
 * Footer component used on the public Scientech page
 */
const Footer: FC = () => {
  return (
    <footer className="bg-primary-default text-white">
      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
          <Link href={APP_ROUTES.public.root}>
            <ScientechLogo className="h-6 sm:h-8 lg:h-10" variant="white" />
          </Link>

          <div className="flex flex-row gap-2">
            {socialMediaLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <Iconify icon={link.icon} size="30" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row">
          <div className="text-sm lg:flex-[3] lg:text-base">
            {footerContent.companySummary}
          </div>

          {footerNavigation.map((category) => (
            <div key={category.title} className="flex-1">
              <p className="text-lg font-semibold uppercase lg:text-xl">
                {category.title}
              </p>

              <ul className="mt-2 flex flex-col lg:gap-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <FooterLink name={link.name} href={link.href} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
