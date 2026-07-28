import React from "react";
import { CoreActionHeader, SummaryBox, highlightNumbers } from "./utils";
import { Scale, User, ShieldAlert, CheckCircle, RotateCcw, ArrowRight, ArrowLeft } from "lucide-react";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { SystemAuditMetricsChart } from "./SystemAuditMetricsChart";
import { ChapterTitle } from "../../ReportSections";

export const SystemAuditSection: React.FC = () => {
  return (
    <div id="section-system-audit" className="space-y-8">
      {/* 3.2 系统审核 模块主标题 */}
      <ChapterTitle>3.2 系统审核</ChapterTitle>

      {/* 3.2 核心价值、关键指标、当前状态与整体进度 */}
      <ModuleStatusCard
        coreValue="持续将风险特征系统化，持续迭代调优，以实现质量和效率的平衡"
        metricsList={[
          { label: "召回率", current: "51.25%", target: "95%+" },
          { label: "准确率", current: "11.40%", target: "90%+" },
        ]}
        progress="50%"
        estimatedTime="持续进行"
      />

      {/* 核心指标口径与相互关系说明 */}
      <div className="bg-white border border-slate-100 rounded-xl p-5 md:p-6 space-y-5 ">
                <div className="flex items-start justify-between border-b border-slate-100 pb-2">
          <CoreActionHeader
            title={<><Scale className="w-5 h-5 text-blue-900 shrink-0" />系统评估指标</>}
            desc="策略以及特征[[100+]]，调整任意一个都会影响[[召回率和准确率]]，是一项从[[评估]]、[[调整]]、[[上线]]、[[数据]]、[[迭代]]的[[长期持续进行的工程]]"
            summaryStyle={true}
          />
          <span className="text-sm font-black text-blue-900 bg-blue-50 px-3 py-1 rounded self-start mt-2 hidden md:block shrink-0 ml-4">
            召回率 与 准确率
          </span>
        </div>

        {/* 核心指标与相互制约关系说明（3列架构） */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3.5 items-stretch">
          {/* 召回率 */}
          <div className="lg:col-span-2 bg-slate-50 p-4 rounded-lg flex flex-col justify-between space-y-3 text-center">
            <div className="space-y-1.5">
              <div className="text-sm font-black text-blue-900">
                召回率 = 系统拦截真风险单 / 实际总风险单
              </div>
              <p className="text-sm font-bold text-slate-900 leading-relaxed">
                越高代表不漏报，所有风险订单都会被拦截。
              </p>
            </div>
            <div className="bg-white/90 p-2.5 rounded text-sm font-bold text-slate-900">
              <span className="text-blue-900 font-black">示例：</span>实际有 <span className="font-black text-blue-900">100</span> 单风险，系统拦截到 <span className="font-black text-blue-900">90</span> 单 → 召回率 <span className="font-black text-blue-900">90%</span>
            </div>
          </div>

          {/* 相互制约关系（置于中间） */}
          <div className="lg:col-span-1 bg-slate-100 p-3.5 rounded-lg flex flex-col justify-center text-center space-y-2">
            <div className="text-sm font-black text-slate-900 pb-1 border-b border-slate-100">
              ◄ 相互制约 ►
            </div>
            <div className="space-y-2 text-sm font-black text-slate-900">
              <div className="bg-white/90 p-2 rounded">
                <div>召回率高 → 准确率低</div>
                <div className="text-sm font-black text-slate-900 mt-1 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">（防得严，易误伤）</div>
              </div>
              <div className="bg-white/90 p-2 rounded">
                <div>准确率高 → 召回率低</div>
                <div className="text-sm font-black text-slate-900 mt-1 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">（判得准，易漏报）</div>
              </div>
            </div>
          </div>

          {/* 准确率 */}
          <div className="lg:col-span-2 bg-slate-50 p-4 rounded-lg flex flex-col justify-between space-y-3 text-center">
            <div className="space-y-1.5">
              <div className="text-sm font-black text-blue-900">
                准确率 = 系统拦截真风险单 / 系统拦截总订单
              </div>
              <p className="text-sm font-bold text-slate-900 leading-relaxed">
                越高代表不误报，拦截的订单都是有风险的。
              </p>
            </div>
            <div className="bg-white/90 p-2.5 rounded text-sm font-bold text-slate-900">
              <span className="text-blue-900 font-black">示例：</span>系统拦截 <span className="font-black text-blue-900">100</span> 单，其中 <span className="font-black text-blue-900">95</span> 单真风险 → 准确率 <span className="font-black text-blue-900">95%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 系统指标柱状图 */}
      <SystemAuditMetricsChart />

      {/* 系统风控策略核心流程 */}
      <div className="bg-white border border-slate-100 rounded-xl p-5 md:p-6 space-y-6 ">
        <div className="border-b border-slate-100 pb-2 mb-4 flex items-center justify-between">
          <CoreActionHeader title={<><span className="w-2.5 h-5 bg-blue-600 rounded-full shrink-0"></span>系统审核流程</>} />
          <span className="text-sm font-black text-blue-900 bg-blue-50 px-3 py-1 rounded border border-blue-200 mt-2">
            全链路闭环
          </span>
        </div>

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
                  <div className="space-y-1 text-xs font-bold text-slate-800 bg-white p-2 rounded border border-blue-100">
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
            <div className="bg-amber-600 text-white w-28 py-2.5 rounded-lg font-black text-sm text-center flex items-center justify-center gap-2 shadow-sm shrink-0">
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
                  <div className="text-xs font-black text-slate-900">1. 召回率回溯（核对漏报）</div>
                  <p className="text-xs font-bold text-slate-800 leading-normal">
                    还原漏网提单特征，持续提升攻击拦截率与黑产覆盖。
                  </p>
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">2. 准确率回溯（核对误报）</div>
                  <p className="text-xs font-bold text-slate-800 leading-normal">
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
