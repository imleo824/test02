import React from "react";
import { ChapterTitle } from "../../ReportSections";
import { SummaryBox, highlightNumbers } from "./utils";

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
    <div className="report-section-stack">
      <section className="report-chapter-block">
        <ChapterTitle>1.0 组织概览</ChapterTitle>
        <PersonnelDistribution />
      </section>

      <section className="report-chapter-block">
        <ChapterTitle>2.0 数据概览</ChapterTitle>
        <div className="report-chapter-content">
          <AuditOverviewSection />
          <InternalControlSection />
        </div>
      </section>

      <section className="report-chapter-block">
        <ChapterTitle>3.0 业务概览</ChapterTitle>
        <SummaryBox>
          {highlightNumbers(
            "以系统审核比例为破局点，先提升系统审核比例、减少人工负担，再提升人工审核效率与审核质量，最终通过审核结果与数据沉淀反哺系统，形成质量、时效、成本持续优化的闭环。"
          )}
        </SummaryBox>

        <div className="report-chapter-content">
          <ZZOverview />
          <FrontRiskControlSection />
          <SystemAuditSection />
          <SmartDispatchSection />
          <ManualAuditSection />
          <SpecialRiskControlSection />
        </div>
      </section>
    </div>
  );
};
export default WorldCupGuaranteeReview;
