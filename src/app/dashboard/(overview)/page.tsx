import DashboardHome from "@/src/components/Private/DashboardHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function page() {
  return <DashboardHome />;
}
