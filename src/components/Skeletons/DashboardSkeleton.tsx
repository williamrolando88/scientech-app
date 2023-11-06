import { SHIMMER } from "@/src/constants/skeletons";
import { CardSkeleton } from "./CardSkeleton";
import { LatestInvoicesSkeleton } from "./LatestInvoicesSkeleton";
import { RevenueChartSkeleton } from "./RevenueChartSkeleton";

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${SHIMMER} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}
