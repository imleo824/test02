import React from "react";
import { ExpectedRhythm, ModuleBlockHeader, SummaryBox, highlightNumbers } from "./utils";
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

  const dispatchBefore = [
    "组长与代理长期绑定",
    "手工核算，缺少机制隔离",
    "固定关系容易形成利益空间",
  ];

  const dispatchAfter = [
    "系统按规则随机派单",
    "按月轮换，减少固定接触",
    "异常关系更容易被发现",
  ];

  const warningSteps = [
    { label: "人工录入", value: "45%", tone: "normal" },
    { label: "系统标准", value: "35%", tone: "normal" },
    { label: "对比偏差", value: "+10%", tone: "risk" },
    { label: "触发预警", value: "超过5%阈值", tone: "risk" },
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
              <ModuleBlockHeader title="系统随机派单" />

              <p className="text-sm font-bold text-slate-900 leading-relaxed">
                改变线下指定分配模式，通过系统将审核任务随机派发给不同组长，且按月进行差异派单。隔绝长期固定审核关系，杜绝利益勾结空间，提高作弊违规成本。
              </p>

              <div className="agent-dispatch-model">
                <div className="agent-dispatch-panel">
                  <div className="agent-dispatch-panel-badge">原</div>
                  <div className="agent-dispatch-panel-head">
                    <span>原来模式</span>
                    <strong>线下指定分配</strong>
                  </div>
                  <div className="agent-dispatch-list">
                    {dispatchBefore.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="agent-dispatch-relation">固定关系：组长甲 → 代理甲</div>
                </div>

                <div className="agent-dispatch-core">
                  <span>系统隔离</span>
                  <strong>随机派单</strong>
                  <i>月度轮换</i>
                </div>

                <div className="agent-dispatch-panel agent-dispatch-panel-strong">
                  <div className="agent-dispatch-panel-badge">新</div>
                  <div className="agent-dispatch-panel-head">
                    <span>升级模式</span>
                    <strong>系统自动随机派单</strong>
                  </div>
                  <div className="agent-dispatch-list">
                    {dispatchAfter.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="agent-dispatch-relation">轮换关系：组长乙 → 代理甲</div>
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
              <ModuleBlockHeader title="系统计算佣金" />

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

              <div className="agent-warning-demo">
                <div className="report-small-title">佣金审核预警演示</div>
                <div className="agent-warning-rule">
                  <span>预警规则</span>
                  <strong>人工值与系统值偏差超过5%时触发</strong>
                </div>
                <div className="agent-warning-grid">
                  {warningSteps.map((step, index) => (
                    <div
                      key={step.label}
                      className={step.tone === "risk" ? "agent-warning-step agent-warning-step-risk" : "agent-warning-step"}
                    >
                      <span>{index + 1}</span>
                      <div>
                        <p>{step.label}</p>
                        <strong>{step.value}</strong>
                      </div>
                    </div>
                  ))}
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
