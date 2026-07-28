import React from "react";
import { Users } from "lucide-react";
import { SummaryBox, highlightNumbers } from "./utils";

export const PersonnelDistribution: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* 顶栏说明条 */}
      <SummaryBox>
        <div className="space-y-1.5 text-base md:text-lg font-black text-slate-900">
          <p>{highlightNumbers("1. [[远程已取消]]：全面取消远程工作制；")}</p>
          <p>{highlightNumbers("2. [[外包调整中]]：低质量且高风险，在8月进一步降低比例，直至完全取消；")}</p>
          <p>{highlightNumbers("3. [[场地调整中]]：各办公场地持续动态调整，接下来的核心重点向D转移；")}</p>
          <p>{highlightNumbers("4. [[低绩效人员]]：持续优化和调整考核机制，做到优胜劣汰。")}</p>
        </div>
      </SummaryBox>

      {/* 结构树及数字卡片区 */}
      <div className="bg-slate-50 rounded-2xl p-6 md:p-10 space-y-8 relative">
        {/* 第一层：核心人力 & 总人数 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-2xl mx-auto relative z-10">
          {/* Card 1: 核心人力 */}
          <div className="w-full md:w-80 bg-white border border-slate-200 rounded-xl p-6 text-center relative shadow-xs">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-sm font-black text-slate-900">核心人力</span>
              <Users className="w-4 h-4 text-slate-900" />
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl font-black text-slate-900 font-mono tracking-tight border-b border-slate-200 pb-0.5 px-3">
                368
              </span>
              <span className="text-sm font-black text-rose-900 font-mono bg-rose-50 px-1.5 py-0.5 rounded">
                -4
              </span>
            </div>
          </div>

          {/* Card 2: 总人数 */}
          <div className="w-full md:w-80 bg-white border border-slate-100 rounded-xl p-6 text-center relative ">
            <div className="mb-2">
              <span className="text-sm font-black text-slate-900">
                总人数 (含YC/WB)
              </span>
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl font-black text-slate-900 font-mono tracking-tight border-b border-slate-100 pb-0.5 px-3">
                484
              </span>
              <span className="text-sm font-black text-rose-900 font-mono bg-rose-50 px-1.5 py-0.5 rounded">
                -19
              </span>
            </div>
          </div>
        </div>

        {/* 树状连接线 (仅在中大屏幕显示) */}
        <div className="relative my-6 hidden md:block">
          {/* 垂直主干线 */}
          <div className="w-0.5 h-6 bg-slate-300 mx-auto" />

          {/* 水平分支线 */}
          <div className="w-[83.33%] mx-auto h-0.5 bg-slate-300 relative">
            {/* 6个下降触点 */}
            <div className="absolute top-0 left-[0%] -translate-x-1/2 w-0.5 h-6 bg-slate-300" />
            <div className="absolute top-0 left-[20%] -translate-x-1/2 w-0.5 h-6 bg-slate-300" />
            <div className="absolute top-0 left-[40%] -translate-x-1/2 w-0.5 h-6 bg-slate-300" />
            <div className="absolute top-0 left-[60%] -translate-x-1/2 w-0.5 h-6 bg-slate-300" />
            <div className="absolute top-0 left-[80%] -translate-x-1/2 w-0.5 h-6 bg-slate-300" />
            <div className="absolute top-0 left-[100%] -translate-x-1/2 w-0.5 h-6 bg-slate-300" />
          </div>
        </div>

        {/* 第二层：6个细分岗位卡片 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10 pt-2 md:pt-0">
          {[
            { label: "T", count: "3", change: "↓ -18", isNegative: true },
            { label: "D", count: "71", change: "↓ -5", isNegative: true },
            { label: "S", count: "239", change: "↑ +21", isPositive: true },
            { label: "K", count: "52", change: "↑ +2", isPositive: true },
            { label: "YC", count: "0", change: "↓ -5", isNegative: true },
            { label: "WB", count: "119", change: "↓ -12", isNegative: true },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white border border-slate-100 rounded-xl p-5 text-center flex flex-col items-center justify-center gap-2 "
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-black flex items-center justify-center border border-slate-400 font-mono">
                {item.label}
              </div>
              <div className="text-3xl font-black text-slate-900 font-mono tracking-tight">
                {item.count}
              </div>
              <div
                className={`text-sm font-black font-mono ${
                  item.isPositive
                    ? "text-emerald-900 bg-emerald-50 px-1.5 py-0.5 rounded"
                    : item.isNegative
                    ? "text-rose-900 bg-rose-50 px-1.5 py-0.5 rounded"
                    : "text-slate-900"
                }`}
              >
                {item.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
