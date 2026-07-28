import React from "react";
import { CoreActionHeader, SummaryBox, highlightNumbers } from "./utils";
import { Scale, User, ShieldAlert, CheckCircle, RotateCcw, ArrowRight, ArrowLeft } from "lucide-react";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { SystemAuditMetricsChart } from "./SystemAuditMetricsChart";
import { ChapterTitle, ReportPanel, ReportPanelHeader } from "../../ReportSections";

export const SystemAuditSection: React.FC = () => {
  const metricDerivationGroups = [
    {
      stage: "基础输入",
      className: "report-metric-group-input",
      stageClassName: "report-metric-stage-input",
      rows: [
        {
          metric: "总订单量",
          meaning: "每月提款订单总规模",
          calculation: "已知：2,200,000单/月",
          conclusion: "测算基数",
        },
        {
          metric: "实际问题订单",
          meaning: "每月实际存在问题的订单",
          calculation: "已知：42,000单/月",
          conclusion: "召回基数",
        },
        {
          metric: "系统错误率基准",
          meaning: "系统放行的问题订单占系统审核量的比例",
          calculation: "沿用当前人工审核错误率：7‰",
          conclusion: "系统错误率不高于7‰",
          tone: "risk",
        },
      ],
    },
    {
      stage: "目标分流",
      className: "report-metric-group-split",
      stageClassName: "report-metric-stage-split",
      rows: [
        {
          metric: "系统审核率",
          meaning: "系统处理的订单占比，代表效率目标",
          calculation: "目标设定：80%",
          conclusion: "系统审核率80%",
        },
        {
          metric: "人工审核率",
          meaning: "人工处理的订单占比，代表人工容量约束",
          calculation: "目标设定：20%",
          conclusion: "人工审核率20%",
        },
        {
          metric: "系统审核量",
          meaning: "系统每月处理规模",
          calculation: "2,200,000 × 80% = 1,760,000",
          conclusion: "1,760,000单/月",
        },
        {
          metric: "人工审核量",
          meaning: "人工每月处理规模",
          calculation: "2,200,000 × 20% = 440,000",
          conclusion: "440,000单/月",
        },
      ],
    },
    {
      stage: "质量底线",
      className: "report-metric-group-quality",
      stageClassName: "report-metric-stage-quality",
      rows: [
        {
          metric: "系统最大错误单量",
          meaning: "系统最多可漏出的问题订单",
          calculation: "1,760,000 × 7‰ = 12,320",
          conclusion: "不超过12,320单/月",
          tone: "risk",
        },
      ],
    },
    {
      stage: "召回要求",
      className: "report-metric-group-recall",
      stageClassName: "report-metric-stage-recall",
      rows: [
        {
          metric: "至少识别问题订单",
          meaning: "必须识别并转人工的问题订单",
          calculation: "42,000 - 12,320 = 29,680",
          conclusion: "不少于29,680单/月",
        },
        {
          metric: "问题召回率",
          meaning: "识别并转人工的问题订单占全部问题订单的比例",
          calculation: "29,680 ÷ 42,000 = 70.67%",
          conclusion: "不低于70.67%",
        },
      ],
    },
    {
      stage: "人工池结果",
      className: "report-metric-group-result",
      stageClassName: "report-metric-stage-result",
      rows: [
        {
          metric: "问题命中率",
          meaning: "人工审核池中实际问题订单占比",
          calculation: "29,680 ÷ 440,000 = 6.75%",
          conclusion: "不低于6.75%",
        },
      ],
    },
  ];

  return (
    <div id="section-system-audit" className="space-y-8">
      {/* 3.2 系统审核 模块主标题 */}
      <ChapterTitle>3.2 系统审核</ChapterTitle>

      {/* 3.2 核心价值、关键指标、当前状态与整体进度 */}
      <ModuleStatusCard
        coreValue="持续将风险特征系统化，持续迭代调优，以实现质量和效率的平衡"
        metricsList={[
          { label: "系统审核率", current: "45%", target: "80%" },
          { label: "人工审核率", current: "55%", target: "20%" },
        ]}
        progress="45%"
        estimatedTime="持续进行"
      />

      {/* 系统指标柱状图 */}
      <SystemAuditMetricsChart />

      <ReportPanel className="space-y-5">
        <ReportPanelHeader
          title="系统评估指标"
        />

        <SummaryBox className="mb-0">
          {highlightNumbers(
            "问题召回率是质量底线，决定系统不能漏掉太多问题订单。问题命中率是结果指标，反映人工审核池是否更集中。只有问题召回率[[不低于70.67%]]，问题命中率提升才有意义。"
          )}
        </SummaryBox>

        <div>
          <div className="overflow-x-auto">
            <table className="report-dense-table report-metric-derivation-table min-w-[1100px]">
              <colgroup>
                <col className="w-[12%]" />
                <col className="w-[16%]" />
                <col className="w-[29%]" />
                <col className="w-[24%]" />
                <col className="w-[19%]" />
              </colgroup>
              <thead>
                <tr>
                  <th>阶段</th>
                  <th>指标</th>
                  <th>含义</th>
                  <th>计算过程</th>
                  <th>结论口径</th>
                </tr>
              </thead>
              <tbody>
                {metricDerivationGroups.map((group) =>
                  group.rows.map((row, index) => (
                    <tr key={`${group.stage}-${row.metric}`} className={group.className}>
                      {index === 0 && (
                        <td rowSpan={group.rows.length} className={`font-black text-slate-900 text-center ${group.stageClassName}`}>
                          {group.stage}
                        </td>
                      )}
                      <td className="font-black text-slate-900 report-metric-name">{row.metric}</td>
                      <td className="font-bold text-slate-900 report-metric-meaning">{row.meaning}</td>
                      <td className="font-black text-slate-900 font-mono report-metric-calculation">{row.calculation}</td>
                      <td className={`font-black ${row.tone === "risk" ? "text-rose-700" : "text-blue-900"}`}>
                        {row.conclusion}
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </ReportPanel>

      {/* 系统风控策略核心流程 */}
      <div className="bg-white border border-slate-100 rounded-xl p-5 md:p-6 space-y-6 ">
        <div className="border-b border-slate-100 pb-2 mb-4 flex items-center justify-between">
          <CoreActionHeader title={<><span className="w-2.5 h-5 bg-blue-600 rounded-full shrink-0"></span>系统审核流程</>} />
          <span className="text-sm font-black text-blue-900 bg-blue-50 px-3 py-1 rounded border border-blue-200 mt-2">
            全链路闭环
          </span>
        </div>
        <SummaryBox>
          {highlightNumbers("系统先按规则和模型审核订单，人工复核异常结果，再把审核结论回填到系统，持续修正规则、特征和阈值。")}
        </SummaryBox>

        {/* 流程图主容器 */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-4 text-slate-900 w-full pb-6 xl:pb-44">
          
          {/* 1. 提款申请节点 */}
          <div className="flex flex-col items-center justify-center w-36 shrink-0">
            <div className="bg-slate-900 text-white w-28 py-2.5 rounded-lg font-black text-sm text-center flex items-center justify-center gap-2 shadow-sm shrink-0">
              <User className="w-4 h-4 text-white shrink-0" />
              <span>提款申请</span>
            </div>
          </div>

          {/* 连接箭头：提款申请 -> 系统审核 */}
          <div className="flex items-center justify-center text-blue-900 shrink-0">
            <ArrowRight className="w-8 h-8 stroke-[3] rotate-90 xl:rotate-0" />
          </div>

          {/* 2. 策略矩阵校验 */}
          <div className="flex-[4] bg-blue-50 p-5 rounded-lg border border-blue-300 space-y-4 flex flex-col justify-start self-stretch">
            <div className="bg-blue-600 text-white px-3 py-2.5 rounded font-black text-sm text-center flex items-center justify-center gap-1.5 shrink-0">
              <Scale className="w-4 h-4 text-white" />
              系统审核
            </div>

            {/* 步骤一、二、三 横向三列排布 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch text-sm flex-1">
              
              {/* 步骤一：策略矩阵校验 */}
              <div className="bg-white p-3.5 rounded-lg border border-blue-200 flex flex-col justify-between space-y-3">
                <div className="font-black text-blue-900 border-b border-blue-100 pb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>步骤一：策略矩阵校验</span>
                </div>
                
                <div className="flex flex-col gap-2.5 flex-1 justify-around">
                  {/* 防御型规则 */}
                  <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                    <div className="font-black text-blue-900 pb-1 mb-1 border-b border-slate-200 flex justify-between items-center text-xs">
                      <span>防御型规则</span>
                      <span className="bg-blue-100 text-blue-900 px-1.5 py-0.2 rounded font-bold">29个</span>
                    </div>
                    <ul className="space-y-1 text-slate-900 font-bold text-xs">
                      <li className="flex items-start gap-1">
                        <span className="text-blue-600 shrink-0">•</span>
                        <span>异常提款（17个）：模拟器登录、快进快出、钱包负数、高盈利挂起、倍数/率异常、短时大额、流水不达标、首提等</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <span className="text-blue-600 shrink-0">•</span>
                        <span>账户安全（4个）：新设备IP首提、睡眠账号、敏感资料变更后首提、新绑提款账户后首提</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <span className="text-blue-600 shrink-0">•</span>
                        <span>状态关联（8个）：命中高危标签/挂起、关联账号、白名单、特殊上标、场馆转账失败、二次结算、租卖号</span>
                      </li>
                    </ul>
                  </div>

                  {/* 套利型规则 */}
                  <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                    <div className="font-black text-blue-900 pb-1 mb-1 border-b border-slate-200 flex justify-between items-center text-xs">
                      <span>套利型规则</span>
                      <span className="bg-blue-100 text-blue-900 px-1.5 py-0.2 rounded font-bold">10个</span>
                    </div>
                    <ul className="space-y-1 text-slate-900 font-bold text-xs">
                      <li className="flex items-start gap-1">
                        <span className="text-blue-600 shrink-0">•</span>
                        <span>对冲作弊（2个）：棋牌全包、彩票全包</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <span className="text-blue-600 shrink-0">•</span>
                        <span>活动套利（4个）：命中多个套利特征、特邀红利超额、红利超额、高红利占比</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <span className="text-blue-600 shrink-0">•</span>
                        <span>游戏套利（4个）：低赔率注单占比高、高盈利额、卡免费、命中多个套利特征</span>
                      </li>
                    </ul>
                  </div>

                  {/* B端风控API */}
                  <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                    <div className="font-black text-blue-900 pb-1 mb-1 border-b border-slate-200 flex justify-between items-center text-xs">
                      <span>B端风控API</span>
                      <span className="bg-blue-100 text-blue-900 px-1.5 py-0.2 rounded font-bold">3个</span>
                    </div>
                    <ul className="space-y-1 text-slate-900 font-bold text-xs">
                      <li className="flex items-start gap-1">
                        <span className="text-blue-600 shrink-0">•</span>
                        <span>场馆API：体育、真人、电子的风控API实时对接</span>
                      </li>             
                    </ul>
                  </div>
                </div>
              </div>

              {/* 步骤二：计算风险分数 */}
              <div className="bg-white p-3.5 rounded-lg border border-blue-200 flex flex-col justify-between space-y-3">
                <div className="font-black text-blue-900 border-b border-blue-100 pb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>步骤二：计算风险分数</span>
                </div>

                <div className="flex flex-col gap-3 flex-1 justify-center bg-blue-50/60 p-3 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-2 font-black text-blue-900 text-xs border-b border-blue-200 pb-1.5">
                    <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>特征汇总计算分数</span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 leading-relaxed">
                    系统汇总步骤一命中的策略规则特征，综合计算风险分值。
                  </p>
                  <div className="space-y-1 text-xs font-bold text-slate-900 bg-white p-2 rounded border border-blue-100">
                    <div className="flex justify-between">
                      <span>• 低风险分：</span>
                      <span className="text-emerald-700 font-black">分值 &lt; 策略阈值参数</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• 高风险分：</span>
                      <span className="text-amber-700 font-black">分值 ≥ 策略阈值参数</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 步骤三：系统决策 */}
              <div className="bg-white p-3.5 rounded-lg border border-blue-200 flex flex-col justify-between space-y-3">
                <div className="font-black text-blue-900 border-b border-blue-100 pb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span>步骤三：系统决策</span>
                </div>

                <div className="flex flex-col gap-3 flex-1 justify-center">
                  {/* 直接出单放行 */}
                  <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-300 space-y-1">
                    <div className="font-black text-emerald-900 flex items-center gap-1.5 text-xs">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>直接出单放行</span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 leading-relaxed">
                      低风险提单直接系统放行。
                    </p>
                  </div>

                  {/* 转入人工审核 */}
                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-300 space-y-1">
                    <div className="font-black text-amber-900 flex items-center gap-1.5 text-xs">
                      <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>转入人工审核</span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 leading-relaxed">
                      高风险提单转入人工审核。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 反向连接箭头：评估反馈 -> 系统审核 */}
          <div className="flex items-center justify-center text-blue-900 shrink-0">
            <ArrowLeft className="w-8 h-8 stroke-[3] rotate-90 xl:rotate-0" />
          </div>

          {/* 3. 评估反馈 */}
          <div className="relative flex flex-col items-center justify-center w-36 shrink-0">
            <div className="bg-slate-900 text-white w-28 py-2.5 rounded-lg font-black text-sm text-center flex items-center justify-center gap-2 shadow-sm shrink-0">
              <RotateCcw className="w-4 h-4 text-white shrink-0" />
              <span>评估反馈</span>
            </div>
            
            {/* 效果归因回溯 */}
            <div className="xl:absolute xl:top-[calc(100%+12px)] xl:left-1/2 xl:-translate-x-1/2 xl:right-auto w-[180px] mt-4 xl:mt-0 space-y-2 text-left bg-amber-50 p-3 rounded-lg border border-amber-200 shadow-sm z-10">
              <div className="text-xs font-black text-amber-900 border-b border-amber-200 pb-1 flex items-center justify-between">
                <span>效果归因回溯</span>
                <span className="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded text-xs">两项评估</span>
              </div>
              <div className="space-y-1.5">
                <div>
                  <div className="text-xs font-black text-slate-900">1. 问题召回率回溯（核对漏报）</div>
                  <p className="text-xs font-bold text-slate-900 leading-normal">
                    还原漏网提单特征，持续提升攻击拦截率与黑产覆盖。
                  </p>
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">2. 问题命中率回溯（核对误报）</div>
                  <p className="text-xs font-bold text-slate-900 leading-normal">
                    精细化阈值参数调优，最大程度减少正常用户的系统摩擦。
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
