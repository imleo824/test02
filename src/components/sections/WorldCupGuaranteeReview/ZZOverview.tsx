import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { Check } from "lucide-react";

interface WorkflowNode {
  step: string;
  title: string;
  stage?: string;
  metric: string;
  target?: string;
  value: string;
  status?: string;
}

const workflowNodes: WorkflowNode[] = [
  {
    step: "01",
    title: "风控前置",
    metric: "自动上标",
    target: "下注与触发阶段实现自动化预警与关联上标",
    value: "风险前置拦截，消除提款与资金转移窗口期",
  },
  {
    step: "02",
    title: "系统审核",
    metric: "系统审核: 45% → 80%",
    target: "无风险正常订单系统秒级直出，直出率达80%",
    value: "自动化研判替代人工初审，大幅降低常规单人力",
  },
  {
    step: "03",
    title: "智能派发",
    metric: "转人工率: 55% → 20%",
    target: "20%疑难单按风险等级与专员负荷精准派发",
    value: "高风险订单自动匹配专业专员，提升复核质效"
  },
  {
    step: "04",
    title: "人工审核",
    metric: "审单占比: 55% → 20%",
    target: "审单100%后台收敛，结合专业工具与新绩效机制",
    value: "彻底剥离TG风险，全留痕与积分计提优绩优酬"
  }
];

