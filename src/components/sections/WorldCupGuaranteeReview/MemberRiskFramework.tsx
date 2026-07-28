import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";

export const MemberRiskFramework: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "系统自动上标",
      desc: "系统全场景监控，触发异常与关联识别并进行前置预处理；",
      note: "备注：不需要实时计算，可以有一定延迟",
    },
    {
      num: "02",
      title: "提升系统直接出单比例",
      desc: "转到人工审核的订单，只有大约2.5%被实锤。提升拦截策略效果，让大部分订单由系统自动化处理，大幅降低对人工审核的依赖。",
    },
    {
      num: "03",
      title: "升级人工派单模式",
      desc: "建立提款订单-审核人员的匹配模型，将高风险的、专业领域的订单精准派发给高绩效、领域的专家，实现人力最优配置。",
    },
    {
      num: "04",
      title: "简化人工审单过程",
      desc: "由人工在后台多个菜单反复查询，升级为“系统直接给出风险报告”，人工只需要聚焦异常点，提升执行效率。",
    },
    {
      num: "05",
      title: "结果评估与反向优化",
      desc: "针对“系统未命中：人工已实锤”与“系统已命中：人工未实锤”的案例转化为建议。调整系统参数、增加特征维度等，实现策略迭代。",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 顶部3级漏斗/递进推演框 */}
      <SummaryBox>
        <div className="space-y-4 text-center py-2">
          <p className="text-xl md:text-2xl font-black text-slate-900">
            {highlightNumbers("实现[[系统替代人工]]的核心问题")}
          </p>
          <div className="text-slate-900 font-extrabold text-xl">↓</div>
          <p className="text-xl md:text-2xl font-black text-slate-900">
            {highlightNumbers("如何让[[系统精准识别套利作弊行为]]？")}
          </p>
          <div className="text-slate-900 font-extrabold text-xl">↓</div>
          <p className="text-base md:text-lg font-bold text-slate-900 leading-relaxed max-w-3xl mx-auto">
            拆解为 {highlightNumbers("[[5个核心环节]]")} 来实现系统精准识别套利作弊行为，并形成具备 {highlightNumbers("[[持续迭代进化]]")} 能力的闭环流程：
          </p>
        </div>
      </SummaryBox>

      {/* 5个卡片横向/平铺分布 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-100 rounded-xl p-4 flex flex-col justify-between  space-y-3"
          >
            <div className="space-y-2">
              <div className="text-base font-black text-slate-900 font-mono">
                {item.num}. {item.title}
              </div>
              <p className="text-sm text-slate-900 font-semibold leading-relaxed">
                {item.desc}
              </p>
            </div>
            {item.note && (
              <p className="text-xs text-blue-900 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200 font-mono font-bold">
                {item.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
