import Iconify from "@/src/components/Shared/Iconify";
import { contactCTAContent } from "@/src/constants/staticContent/contactPage";
import Link from "next/link";
import { FC } from "react";
import ContactForm from "./ContactForm";

const ContactCTA: FC = () => {
  return (
    <section className="relative z-20 mx-auto -mt-16 w-full max-w-7xl px-2 sm:px-6 md:mt-16 lg:px-8">
      <div className="flex flex-col gap-8 border md:flex-row md:gap-0">
        <div className="flex flex-col gap-8 bg-terciary-light p-4 pb-6 text-secondary-dark md:flex-1 lg:max-w-md">
          <h2 className="text-3xl">{contactCTAContent.title}</h2>

          <p className="text-base">{contactCTAContent.pitch}</p>

          <h4 className="text-xl">{contactCTAContent.subtitle}</h4>

          {contactCTAContent.contactInfo.map((info) => (
            <>
              <div key={info.title} className="flex items-center gap-4">
                <Iconify icon={info.icon} size="50" />

                <div>
                  <h5 className="text-lg">{info.title}</h5>

                  <Link
                    href={`mailto:${info.email}`}
                    className="text-base underline hover:text-purple-600"
                  >
                    {info.email}
                  </Link>

                  <p className="text-base">{info.phoneNumber}</p>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="bg-white p-4 md:flex-1 md:px-6 xl:flex xl:justify-end">
          <div className="h-full xl:w-150">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
