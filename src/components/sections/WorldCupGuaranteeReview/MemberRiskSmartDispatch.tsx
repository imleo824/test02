import React from "react";
import { CoreActionHeader, SummaryBox, highlightNumbers, ExpectedRhythm } from "./utils";

export const MemberRiskSmartDispatch: React.FC = () => {
  return (
    <div id="section-member-smart-dispatch" className="bg-[#f8fafc] border border-slate-100 rounded-xl p-5 space-y-4 flex flex-col justify-between ">
      {/* 头部标题：3.3.2 升级人工派单模式 */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <CoreActionHeader title={<><span className="w-2.5 h-5 bg-blue-600 rounded-full shrink-0"></span>升级人工派单模式</>} />
        <span className="text-sm font-black text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
          人与单精准匹配
        </span>
      </div>

      {/* 核心思路 / 升级前后对比 */}
      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 md:p-5 space-y-2.5">
        <div className="text-sm font-black text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            模式升级对比
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center text-sm">
          <div className="md:col-span-5 bg-white p-3 rounded-lg border border-slate-100 space-y-1">
            <div className="text-sm font-bold text-slate-900">原来模式：</div>
            <div className="font-black text-slate-900 text-sm">
              轮询均分，每个人被分配的订单数量几乎一样
            </div>
          </div>
          <div className="md:col-span-1 text-center font-black text-blue-900 text-lg">
            →
          </div>
          <div className="md:col-span-5 bg-emerald-50 p-3 rounded-lg border border-emerald-200 space-y-1">
            <div className="text-sm font-bold text-emerald-900">升级模式：</div>
            <div className="font-black text-emerald-900 text-sm">
              这一刻，这一单给谁是最优解
            </div>
          </div>
        </div>
      </div>

      {/* 智能派单逻辑与分配机制（整合为一个模块） */}
      <div className="border border-slate-200 rounded-xl p-5 md:p-6 bg-slate-50 space-y-6">
        <div className="border-b border-slate-200 pb-2">
          <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-5 bg-blue-600 rounded-full"></span>
            智能派单逻辑与分配机制示例
          </h4>
        </div>

        {/* 1. 核心路由逻辑图解 */}
        <div className="space-y-3">
          <div className="text-sm font-black text-slate-900 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            双向特征加权路由匹配模型
          </div>
          
          <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6 overflow-hidden relative shadow-sm space-y-4">
            <p className="text-sm font-bold text-slate-900 leading-relaxed text-center px-4">
              基于订单与人员的多维特征进行双向加权计算，将特定高危或专项订单精准分发至最匹配、绩效最优的处理人，极大提升审核质量与处理效率。
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 relative z-10 pt-2">
              {/* 左侧：订单特征 */}
              <div className="flex-1 w-full max-w-sm bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm relative">
                <div className="text-center mb-3">
                  <span className="text-sm font-black text-slate-900 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm inline-flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    订单特征画像
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="bg-white px-3 py-2 rounded-lg border border-slate-100 flex items-center justify-between shadow-sm">
                    <span className="text-xs font-bold text-slate-500">维度 1</span>
                    <span className="text-sm font-black text-slate-900">提款金额规模</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-lg border border-slate-100 flex items-center justify-between shadow-sm">
                    <span className="text-xs font-bold text-slate-500">维度 2</span>
                    <span className="text-sm font-black text-slate-900">系统风险分数</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-lg border border-slate-100 flex items-center justify-between shadow-sm">
                    <span className="text-xs font-bold text-slate-500">维度 3</span>
                    <span className="text-sm font-black text-slate-900">业务归属类型</span>
                  </div>
                </div>
                {/* 装饰线 */}
                <div className="hidden lg:block absolute -right-6 top-[60%] w-6 border-t-[2px] border-dashed border-blue-300"></div>
              </div>

              {/* 中间：匹配引擎 */}
              <div className="shrink-0 flex flex-col items-center justify-center relative">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 ring-4 ring-blue-50 relative z-10">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div className="mt-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded text-center shadow-sm relative z-10">
                  <div className="text-xs font-black text-blue-900">双向加权路由</div>
                </div>
              </div>

              {/* 右侧：人员特征 */}
              <div className="flex-1 w-full max-w-sm bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm relative">
                {/* 装饰线 */}
                <div className="hidden lg:block absolute -left-6 top-[60%] w-6 border-t-[2px] border-dashed border-blue-300"></div>
                
                <div className="text-center mb-3">
                  <span className="text-sm font-black text-slate-900 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm inline-flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    人员能力画像
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="bg-white px-3 py-2 rounded-lg border border-slate-100 flex items-center justify-between shadow-sm">
                    <span className="text-sm font-black text-slate-900">擅长业务领域</span>
                    <span className="text-xs font-bold text-slate-500">标签 1</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-lg border border-slate-100 flex items-center justify-between shadow-sm">
                    <span className="text-sm font-black text-slate-900">历史审核绩效</span>
                    <span className="text-xs font-bold text-slate-500">标签 2</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-lg border border-slate-100 flex items-center justify-between shadow-sm">
                    <span className="text-sm font-black text-slate-900">当前工作负载</span>
                    <span className="text-xs font-bold text-slate-500">状态 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. 分配决策机制示例 */}
        <div className="pt-4 border-t border-slate-200 space-y-4">
          <div className="text-sm font-black text-slate-900 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
            运行场景与分配决策演示
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 场景一：体育专长匹配 */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center">1</span>
                <span className="text-sm font-black text-slate-900">体育专长匹配</span>
              </div>
              <div className="space-y-2 text-sm text-slate-900">
                <div>
                  <span className="font-bold">待分订单：</span>
                  <span className="font-black text-blue-900 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">体育类型订单</span>
                </div>
                <div>
                  <span className="font-bold">空闲人员：</span>
                  <span className="font-black text-slate-900">审核员 A (擅长体育) | B (擅长真人)</span>
                </div>
                <div className="pt-1 border-t border-slate-200">
                  <span className="font-bold">分配决策：</span>
                  <span className="font-black text-emerald-900 bg-emerald-50 px-1.5 py-0.5 rounded">指派 A 审核</span>
                  <div className="text-xs font-black text-slate-900 mt-1">专业对口，提升审核效率。</div>
                </div>
              </div>
            </div>

            {/* 场景二：高绩效优先 */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center">2</span>
                <span className="text-sm font-black text-slate-900">高绩效优先</span>
              </div>
              <div className="space-y-2 text-sm text-slate-900">
                <div>
                  <span className="font-bold">待分订单：</span>
                  <span className="font-black text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-300">常规提款订单</span>
                </div>
                <div>
                  <span className="font-bold">空闲人员：</span>
                  <span className="font-black text-slate-900">审核员 A (历史绩效高) | B (绩效普通)</span>
                </div>
                <div className="pt-1 border-t border-slate-200">
                  <span className="font-bold">分配决策：</span>
                  <span className="font-black text-emerald-900 bg-emerald-50 px-1.5 py-0.5 rounded">指派 A 审核</span>
                  <div className="text-xs font-black text-slate-900 mt-1">优先保障高绩效人员处理，提高质量。</div>
                </div>
              </div>
            </div>

            {/* 场景三：分组权限控制 */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-black text-xs flex items-center justify-center">3</span>
                <span className="text-sm font-black text-slate-900">分组权限控制</span>
              </div>
              <div className="space-y-2 text-sm text-slate-900">
                <div>
                  <span className="font-bold">待分订单：</span>
                  <span className="font-black text-rose-900 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">大额或高风险订单</span>
                </div>
                <div>
                  <span className="font-bold">空闲人员：</span>
                  <span className="font-black text-slate-900">审核员 A (资深组权限) | B (限低风险低金额)</span>
                </div>
                <div className="pt-1 border-t border-slate-200">
                  <span className="font-bold">分配决策：</span>
                  <span className="font-black text-emerald-900 bg-emerald-50 px-1.5 py-0.5 rounded">指派 A 审核</span>
                  <div className="text-xs font-black text-slate-900 mt-1">严格拦截权限不足人员，保障资金安全。</div>
                </div>
              </div>
            </div>
          </div>
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
