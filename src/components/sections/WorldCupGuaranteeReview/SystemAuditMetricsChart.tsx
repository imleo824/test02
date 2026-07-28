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

// 4, 5, 6月 及汇总 系统审核 召回率、准确率数据
const systemMetricsData = [
  {
    month: "2026-04",
    召回率: 52.90,
    准确率: 11.19,
    召回率标签: "52.90%",
    准确率标签: "11.19%",
  },
  {
    month: "2026-05",
    召回率: 49.63,
    准确率: 12.82,
    召回率标签: "49.63%",
    准确率标签: "12.82%",
  },
  {
    month: "2026-06",
    召回率: 51.02,
    准确率: 10.73,
    召回率标签: "51.02%",
    准确率标签: "10.73%",
  },
  {
    month: "汇总",
    召回率: 51.25,
    准确率: 11.40,
    召回率标签: "51.25%",
    准确率标签: "11.40%",
  },
];

export const SystemAuditMetricsChart: React.FC = () => {
  return (
    <div className="bg-white border border-slate-300 rounded-xl p-6 space-y-5 shadow-sm">
      {/* 头部标题与单位 */}
      <div className="flex items-center justify-between border-b border-slate-300 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-5 bg-slate-900 rounded-full"></span>
          <h3 className="text-lg font-black text-slate-900">
            系统审核指标
          </h3>
        </div>
        <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
          数据覆盖：2026年4月 - 6月
        </span>
      </div>

      {/* 总结说明 */}
      <SummaryBox className="mb-0 my-2" hideIcon={false}>
        <div className="space-y-3">
          <div className="text-slate-900 font-bold text-sm leading-relaxed">
            {highlightNumbers(
              "从风控业务特点，需保障召回率的前提下（有问题不能漏），持续提升准确率（减少人工审核量）；准确率由原来的 [[～2%]] 提升至现在的 [[～10%]]"
            )}
          </div>
          <div className="pt-2 border-t border-blue-200/80">
            <div className="text-sm font-black text-blue-950 mb-1.5 flex items-center gap-1.5">
              <span>持续提升准确率的 3 个手段：</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs font-bold text-slate-900">
              <div className="bg-white/80 p-2.5 rounded border border-blue-200">
                <span className="font-black text-blue-900 block mb-0.5">1. 丰富风险特征维度</span>
                <span>从单一规则向多层级组合判定升级，多维特征交叉验证，提高精准度。</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded border border-blue-200">
                <span className="font-black text-blue-900 block mb-0.5">2. 动态优化阈值模型</span>
                <span>结合大盘数据动态调整预警阈值，有效过滤低风险噪音，大幅降低误报率。</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded border border-blue-200">
                <span className="font-black text-blue-900 block mb-0.5">3. 审核数据闭环反哺</span>
                <span>将人工专家审核结果实时反馈至规则引擎，持续调优策略实现自适应进化。</span>
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
            margin={{ top: 25, right: 30, left: 10, bottom: 5 }}
            barGap={8}
            barSize={28}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
            <XAxis
              dataKey="month"
              stroke="#0f172a"
              tick={{ fill: "#0f172a", fontWeight: 900, fontSize: 13 }}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              stroke="#0f172a"
              tick={{ fill: "#0f172a", fontWeight: 800 }}
              tickFormatter={(val) => `${val}%`}
              domain={[0, 70]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                color: "#ffffff",
                borderRadius: "8px",
                border: "none",
                fontWeight: "bold",
              }}
              itemStyle={{ color: "#ffffff" }}
              formatter={(value: any, name: any) => [`${value}%`, name]}
            />
            <Legend
              wrapperStyle={{
                fontWeight: "900",
                color: "#0f172a",
                paddingTop: "10px",
              }}
            />
            {/* 召回率 柱子 */}
            <Bar
              dataKey="召回率"
              fill="#0f172a"
              name="系统召回率"
              isAnimationActive={false}
              radius={[4, 4, 0, 0]}
            >
              <LabelList
                dataKey="召回率标签"
                position="top"
                style={{ fill: "#0f172a", fontWeight: 900, fontSize: 12 }}
              />
            </Bar>
            {/* 准确率 柱子 */}
            <Bar
              dataKey="准确率"
              fill="#3b82f6"
              name="系统准确率"
              isAnimationActive={false}
              radius={[4, 4, 0, 0]}
            >
              <LabelList
                dataKey="准确率标签"
                position="top"
                style={{ fill: "#0f172a", fontWeight: 900, fontSize: 12 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
