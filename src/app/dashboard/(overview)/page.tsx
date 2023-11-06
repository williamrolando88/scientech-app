import DashboardHome from "@/src/components/DashboardHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function page() {
  return <DashboardHome />;
}
