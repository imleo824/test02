import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, ComposedChart, Line } from "recharts";
import { CoreActionHeader, SummaryBox, highlightNumbers } from "./utils";
import {
  chartAxisTick,
  chartBarRadius,
  chartBarSize,
  chartColors,
  chartLabelStyle,
  chartMargins,
  chartSeriesColors,
} from "./chartStyles";

export const AuditOverviewAmountAndEffort: React.FC = () => {
  // Chart 1: 26年第二季度总防范金 (月度数据 2026/1 ~ 2026/6)
  const amountData = [
    { month: "2026/1", amount: 1.153 },
    { month: "2026/2", amount: 1.019 },
    { month: "2026/3", amount: 0.899 },
    { month: "2026/4", amount: 0.868 },
    { month: "2026/5", amount: 0.810 },
    { month: "2026/6", amount: 1.046 },
  ];

  // Chart 2: 26年第二季度平均审核时长 (双轴数据: 人工单量 & 人工时效)
  const effortData = [
    { month: "2026/1", volume: 221.53, duration: "0:10:12", durationVal: 10.20 },
    { month: "2026/2", volume: 223.84, duration: "0:10:46", durationVal: 10.77 },
    { month: "2026/3", volume: 231.49, duration: "0:09:38", durationVal: 9.63 },
    { month: "2026/4", volume: 228.76, duration: "0:09:54", durationVal: 9.90 },
    { month: "2026/5", volume: 224.03, duration: "0:08:07", durationVal: 8.12 },
    { month: "2026/6", volume: 300.77, duration: "0:08:14", durationVal: 8.23 },
  ];

  return (
    <div id="section-audit-amount-effort" className="space-y-6">
      {/* 模块小标题 - 统一规范 */}
      <div className="border-b border-slate-900 pb-2 mb-4"><CoreActionHeader title={<><span className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0"></span>2.1.1 拦截金额与处理时效</>} /></div>

      {/* 文字总结区 */}
      <SummaryBox>
        <div className="space-y-3">
          <div className="text-base text-slate-900 font-bold leading-relaxed">
            {highlightNumbers(
              "[[Q2总防范金]]：整体总计金额在 [[2.72]]，其中6月最高为 [[1.04]]，为世界杯期间拦截金额有所提升。整体对比1季度有所下降 [[3000]]。原因主要为批量工作室团伙扣款力度增大，采用扣本金方式，成效明显。",
            )}
          </div>
          <div className="text-base text-slate-900 font-bold leading-relaxed">
            {highlightNumbers(
              "[[Q2审核时长]]：2季度整体平均人工审核时长为 [[0:08:45]]，对比第1季度提升明显，世界杯期间出款审核时效部分完成度较高。",
            )}
          </div>
        </div>
      </SummaryBox>

      {/* 图表展示区 - 左右并排 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 左卡片: 26年第二季度总防范金 */}
        <div className="bg-white border border-slate-100 rounded-xl p-6 flex flex-col justify-between ">
          <div className="flex items-start justify-between mb-4 border-b border-slate-100 pb-3">
            <span className="text-base font-black text-slate-900">Q2总防范金额</span>
            <span className="text-3xl md:text-4xl font-black text-slate-900 font-mono tracking-tight">
              2.72
            </span>
          </div>
          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={amountData} margin={chartMargins.hiddenAxis}>
                <XAxis dataKey="month" tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} />
                <YAxis hide domain={[0, 1.4]} />
                <Bar dataKey="amount" fill={chartSeriesColors.secondary} radius={chartBarRadius.standard} barSize={chartBarSize.single} isAnimationActive={false} label={{ position: "top", ...chartLabelStyle }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 右卡片: 26年第二季度平均审核时长 */}
        <div className="bg-white border border-slate-100 rounded-xl p-6 flex flex-col justify-between ">
          <div className="flex items-start justify-between mb-4 border-b border-slate-100 pb-3">
            <span className="text-base font-black text-slate-900">Q2平均时长</span>
            <span className="text-3xl md:text-4xl font-black text-slate-900 font-mono tracking-tight">
              0:08:45
            </span>
          </div>
          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={effortData} margin={chartMargins.hiddenAxis}>
                <XAxis dataKey="month" tick={chartAxisTick} axisLine={{ stroke: chartColors.ink }} tickLine={false} />
                <YAxis yAxisId="volume" hide domain={[0, 900]} />
                <YAxis yAxisId="duration" hide domain={[0, 11]} />
                <Bar
                  yAxisId="volume"
                  dataKey="volume"
                  fill={chartSeriesColors.secondary}
                  radius={chartBarRadius.standard}
                  barSize={chartBarSize.single}
                  isAnimationActive={false}
                  label={{ position: "top", ...chartLabelStyle }}
                />
                <Line
                  yAxisId="duration"
                  type="monotone"
                  dataKey="durationVal"
                  stroke={chartSeriesColors.trend}
                  strokeWidth={3}
                  isAnimationActive={false}
                  dot={{ r: 4, fill: chartSeriesColors.trend }}
                  label={({ x, y, index }) => (
                    <text x={x} y={y - 12} textAnchor="middle" {...chartLabelStyle}>
                      {effortData[index].duration}
                    </text>
                  )}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
