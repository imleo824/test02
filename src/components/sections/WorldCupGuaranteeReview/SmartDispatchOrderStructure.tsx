import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { SummaryBox, highlightNumbers } from "./utils";
import { ReportPanel, ReportPanelHeader } from "../../ReportSections";
import {
  chartAxisTick,
  chartColors,
  chartLabelStyle,
  chartBarRadius,
  chartBarSize,
  chartBarGap,
  chartLegendStyle,
  chartMargins,
  chartSeriesColors,
  chartTooltipItemStyle,
  chartTooltipStyle,
} from "./chartStyles";

// 4, 5, 6月 角色订单结构与审核质量数据（根据最新数据更新）
const auditStructureData = [
  {
    month: "4月",
    系统单量: 2299427,
    系统占比: 49.9,
    系统标签: "229.9万 (49.9%)",
    总部单量: 1787020,
    总部占比: 38.8,
    总部标签: "178.7万 (38.8%)",
    外包单量: 524514,
    外包占比: 11.4,
    外包标签: "52.5万 (11.4%)",
    系统质量: 0.12,
    总部质量: 0.72,
    外包质量: 1.82,
  },
  {
    month: "5月",
    系统单量: 2545059,
    系统占比: 53.9,
    系统标签: "254.5万 (53.9%)",
    总部单量: 1677872,
    总部占比: 35.5,
    总部标签: "167.8万 (35.5%)",
    外包单量: 501346,
    外包占比: 10.6,
    外包标签: "50.1万 (10.6%)",
    系统质量: 0.08,
    总部质量: 0.74,
    外包质量: 1.89,
  },
  {
    month: "6月",
    系统单量: 2803462,
    系统占比: 44.4,
    系统标签: "280.3万 (44.4%)",
    总部单量: 3041486,
    总部占比: 48.1,
    总部标签: "304.1万 (48.1%)",
    外包单量: 473317,
    外包占比: 7.5,
    外包标签: "47.3万 (7.5%)",
    系统质量: 0.11,
    总部质量: 0.69,
    外包质量: 1.92,
  },
];

const renderAuditStructureLabel = (offsetY = 24) => ({ x, y, width, value }: any) => {
  if (typeof x !== "number" || typeof y !== "number" || typeof width !== "number" || !value) {
    return null;
  }

  const text = String(value);
  const match = text.match(/^(.+?)\s*\((.+)\)$/);
  const amount = match?.[1] ?? text;
  const ratio = match?.[2] ?? "";
  const centerX = x + width / 2;

  return (
    <text
      x={centerX}
      y={y - offsetY}
      textAnchor="middle"
      fill={chartColors.ink}
      fontSize={14}
      fontWeight={900}
      paintOrder="stroke"
      stroke="#ffffff"
      strokeWidth={3}
      strokeLinejoin="round"
    >
      <tspan x={centerX}>{amount}</tspan>
      {ratio ? (
        <tspan x={centerX} dy={15}>
          {ratio}
        </tspan>
      ) : null}
    </text>
  );
};

