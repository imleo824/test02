import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { auditVolumeData } from './data';
import { highlightNumbers, SummaryBox } from './utils';
import {
  chartAxisTick,
  chartBarGap,
  chartBarRadius,
  chartBarSize,
  chartColors,
  chartLegendStyle,
  chartMargins,
  chartSeriesColors,
} from './chartStyles';

interface AuditVolumeStatsProps {
  totalInterceptAmount?: number;
  totalNewUserAdjustAmount?: number;
  totalActivityInterceptAmount?: number;
}

const AuditVolumeStats: React.FC<AuditVolumeStatsProps> = ({
  totalInterceptAmount = 0,
  totalNewUserAdjustAmount = 0,
  totalActivityInterceptAmount = 0,
}) => {
  const totalAudit = auditVolumeData.reduce((sum, item) => sum + item.total, 0);
  const totalSystem = auditVolumeData.reduce((sum, item) => sum + item.system, 0);
  const totalManual = auditVolumeData.reduce((sum, item) => sum + item.manual, 0);
  const avgSystemPct = (totalSystem / totalAudit) * 100;
  const avgManualPct = (totalManual / totalAudit) * 100;
  
  const dailyAvg = totalAudit / auditVolumeData.length;
  const dailySystemAvg = totalSystem / auditVolumeData.length;
  const dailyManualAvg = totalManual / auditVolumeData.length;

  const headcount = 409;
  const sjbEfficiency = 28.8; // (Tickets / Hour / Person)
  const dailyEfficiency = 12.5; // (Tickets / Hour / Person)
  const efficiencyGrowth = ((sjbEfficiency - dailyEfficiency) / dailyEfficiency) * 100;

  return (
    <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 space-y-6 ">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900 flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0" />
            审核单量与拦截汇总 <span className="text-slate-900 font-black text-base">(只统计SJB期间)</span>
          </h4>
        </div>
      </div>

      <SummaryBox>
        {highlightNumbers(
          `SJB期间日均单量达 [[blue:42,546]]，较日常环比大幅增长 [[green:+165%]]；其中 [[系统自动审核]] 占比 [[blue:80.08%]]。在 [[blue:${headcount} 名]] 审核人员的协作下，通过[[工具赋能]]与[[流程优化]]，人均审核效能从日常的 [[blue:${dailyEfficiency} 单/时]] 提升至 [[green:${sjbEfficiency} 单/时]]（涨幅 [[green:+${efficiencyGrowth.toFixed(1)}%]]）。`,
        )}
      </SummaryBox>

      {/* 拦截汇总指标 (Primary Indicators) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5  relative overflow-hidden">
          <div className="flex flex-col h-full">
            <span className="text-sm font-black text-slate-900 uppercase tracking-wide mb-1.5">总拦截金额 (SJB)</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-rose-900 font-mono tabular-nums tracking-tight">
                {totalInterceptAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5  relative overflow-hidden">
          <div className="flex flex-col h-full">
            <span className="text-sm font-black text-slate-900 uppercase tracking-wide mb-1.5">新客拦截金额</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-rose-900 font-mono tabular-nums tracking-tight">
                {totalNewUserAdjustAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5  relative overflow-hidden">
          <div className="flex flex-col h-full">
            <span className="text-sm font-black text-slate-900 uppercase tracking-wide mb-1.5">体育拦截金额</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-rose-900 font-mono tabular-nums tracking-tight">
                {totalActivityInterceptAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 汇总指标 (Audit Volume Metrics) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 总审核量 */}
        <div className="bg-white border border-slate-100 rounded-xl p-4 ">
          <div className="flex flex-col h-full">
            <span className="text-sm font-black text-slate-900 uppercase tracking-wider mb-2">总审核单量</span>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-2xl font-black text-slate-900 tabular-nums">
                {totalAudit.toLocaleString()}
              </span>
              <span className="text-sm font-black text-slate-900">单</span>
            </div>
            <div className="mt-auto pt-2.5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-black text-slate-900">日均</span>
              <span className="text-sm font-black text-slate-900 tabular-nums">
                {dailyAvg.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>
        </div>

        {/* 系统自动审核 */}
        <div className="bg-white border border-slate-100 rounded-xl p-4 ">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-black text-slate-900 uppercase tracking-wider">系统审核</span>
              <span className="text-sm font-black px-2 py-0.5 rounded-md bg-blue-50 text-blue-900 border border-blue-200">
                {avgSystemPct.toFixed(1)}%
              </span>
            </div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-2xl font-black text-slate-900 tabular-nums">
                {totalSystem.toLocaleString()}
              </span>
              <span className="text-sm font-black text-slate-900">单</span>
            </div>
            <div className="mt-auto pt-2.5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-black text-slate-900">日均</span>
              <span className="text-sm font-black text-blue-900 tabular-nums">
                {dailySystemAvg.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>
        </div>

        {/* 人工审核量 */}
        <div className="bg-white border border-slate-100 rounded-xl p-4 ">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-black text-slate-900 uppercase tracking-wider">人工审核</span>
              <span className="text-sm font-black px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                {avgManualPct.toFixed(1)}%
              </span>
            </div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-2xl font-black text-slate-900 tabular-nums">
                {totalManual.toLocaleString()}
              </span>
              <span className="text-sm font-black text-slate-900">单</span>
            </div>
            <div className="mt-auto pt-2.5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-black text-slate-900">日均</span>
              <span className="text-sm font-black text-amber-900 tabular-nums">
                {dailyManualAvg.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>
        </div>

        {/* 人均效能 */}
        <div className="bg-white border border-slate-100 rounded-xl p-4 ">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-black text-slate-900 uppercase tracking-wider">人均效能</span>
              <span className="text-sm font-black px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">
                +{efficiencyGrowth.toFixed(0)}%
              </span>
            </div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-2xl font-black text-slate-900 tabular-nums">
                {sjbEfficiency.toFixed(1)}
              </span>
              <span className="text-sm font-black text-slate-900">单/时</span>
            </div>
            <div className="mt-auto pt-2.5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-black text-slate-900">日常水平</span>
              <span className="text-sm font-black text-emerald-900 tabular-nums">
                {dailyEfficiency.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 图表展示 */}
      <div className="bg-white border border-slate-100 rounded-2xl p-5 h-[420px] ">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={auditVolumeData}
            margin={chartMargins.compact}
            barGap={chartBarGap.stacked}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={chartColors.grid} />
            <XAxis 
              dataKey="date" 
              axisLine={{ stroke: chartColors.ink, strokeWidth: 1.5 }}
              tickLine={false}
              tick={chartAxisTick}
              minTickGap={20}
              dy={10}
            />
            <YAxis 
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tick={chartAxisTick}
              tickFormatter={(val) => val >= 1000 ? `${(val/1000).toFixed(0)}k` : val}
              dx={-5}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ ...chartAxisTick, fill: chartSeriesColors.manual }}
              tickFormatter={(val) => `${val}%`}
              domain={[0, 40]}
              dx={5}
            />
            <Tooltip
              cursor={{ fill: '#f1f5f9' }}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white border border-slate-200 shadow-lg rounded-xl p-3.5 min-w-[220px]">
                      <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-slate-100">
                        <span className="text-sm font-black text-slate-900">{label}</span>
                        <div className="px-2 py-0.5 bg-slate-900 rounded text-xs font-black text-white">审核日志</div>
                      </div>
                      <div className="space-y-2.5">
                        {payload.map((entry: any, index: number) => {
                          const isPercent = entry.name === '人工比例';
                          return (
                            <div key={index} className="flex flex-col gap-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: entry.color || entry.stroke }} />
                                  <span className="text-sm font-black text-slate-900">{entry.name}</span>
                                </div>
                                <span className="text-sm font-black text-slate-900 tabular-nums">
                                  {isPercent ? `${entry.value.toFixed(2)}%` : entry.value.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-sm font-black text-slate-900">单日总计</span>
                          <span className="text-sm font-black text-slate-900 tabular-nums">{payload[0].payload.total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend 
              verticalAlign="top" 
              align="right"
              wrapperStyle={chartLegendStyle}
            />
            <Bar
              yAxisId="left"
              dataKey="system"
              name="系统单量"
              stackId="a"
              fill={chartSeriesColors.secondary}
              radius={chartBarRadius.square}
              barSize={chartBarSize.stacked}
              isAnimationActive={false}
            />
            <Bar
              yAxisId="left"
              dataKey="manual"
              name="人工单量"
              stackId="a"
              fill={chartSeriesColors.manual}
              radius={chartBarRadius.stackedTop}
              barSize={chartBarSize.stacked}
              isAnimationActive={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="manualPct"
              name="人工比例"
              stroke={chartSeriesColors.trend}
              strokeWidth={3}
              dot={{ r: 4, fill: '#fff', stroke: chartSeriesColors.trend, strokeWidth: 2 }}
              activeDot={{ r: 6, fill: chartSeriesColors.trend, stroke: '#fff', strokeWidth: 2 }}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AuditVolumeStats;
