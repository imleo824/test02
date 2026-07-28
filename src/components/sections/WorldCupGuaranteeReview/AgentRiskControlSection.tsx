import React from "react";
import { SummaryBox, highlightNumbers, ExpectedRhythm } from "./utils";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { ChapterTitle } from "../../ReportSections";

export const AgentRiskControlSection: React.FC = () => {
  const yjTableData = [
    {
      metric: "有效新增",
      original: "8",
      sysFix: "4",
      manualCalc: "5",
    },
    {
      metric: "有效活跃",
      original: "12",
      sysFix: "4",
      manualCalc: "5",
    },
    {
      metric: "净盈利",
      original: "50,000",
      sysFix: "12,000",
      manualCalc: "12,000",
    },
    {
      metric: "应发佣金",
      original: "17,500",
      sysFix: "1,800",
      manualCalc: "2,100",
    },
  ];

  return (
    <div id="section-agent-risk-control" className="space-y-10">
      <ChapterTitle>3.5 代理风控</ChapterTitle>

      {/* 核心价值、核心目标、整体进度模块 */}
      <ModuleStatusCard
        coreValue="建立自动化佣金核算与差异随机派单体系，系统自动对账与异常实时预警，全面规避线下管理差错与内部作弊隐患"
        metricsList={[
          { label: "佣金自动核算上线率", current: "50%", target: "100%" },
          { label: "自动预警与随机分单率", current: "0%", target: "100%" },
        ]}
        progress="50%"
        estimatedTime="世界杯后完成"
      />

      {/* 核心前置流程图与两大维度架构：1行2列直接铺开 */}
      <div className="grid grid-cols-1 gap-6 items-stretch">
        
        {/* 第一列：3.5.2.1 系统自动派单 */}
        <div
          id="section-agent-dispatch"
          className="report-card-soft p-5 space-y-4 flex flex-col justify-between"
        >
          <div className="space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-5 bg-blue-600 rounded-full"></span>
                  <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900">
                    系统随机派单
                  </h4>
                </div>
              </div>

              <p className="text-sm font-bold text-slate-900 leading-relaxed">
                改变线下指定分配模式，通过系统将审核任务随机派发给不同组长，且按月进行差异派单。隔绝长期固定审核关系，杜绝利益勾结空间，提高作弊违规成本。
              </p>

              <div className="space-y-3">
                {/* 原来模式 */}
                <div className="bg-white rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-xs font-black text-slate-900">原来模式：线下指定分配</span>
                    <span className="text-xs bg-rose-50 text-rose-950 px-1.5 py-0.5 rounded font-black">高内部舞弊风险</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900">组长与代理长期绑定，手工核算、缺乏机制隔离，极易产生内外勾结泄露。</p>
                  <div className="bg-slate-50 p-2 rounded text-slate-900 font-mono font-black text-sm text-center">
                    固定关联：组长 A → 代理 A
                  </div>
                </div>

                {/* 升级模式 */}
                <div className="bg-white rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-xs font-black text-slate-900">升级模式：系统自动随机派单</span>
                    <span className="text-xs bg-emerald-50 text-emerald-900 px-1.5 py-0.5 rounded font-black">机制规避风险</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900">系统多维度交叉评估、随机分配，并逐月进行差异化轮换派单。</p>
                  <div className="grid grid-cols-2 gap-2 text-sm font-mono font-bold items-center text-center">
                    <div className="bg-slate-50 p-2 rounded text-slate-900">
                      <div className="text-xs text-slate-900 font-sans font-bold mb-0.5">上月</div>
                      组长 A → 代理 A
                    </div>
                    <div className="bg-emerald-50 p-2 rounded text-emerald-900">
                      <div className="text-xs text-emerald-950 font-sans font-bold mb-0.5 flex items-center justify-center gap-1">
                        <span>随机轮换</span>
                      </div>
                      组长 B → 代理 A
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

                    <ExpectedRhythm items={[{ month: "待排期", tagColor: "amber", title: "【佣金审核】-随机派单", submitTime: "2026-05-19", status: "待排期（世界杯后启动）" }]} />
        </div>

        {/* 第二列：3.5.2.2 系统自动计算佣金 */}
        <div
          id="section-agent-yj-calc"
          className="report-card-soft p-5 space-y-4 flex flex-col justify-between"
        >
          <div className="space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-5 bg-blue-600 rounded-full"></span>
                  <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900">
                    系统计算佣金
                  </h4>
                </div>
              </div>

              <p className="text-sm font-bold text-slate-900 leading-relaxed">
                根据盈利贡献、成员质量与风险程度等核心模型，由系统生成对账报告。当人工录入值与系统计算值差异超过 5% 阈值时触发自动预警。
              </p>

              <div className="rounded-lg bg-white overflow-hidden">
                <table className="w-full font-bold border-collapse text-slate-900 table-fixed w-full report-dense-table">
                  <thead className="bg-slate-100 text-slate-900  border-b border-slate-200">
                    <tr>
                      <th className="px-1 md:px-2 lg:px-3 py-2 text-left font-black">核算指标</th>
                      <th className="px-1 md:px-2 lg:px-3 py-2 text-center font-black">原始数据</th>
                      <th className="px-1 md:px-2 lg:px-3 py-2 text-center font-black">系统修正</th>
                      <th className="px-1 md:px-2 lg:px-3 py-2 text-center font-black">人工核算</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {yjTableData.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-1 md:px-2 lg:px-3 py-2 text-left">{row.metric}</td>
                        <td className="px-1 md:px-2 lg:px-3 py-2 text-center">
                          {row.metric === "净盈利" || row.metric === "应发佣金" ? (
                            <span className="line-through">{row.original}</span>
                          ) : (
                            row.original
                          )}
                        </td>
                        <td className="px-1 md:px-2 lg:px-3 py-2 text-center text-blue-900 font-black">{row.sysFix}</td>
                        <td className="px-1 md:px-2 lg:px-3 py-2 text-center">{row.manualCalc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-lg p-3 space-y-3">
                <span className="text-xs font-black text-slate-900 block border-b border-slate-100 pb-1">
                  佣金审核预警演示
                </span>
                <div className="grid grid-cols-3 gap-2 text-center items-center">
                  <div className="bg-slate-50 p-1.5 rounded border border-slate-100">
                    <div className="text-xs text-slate-900">人工录入</div>
                    <div className="text-xs font-black text-slate-900">45%</div>
                  </div>
                  <div className="text-xs font-black text-slate-900">
                    对比偏差 <span className="text-rose-600 font-mono text-xs font-black">+10%</span>
                  </div>
                  <div className="bg-slate-50 p-1.5 rounded border border-slate-100">
                    <div className="text-xs text-slate-900">系统标准</div>
                    <div className="text-xs font-black text-slate-900">35%</div>
                  </div>
                </div>
                <div className="bg-rose-50 text-rose-950 font-black text-sm py-2 text-center rounded">
                  触发异常预警（偏差值超过5%设定阈值）
                </div>
              </div>
            </div>
          </div>

                    <ExpectedRhythm items={[{ month: "第一阶段已上线", tagColor: "emerald", title: "【代理风控】代理云盾分数", submitTime: "2025-10-22", status: "已上线（参数调优中）" }, { month: "第一阶段已上线", tagColor: "emerald", title: "【代理风控】代理云盾审核", submitTime: "2025-12-28", status: "已上线（比对预警中）" }]} />
        </div>

      </div>
    </div>
  );
};
