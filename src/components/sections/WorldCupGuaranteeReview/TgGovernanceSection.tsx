import React from "react";
import { ExpectedRhythm, CoreActionHeader } from "./utils";

export const TgGovernanceSection: React.FC = () => {
  const flows = [
    {
      id: "流程一",
      title: "风控扣款线上化",
      coreOneSentence: "构建“判定即执行”结构化扣款流，二审后台同步完成拒绝与扣款，消除资金划转窗口期与数据泄露隐患。",
    },
    {
      id: "流程二",
      title: "红利审核全线上化",
      coreOneSentence: "强制红利过后台风控线上审核，彻底取消 TG 审核群与 EXCEL 列表传输，解决数据外泄与无追溯问题。",
    },
    {
      id: "流程三",
      title: "风控复审线上化",
      coreOneSentence: "二审后台一键查看打分依据并完成复核判定，解决 TG 群留存敏感数据与人工繁琐黏贴问题。",
    },
    {
      id: "流程四",
      title: "上标解解锁线上化",
      coreOneSentence: "上线后台工单与标签审批系统，申请自动流转并触发解封，解决线下审批随意与耗时长问题。",
    },
  ];

  return (
    <div className="bg-[#f8fafc] border border-slate-100 rounded-xl p-5 space-y-4 flex flex-col justify-between h-full">
      <div className="space-y-3">
        {/* 顶部标题与标签 */}
        <div className="space-y-2 border-b border-slate-100 pb-3">
          <CoreActionHeader
            title={<>流程线上化 <span className="text-emerald-600 font-black">✓</span></>}
            desc="全面推动标准业务流从 TG 向管理后台迁移，实现过程可控、数据结构化与风险闭环，彻底剥离 TG 的业务操作属性。"
            summaryStyle={true}
          />

          <div className="space-y-2 pt-2 border-t border-slate-200">
            <div className="text-sm font-bold text-slate-900 flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5 shrink-0"></span>
              <p>
                <span className="font-black text-rose-950">第一类：不需要或可简化的群及流程</span>
                <br />
                <span className="text-rose-900 font-black">已取消/已简化：</span>如财务到账核实、证件认证信息、代理代存核实、质检案例对接等；
              </p>
            </div>
            <div className="text-sm font-bold text-slate-900 flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></span>
              <p>
                <span className="font-black text-blue-950">第二类：需存在转移到系统</span>
                <br />
                核心主业务流程，目前完成 <span className="text-blue-900 font-black underline">90%</span>；正在逐步切换中
              </p>
            </div>
          </div>
        </div>

        {/* 4个流程卡片（两行两列） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
          {flows.map((flow) => (
            <div
              key={flow.id}
              className="bg-white border border-slate-100 rounded-lg p-3 space-y-1.5 flex flex-col h-full shadow-sm"
            >
              <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                <span className="w-1.5 h-3 bg-blue-600 rounded-full"></span>
                <span className="font-black text-slate-900 text-sm flex items-center gap-1">
                  {flow.title} <span className="text-emerald-600 font-black">✓</span>
                </span>
              </div>
              <p className="text-sm text-slate-900 font-bold leading-relaxed pt-0.5">
                {flow.coreOneSentence}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ExpectedRhythm
        items={[
          { month: "8月", desc: "A系 2个站点" },
          { month: "9月", desc: "A系 8个站点" },
          { month: "10月", desc: "A系 全部站点" },
          { month: "11月", desc: "B系 全部站点" },
          { month: "12月", desc: "全量平稳运行" },
        ]}
      />
    </div>
  );
};
