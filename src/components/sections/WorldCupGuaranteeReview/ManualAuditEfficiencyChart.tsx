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

// 4, 5, 6月 人工审核人均效率数据 (单/小时)
// 4月/5月按 30天 * 9小时 = 270小时/月 换算；6月按 30天 * 11小时 = 330小时/月 换算
// 全归总部假设：假设取消外包，全量人工审核单量（总部+外包）由总部人员承接
const efficiencyData = [
  {
    month: "4月",
    总部人员效率: 24.0,
    外包人员效率: 14.6,
    全归总部效率: 31.0,
    总部标签: "24.0 单/小时",
    外包标签: "14.6 单/小时",
    全归总部标签: "31.0 单/小时",
    总部月审单量: "6,474 单/月",
    外包月审单量: "3,943 单/月",
    全归总部月审单量: "8,374 单/月",
  },
  {
    month: "5月",
    总部人员效率: 22.5,
    外包人员效率: 14.0,
    全归总部效率: 29.2,
    总部标签: "22.5 单/小时",
    外包标签: "14.0 单/小时",
    全归总部标签: "29.2 单/小时",
    总部月审单量: "6,079 单/月",
    外包月审单量: "3,769 单/月",
    全归总部月审单量: "7,895 单/月",
  },
  {
    month: "6月",
    总部人员效率: 33.4,
    外包人员效率: 10.8,
    全归总部效率: 38.6,
    总部标签: "33.4 单/小时",
    外包标签: "10.8 单/小时",
    全归总部标签: "38.6 单/小时",
    总部月审单量: "11,020 单/月",
    外包月审单量: "3,559 单/月",
    全归总部月审单量: "12,735 单/月",
  },
];

export const ManualAuditEfficiencyChart: React.FC = () => {
  return (
    <div className="bg-white border border-slate-300 rounded-xl p-6 space-y-4 shadow-sm">
      {/* 头部标题 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-5 bg-slate-900 rounded-full"></span>
          <h3 className="text-lg font-black text-slate-900">
            人均效能
          </h3>
        </div>
        <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
          换算标准：30天/月（4-5月按 9小时/天，6月按 11小时/天）
        </span>
      </div>

      {/* 核心结论与逻辑总结 */}
      <SummaryBox className="mb-0 my-2" hideIcon={false}>
        <div className="space-y-2 text-slate-900 font-bold leading-relaxed">
          <div>
            {highlightNumbers(
              "按正常标准审核单个订单需 [[7-8分钟]]（人均约 [[8单/小时]]），当前实际人效已处于 [[极高超负荷]] 状态，需持续加班并对订单分级快速判断（低危加快、高危精审）。当全面取消外包由总部承接，人均需求将高达 [[30+单/小时]]，几乎无法兼顾质量与时效。",
            )}
          </div>
          <div className="pt-2 border-t border-blue-200/80">
            <div className="text-sm font-black text-blue-950 mb-1.5 flex items-center gap-1.5">
              <span>兼顾质量与时效的 3 个解法：</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs font-bold text-slate-900">
              <div className="bg-white/80 p-2.5 rounded border border-blue-200">
                <span className="font-black text-blue-900 block mb-0.5">
                  1. 系统降低审核比例 <span className="text-xs font-bold text-slate-900">（3.1、3.2、3.3 都在解决此问题）</span>
                </span>
                <span>通过系统提升自动审核能力，大幅降低人工审核单量比例（最核心解法）</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded border border-blue-200">
                <span className="font-black text-blue-900 block mb-0.5">2. 流程精简与线上化</span>
                <span>砍掉不必要的繁琐流程，全面推动审核流程线上化与规范化</span>
              </div>
              <div className="bg-white/80 p-2.5 rounded border border-blue-200">
                <span className="font-black text-blue-900 block mb-0.5">3. 强化系统工具支持</span>
                <span>提供高效的智能化系统工具，辅助人员快速判研与精准决策</span>
              </div>
            </div>
          </div>
        </div>
      </SummaryBox>

      {/* 柱状图图表 */}
      <div className="h-[400px] w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={efficiencyData}
            barSize={26}
            barGap={6}
            margin={{ top: 30, right: 35, left: 15, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="month"
              stroke="#0f172a"
              tick={{ fill: "#0f172a", fontWeight: 800, fontSize: 14 }}
            />

            {/* 左Y轴：人均审核效率 (单/小时) */}
            <YAxis
              stroke="#0f172a"
              tick={{ fill: "#0f172a", fontWeight: 700 }}
              tickFormatter={(val) => `${val}单`}
              domain={[0, 50]}
              ticks={[0, 10, 20, 30, 40, 50]}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                color: "#0f172a",
                borderRadius: "4px",
                border: "1px solid #d7dee8",
                fontWeight: "bold",
              }}
              itemStyle={{ color: "#0f172a" }}
              formatter={(value: any, name: any, item: any) => {
                const payload = item?.payload;
                let monthly = "";
                if (name === "总部人均效率") monthly = payload?.总部月审单量;
                else if (name === "外包人均效率") monthly = payload?.外包月审单量;
                else if (name === "全归总部假设人均效率") monthly = payload?.全归总部月审单量;
                return [`${value} 单/小时 (${monthly})`, name];
              }}
            />

            <Legend
              wrapperStyle={{
                fontWeight: "bold",
                color: "#0f172a",
                paddingTop: "10px",
              }}
            />

            {/* 柱状图：总部人员人均效率 */}
            <Bar
              dataKey="总部人员效率"
              fill="#0f172a"
              name="总部人均效率"
              radius={[4, 4, 0, 0]}
              isAnimationActive={false}
            >
              <LabelList
                dataKey="总部标签"
                position="top"
                style={{ fill: "#0f172a", fontWeight: 800, fontSize: 11 }}
              />
            </Bar>

            {/* 柱状图：外包人员人均效率 */}
            <Bar
              dataKey="外包人员效率"
              fill="#1d4e89"
              name="外包人均效率"
              radius={[4, 4, 0, 0]}
              isAnimationActive={false}
            >
              <LabelList
                dataKey="外包标签"
                position="top"
                style={{ fill: "#0f172a", fontWeight: 800, fontSize: 11 }}
              />
            </Bar>

            {/* 柱状图：全归总部假设人均效率 */}
            <Bar
              dataKey="全归总部效率"
              fill="#059669"
              name="全归总部假设人均效率"
              radius={[4, 4, 0, 0]}
              isAnimationActive={false}
            >
              <LabelList
                dataKey="全归总部标签"
                position="top"
                style={{ fill: "#0f172a", fontWeight: 800, fontSize: 11 }}
              />
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
