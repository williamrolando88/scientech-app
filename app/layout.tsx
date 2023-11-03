import "@/app/ui/global.css";
import { FC } from "react";
import { LayoutInterface } from "./types/common";
import { inter } from "./ui/fonts";

const RootLayout: FC<LayoutInterface> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
