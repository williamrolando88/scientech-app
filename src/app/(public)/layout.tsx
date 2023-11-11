import Copyright from "@/src/components/Public/PublicLayout/Copyright";
import Footer from "@/src/components/Public/PublicLayout/Footer";
import NavBar from "@/src/components/Public/PublicLayout/NavBar";
import { LayoutInterface } from "@/src/types/common";
import { FC } from "react";

const layout: FC<LayoutInterface> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <div className="grow">{children}</div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default layout;
