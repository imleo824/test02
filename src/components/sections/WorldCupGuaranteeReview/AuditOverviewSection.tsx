import React from "react";
import { AuditOverviewAmountAndEffort } from "./AuditOverviewAmountAndEffort";
import { AuditOverviewInterceptionType } from "./AuditOverviewInterceptionType";
import { AuditOverviewAgentInterception } from "./AuditOverviewAgentInterception";
import { AuditOverviewSportsInterception } from "./AuditOverviewSportsInterception";
import { AuditOverviewStudioInterception } from "./AuditOverviewStudioInterception";
import { AuditOverviewHighVipDetail } from "./AuditOverviewHighVipDetail";
import { ChapterTitle } from "../../ReportSections";

export const AuditOverviewSection: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* 2.1 风控数据 */}
      <div className="space-y-8">
        {/* 2.1 风控数据 主模块卡片标题 */}
        <ChapterTitle>2.1 风控数据</ChapterTitle>

        {/* 2.1.1 拦截金额时效 */}
        <AuditOverviewAmountAndEffort />

        {/* 2.1.2 拦截金额类型占比 */}
        <AuditOverviewInterceptionType />

        {/* 2.1.3 代理拦截数据 */}
        <AuditOverviewAgentInterception />

        {/* 2.1.4 体育拦截数据 */}
        <AuditOverviewSportsInterception />

        {/* 2.1.5 工作室拦截明细 */}
        <AuditOverviewStudioInterception />

        {/* 2.1.6 高V处理明细 */}
        <AuditOverviewHighVipDetail />
      </div>
    </div>
  );
};
