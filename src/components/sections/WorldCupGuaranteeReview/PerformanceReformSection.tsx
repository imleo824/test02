import React from "react";
import { BeforeAfter, ExpectedRhythm, ModuleBlockHeader, SummaryBox, highlightNumbers } from "./utils";

export const PerformanceReformSection: React.FC = () => {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-4 flex flex-col justify-between h-full">
      <div className="space-y-4">
        {/* 顶部标题与标签 */}
        <div className="space-y-2">
          <ModuleBlockHeader title="升级考核机制" />
          <SummaryBox className="mb-2 p-4 md:p-5">
            <p className="text-sm md:text-base font-bold leading-relaxed text-slate-900">
              {highlightNumbers("打破传统单一关注“粗暴划档”与“个人孤立竞争”的误区，重构绩效档次与老带动新机制，形成良币驱逐劣币的正向团队生态。")}
            </p>
          </SummaryBox>
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

            <BeforeAfter
              before={<><span className="font-black">按固定区间划档</span><br />同一得分区间内绩效完全一致，挫伤多劳者积极性。</>}
              after={<><span className="font-black">按实际得分精细计提</span><br />基于实际得分计提，70分一定比69分回报更高。</>}
              afterTitle="升级新机制"
              beforeTitle="传统老机制"
            />
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

            <BeforeAfter
              before={<><span className="font-black">纯个人独立考核</span><br />员工各自为战，新老竞争不愿传授经验，致经验断层。</>}
              after={<><span className="font-black">按组分配与组间PK</span><br />组间竞争、合作，老员工主动辅导新人提升总胜率。</>}
              afterTitle="升级新机制"
              beforeTitle="传统老机制"
            />
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
