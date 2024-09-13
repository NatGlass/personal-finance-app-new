"use client";

import { chartColourMap } from "@/components/common/chart-colour-map";
import { useEffect, useState } from "react";
import { Cell, Label, Pie, PieChart } from "recharts";

const chartData = [
  { name: "Entertainment", value: 50, colorKey: "green" },
  { name: "Bills", value: 750, colorKey: "cyan" },
  { name: "Dining Out", value: 75, colorKey: "yellow" },
  { name: "Personal Care", value: 100, colorKey: "navy" },
];

function Chart() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const totalLimit = 975; // Total limit (matches the $975 in the image)
  const usedAmount = 338; // The used amount (matches the $338 in the image)

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full flex items-center justify-center">
      <PieChart
        width={400}
        height={300}
        className="w-full h-full max-w-[200px] max-h-[200px] lg:max-w-[300px] lg:max-h-[300px]"
      >
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={150}
          outerRadius={200}
          fill="#8884d8"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={chartColourMap[entry.colorKey]} />
          ))}
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-4xl font-bold"
                    >
                      £{usedAmount}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 36}
                      className="fill-muted-foreground text-lg"
                    >
                      of £{totalLimit} limit
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </div>
  );
}

export default Chart;
