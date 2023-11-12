import { lusitana } from "@/src/lib/utils/fonts";
import { FC } from "react";

const DashboardHome: FC = () => {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
    </main>
  );
};

export default DashboardHome;
