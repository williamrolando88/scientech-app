import "@/src/lib/global.css";
import { inter } from "@/src/lib/utils/fonts";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { FC } from "react";
import { LayoutInterface } from "../types/common";

export const metadata: Metadata = {
  title: {
    template: "%s | Scientech Ecuador",
    default: "Scientech Ecuador",
  },
};

const layout: FC<LayoutInterface> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default layout;
