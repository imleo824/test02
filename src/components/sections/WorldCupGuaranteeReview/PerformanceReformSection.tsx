import React from "react";
import { ArrowRight } from "lucide-react";
import { CoreActionHeader, ExpectedRhythm } from "./utils";

export const PerformanceReformSection: React.FC = () => {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-4 flex flex-col justify-between h-full">
      <div className="space-y-4">
        {/* 顶部标题与标签 */}
        <div className="space-y-2 border-b border-slate-100 pb-3">
          <CoreActionHeader
            title="升级考核机制"
            desc="打破传统单一关注“粗暴划档”与“个人孤立竞争”的误区，重构绩效档次与老带动新机制，形成良币驱逐劣币的正向团队生态。"
            summaryStyle={true}
          />
        </div>

        {/* 2个核心维度对比 */}
        <div className="space-y-4 pt-1">
          {/* 维度一：绩效档次机制 */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 pb-1">
              <span className="w-5 h-5 rounded-md bg-blue-50 text-blue-900 font-black text-sm flex items-center justify-center">
                1
              </span>
              <span className="font-black text-slate-900 text-sm">
                绩效档次机制：按得分精细计提
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 relative">
              <div className="bg-white border border-slate-200 border-dashed rounded-lg p-3 shadow-sm flex flex-col">
                <div className="text-xs font-black text-slate-700 mb-1.5 flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0"></span>
                   传统老机制
                </div>
                <div className="text-sm font-black text-slate-900 mb-1">按固定区间划档</div>
                <p className="text-xs md:text-xs text-slate-800 font-bold leading-relaxed mt-auto">
                  同一得分区间内绩效完全一致，挫伤多劳者积极性。
                </p>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:block">
                 <div className="bg-white rounded-full p-1 border border-slate-200 shadow-sm flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-blue-600" strokeWidth={3} />
                 </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 shadow-sm flex flex-col">
                <div className="text-xs font-black text-blue-600 mb-1.5 flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                   升级新机制
                </div>
                <div className="text-sm font-black text-slate-900 mb-1">按实际得分精细计提</div>
                <p className="text-xs md:text-xs text-slate-900 font-bold leading-relaxed mt-auto">
                  基于实际得分计提，70分一定比69分回报更高。
                </p>
              </div>
            </div>
          </div>

          {/* 维度二：老带动新机制 */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-1.5 pb-1 pt-1">
              <span className="w-5 h-5 rounded-md bg-blue-50 text-blue-900 font-black text-sm flex items-center justify-center">
                2
              </span>
              <span className="font-black text-slate-900 text-sm">
                老带动新机制：组间PK
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 relative">
              <div className="bg-white border border-slate-200 border-dashed rounded-lg p-3 shadow-sm flex flex-col">
                <div className="text-xs font-black text-slate-700 mb-1.5 flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0"></span>
                   传统老机制
                </div>
                <div className="text-sm font-black text-slate-900 mb-1">纯个人独立考核</div>
                <p className="text-xs md:text-xs text-slate-800 font-bold leading-relaxed mt-auto">
                  员工各自为战，新老竞争不愿传授经验，致经验断层。
                </p>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:block">
                 <div className="bg-white rounded-full p-1 border border-slate-200 shadow-sm flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-blue-600" strokeWidth={3} />
                 </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 shadow-sm flex flex-col">
                <div className="text-xs font-black text-blue-600 mb-1.5 flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                   升级新机制
                </div>
                <div className="text-sm font-black text-slate-900 mb-1">按组分配与组间PK</div>
                <p className="text-xs md:text-xs text-slate-900 font-bold leading-relaxed mt-auto">
                  组间竞争、合作，老员工主动辅导新人提升总胜率。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExpectedRhythm
        items={[
          { month: "7月（当前）", title: "方案宣导与规则细化", desc: "细化按分计提与组间 PK 规则，组织宣导" },
          { month: "8月", title: "试点实验落地", desc: "核心审核组上线新考核机制，观察正向激励" },
          { month: "9月 - 10月", title: "全量推行与机制优化", desc: "替换老旧区间划档，打造驱逐劣币新生态" },
        ]}
      />
    </div>
  );
};

