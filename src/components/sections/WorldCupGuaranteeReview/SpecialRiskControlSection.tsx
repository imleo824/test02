import React from "react";
import { AgentRiskControlSection } from "./AgentRiskControlSection";

export const SpecialRiskControlSection: React.FC = () => {
  return (
    <div id="section-special-risk-control" className="space-y-12">
      {/* 3.5 代理风控 */}
      <AgentRiskControlSection />
    </div>
  );
};