export const SmartDispatchOrderStructure: React.FC = () => {
  return (
    <ReportPanel className="space-y-4">
      {/* 头部标题 */}
      <ReportPanelHeader title="订单结构" />

      {/* 优化总结 */}
      <SummaryBox className="mb-2">
        <div className="space-y-2 text-slate-900 font-bold text-sm leading-relaxed">
          <p>
            {highlightNumbers(
              "系统直出与总部承接为主力，外包审核占比持续下调（6月压降至 [[7.5%]]），整体审核质量与效能显著优化。",
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
            <div className="bg-white border border-blue-200 rounded-lg p-3 space-y-1">
              <span className="font-black text-blue-900 block text-xs">一、系统自动审核</span>
              <p className="text-slate-900">
                {highlightNumbers("单量从4月 [[229.9万]] 提升至6月 [[280.3万]]，差错率稳定在 [[0.08%]]~[[0.12%]] 的极低水平。")}
              </p>
            </div>
            <div className="bg-white border border-emerald-200 rounded-lg p-3 space-y-1">
              <span className="font-black text-emerald-900 block text-xs">二、外包规模压缩</span>
              <p className="text-slate-900">
                {highlightNumbers("外包占比由 [[11.4%]] 逐月下调至 [[7.5%]]（[[47.3万]]单），有效压降高差错率（[[1.82%]]~[[1.92%]]）业务风险。")}
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-1">
              <span className="font-black text-slate-900 block text-xs">三、总部承接复杂单</span>
              <p className="text-slate-900">
                {highlightNumbers("6月承接 [[304.1万]] 单（占比 [[48.1%]]），差错率稳定在 [[0.69%]]，精准兜底高风险与复杂审核。")}
              </p>
            </div>
          </div>
        </div>
      </SummaryBox>

      {/* 柱状图与折线图双轴组合图表 */}
      <div className="h-[420px] w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={auditStructureData} barSize={chartBarSize.grouped} barGap={16} margin={chartMargins.standard}>
            <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
            <XAxis dataKey="month" stroke={chartColors.ink} tick={chartAxisTick} />
            
            {/* 左Y轴：审核单量 */}
            <YAxis 
              yAxisId="left" 
              stroke={chartColors.ink}
              tick={chartAxisTick}
              tickFormatter={(val) => `${(val / 10000).toFixed(0)}万`}
              domain={[0, 6000000]}
              ticks={[0, 1000000, 2000000, 3000000]}
            />
            
            {/* 右Y轴：审核质量（质检单量/总审核量 %） */}
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              stroke={chartColors.ink}
              domain={[-3.5, 2.2]} 
              ticks={[0, 0.5, 1.0, 1.5, 2.0]}
              tick={chartAxisTick}
              tickFormatter={(val) => `${val}%`}
            />

            <Tooltip 
              contentStyle={chartTooltipStyle}
              itemStyle={chartTooltipItemStyle}
              formatter={(value: any, name: any, item: any) => {
                if (name.includes("质量")) {
                  return [`${value}%`, name];
                }
                const payload = item?.payload;
                if (name === "系统审核单量") {
                  return [`${Number(value).toLocaleString()} 单 (${payload.系统占比}%)`, name];
                }
                if (name === "总部审核单量") {
                  return [`${Number(value).toLocaleString()} 单 (${payload.总部占比}%)`, name];
                }
                if (name === "外包审核单量") {
                  return [`${Number(value).toLocaleString()} 单 (${payload.外包占比}%)`, name];
                }
                return [value, name];
              }}
            />

            <Legend wrapperStyle={chartLegendStyle} />

            {/* 柱状图：各角色单量，柱顶标注【单量+占比】 */}
            <Bar yAxisId="left" dataKey="系统单量" fill={chartSeriesColors.primary} name="系统审核单量" radius={chartBarRadius.standard} isAnimationActive={false}>
              <LabelList 
                dataKey="系统标签" 
                content={renderAuditStructureLabel(24)}
              />
            </Bar>
            <Bar yAxisId="left" dataKey="总部单量" fill={chartSeriesColors.positive} name="总部审核单量" radius={chartBarRadius.standard} isAnimationActive={false}>
              <LabelList 
                dataKey="总部标签" 
                content={renderAuditStructureLabel(-24)}
              />
            </Bar>
            <Bar yAxisId="left" dataKey="外包单量" fill={chartSeriesColors.secondary} name="外包审核单量" radius={chartBarRadius.standard} isAnimationActive={false}>
              <LabelList 
                dataKey="外包标签" 
                content={renderAuditStructureLabel(24)}
              />
            </Bar>

            {/* 折线图：各角色审核质量，折线及节点对齐各自的单量柱子 */}
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="系统质量" 
              stroke="transparent" 
              strokeWidth={0} 
              legendType="circle"
              name="系统质量" 
              dot={{ r: 5, fill: chartSeriesColors.primary, strokeWidth: 2, stroke: "#ffffff" }}
              isAnimationActive={false}
              transform="translate(-36, 0)"
            >
              <LabelList 
                dataKey="系统质量" 
                position="top" 
                dx={-36}
                fill={chartColors.ink}
                formatter={(val: any) => `${val}%`}
                style={chartLabelStyle}
              />
            </Line>
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="总部质量" 
              stroke="transparent" 
              strokeWidth={0} 
              legendType="circle"
              name="总部质量" 
              dot={{ r: 5, fill: chartSeriesColors.positive, strokeWidth: 2, stroke: "#ffffff" }}
              isAnimationActive={false}
              transform="translate(0, 0)"
            >
              <LabelList 
                dataKey="总部质量" 
                position="top" 
                dx={0}
                fill={chartColors.ink}
                formatter={(val: any) => `${val}%`}
                style={chartLabelStyle}
              />
            </Line>
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="外包质量" 
              stroke="transparent" 
              strokeWidth={0} 
              legendType="circle"
              name="外包质量" 
              dot={{ r: 5, fill: chartSeriesColors.secondary, strokeWidth: 2, stroke: "#ffffff" }}
              isAnimationActive={false}
              transform="translate(36, 0)"
            >
              <LabelList 
                dataKey="外包质量" 
                position="top" 
                dx={36}
                fill={chartColors.ink}
                formatter={(val: any) => `${val}%`}
                style={chartLabelStyle}
              />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </ReportPanel>
  );
};
