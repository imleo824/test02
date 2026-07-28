import React from "react";
import { AuditOverviewAmountAndEffort } from "./AuditOverviewAmountAndEffort";
import { AuditOverviewInterceptionType } from "./AuditOverviewInterceptionType";
import { AuditOverviewAgentInterception } from "./AuditOverviewAgentInterception";
import { AuditOverviewSportsInterception } from "./AuditOverviewSportsInterception";
import { AuditOverviewStudioInterception } from "./AuditOverviewStudioInterception";
import { AuditOverviewHighVipDetail } from "./AuditOverviewHighVipDetail";
import { SummaryBox, highlightNumbers } from "./utils";

export const AuditOverviewSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="space-y-12">
      {/* 2.1 风控数据 */}
      <div className="space-y-8">
        {/* 2.1 风控数据 主模块卡片标题 */}
        <div className="bg-slate-900 text-white rounded-xl py-3 px-5 ">
          <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">
            2.1 风控数据
          </h2>
        </div> 

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
