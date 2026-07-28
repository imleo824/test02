import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";
import {
  chartAxisTick,
  chartBarRadius,
  chartBarSize,
  chartColors,
  chartLabelStyle,
  chartMargins,
  chartSeriesColors,
  chartTooltipItemStyle,
  chartTooltipStyle,
} from "./sections/WorldCupGuaranteeReview/chartStyles";

const interceptData = [
  { name: "TY打水", amount: 13868.02, pct: "81.24%" },
  { name: "批量打水", amount: 1366.5, pct: "8.01%" },
  { name: "打负/租卖", amount: 875.02, pct: "5.13%" },
  { name: "出货", amount: 235.79, pct: "1.38%" },
  { name: "野鸡/协议", amount: 388.71, pct: "2.28%" },
  { name: "夹盘/卡球", amount: 10.05, pct: "0.06%" },
  { name: "其他", amount: 325.98, pct: "1.91%" },
];

const colors = [
  chartSeriesColors.primary,
  chartSeriesColors.secondary,
  chartSeriesColors.tertiary,
  chartSeriesColors.manual,
  chartSeriesColors.positive,
  chartSeriesColors.negative,
  chartColors.line,
];

export const InterceptTypeBarChart: React.FC = () => {
  return (
    <div className="h-full w-full report-card p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={interceptData}
          margin={chartMargins.standard}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={chartColors.grid}
          />
          <XAxis
            dataKey="name"
            axisLine={{ stroke: chartColors.ink }}
            tickLine={false}
            tick={chartAxisTick}
            interval={0}
            dy={8}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={chartAxisTick}
            tickFormatter={(val) => val.toLocaleString()}
          />
          <Tooltip
            contentStyle={chartTooltipStyle}
            itemStyle={chartTooltipItemStyle}
            labelStyle={{
              fontWeight: 900,
              marginBottom: "4px",
              color: chartColors.ink,
              fontSize: "14px",
            }}
            cursor={{ fill: "#f1f5f9" }}
            formatter={(value: any, name: any) => {
              if (name === "amount")
                return [`${Number(value).toLocaleString()} 万元`, "拦截金额"];
              return [value, name];
            }}
          />
          <Bar
            dataKey="amount"
            radius={chartBarRadius.standard}
            barSize={chartBarSize.single}
            isAnimationActive={false}
          >
            {interceptData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
            <LabelList
              dataKey="amount"
              position="top"
              formatter={(val: number) => `${val.toLocaleString()}`}
              style={chartLabelStyle}
              offset={10}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
