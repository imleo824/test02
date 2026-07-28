import React from "react";
import { CheckCircle2, Shield } from "lucide-react";
import { SubsectionTitle, Card, ChapterTitle } from "../../ReportSections";
import { InterceptTypeBarChart } from "../../ReportCharts";
import { ModuleStatusCard } from "./ModuleStatusCard";
import {
  highlightNumbers,
  CoreActionHeader,
  SummaryBox,
} from "./utils";
import {
  closedLoopNodes,
  closedLoopRelations,
  mobileClosedLoopNodes,
  cEndSteps,
  onlineWarningScenes,
  auditStrategies,
} from "./data";
import { SystemToolsEffectiveness } from "./SystemToolsEffectiveness";
import { TradingMonitorTable } from "./TradingMonitorTable";
import { BusinessReviewLogic } from "./BusinessReviewLogic";

export const SportsRiskControlSection: React.FC = () => {
  const renderCEndColumnKeyActions = (step: any) => {
    if (step.isSystemWarning) {
      return (
        <div className="space-y-3">
          <div>
            <div className="divide-y divide-slate-100">
              {onlineWarningScenes.map((item, index) => (
                <div key={item.id} className="py-2">
                  <div className="flex items-center gap-2 text-base font-black text-slate-900">
                    <span className="w-5 shrink-0 font-mono text-slate-900">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="truncate">{item.name}</span>
                      <CheckCircle2
                        className="h-4 w-4 text-emerald-600 shrink-0"
                        strokeWidth={3}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (step.isSystemAudit) {
      return (
        <div className="divide-y divide-slate-100">
          {auditStrategies.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center justify-between gap-2 py-2"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span className="w-5 shrink-0 text-base font-mono font-black text-slate-900">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="truncate text-base font-black text-slate-900">
                    {item.name}
                  </span>
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-600 shrink-0"
                    strokeWidth={3}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (step.isSystemDispatch) {
      return (
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 mt-2">
          <div className="flex flex-col items-center">
            <div className="rounded-lg bg-blue-50 px-6 py-2 text-sm font-black text-blue-900 text-center z-10">
              新进订单
            </div>

            <div className="h-4 w-0.5 bg-slate-300"></div>

            <div className="rounded-lg bg-slate-800 px-6 py-2 text-sm font-black text-white text-center z-10">
              判定类型
            </div>

            <div className="h-4 w-0.5 bg-slate-300"></div>

            <div className="flex w-full max-w-[260px] relative">
              <div className="absolute left-[25%] right-[25%] top-0 h-0.5 bg-slate-300"></div>
              <div className="absolute left-[25%] top-0 h-4 w-0.5 bg-slate-300"></div>
              <div className="absolute right-[25%] top-0 h-4 w-0.5 bg-slate-300"></div>

              <div className="flex flex-col gap-2 w-1/2 pt-4 px-2 items-center">
                <div className="rounded bg-emerald-50 px-3 py-1.5 text-sm font-black text-emerald-900 text-center w-full z-10 relative">
                  体育订单
                </div>
                <div className="text-slate-900 text-sm font-bold">↓</div>
                <div className="rounded border border-emerald-200 bg-white px-2 py-1.5 text-sm font-black text-slate-900 text-center w-full z-10 relative">
                  体育组（34人）
                </div>
              </div>

              <div className="flex flex-col gap-2 w-1/2 pt-4 px-2 items-center">
                <div className="rounded bg-slate-200 px-3 py-1.5 text-sm font-black text-slate-900 text-center w-full z-10 relative">
                  其他类型
                </div>
                <div className="text-slate-900 text-sm font-bold">↓</div>
                <div className="rounded border border-slate-100 bg-white px-2 py-1.5 text-sm font-black text-slate-900 text-center w-full z-10 relative">
                  其他组
                </div>
              </div>
            </div>

            <div className="mt-5 text-sm text-slate-900 font-bold text-center bg-slate-100 px-4 py-2 rounded-lg border border-slate-100 w-full max-w-[260px]">
              注：系统分单还有很多其他逻辑，这里是说明跟体育相关
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-2">
        {step.actions?.map((act: string, i: number) => {
          const parts = act.split("|").map((s) => s.trim());
          const title = parts[0];
          const text = parts[1];
          return (
            <div
              key={`${title}-${i}`}
              className="flex items-start gap-2 border-t border-slate-100 pt-2 first:border-t-0 first:pt-0"
            >
              <span className="w-5 shrink-0 text-base font-mono font-black text-slate-900">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <div className="text-base font-black text-slate-900">
                    {title}
                  </div>
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-600 shrink-0"
                    strokeWidth={3}
                  />
                </div>
                <p className="mt-1 text-base font-semibold leading-relaxed text-slate-900">
                  {highlightNumbers(text)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div id="section-sports-risk-control" className="space-y-10">
      <ChapterTitle>3.5.1 体育风控</ChapterTitle>

      {/* 核心价值、核心目标、整体进度模块 */}
      <ModuleStatusCard
        coreValue="推进体育风控体系升级，强化B-C端联动，在业务流程、控制策略与系统数据等方面深度协同，实现闭环调优"
        metricsList={[
          { label: "赔率联动覆盖率", current: "85%", target: "90%+" },
          { label: "拦截高危流水覆盖率", current: "75%", target: "89.2%+" },
        ]}
        progress="85%"
        estimatedTime="世界杯期间已完成"
      />

      <SummaryBox>
        <p className="text-base text-slate-900 font-bold leading-relaxed">
          {highlightNumbers(
            "在[[SJB前半年]]，即开始[[推进体育风控体系升级]]，强化[[BC端联动]]，在[[业务流程、控制策略与系统数据]]等方面进行[[深度协同]]；对标行业最佳实践，从[[B端操盘源头]]与[[C端体育风控]] 2 个维度进行闭环调优。经过本次赛事检验，阶段性成果[[符合预期]]，为后续[[持续系统迭代]]奠定了信心基础。",
          )}
        </p>
      </SummaryBox>

      <BusinessReviewLogic />

      <SubsectionTitle
        title="体育风控"
        rightContent={
          <div className="flex items-center gap-3 text-sm font-black text-slate-900">
            <span>B端操盘监控</span>
            <span className="text-slate-200">/</span>
            <span>C端体育拦截</span>
          </div>
        }
      />

      {/* B端操盘监控 Section */}
      <div className="space-y-6 mb-12">
        <CoreActionHeader title="B端操盘监控" desc="[[SJB筹备阶段]]即建立[[C端风控监控]]与[[B端操盘协同机制]]。已实现[[异常发现、专人确认与15分钟协同反馈]]的闭环标准化流程；同时推动B端[[赔率联动]]覆盖 90% 以上进球类玩法，保障整体流程运转的高效性。" summaryStyle={true} />

        <div className="space-y-6 break-inside-avoid">
          <div className="grid grid-cols-1 gap-4 lg:hidden">
            {mobileClosedLoopNodes.map((item, idx, arr) => {
              return (
                <div key={`${item.title}-${idx}`} className="space-y-2">
                  <div className="rounded-2xl border border-slate-100 bg-white p-6">
                    {item.owner && (
                      <div className="mb-2 text-base font-black text-slate-900">
                        {item.owner}
                      </div>
                    )}
                    {item.label && (
                      <div className="mb-3 text-base font-black text-slate-900">
                        {item.label}
                      </div>
                    )}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h5 className="text-sm md:text-base font-black tracking-tight text-slate-900">
                        {item.title}
                      </h5>
                      {item.statusBadge && (
                        <span
                          className={`inline-flex items-center rounded-md px-2 py-0.5 text-sm font-black border ${
                            item.statusBadge.type === "success"
                              ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                              : item.statusBadge.type === "progress"
                                ? "bg-blue-50 text-blue-900 border-blue-200"
                                : "bg-rose-50 text-rose-900 border-rose-200"
                          }`}
                        >
                          {item.statusBadge.text}
                        </span>
                      )}
                    </div>
                    {item.text && (
                      <p className="mt-3 text-base font-black leading-relaxed text-slate-900">
                        {highlightNumbers(item.text, "text-slate-900")}
                      </p>
                    )}
                    {item.points && item.points.length > 0 && (
                      <div className="mt-4 grid grid-cols-1 gap-3">
                        {item.points.map((point) => (
                          <div
                            key={point.text}
                            className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 text-base font-black leading-relaxed text-slate-900 border border-slate-100"
                          >
                            <span>{point.text}</span>
                            {point.tag && (
                              <span
                                className={`inline-flex items-center rounded-md px-2 py-0.5 text-sm font-black border ${
                                  point.tagType === "auto"
                                    ? "bg-slate-900 text-white border-slate-900"
                                    : "bg-slate-200 text-slate-900 border-slate-100"
                                }`}
                              >
                                {point.tag}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {item.note && (
                      <div className="mt-4 text-sm font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-100 leading-relaxed">
                        {item.note}
                      </div>
                    )}
                    {item.progress && (
                      <div className="mt-4 rounded-xl bg-slate-100 p-4 border border-slate-100">
                        <div className="mb-2 flex items-center justify-between text-base font-black text-slate-900">
                          <span>{item.progress.label}</span>
                          <span className="font-mono">
                            {item.progress.value}%
                          </span>
                        </div>
                        <div className="h-3 overflow-hidden rounded-full bg-white border border-slate-100">
                          <div
                            className="h-full rounded-full bg-slate-900"
                            style={{ width: `${item.progress.value}%` }}
                          />
                        </div>
                        <p className="mt-2 text-base font-black leading-relaxed text-slate-900">
                          {item.progress.desc}
                        </p>
                      </div>
                    )}
                    {item.focus && (
                      <div className="mt-2 rounded-lg bg-slate-50 p-3">
                        <div className="mb-1 text-base font-black text-slate-900">
                          {item.focus.title}
                        </div>
                        <p className="text-base font-black leading-relaxed text-slate-900">
                          {highlightNumbers(item.focus.desc)}
                        </p>
                      </div>
                    )}
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="flex justify-center">
                      <span className="rounded-full border border-slate-100 bg-white px-3 py-1 text-base font-black text-slate-900">
                        {closedLoopRelations[idx]} ↓
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative hidden pb-12 lg:block">
            <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-3">
              {[
                {
                  title: "C端",
                  nodes: closedLoopNodes.slice(0, 2),
                  relationOffset: 0,
                  tone: "slate",
                },
                {
                  title: "B端",
                  nodes: closedLoopNodes.slice(2, 4),
                  relationOffset: 2,
                  tone: "blue",
                },
              ].map((group, groupIdx) => (
                <React.Fragment key={group.title}>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex flex-col h-full">
                    <div className="mb-3 text-center text-base font-black text-slate-900">
                      {group.title}
                    </div>
                    <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-2 flex-1">
                      {group.nodes.map((node, idx) => {
                        const toneStyle = {
                          title: "text-slate-900",
                          dot: "bg-slate-900",
                          highlight: "text-slate-900",
                        };

                        return (
                          <React.Fragment key={node.title}>
                            <Card
                              padding="none"
                              className="overflow-hidden rounded-2xl border border-slate-100 bg-white h-full flex flex-col"
                            >
                              <div className="border-b border-slate-100 p-4">
                                <div className="flex items-center justify-between gap-3">
                                  <div className="flex items-center gap-3">
                                    <span
                                      className={`h-4 w-4 rounded-full ${toneStyle.dot}`}
                                    />
                                    <h5
                                      className={`text-xl font-black tracking-tight ${toneStyle.title}`}
                                    >
                                      {node.title}
                                    </h5>
                                  </div>
                                  {node.statusBadge && (
                                    <span
                                      className={`inline-flex items-center rounded-md px-2 py-0.5 text-sm font-black border ${
                                        node.statusBadge.type === "success"
                                          ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                                          : node.statusBadge.type === "progress"
                                            ? "bg-blue-50 text-blue-900 border-blue-200"
                                            : "bg-rose-50 text-rose-900 border-rose-200"
                                      }`}
                                    >
                                      {node.statusBadge.text}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="p-4 flex-1 flex flex-col justify-between">
                                <div className="space-y-2">
                                  {node.text && (
                                    <p className="text-base font-black leading-relaxed text-slate-900">
                                      {highlightNumbers(
                                        node.text,
                                        toneStyle.highlight,
                                      )}
                                    </p>
                                  )}
                                  {node.points && node.points.length > 0 && (
                                    <div className="grid grid-cols-1 gap-2 mt-2">
                                      {node.points.map((point) => (
                                        <div
                                          key={point.text}
                                          className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-sm font-black leading-relaxed text-slate-900 border border-slate-100"
                                        >
                                          <span>{point.text}</span>
                                          {point.tag && (
                                            <span
                                              className={`inline-flex items-center rounded-md px-2 py-0.5 text-sm font-black border ${
                                                point.tagType === "auto"
                                                  ? "bg-slate-900 text-white border-slate-900"
                                                  : "bg-slate-100 text-slate-900 border-slate-100"
                                              }`}
                                            >
                                              {point.tag}
                                            </span>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  {node.note && (
                                    <div className="mt-2 text-sm font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-100 leading-relaxed">
                                      {node.note}
                                    </div>
                                  )}
                                </div>
                                <div>
                                  {node.progress && (
                                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 mt-2">
                                      <div className="mb-2 flex items-center justify-between text-sm font-black text-slate-900 uppercase tracking-widest">
                                        <span>{node.progress.label}</span>
                                        <span className="font-mono text-base">
                                          {node.progress.value}%
                                        </span>
                                      </div>
                                      <div className="h-3 overflow-hidden rounded-full bg-white border border-slate-100">
                                        <div
                                          className="h-full rounded-full bg-slate-900"
                                          style={{
                                            width: `${node.progress.value}%`,
                                          }}
                                        />
                                      </div>
                                      <p className="mt-2 text-sm font-black leading-relaxed text-slate-900">
                                        {node.progress.desc}
                                      </p>
                                    </div>
                                  )}
                                  {node.focus && (
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-100 mt-2">
                                      <div className="mb-1 text-sm font-black text-slate-900 uppercase tracking-widest">
                                        {node.focus.title}
                                      </div>
                                      <p className="text-sm font-black leading-relaxed text-slate-900">
                                        {highlightNumbers(node.focus.desc)}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Card>
                            {idx < group.nodes.length - 1 && (
                              <div className="flex min-w-[62px] items-center justify-center">
                                <div className="flex w-full items-center">
                                  <div className="h-0.5 flex-1 rounded-full bg-blue-600" />
                                  <span className="mx-1  rounded-full border border-blue-200 bg-white px-2 py-1 text-base font-black text-slate-900">
                                    {
                                      closedLoopRelations[
                                        group.relationOffset
                                      ]
                                    }{" "}
                                    →
                                  </span>
                                  <div className="h-0.5 flex-1 rounded-full bg-blue-600" />
                                </div>
                              </div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  {groupIdx === 0 && (
                    <div className="flex min-w-[76px] items-center justify-center">
                      <div className="flex w-full items-center">
                        <div className="h-0.5 flex-1 rounded-full bg-blue-600" />
                        <span className="mx-1  rounded-full border border-blue-200 bg-white px-2 py-1 text-base font-black text-slate-900">
                          {closedLoopRelations[1]} →
                        </span>
                        <div className="h-0.5 flex-1 rounded-full bg-blue-600" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-12">
              <div className="absolute bottom-6 left-1/4 h-5 w-0.5 -translate-x-1/2 bg-blue-600" />
              <div className="absolute bottom-6 left-3/4 h-5 w-0.5 -translate-x-1/2 bg-blue-600" />
              <div className="absolute bottom-6 left-1/4 right-1/4 h-0.5 bg-blue-600" />
              <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded-full border border-blue-200 bg-white px-3 py-1 text-base font-black text-slate-900">
                {closedLoopRelations[3]}
              </span>
            </div>
          </div>
        </div>

        <TradingMonitorTable />
      </div>

      {/* C端体育拦截 Section */}
      <div className="space-y-6 mb-12">
        <CoreActionHeader title="C端体育拦截" desc="SJB期间，全面实施[[系统预警、系统初审、系统分单与人工复审]]的标准化流程，累计拦截体育高危订单金额达 [[green:17,070.07]]，确保高风险订单[[有效拦截]]。" summaryStyle={true} />

        <div className="space-y-4 break-inside-avoid">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {cEndSteps.map((step, idx) => (
                <div
                  key={step.stage}
                  className="relative rounded-2xl border border-slate-100 p-4 bg-white"
                >
                  <div className="mb-3 flex items-center gap-3 border-b border-slate-100 pb-2">
                    <span className="font-mono text-slate-900 font-extrabold text-xl mr-3 mt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h5 className="text-sm md:text-base font-black tracking-tight text-slate-900">
                        {step.stage}
                      </h5>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <SummaryBox className="my-2 p-3">
                      {highlightNumbers(step.summary)}
                    </SummaryBox>

                    <div>
                      <div className="mb-2 flex items-center justify-between gap-2 border-b border-slate-100 pb-1"></div>
                      {renderCEndColumnKeyActions(step)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 items-stretch">
          {/* 系统成效分析 */}
          <SystemToolsEffectiveness />

          {/* 拦截类型占比 */}
          <div className="rounded-2xl border border-slate-100 bg-white p-4 flex flex-col h-full">
            <div className="border-b border-slate-100 pb-3 mb-4 flex-none">
              <h5 className="text-sm md:text-base font-black tracking-tight text-slate-900 flex items-center gap-2 mb-3">
                <Shield
                  className="h-4.5 w-4.5 text-slate-900"
                  strokeWidth={2}
                />
                <span>体育拦截类型</span>
              </h5>
              <SummaryBox className="mt-2 mb-0 p-3">
                {highlightNumbers(
                  "异常注单拦截以[[体育打水]]（[[blue:81.24%]]）与[[批量打水套利]]（[[blue:8.01%]]）为主，合计覆盖超过 [[blue:89.25%]] 的[[重点拦截流水]]。",
                )}
              </SummaryBox>
              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-slate-100 pt-3">
                <div className="space-y-1">
                  <div className="text-sm font-black text-slate-900 uppercase tracking-wider">
                    原来体育审核
                  </div>
                  <div className="text-lg font-black text-slate-900">
                    专业知识缺欠
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-black text-slate-900 uppercase tracking-wider">
                    当前体育小组
                  </div>
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-lg font-black text-slate-900">
                      34专业人员
                    </span>
                    <span className="text-sm font-black text-blue-900 bg-blue-50 px-1.5 py-0.5 rounded-sm ml-0.5 border border-blue-200">
                      占比 ~10%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[360px] mt-auto">
              <InterceptTypeBarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