export const ZZOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* 主框图 - 左右结构 */}
      <div className="bg-slate-50 border border-slate-100 rounded-xl overflow-hidden flex flex-col space-y-px">
        {/* Row 1: 方向 */}
        <div className="flex flex-col md:flex-row bg-white">
          <div className="w-full md:w-28 shrink-0 bg-[#1e293b] text-white flex items-center justify-center font-bold text-lg tracking-widest py-4 md:py-0">
            方 向
          </div>
          <div className="flex-1 p-6 bg-[#f8fafc] flex flex-col items-center justify-center text-center gap-4">
            <div className="text-lg md:text-xl font-bold text-slate-900 leading-relaxed">
              围绕 “
              <span className="underline decoration-2 underline-offset-4 font-black">
                更低成本、更高效率、更高质量、更低风险
              </span>
              ” 的目标 <span className="font-black text-slate-900">重构FK体系</span>
            </div>
            <div className="w-full max-w-4xl bg-white  rounded-lg p-3.5 text-sm md:text-base text-slate-900 font-black text-center">
              对底层、数据、流程、人员等多维度升级，沉淀出“
              <span className="font-black underline decoration-2 underline-offset-2">
                一套成熟、稳定的体系
              </span>
              ”，才是公司真正的资产，以避免因为“
              <span className="font-black underline decoration-2 underline-offset-2">
                人
              </span>
              ”的不确定因素而影响；
            </div>
          </div>
        </div>

        {/* Row 2: 目标 */}
        <div className="flex flex-col md:flex-row bg-white">
          <div className="w-full md:w-28 shrink-0 bg-[#1e293b] text-white flex items-center justify-center font-bold text-lg tracking-widest py-4 md:py-0">
            目 标
          </div>
          <div className="flex-1 p-6 bg-[#f8fafc]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Goal Card 1 */}
              <div className="bg-white  rounded-xl p-5 flex flex-col items-center justify-between text-center min-h-[160px]">
                <span className="text-sm font-black text-slate-900">
                  系统替代大量人工出单
                </span>
                <span className="text-slate-900 font-black text-sm">↓</span>
                <span className="bg-[#1e293b] text-white text-sm font-black px-3 py-1 rounded">
                  成本降低
                </span>
                <span className="text-slate-900 font-black text-sm">↓</span>
                <span className="text-3xl md:text-4xl font-black text-slate-900 font-mono tracking-tight">
                  50%-70%
                </span>
              </div>

              {/* Goal Card 2 */}
              <div className="bg-white  rounded-xl p-5 flex flex-col items-center justify-between text-center min-h-[160px]">
                <span className="text-sm font-black text-slate-900">
                  系统秒出比例大幅提升
                </span>
                <span className="text-slate-900 font-black text-sm">↓</span>
                <span className="bg-[#1e293b] text-white text-sm font-black px-3 py-1 rounded">
                  效率提升
                </span>
                <span className="text-slate-900 font-black text-sm">↓</span>
                <span className="text-3xl md:text-4xl font-black text-slate-900 font-mono tracking-tight">
                  5倍-10倍
                </span>
              </div>

              {/* Goal Card 3 */}
              <div className="bg-white  rounded-xl p-5 flex flex-col items-center justify-between text-center min-h-[160px]">
                <span className="text-sm font-black text-slate-900">
                  系统稳定且可持续进化
                </span>
                <span className="text-slate-900 font-black text-sm">↓</span>
                <span className="bg-[#1e293b] text-white text-sm font-black px-3 py-1 rounded">
                  质量提升
                </span>
                <span className="text-slate-900 font-black text-sm">↓</span>
                <span className="text-3xl md:text-4xl font-black text-slate-900 font-mono tracking-tight">
                  1倍
                </span>
              </div>

              {/* Goal Card 4 */}
              <div className="bg-white  rounded-xl p-5 flex flex-col items-center justify-between text-center min-h-[160px]">
                <span className="text-sm font-black text-slate-900">
                  人少且只留下高绩效人员
                </span>
                <span className="text-slate-900 font-black text-sm">↓</span>
                <span className="bg-[#1e293b] text-white text-sm font-black px-3 py-1 rounded">
                  管理风险
                </span>
                <span className="text-slate-900 font-black text-sm">↓</span>
                <span className="text-3xl md:text-4xl font-black text-slate-900 font-mono tracking-tight">
                  降低
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: 路径 */}
        <div className="flex flex-col md:flex-row bg-white">
          <div className="w-full md:w-28 shrink-0 bg-[#1e293b] text-white flex items-center justify-center font-bold text-lg tracking-widest py-4 md:py-0">
            路 径
          </div>
          <div className="flex-1 p-6 bg-[#f8fafc] space-y-5">
            
            {/* 路径一句话总结 */}
            <SummaryBox className="mb-5">
              风控核心链路进行拆解，对每个节点进行全面升级优化
            </SummaryBox>

            {/* 理想风控作业流 4个阶段节点 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch relative">
              {workflowNodes.map((node) => (
                <div
                  key={node.step}
                  className="bg-white border border-slate-100 rounded-xl p-4 flex flex-col justify-between relative  space-y-3"
                >
                  <div className="space-y-3">
                    {/* 环节头部 */}
                    <div className="bg-slate-900 text-white font-black text-sm px-3 py-2 rounded-lg text-center">
                      {node.step}. {node.title}
                    </div>
                    {/* 阶段特征与核心指标 */}
                    <div className="bg-slate-100 rounded-lg p-2 text-center text-sm font-black text-slate-900">
                      {node.stage && <div className="text-slate-900 mb-0.5">{node.stage}</div>}
                      <div className="text-slate-900 text-sm font-black bg-blue-50 px-1.5 py-0.5 rounded inline-block">
                        {node.metric}
                      </div>
                    </div>

                    {/* 核心价值 */}
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5 space-y-1 text-sm">
                      <div className="font-black text-emerald-900 text-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-3 bg-emerald-600 rounded-full"></span>
                        <span>核心价值</span>
                      </div>
                      <p className="text-slate-900 font-bold leading-relaxed text-sm">
                        {node.value}
                      </p>
                    </div>
                  </div>

                  {/* 底部备注 */}
                  {node.status && (
                    <div className="pt-2 border-t border-dashed border-slate-100 text-center">
                      <span className="text-sm font-black text-slate-900 bg-slate-100 px-2 py-0.5 rounded inline-block">
                        {node.status}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 4: 进度 */}
        <div className="flex flex-col md:flex-row bg-white">
          <div className="w-full md:w-28 shrink-0 bg-[#1e293b] text-white flex items-center justify-center font-bold text-lg tracking-widest py-4 md:py-0">
            进 度
          </div>
          <div className="flex-1 p-6 bg-[#f8fafc] flex flex-col gap-6">
            {/* Timeline Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {/* Phase 1: 已完成 (灰色归档质感，字迹清晰) */}
              <div className="bg-slate-100 border border-slate-100 rounded-xl p-4 flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-sm font-black font-mono text-slate-900 font-bold border-b border-slate-100 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0"></span>
                    <span>2026.01 - 2026.05</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-200 text-slate-900 px-1.5 py-0.5 rounded text-sm font-sans font-black shrink-0 border border-slate-100">
                    <Check className="w-3 h-3 text-slate-900 font-bold stroke-[3]" />
                    已完成
                  </div>
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-sm font-black bg-slate-200 text-slate-900 border border-slate-100">
                    世界杯前
                  </span>
                </div>
                <p className="text-sm text-slate-900 font-bold leading-relaxed">
                  <span className="font-black text-slate-900">世界杯准备</span> 第一优先级；其他事宜先开发，世界杯后集中上线
                </p>
              </div>

              {/* Phase 2: 已完成 (灰色归档质感，字迹清晰) */}
              <div className="bg-slate-100 border border-slate-100 rounded-xl p-4 flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-sm font-black font-mono text-slate-900 font-bold border-b border-slate-100 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0"></span>
                    <span>2026.06 - 2026.07</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-200 text-slate-900 px-1.5 py-0.5 rounded text-sm font-sans font-black shrink-0 border border-slate-100">
                    <Check className="w-3 h-3 text-slate-900 font-bold stroke-[3]" />
                    已完成
                  </div>
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-sm font-black bg-slate-200 text-slate-900 border border-slate-100">
                    世界杯期
                  </span>
                </div>
                <p className="text-sm text-slate-900 font-bold leading-relaxed">
                  以 <span className="font-black text-slate-900">稳定保障</span> 为主，优化持续进行，赛后集中上线
                </p>
              </div>

              {/* Phase 3: 进行中 (高亮焦点) */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex flex-col gap-2.5 ">
                <div className="flex items-center justify-between text-sm font-black font-mono text-blue-900 border-b border-blue-200 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
                    <span>2026.07 - 2026.09</span>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-600 text-white px-2 py-0.5 rounded text-sm font-sans font-black shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                    进行中
                  </div>
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-sm font-black bg-blue-600 text-white">
                    实验期
                  </span>
                </div>
                <p className="text-sm text-slate-900 font-black leading-relaxed">
                  进一步<span className="font-black text-blue-900 underline decoration-blue-600 decoration-2 underline-offset-2">降低外包比例直至取消</span>；优化低效人员；开展系统大幅提升审核比例实验。
                </p>
              </div>

              {/* Phase 4: 待启动 */}
              <div className="bg-white border border-slate-100 rounded-xl p-4 flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-sm font-black font-mono text-slate-900 border-b border-slate-100 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></span>
                    <span>2026.09 - 2026.12</span>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-1.5 py-0.5 rounded text-sm font-sans font-black shrink-0">
                    待启动
                  </div>
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-sm font-black bg-slate-100 text-slate-900 border border-slate-100">
                    会员全推
                  </span>
                </div>
                <p className="text-sm text-slate-900 font-bold leading-relaxed">
                  <span className="font-black text-slate-900">会员端全链路</span>系统替代人实验与推进，大幅增加系统直接出单比例
                </p>
              </div>

              {/* Phase 5: 待启动 */}
              <div className="bg-white border border-slate-100 rounded-xl p-4 flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-sm font-black font-mono text-slate-900 border-b border-slate-100 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></span>
                    <span>2026.12 - 2027.03</span>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-1.5 py-0.5 rounded text-sm font-sans font-black shrink-0">
                    待启动
                  </div>
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-sm font-black bg-slate-100 text-slate-900 border border-slate-100">
                    DL全推
                  </span>
                </div>
                <p className="text-sm text-slate-900 font-bold leading-relaxed">
                  <span className="font-black text-slate-900">DL端全链路</span>系统替代人实验与推进，增加系统直接给出审核结果
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
