import React from "react";
import { SystemToolsEffectiveness } from "./SystemToolsEffectiveness";
import { ModuleBlockHeader, ReportInfoGrid, SummaryBox, highlightNumbers } from "./utils";
import { ReportPanel } from "../../ReportSections";

export const SystemToolsSection: React.FC = () => {
  const tools = [
    {
      id: "工具一",
      name: "同局关联下注",
      desc: "自动调取同局/同房间/同赛事关联账号，捕捉对打与团伙套利。",
    },
    {
      id: "工具二",
      name: "优势赔率下注",
      desc: "计算高赔率或水位拉偏下注占比，量化打水客优势水位依赖度。",
    },
    {
      id: "工具三",
      name: "卡危险球下注",
      desc: "统计进球/红牌/点球前数秒下注比例，甄别卡信号时差偷跑玩家。",
    },
    {
      id: "工具四",
      name: "跨站关联关系",
      desc: "一键穿透集团多站点账号关联网络，排查跨站养号与同台对打。",
    },
  ];

  return (
    <ReportPanel tone="soft" padding="sm" className="space-y-4 flex flex-col justify-between h-full">
      <div className="space-y-3">
        {/* 顶部标题 */}
        <div className="space-y-2">
          <ModuleBlockHeader title="系统工具支持" />
          <SummaryBox className="mb-2 p-4 md:p-5">
            <p className="text-sm md:text-base font-bold leading-relaxed text-slate-900">
              {highlightNumbers("系统工具对[[重点风险特征]]识别效果显著，其中[[体育对压(跨AB系)]]问题召回率达 [[90%]]，[[卡进球点]]达 [[75%]]，[[体育打水]]达 [[68%]]，[[优势赔率]]达 [[58%]]。")}
            </p>
          </SummaryBox>
        </div>

        {/* 4大工具 */}
        <ReportInfoGrid
          title="工具清单"
          items={tools.map((tool) => ({ title: `${tool.id}：${tool.name}`, desc: tool.desc }))}
        />
      </div>

      {/* 柱状图与效果表现 */}
      <div className="pt-2">
        <SystemToolsEffectiveness />
      </div>
    </ReportPanel>
  );
};
