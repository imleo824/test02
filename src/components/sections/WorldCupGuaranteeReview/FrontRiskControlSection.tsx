import React from "react";
import { SummaryBox, highlightNumbers } from "./utils";
import { ShieldAlert, ArrowRight } from "lucide-react";
import { ModuleStatusCard } from "./ModuleStatusCard";
import { ChapterTitle } from "../../ReportSections";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const monthlyTrendData = [
  { month: "4月", 总人工订单: 1900143, 总有标订单: 554418, 提款有标率: 29.2 },
  { month: "5月", 总人工订单: 1775260, 总有标订单: 556082, 提款有标率: 31.3 },
  { month: "6月", 总人工订单: 2545113, 总有标订单: 667227, 提款有标率: 26.2 },
];

export const FrontRiskControlSection: React.FC = () => {
  return (
    <div id="section-front-risk-control" className="space-y-8">
      {/* 3.1 风控前置 模块主标题 */}
      <ChapterTitle>3.1 风控前置</ChapterTitle>

      {/* 3.1 核心价值、关键指标、当前状态与整体进度 */}
      <ModuleStatusCard
        coreValue="提前发现异常风险，进行上标备注，降低系统出款风险，提升提款审核效率"
        metricLabel="提款有标率"
        currentStatus="30%"
        keyMetrics="50%+"
        progress="60%"
        estimatedTime="9月"
      />

      {/* 各站点提款有标率及订单明细双轴图 */}
      <div className="bg-white border border-slate-300 rounded-xl p-6 space-y-4 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-3 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-5 bg-slate-900 rounded-full"></span>
            <h3 className="text-lg font-black text-slate-900">提款有标率</h3>
          </div>
        </div>

        <SummaryBox>
          <div className="space-y-3">
            <div className="text-slate-900 font-bold text-sm leading-relaxed">
              {highlightNumbers(
                "Q2提款有标率整体维持在 [[26%]]~[[31%]]。6月世界杯期间单量暴增 [[43.4%]] 且新用户居多，导致有标率略有回落。"
              )}
            </div>
            <div className="pt-2 border-t border-blue-200/80">
              <div className="text-sm font-black text-blue-950 mb-1.5 flex items-center gap-1.5">
                <span>持续提升提款有标率的 3 个手段：</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs font-bold text-slate-900">
                <div className="bg-white/80 p-2.5 rounded border border-blue-200">
                  <span className="font-black text-blue-900 block mb-0.5">1. 系统自动预警</span>
                  <span>不依赖单一规则，抽象多维指标全方位覆盖，分实时、时级、天级多时效前置识别。</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded border border-blue-200">
                  <span className="font-black text-blue-900 block mb-0.5">2. 系统自动上标</span>
                  <span>监测核心事件触发，自动跨站扫描关联同局/同设备/高危账号并同步上标。</span>
                </div>
                <div className="bg-white/80 p-2.5 rounded border border-blue-200">
                  <span className="font-black text-blue-900 block mb-0.5">3. 人工主动上标</span>
                  <span>在订单低峰期主动排查高危前置打标锁定，释放高峰期审单瓶颈压力。</span>
                </div>
              </div>
            </div>
          </div>
        </SummaryBox>

        <div className="h-[380px] w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={monthlyTrendData} margin={{ top: 25, right: 35, left: 15, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#0f172a" tick={{ fill: "#0f172a", fontWeight: 800, fontSize: 14 }} />
              <YAxis 
                yAxisId="left" 
                stroke="#0f172a" 
                tick={{ fill: "#0f172a", fontWeight: 700 }} 
                tickFormatter={(val) => `${(val / 10000).toFixed(0)}万`}
                domain={[0, 4500000]}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke="#0f172a" 
                domain={[0, 40]} 
                tick={{ fill: "#0f172a", fontWeight: 700 }} 
                tickFormatter={(val) => `${val}%`}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: "#0f172a", color: "#ffffff", borderRadius: "8px", border: "none", fontWeight: "bold" }}
                itemStyle={{ color: "#ffffff" }}
                formatter={(value: any, name: any) => {
                  if (name === "提款有标率(%)") {
                    return [`${value}%`, name];
                  }
                  return [`${Number(value).toLocaleString()} 单 (${(Number(value) / 10000).toFixed(2)}万)`, name];
                }}
              />
              <Legend wrapperStyle={{ fontWeight: "bold", color: "#0f172a", paddingTop: "10px" }} />
              <Bar yAxisId="left" dataKey="总人工订单" fill="#0f172a" name="总人工订单" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                <LabelList 
                  dataKey="总人工订单" 
                  position="top" 
                  formatter={(val: any) => `${(Number(val) / 10000).toFixed(1)}万`}
                  style={{ fill: "#0f172a", fontWeight: 800, fontSize: 12 }} 
                />
              </Bar>
              <Bar yAxisId="left" dataKey="总有标订单" fill="#3b82f6" name="总有标订单" radius={[4, 4, 0, 0]} isAnimationActive={false}>
                <LabelList 
                  dataKey="总有标订单" 
                  position="top" 
                  formatter={(val: any) => `${(Number(val) / 10000).toFixed(1)}万`}
                  style={{ fill: "#334155", fontWeight: 800, fontSize: 12 }} 
                />
              </Bar>
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="提款有标率" 
                stroke="#0f172a" 
                strokeWidth={3} 
                name="提款有标率(%)" 
                isAnimationActive={false}
                dot={{ r: 6, fill: "#0f172a", strokeWidth: 2, stroke: "#ffffff" }} 
              >
                <LabelList 
                  dataKey="提款有标率" 
                  position="top" 
                  formatter={(val: any) => `${val}%`}
                  style={{ fill: "#0f172a", fontWeight: 900, fontSize: 13 }} 
                />
              </Line>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 核心前置流程图与三大维度架构：1行3列直接铺开 */}
      <div className="grid grid-cols-1 gap-6">
          {/* 第一列：3.1.1 系统自动预警 */}
          <div
            id="section-3-1-1"
            className="bg-[#f8fafc] border border-slate-100 rounded-xl p-5 space-y-4 flex flex-col justify-between "
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-5 bg-blue-600 rounded-full"></span>
                  <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900">
                    系统自动预警
                  </h4>
                </div>
                <span className="text-sm font-black text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                  轻度风险
                </span>
              </div>

              {/* 核心三要素 */}
        

              {/* 处置流向 */}
              <div className="bg-white border border-slate-100 rounded-lg p-3.5 space-y-2.5">
                <span className="text-sm font-black text-slate-900 block border-b border-slate-100 pb-1.5">
                  上标流程
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-bold text-slate-900 text-center">
                  <div className="bg-slate-50 p-2 rounded border border-slate-200 flex flex-col justify-center space-y-1 shadow-sm">
                    <span className="text-slate-900 font-black">1. 预警规则</span>
                    <span className="text-xs text-slate-600 font-normal">覆盖会员与游戏多维</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded border border-slate-200 flex flex-col justify-center space-y-1 shadow-sm">
                    <span className="text-slate-900 font-black">2. 推工作群</span>
                    <span className="text-xs text-slate-600 font-normal">脱敏信息通知</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded border border-slate-200 flex flex-col justify-center space-y-1 shadow-sm">
                    <span className="text-slate-900 font-black">3. 专人跟进</span>
                    <span className="text-xs text-slate-600 font-normal">15 分钟响应</span>
                  </div>
                  <div className="bg-slate-900 text-white p-2 rounded flex flex-col justify-center space-y-1 shadow-sm">
                    <span className="font-black">4. 确认异常</span>
                    <span className="text-xs text-emerald-400 font-black">→ 风险上标</span>
                  </div>
                </div>
              </div>

              {/* 系统预警维度覆盖（共21项） */}
              <div className="bg-white border border-slate-100 rounded-lg p-3.5 space-y-3">
                <div className="space-y-1.5 border-b border-slate-100 pb-2">
                  <span className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <ShieldAlert className="w-4.5 h-4.5 text-slate-900" />
                    系统预警维度覆盖（共 <span className="text-blue-900 font-black underline decoration-2">21 项</span>）
                  </span>
                  <p className="text-sm font-bold text-slate-900 leading-relaxed">
                    不依赖单一规则，抽象为四大核心维度进行全方位覆盖，分实时、时级、天级多时效前置识别
                  </p>
                </div>

                <div className="space-y-1.5">
                  {[
                    { event: "玩家（盈利维度）", desc: "对玩家单笔、周期等盈利和胜率进行异常预警监控", badge: "5项" },
                    { event: "玩家（账户维度）", desc: "对多账号关联设备、IP聚类及身份环境异常的预警监控", badge: "4项" },
                    { event: "玩家（行为维度）", desc: "对高频、算牌、偏好等下注异常预警监控", badge: "6项" },
                    { event: "游戏（杀率维度）", desc: "对游戏、场馆的盈亏率进行异常预警监控", badge: "6项" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-slate-50 p-2.5 rounded border border-slate-100 text-sm font-bold gap-3 shadow-sm">
                      <div className="space-y-1 min-w-0 flex-1">
                        <span className="text-slate-900 block font-black text-sm">{item.event}</span>
                        <p className="text-slate-900 text-sm font-bold leading-normal">{item.desc}</p>
                      </div>
                      <span className="px-2 py-1 rounded text-sm font-black shrink-0 bg-blue-50 text-blue-900 border border-blue-200">
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 第二列：3.1.2 系统自动上标 */}
          <div
            id="section-3-1-2"
            className="bg-[#f8fafc] border border-slate-100 rounded-xl p-5 space-y-4 flex flex-col justify-between "
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-5 bg-blue-600 rounded-full"></span>
                  <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900">
                    系统自动上标
                  </h4>
                </div>
                <span className="text-sm font-black text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                  重度风险
                </span>
              </div>

              {/* 处置流向 */}
              <div className="bg-white border border-slate-100 rounded-lg p-3.5 space-y-2.5">
                <span className="text-sm font-black text-slate-900 block border-b border-slate-100 pb-1.5">
                  上标流程
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-bold text-slate-900 text-center">
                  <div className="bg-slate-50 p-2 rounded border border-slate-200 flex flex-col justify-center space-y-1 shadow-sm">
                    <span className="text-slate-900 font-black">1. 定义触发事件</span>
                    <span className="text-xs text-slate-600 font-normal">监测关键事件触发</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded border border-slate-200 flex flex-col justify-center space-y-1 shadow-sm">
                    <span className="text-slate-900 font-black">2. 定义上标规则</span>
                    <span className="text-xs text-slate-600 font-normal">基于场景定义不同规则</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded border border-slate-200 flex flex-col justify-center space-y-1 shadow-sm">
                    <span className="text-slate-900 font-black">3. 异步执行计算</span>
                    <span className="text-xs text-slate-600 font-normal">不需实时阻塞主流程</span>
                  </div>
                  <div className="bg-slate-900 text-white p-2 rounded flex flex-col justify-center space-y-1 shadow-sm">
                    <span className="font-black">4. 确认异常</span>
                    <span className="text-xs text-emerald-400 font-black">→ 风险上标</span>
                  </div>
                </div>
              </div>

              {/* 自动打标规则清单 */}
              <div className="bg-white border border-slate-100 rounded-lg p-3.5 space-y-3">
                <div className="space-y-1.5 border-b border-slate-100 pb-2">
                  <span className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <ShieldAlert className="w-4.5 h-4.5 text-slate-900" />
                    自动打标事件（共 <span className="text-blue-900 font-black underline decoration-2">5 项</span>）
                  </span>
                  <p className="text-sm font-bold text-slate-900 leading-relaxed pl-5">
                    监测核心业务事件，触发自动跨站扫描全部相关高危账号进行自动上标，执行效率提升几十倍
                  </p>
                </div>
                <div className="space-y-3">
                  {/* 下注事件 */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-3 shadow-sm">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                      <div className="flex items-center gap-1.5 text-slate-900 font-black text-sm">
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                        <span>下注事件</span>
                      </div>
                    </div>
                    <div className="space-y-2.5 pl-1.5">
                      {/* 子元素 1 */}
                      <div className="bg-white border border-slate-200 p-2.5 rounded-lg space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-slate-900 font-black text-xs">
                            <span className="w-1 h-1 bg-emerald-600 rounded-full"></span>
                            <span>① 下注野鸡赛事</span>
                          </div>
                          <span className="px-2 py-0.5 rounded text-xs font-black shrink-0 bg-emerald-50 text-emerald-900 border border-emerald-200">
                            已上线
                          </span>
                        </div>
                      </div>
                      {/* 子元素 2 */}
                      <div className="bg-white border border-slate-200 p-2.5 rounded-lg space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-slate-900 font-black text-xs">
                            <span className="w-1 h-1 bg-emerald-600 rounded-full"></span>
                            <span>② 同局关联下注</span>
                          </div>
                          <span className="px-2 py-0.5 rounded text-xs font-black shrink-0 bg-amber-50 text-amber-900 border border-amber-200">
                            需求时间：20251027
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 风控事件 */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-3 shadow-sm">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                      <div className="flex items-center gap-1.5 text-slate-900 font-black text-sm">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                        <span>风控事件</span>
                      </div>
                      <span className="px-2 py-1 rounded text-xs font-black shrink-0 bg-amber-50 text-amber-900 border border-amber-200">
                        需求时间：20260309
                      </span>
                    </div>

                    <div className="space-y-2.5 pl-1.5">
                      {/* 子元素 1: 扣款事件 */}
                      <div className="bg-white border border-slate-200 p-2.5 rounded-lg space-y-1">
                        <div className="flex items-center gap-1.5 text-slate-900 font-black text-xs">
                          <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                          <span>① 扣款事件</span>
                        </div>
                        <p className="text-xs text-slate-900 font-bold leading-relaxed pl-2.5">
                          账号扣款触发跨站多账号关联上标；如某站一个账号被扣款，所有站点与这个账号强关联的账号都会被上标
                        </p>
                      </div>

                      {/* 子元素 2: 禁用事件 */}
                      <div className="bg-white border border-slate-200 p-2.5 rounded-lg space-y-1">
                        <div className="flex items-center gap-1.5 text-slate-900 font-black text-xs">
                          <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                          <span>② 禁用事件</span>
                        </div>
                        <p className="text-xs text-slate-900 font-bold leading-relaxed pl-2.5">
                          账号禁用同步标记同设备与同存款地址关联用户；如某站一个账号被禁用，所有站点与这个账号强关联的账号都会被上标
                        </p>
                      </div>

                      {/* 子元素 3: 上标事件 */}
                      <div className="bg-white border border-slate-200 p-2.5 rounded-lg space-y-1">
                        <div className="flex items-center gap-1.5 text-slate-900 font-black text-xs">
                          <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                          <span>③ 上标事件</span>
                        </div>
                        <p className="text-xs text-slate-900 font-bold leading-relaxed pl-2.5">
                          判定上标自动扫描关联同局下注并同步上标；如某站一个账号被上风控标，所有站点与这个账号强关联的账号都会被上标
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第三列：3.1.3 人工主动扫描 */}
          <div
            id="section-3-1-3"
            className="bg-[#f8fafc] border border-slate-100 rounded-xl p-5 space-y-4 flex flex-col justify-between "
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-5 bg-blue-600 rounded-full"></span>
                  <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900">
                    人工主动上标
                  </h4>
                </div>
                <span className="text-sm font-black text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                  重度风险
                </span>
              </div>

              {/* 处置流向 */}
              <div className="bg-white border border-slate-100 rounded-lg p-3.5 space-y-2.5">
                <span className="text-sm font-black text-slate-900 block border-b border-slate-100 pb-1.5">
                  上标流程
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-bold text-slate-900 text-center">
                  <div className="bg-slate-50 p-2 rounded border border-slate-200 flex flex-col justify-center space-y-1 shadow-sm">
                    <span className="text-slate-900 font-black">1. 风险用户筛选</span>
                    <span className="text-xs text-slate-600 font-normal">批量注册、关联用户等</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded border border-slate-200 flex flex-col justify-center space-y-1 shadow-sm">
                    <span className="text-slate-900 font-black">2. 锁定重点对象</span>
                    <span className="text-xs text-slate-600 font-normal">进一步锁定高危用户</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded border border-slate-200 flex flex-col justify-center space-y-1 shadow-sm">
                    <span className="text-slate-900 font-black">3. 专人深度核查</span>
                    <span className="text-xs text-slate-600 font-normal">行为与关联交叉复核</span>
                  </div>
                  <div className="bg-slate-900 text-white p-2 rounded flex flex-col justify-center space-y-1 shadow-sm">
                    <span className="font-black">4. 确认异常</span>
                    <span className="text-xs text-emerald-400 font-black">→ 风险上标</span>
                  </div>
                </div>
              </div>

              {/* 常态化削峰填谷成效 */}
              <div className="bg-white border border-slate-100 rounded-lg p-3.5 space-y-3">
                <div className="space-y-1.5 border-b border-slate-100 pb-2">
                  <span className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                    <ShieldAlert className="w-4.5 h-4.5 text-slate-900" />
                    常态人效提升
                  </span>
                  <p className="text-sm font-bold text-slate-900 leading-relaxed">
                    在订单低峰主动完成高风险排查与前置打标，释放高峰期审单压力，大幅提升周转效率
                  </p>
                </div>
                <div className="space-y-1.5">
                  {[
                    { event: "闲时主动巡检", desc: "利用出款及投注低谷时段，风控常态化主动展开深度巡检"},
                    { event: "前置打标锁定", desc: "提款前完成标签判定与锁定，彻底消除玩家资金转移窗口期"},
                    { event: "释放高峰瓶颈", desc: "大幅减轻提款高峰期风控人工审核瓶颈，平滑审单量波动"},
                    { event: "极速审单周转", desc: "缩短疑难及常规订单整体在库周转时长，提升提款体验"},
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-slate-50 p-2.5 rounded border border-slate-100 text-sm font-bold gap-3 shadow-sm">
                      <div className="space-y-1 min-w-0 flex-1">
                        <span className="text-slate-900 block font-black text-sm">{item.event}</span>
                        <p className="text-slate-900 text-sm font-bold leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

