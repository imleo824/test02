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
import { Info } from "lucide-react";

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
            margin={{ top: 25, right: 20, left: 0, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#0f172a", fontSize: 13, fontWeight: 800 }}
              interval={0}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#0f172a",
                fontSize: 12,
                fontWeight: 800,
                fontFamily: "monospace",
              }}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tickFormatter={(val) => `${val}%`}
            />
            <Bar
              dataKey="accuracy"
              radius={[4, 4, 0, 0]}
              barSize={48}
              isAnimationActive={false}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={["#1d4ed8", "#3b82f6", "#0f172a", "#60a5fa"][index % 4]}
                />
              ))}
              <LabelList
                dataKey="accuracy"
                position="top"
                formatter={(val: number) => `${val}%`}
                style={{
                  fill: "#0f172a",
                  fontSize: 13,
                  fontWeight: 900,
                  fontFamily: "monospace",
                }}
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

