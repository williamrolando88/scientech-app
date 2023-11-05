import "@/app/ui/global.css";
import { Metadata } from "next";
import { FC } from "react";
import { LayoutInterface } from "./types/common";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

const RootLayout: FC<LayoutInterface> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
