import { ChartAreaDemo } from "@/components/demo-v4/chart-area-demo";
import { ChartBarDemo } from "@/components/demo-v4/chart-bar-demo";
import { ChartLineDemo } from "@/components/demo-v4/chart-line-demo";

export function ChartDemo() {
  return (
    <div className="flex w-full max-w-screen-xl flex-col flex-wrap gap-4 *:data-[slot=card]:flex-1 md:flex-row">
      <ChartAreaDemo />
      <ChartBarDemo />
      <ChartLineDemo />
    </div>
  );
}
