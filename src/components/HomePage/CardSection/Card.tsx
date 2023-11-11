import Image from "next/image";
import { FC } from "react";

interface Props {
  // Title card
  title: string;
  // Path to image url
  src: string;
  // Text describing the card
  caption: string;
  // Placeholder picture
  placeholder?: string;
}

const Card: FC<Props> = ({ title, src, caption }) => {
  return (
    <div className="relative z-10 flex flex-1 flex-col overflow-hidden rounded-lg border bg-white sm:flex-row lg:max-w-sm lg:flex-col">
      <div className="h-60 w-full flex-1 overflow-hidden lg:flex-none">
        <Image
          src={src}
          className="h-full w-full object-cover"
          placeholder={"blur"}
          alt={title}
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 lg:flex-none">
        <h5>{title}</h5>
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default Card;
