import React from "react";
import { BeforeAfter, ExpectedRhythm, ModuleBlockHeader } from "./utils";
import { ArrowRight } from "lucide-react";
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
      <ReportPanel tone="soft" className="direct-payout-flow-panel space-y-4">
        <div className="direct-payout-flow-title">风险分数模式</div>

        <div className="direct-payout-flow-grid">
          {/* Step 1 */}
          <div className="direct-payout-step-card">
            <div className="direct-payout-step-title">
              <span>01</span>
              <strong>参数设定</strong>
            </div>
            <div className="direct-payout-step-list">
              <div className="flex items-center gap-1.5"><span className="w-1 h-1 bg-blue-600 rounded-full"></span>每个策略分数</div>
              <div className="flex items-center gap-1.5"><span className="w-1 h-1 bg-blue-600 rounded-full"></span>每个标签分数</div>
              <div className="flex items-center gap-1.5"><span className="w-1 h-1 bg-blue-600 rounded-full"></span>转派人工分数</div>
            </div>
            <div className="direct-payout-step-badge">按VIP等级不同设置</div>
          </div>

          <div className="direct-payout-arrow">
             <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </div>

          {/* Step 2 */}
          <div className="direct-payout-step-card">
            <div className="direct-payout-step-title">
              <span>02</span>
              <strong>分数计算</strong>
            </div>
            <div className="direct-payout-step-content">
              玩家提款，系统基于策略、标签自动实时计算风险分数
            </div>
          </div>

          <div className="direct-payout-arrow">
             <ArrowRight className="w-5 h-5" strokeWidth={3} />
          </div>

          {/* Step 3 */}
          <div className="direct-payout-step-card">
            <div className="direct-payout-step-title">
              <span>03</span>
              <strong>系统审核</strong>
            </div>
            <div className="direct-payout-rule-stack">
              <div>
                <span className="font-bold text-slate-900">大于分值</span>
                <span className="text-rose-600 font-black flex items-center gap-1">转人工 <ArrowRight className="w-3 h-3" strokeWidth={3} /></span>
              </div>
              <div>
                <span className="font-bold text-slate-900">低于分值</span>
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
