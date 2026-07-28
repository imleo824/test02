import React from "react";
import { CoreActionHeader, SummaryBox, highlightNumbers } from "./utils";

export const MemberRiskSimplifyAudit: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* 3.2.4 简化人工审单过程 */}
      <div id="section-member-simplify-audit" className="space-y-8 bg-white border border-slate-100 rounded-xl p-6 md:p-8 ">
        {/* 头部标题 */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-2 mb-4"><CoreActionHeader title={<><span className="w-2 h-6 bg-blue-600 rounded-full shrink-0"></span>简化人工审单过程</>} /></div>

        {/* 现状 / 问题 / 解决方案 */}
        <div className="space-y-4">
          {/* 现状 */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm md:text-base">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              <span>现状</span>
            </div>
            <p className="text-sm text-slate-900 font-bold pl-2  leading-relaxed">
              审核人员需要在 <span className="font-bold text-slate-900 underline underline-offset-2">多个后台间、模块间、页面间来回切换</span>，收集整合信息，如注单、帐变、关联、红利等信息，且每个人都有自己的操作习惯，过程很难统一和监管。
            </p>
          </div>

          {/* 问题 */}
          <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 font-bold text-rose-900 text-sm md:text-base">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span>问题</span>
            </div>
            <div className="text-sm text-rose-900 space-y-2 pl-2  leading-relaxed">
              <p>
                <span className="font-bold text-slate-900">时间无效浪费：</span>在 <span className="font-bold underline decoration-rose-300">不同的菜单、不同站点、不同后台</span> 进行各种切换查询、记录、分析。
              </p>
              <p>
                <span className="font-bold text-slate-900">质量波动大：</span>由于涉及到的步骤很多，导致 <span className="font-bold underline decoration-rose-300">很难完全标准化</span>，每个人都有“自己的一套流程”。
              </p>
            </div>
          </div>

          {/* 解决方案 */}
          <SummaryBox>
            {highlightNumbers(
              "升级为“[[XT辅助+人工复核]]”模式。XT自动完成基础信息的收集与交叉比对，生成《[[云盾·智能FK深度分析报告]]》，审核人员仅需对[[高危异常点]]进行最终确认。",
            )}
          </SummaryBox>
        </div>
      </div>
    </div>
  );
};
