import React from "react";
import { BeforeAfter, CoreActionHeader, ExpectedRhythm, ModuleBlockHeader } from "./utils";
import { ArrowRight, ArrowDown } from "lucide-react";
import { ReportBadge, ReportPanel } from "../../ReportSections";

export const MemberRiskDirectPayout: React.FC = () => {
  return (
    <ReportPanel id="section-member-direct-payout" tone="soft" padding="sm" className="space-y-4 flex flex-col justify-between">
      {/* 头部标题：3.3.1 提升系统直接出单比例 */}
      <ModuleBlockHeader title="提升系统直接出单比例" right={<ReportBadge>风险分数驱动</ReportBadge>} />

      {/* 核心思路 / 升级前后对比 */}
      <BeforeAfter
        before="命中任意 1 个策略特征都转人工，极低风险订单给到了人工，造成资源浪费"
        after="风险分数 > xx 才会转人工"
      />

      {/* 风险分数驱动流程 */}
      <ReportPanel tone="soft" className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
            <span className="w-2 h-4 bg-slate-900 rounded-full"></span>
            风险分数模式
          </h4>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-2 relative">
          {/* Step 1 */}
          <div className="flex-1 bg-white border border-slate-100 rounded-lg p-3.5 shadow-sm flex flex-col relative z-10">
            <div className="flex items-center gap-2 mb-3 border-b border-slate-50 pb-2">
              <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black">1</div>
              <div className="text-sm font-black text-slate-900">参数设定</div>
            </div>
            <div className="text-xs md:text-xs text-slate-700 space-y-1.5 bg-slate-50 p-2.5 rounded border border-slate-100 font-bold flex-1">
              <div className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>每个策略分数</div>
              <div className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>每个标签分数</div>
              <div className="flex items-center gap-1.5"><span className="w-1 h-1 bg-slate-400 rounded-full"></span>转派人工分数</div>
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs font-black text-blue-900 bg-blue-50 px-2 py-1 rounded-full border border-blue-200">
                按VIP等级不同设置
              </span>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-6 z-0 text-slate-300">
             <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </div>
          <div className="md:hidden flex flex-col items-center justify-center -my-3 z-0 text-slate-300 relative">
             <div className="bg-slate-50 w-8 h-8 flex items-center justify-center relative z-20">
               <ArrowDown className="w-5 h-5" strokeWidth={3} />
             </div>
          </div>

          {/* Step 2 */}
          <div className="flex-1 bg-white border border-slate-100 rounded-lg p-3.5 shadow-sm flex flex-col relative z-10">
            <div className="flex items-center gap-2 mb-3 border-b border-slate-50 pb-2">
              <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black">2</div>
              <div className="text-sm font-black text-slate-900">分数计算</div>
            </div>
            <div className="flex-1 flex items-center justify-center text-xs md:text-xs font-bold text-amber-900 bg-amber-50/50 p-3 rounded border border-amber-100 text-center leading-relaxed">
              玩家提款，系统基于策略、标签自动实时计算风险分数
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-6 z-0 text-slate-300">
             <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </div>
          <div className="md:hidden flex flex-col items-center justify-center -my-3 z-0 text-slate-300 relative">
             <div className="bg-slate-50 w-8 h-8 flex items-center justify-center relative z-20">
               <ArrowDown className="w-5 h-5" strokeWidth={3} />
             </div>
          </div>

          {/* Step 3 */}
          <div className="flex-1 bg-white border border-slate-100 rounded-lg p-3.5 shadow-sm flex flex-col relative z-10">
            <div className="flex items-center gap-2 mb-3 border-b border-slate-50 pb-2">
              <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black">3</div>
              <div className="text-sm font-black text-slate-900">系统审核</div>
            </div>
            <div className="flex-1 text-xs md:text-xs text-slate-900 space-y-2 bg-slate-50 p-2 rounded border border-slate-100 font-bold flex flex-col justify-center">
              <div className="flex items-center justify-between bg-white px-2 py-2 rounded border border-rose-100 shadow-sm">
                <span className="font-bold text-slate-600">大于分值</span>
                <span className="text-rose-600 font-black flex items-center gap-1">转人工 <ArrowRight className="w-3 h-3" strokeWidth={3} /></span>
              </div>
              <div className="flex items-center justify-between bg-white px-2 py-2 rounded border border-emerald-100 shadow-sm">
                <span className="font-bold text-slate-600">低于分值</span>
                <span className="text-emerald-600 font-black flex items-center gap-1">系统出 <ArrowRight className="w-3 h-3" strokeWidth={3} /></span>
              </div>
            </div>
          </div>
        </div>
      </ReportPanel>

            <ExpectedRhythm
        items={[
          { month: "8月", desc: "A系 2个站点" },
          { month: "9月", desc: "A系 8个站点" },
          { month: "10月", desc: "A系 全部站点" },
          { month: "11月", desc: "B系 全部站点" },
          { month: "12月", desc: "全量平稳运行" },
        ]}
      />
    </ReportPanel>
  );
};
