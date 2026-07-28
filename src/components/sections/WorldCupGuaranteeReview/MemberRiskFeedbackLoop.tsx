import React from "react";
import { CoreActionHeader, SummaryBox, highlightNumbers } from "./utils";

export const MemberRiskFeedbackLoop: React.FC = () => {
  return (
    <div id="section-member-feedback-loop" className="space-y-8 bg-white border border-slate-100 rounded-xl p-6 md:p-8 ">
      {/* 头部标题 */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-2 mb-4"><CoreActionHeader title={<><span className="w-2 h-6 bg-blue-600 rounded-full shrink-0"></span>结果评估与反向优化</>} /></div>

      {/* 问题 / 解决方案 */}
      <div className="space-y-4">
        {/* 问题 */}
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-2 md:p-3 lg:p-4 space-y-2">
          <div className="flex items-center gap-2 font-bold text-rose-900 text-sm md:text-base">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>核心问题</span>
          </div>
          <p className="text-sm text-rose-900 pl-2  leading-relaxed">
            包括存量漏洞，以及新型套利作弊手法的不断出现，目前缺少一套机制，去<span className="font-bold underline decoration-rose-400">持续发现并优化FK流程及套利策略</span>；
          </p>
        </div>

        {/* 解决方案 */}
        <SummaryBox>
          {highlightNumbers(
            "建立强制性“事后评估”，实现“[[XT识别-人工确认-结果反馈-模型学习]]”的闭环机制，人工的每一次精准纠偏都将作为[[高质量标注数据]]，持续喂养XT算法。",
          )}
        </SummaryBox>
      </div>

      {/* 2个核心板块：错误案例分析 与 反向策略优化 */}
      <div className="grid grid-cols-1 grid-cols-1 gap-4">
        {/* 错误案例分析 */}
        <div className="bg-white border border-slate-100 rounded-xl p-5 space-y-2.5 ">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm md:text-base">
            <span className="w-2 h-4 bg-blue-600 rounded-full"></span>
            <span>错误案例分析</span>
          </div>
          <p className="text-sm text-slate-900 font-bold leading-relaxed ">
            每日抽取XT直出订单与人工审核订单进行双重交叉质检。重点针对“<span className="font-bold text-slate-900">XT未命中：但是人工已实锤</span>”与“<span className="font-bold text-slate-900">XT已命中，但是人工未实锤</span>”的典型案例进行深度复盘。
          </p>
        </div>

        {/* 反向策略优化 */}
        <div className="bg-white border border-slate-100 rounded-xl p-5 space-y-2.5 ">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm md:text-base">
            <span className="w-2 h-4 bg-emerald-600 rounded-full"></span>
            <span>反向策略优化</span>
          </div>
          <p className="text-sm text-slate-900 font-bold leading-relaxed ">
            将案例分析结果转化为具体的<span className="font-bold text-slate-900 underline underline-offset-2">规则优化建议</span>。通过调整XT阈值、增加特征维度或更新派单权重，实现策略的动态迭代。
          </p>
        </div>
      </div>

      {/* 建立一套评估标准 */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="border-b border-slate-100 pb-2">
          <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
            <span className="w-2 h-4 bg-slate-900 rounded-full"></span>
            建立一套评估标准
          </h4>
        </div>

        {/* 核心逻辑说明 */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl rounded-lg p-2 md:p-3 lg:p-4 space-y-2">
          <div className="font-bold text-sm text-slate-900">
            评估指标核心逻辑说明
          </div>
          <p className="text-sm text-slate-900 font-bold leading-relaxed ">
            一般情况下，<span className="text-rose-600 font-bold">召回率和准确率是相悖的</span>。针对FK业务性质，我们遵循<span className="font-bold underline underline-offset-2 text-slate-900">“召回率优先于准确率”</span>原则：<span className="font-bold text-slate-900">首先通过高召回保证损失风险最低，随后通过策略优化逐步剔除误报，最终实现准确率的稳步提升。</span>
          </p>
        </div>

        {/* 召回率 & 准确率 卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 指标 01 召回率 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono font-bold text-slate-900">指标 01</span>
              <span className="text-sm font-bold bg-slate-900 text-white px-0.5 md:px-1 lg:px-2 py-0.5 rounded-xs">
                召回率
              </span>
            </div>
            <div className="text-sm md:text-base font-bold text-slate-900">
              所有有问题的订单中，被XT拦截的比例
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl rounded-lg p-1 md:p-2 lg:p-3 text-sm text-slate-900">
              例子：<span className="font-bold underline text-slate-900">100个被FK</span>的体育打水订单，其中只有<span className="font-bold underline text-slate-900">80个命中了XT拦截策略</span>，那么召回率就是 <span className="font-black text-emerald-600 text-base">80%</span>
            </div>
          </div>

          {/* 指标 02 准确率 */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono font-bold text-slate-900">指标 02</span>
              <span className="text-sm font-bold bg-slate-900 text-white px-0.5 md:px-1 lg:px-2 py-0.5 rounded-xs">
                准确率
              </span>
            </div>
            <div className="text-sm md:text-base font-bold text-slate-900">
              被XT拦截的订单中，确实有问题的比例
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl rounded-lg p-1 md:p-2 lg:p-3 text-sm text-slate-900">
              例子：<span className="font-bold underline text-slate-900">100个命中了体育打水XT拦截策略</span>，最终被FK的只有<span className="font-bold underline text-slate-900">80个</span>，那么准确率就是 <span className="font-black text-emerald-600 text-base">80%</span>
            </div>
          </div>
        </div>

        {/* 评估指标表格 */}
        <div className=" border border-slate-100 rounded-xl bg-white ">
          <table className="w-full font-bold border-collapse text-slate-900 table-fixed w-full text-[10px] md:text-xs break-all">
            <thead className="bg-slate-100 text-slate-900 ">
              <tr className="bg-slate-900 text-white font-bold">
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-left">评估指标</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">现状</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">目标</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-left">备注</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              <tr className="bg-white">
                <td className="px-2 md:px-3 lg:px-4 py-3 text-left">
                  召回率
                </td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">
                  ***
                </td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">
                  98%
                </td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-left">
                  100个问题订单，98个被XT拦截
                </td>
              </tr>
              <tr className="bg-slate-50 border border-slate-100">
                <td className="px-2 md:px-3 lg:px-4 py-3 text-left">
                  准确率
                </td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">
                  ***
                </td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">
                  95%
                </td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-left">
                  XT拦截100个订单，95个有问题
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
