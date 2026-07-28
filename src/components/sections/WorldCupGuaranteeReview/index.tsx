import React from "react";

import { ZZOverview } from "./ZZOverview";
import { PersonnelDistribution } from "./PersonnelDistribution";
import { AuditOverviewSection } from "./AuditOverviewSection";
import { InternalControlSection } from "./InternalControlSection";
import { FrontRiskControlSection } from "./FrontRiskControlSection";
import { SystemAuditSection } from "./SystemAuditSection";
import { SmartDispatchSection } from "./SmartDispatchSection";
import { ManualAuditSection } from "./ManualAuditSection";
import { SpecialRiskControlSection } from "./SpecialRiskControlSection";

export const WorldCupGuaranteeReview: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* 1.0 组织概览 模块主标题 */}
      <div className="bg-slate-900 text-white rounded-xl py-3 px-5 ">
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">
          1.0 组织概览
        </h2>
      </div>

      {/* 人员分布 */}
      <PersonnelDistribution />

      {/* 2.0 数据概览 模块主标题 */}
      <div className="bg-slate-900 text-white rounded-xl py-3 px-5 mt-8">
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">
          2.0 数据概览
        </h2>
      </div>

      {/* 2.1 风控数据 */}
      <AuditOverviewSection />

      {/* 2.2 内控数据 */}
      <InternalControlSection />

      {/* 3.0 业务概览 模块主标题 */}
      <div className="bg-slate-900 text-white rounded-xl py-3 px-5 mt-8">
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">
          3.0 业务概览
        </h2>
      </div>

      {/* ZZ概览 & 理想风控业务流程 (不带额外标题直接合并) */}
      <ZZOverview />

      {/* 3.1 风控前置 */}
      <FrontRiskControlSection />

      {/* 3.2 系统审核 */}
      <SystemAuditSection />

      {/* 3.3 智能派单 */}
      <SmartDispatchSection />

      {/* 3.4 人工审核 */}
      <ManualAuditSection />

      {/* 3.5 代理风控 */}
      <SpecialRiskControlSection />
    </div>
  );
};
export default WorldCupGuaranteeReview;
