import { FC } from "react";
import SideNav from "./SideNav";
import { LayoutInterface } from "@/src/types/common";

const DashboardLayout: FC<LayoutInterface> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default DashboardLayout;
