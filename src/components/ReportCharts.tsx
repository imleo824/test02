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
  "#0f172a",
  "#1e293b",
  "#1e40af",
  "#334155",
  "#475569",
  "#64748b",
  "#94a3b8",
];

export const InterceptTypeBarChart: React.FC = () => {
  return (
    <div className="h-full w-full bg-white rounded-2xl border border-slate-200 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={interceptData}
          margin={{ top: 28, right: 30, left: 10, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e2e8f0"
          />
          <XAxis
            dataKey="name"
            axisLine={{ stroke: "#475569" }}
            tickLine={false}
            tick={{ fontSize: 13, fill: "#0f172a", fontWeight: 900 }}
            interval={0}
            dy={8}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: "#0f172a",
              fontWeight: 800,
              fontFamily: "monospace",
            }}
            tickFormatter={(val) => val.toLocaleString()}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "1.5px solid #0f172a",
              backgroundColor: "#ffffff",
              padding: "12px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              color: "#0f172a",
            }}
            itemStyle={{ fontWeight: 800, fontSize: "13px", color: "#0f172a" }}
            labelStyle={{
              fontWeight: 900,
              marginBottom: "4px",
              color: "#0f172a",
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
            radius={[6, 6, 0, 0]}
            barSize={48}
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
              style={{
                fill: "#0f172a",
                fontSize: 13,
                fontWeight: 900,
                fontFamily: "monospace",
              }}
              offset={10}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

