import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportBadge, ReportPanel, ReportPanelHeader } from "../../ReportSections";
import {
  chartAxisTick,
  chartColors,
  getChartLabelClassName,
  getChartLabelStyle,
  chartBarRadius,
  chartBarSize,
  chartBarGap,
  chartLegendStyle,
  chartMargins,
  chartSeriesColors,
  chartTooltipItemStyle,
  chartTooltipStyle,
} from "./chartStyles";

// 4, 5, 6月 及汇总 系统审核 问题召回率、问题命中率数据
const systemMetricsData = [
  {
    month: "2026-04",
    问题召回率: 52.90,
    问题命中率: 11.19,
    问题召回率标签: "52.90%",
    问题命中率标签: "11.19%",
  },
  {
    month: "2026-05",
    问题召回率: 49.63,
    问题命中率: 12.82,
    问题召回率标签: "49.63%",
    问题命中率标签: "12.82%",
  },
  {
    month: "2026-06",
    问题召回率: 51.02,
    问题命中率: 10.73,
    问题召回率标签: "51.02%",
    问题命中率标签: "10.73%",
  },
  {
    month: "汇总",
    问题召回率: 51.25,
    问题命中率: 11.40,
    问题召回率标签: "51.25%",
    问题命中率标签: "11.40%",
  },
];
const recallValues = systemMetricsData.map((item) => item.问题召回率);
const hitValues = systemMetricsData.map((item) => item.问题命中率);

const renderSystemMetricLabel =
  (metricKey: "问题召回率" | "问题命中率", labelKey: "问题召回率标签" | "问题命中率标签") =>
  ({ x, y, width, payload }: any) => {
    const values = metricKey === "问题召回率" ? recallValues : hitValues;
    const numericValue = Number(payload[metricKey]);
    const isSummary = payload.month === "汇总";
    return (
      <text
        x={x + width / 2}
        y={y - 8}
        textAnchor="middle"
        className={isSummary ? "chart-label-key" : getChartLabelClassName(numericValue, values)}
        {...(isSummary ? getChartLabelStyle(numericValue, [numericValue]) : getChartLabelStyle(numericValue, values))}
      >
        {payload[labelKey]}
      </text>
    );
  };

export const SystemAuditMetricsChart: React.FC = () => {
  return (
    <ReportPanel className="space-y-5">
      {/* 头部标题与单位 */}
      <ReportPanelHeader
        title="系统审核指标"
        rightContent={<ReportBadge tone="slate">数据覆盖：2026年4月 - 6月</ReportBadge>}
      />

      {/* 总结说明 */}
      <SummaryBox className="mb-0 my-2" hideIcon={false}>
        <div className="space-y-3">
          <div className="text-slate-900 font-bold text-sm leading-relaxed">
            {highlightNumbers(
              "当前汇总问题召回率为[[51.25%]]，低于[[70.67%]]的最低要求；当前问题命中率为[[11.40%]]，高于[[6.75%]]的最低要求。后续先补召回，再在问题召回率不下降的前提下提升问题命中率。"
            )}
          </div>
          <div className="pt-2 border-t border-blue-200/80">
            <div className="text-sm font-black text-blue-950 mb-1.5 flex items-center gap-1.5">
              <span>后续优化的 3 个动作：</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs font-bold text-slate-900">
              <div className="bg-white/80 p-2.5 rounded border border-blue-200">
                <span className="font-black text-blue-900 block mb-0.5">1. 丰富风险特征</span>
                <span>让系统识别的问题订单更全。</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded border border-blue-200">
                <span className="font-black text-blue-900 block mb-0.5">2. 调整阈值</span>
                <span>减少低风险订单进入人工。</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded border border-blue-200">
                <span className="font-black text-blue-900 block mb-0.5">3. 审核结果回填</span>
                <span>用人工审核结果修正规则。</span>
              </div>
            </div>
          </div>
        </div>
      </SummaryBox>

      {/* 柱状图图表 */}
      <div className="h-[320px] w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={systemMetricsData}
            margin={chartMargins.compact}
            barGap={chartBarGap.grouped}
            barSize={chartBarSize.grouped}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
            <XAxis
              dataKey="month"
              stroke={chartColors.ink}
              tick={chartAxisTick}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              stroke={chartColors.ink}
              tick={chartAxisTick}
              tickFormatter={(val) => `${val}%`}
              domain={[0, 70]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
            />
            <Tooltip
              contentStyle={chartTooltipStyle}
              itemStyle={chartTooltipItemStyle}
              formatter={(value: any, name: any) => [`${value}%`, name]}
            />
            <Legend
              wrapperStyle={chartLegendStyle}
            />
            {/* 问题召回率 柱子 */}
            <Bar
              dataKey="问题召回率"
              fill={chartSeriesColors.primary}
              name="问题召回率"
              isAnimationActive={false}
              radius={chartBarRadius.standard}
            >
              <LabelList
                dataKey="问题召回率标签"
                position="top"
                content={renderSystemMetricLabel("问题召回率", "问题召回率标签")}
              />
            </Bar>
            {/* 问题命中率 柱子 */}
            <Bar
              dataKey="问题命中率"
              fill={chartSeriesColors.secondary}
              name="问题命中率"
              isAnimationActive={false}
              radius={chartBarRadius.standard}
            >
              <LabelList
                dataKey="问题命中率标签"
                position="top"
                content={renderSystemMetricLabel("问题命中率", "问题命中率标签")}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ReportPanel>
  );
};
