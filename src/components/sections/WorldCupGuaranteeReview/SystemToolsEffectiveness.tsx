import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  chartAxisTick,
  chartBarRadius,
  chartBarSize,
  chartColors,
  chartLabelStyle,
  chartMargins,
  chartSeriesColors,
} from "./chartStyles";

export const SystemToolsEffectiveness: React.FC = () => {
  const data = [
    { name: "体育打水", accuracy: 68 },
    { name: "优势赔率", accuracy: 58 },
    { name: "体育对压(跨AB系)", accuracy: 90 },
    { name: "卡进球点", accuracy: 75 },
  ];

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-5 md:p-6 space-y-5">

      {/* 柱状图 */}
      <div className="w-full h-[320px] pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={chartMargins.mini}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke={chartColors.grid}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={chartAxisTick}
              interval={0}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={chartAxisTick}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tickFormatter={(val) => `${val}%`}
            />
            <Bar
              dataKey="accuracy"
              radius={chartBarRadius.standard}
              barSize={chartBarSize.single}
              isAnimationActive={false}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={[chartSeriesColors.secondary, chartSeriesColors.secondary, chartSeriesColors.primary, chartSeriesColors.tertiary][index % 4]}
                />
              ))}
              <LabelList
                dataKey="accuracy"
                position="top"
                formatter={(val: number) => `${val}%`}
                style={chartLabelStyle}
                offset={8}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SystemToolsEffectiveness;
