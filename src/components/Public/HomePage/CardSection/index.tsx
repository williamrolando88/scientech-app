import { cardsSectionContent } from "@/src/constants/staticContent/homePage";
import { FC } from "react";
import Card from "./Card";

const CardSection: FC = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="-mt-40 flex flex-col gap-6 lg:flex-row lg:justify-between">
        {cardsSectionContent.cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            src={card.src as unknown as string}
            caption={card.caption}
          />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
