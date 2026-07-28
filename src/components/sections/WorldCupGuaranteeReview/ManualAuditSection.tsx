import React from "react";
import { TgGovernanceSection } from "./TgGovernanceSection";
import { PerformanceReformSection } from "./PerformanceReformSection";
import { SystemToolsSection } from "./SystemToolsSection";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { ManualAuditEfficiencyChart } from "./ManualAuditEfficiencyChart";

export const ManualAuditSection: React.FC = () => {
  return (
    <div id="section-manual-audit" className="space-y-8">
      {/* 3.4 人工审核 模块主标题 */}
      <div className="bg-slate-900 text-white rounded-xl py-3 px-5 ">
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">
          3.4 人工审核
        </h2>
      </div>

      {/* 3.4 核心价值、关键指标、当前状态与整体进度 */}
      <ModuleStatusCard
        coreValue="解决长期依赖个人自觉性、小飞机群对接工作、绩效机制缺陷等，产生的违规操作、数据安全、影响效率等问题"
        metricLabel="流程线上化率"
        currentStatus="90%"
        keyMetrics="100%"
        progress="90%"
        estimatedTime="9月全部完成切换"
      />

      {/* 人均审核人均效能趋势 */}
      <ManualAuditEfficiencyChart />

      {/* 一行3列结构：3.4.1 流程线上化、3.4.2 升级考核机制、3.4.3 系统工具支持 */}
      <div className="grid grid-cols-1 gap-6 items-stretch">
        <TgGovernanceSection />
        <PerformanceReformSection />
        <SystemToolsSection />
      </div>
    </div>
  );
};

