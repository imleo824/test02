import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { MemberRiskDirectPayout } from "./MemberRiskDirectPayout";
import { MemberRiskSmartDispatch } from "./MemberRiskSmartDispatch";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { SmartDispatchOrderStructure } from "./SmartDispatchOrderStructure";

export const SmartDispatchSection: React.FC = () => {
  return (
    <div id="section-smart-dispatch" className="space-y-8">
      {/* 3.3 智能派单 模块主标题 */}
      <div className="bg-slate-900 text-white rounded-xl py-3 px-5 ">
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">
          3.3 智能派单
        </h2>
      </div>

      {/* 3.3 核心价值、关键指标、当前状态与整体进度 */}
      <ModuleStatusCard
        coreValue="重构接单派单逻辑，推行人单匹配与智能打分，提效降本"
        metricLabel="转人工审核占比"
        currentStatus="50%"
        keyMetrics="<20%"
        progress="70%"
        estimatedTime="世界杯前"
      />

      {/* 订单结构与角色效能图表（4月 - 6月） */}
      <SmartDispatchOrderStructure />

      {/* 独立模块：审核漏斗 */}
      <div className="bg-white border border-slate-100 rounded-xl p-6 md:p-8 space-y-6 ">
        {/* 审核漏斗 标题 */}
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <span className="w-2.5 h-5 bg-blue-600 rounded-full"></span>
          <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900">
            审核漏斗
          </h4>
        </div>

        {/* 现状总结一句话 */}
        <SummaryBox className="mb-0">
          当前提款订单中 <span className="font-black text-blue-900 underline">50% 转入人工审核</span>，但最终违规实锤占比 <span className="font-black text-rose-900 underline">&lt;2.5%</span>，大量低风险常规单挤占审核资源，亟需提升系统直出与派单质效。
        </SummaryBox>

        {/* 2个优化点，一行2列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* 优化点一 */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 space-y-4 flex flex-col justify-between ">
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-emerald-200 pb-2.5">
                <span className="w-6 h-6 rounded-full bg-emerald-700 text-white font-black text-sm flex items-center justify-center shrink-0">1</span>
                <h5 className="text-sm md:text-base font-black tracking-tight text-slate-900">
                  优化点一：是否要转到人工？
                </h5>
              </div>
              <p className="text-sm text-slate-900 font-bold leading-relaxed">
                剩余 <span className="font-black text-emerald-900 underline">47.5% 的订单属于低风险常规订单</span>，构成了巨大的系统直接出单优化空间。
              </p>
            </div>
          
          </div>

          {/* 优化点二 */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 space-y-4 flex flex-col justify-between ">
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-blue-200 pb-2.5">
                <span className="w-6 h-6 rounded-full bg-blue-700 text-white font-black text-sm flex items-center justify-center shrink-0">2</span>
                <h5 className="text-sm md:text-base font-black tracking-tight text-slate-900">
                  优化点二：分配给谁的问题？
                </h5>
              </div>
              <p className="text-sm text-slate-900 font-bold leading-relaxed">
                确定转人工后，需解决<span className="font-black text-blue-900 underline">人与单精准匹配</span>问题，避免错派漏派，提升专家审单质效。
              </p>
            </div>
          
          </div>
        </div>

        {/* 审核漏斗示意图 */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 md:p-6 space-y-4 text-slate-900">
          <div className="max-w-2xl mx-auto space-y-4 text-slate-900 py-2">
            {/* 模块 1：提款订单（100%） */}
            <div className="bg-slate-100 border border-slate-100 rounded-lg p-3 text-center font-black text-slate-900 text-base">
              提款订单（100%）
            </div>

            {/* 指向系统审核 */}
            <div className="flex justify-center text-slate-900 font-black text-xl">
              ↓
            </div>

            {/* 模块 2：系统审核（100%） */}
            <div className="bg-slate-900 text-white border border-slate-900 rounded-lg p-3 text-center font-black text-base">
              系统审核（100%）
            </div>

            {/* 系统审核分流连线：左指向【通过 (放行)】45%，右指向【人工审核】55% */}
            <div className="grid grid-cols-2 text-center text-slate-900 font-black text-sm px-2">
              <span className="flex items-center justify-center gap-1">
                <span>↙</span>
                <span className="text-sm bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded text-emerald-900">45%</span>
              </span>
              <span className="flex items-center justify-center gap-1">
                <span className="text-sm bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded text-blue-900">55%</span>
                <span>↘</span>
              </span>
            </div>

            {/* 对齐层：左侧【通过 (放行)】与右侧【人工审核（～55%）】，增宽中间间距，并包含水平向左箭头 ← */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-start pt-1">
              {/* 左侧：模块 4：通过 (放行) */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[170px] bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-lg p-3 text-center font-black text-base ">
                  通过
                </div>
              </div>

              {/* 中间：人工审核指向通过放行的水平箭头 ← (标示 52.5%) */}
              <div className="flex flex-col items-center justify-center pt-1 text-slate-900 font-black">
                <span className="text-sm bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded text-emerald-900 mb-0.5">52.5%</span>
                <span className="text-xl leading-none">←</span>
              </div>

              {/* 右侧列：人工审核（～55%）以及正下方的拦截 (拒绝) */}
              <div className="flex flex-col items-center space-y-3">
                {/* 模块 3：人工审核（～55%） */}
                <div className="w-full max-w-[170px] bg-blue-50 border border-blue-200 rounded-lg p-3 text-center font-black text-blue-900 text-base ">
                  人工审核
                </div>

                {/* 人工审核向下指向【拦截 (拒绝)】(标示 2.5% 在箭头左侧，且箭头水平居中对齐) */}
                <div className="relative w-full flex items-center justify-center my-0.5 text-slate-900 font-black">
                  <span className="absolute right-[calc(50%+10px)] text-sm bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded text-rose-900 ">
                    2.5%
                  </span>
                  <span className="text-xl leading-none">↓</span>
                </div>

                {/* 模块 5：拦截 (拒绝) */}
                <div className="w-full max-w-[170px] bg-rose-50 text-rose-900 border border-rose-200 rounded-lg p-3 text-center font-black text-base ">
                  拦截
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 独立模块：单列上下布局（3.3.1 提升系统直接出单比例 与 3.3.2 升级人工派单模式） */}
      <div className="grid grid-cols-1 gap-6">
        {/* 3.3.1 系统直接出单比例 */}
        <MemberRiskDirectPayout />

        {/* 3.3.2 升级人工派单模式 */}
        <MemberRiskSmartDispatch />
      </div>
    </div>
  );
};
