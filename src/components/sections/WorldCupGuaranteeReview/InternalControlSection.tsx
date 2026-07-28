import React from "react";
import { Shield, Search, Eye, AlertTriangle, FileText, UserX, Check, Lock, Database } from "lucide-react";
import { CoreActionHeader, SummaryBox, highlightNumbers } from "./utils";
import { ChapterTitle } from "../../ReportSections";

export const InternalControlSection: React.FC = () => {
  return (
    <div id="section-internal-control" className="space-y-10">
      {/* 2.2 内控概览 模块主标题 */}
      <ChapterTitle>2.2 内控数据</ChapterTitle>

      <SummaryBox>
        {highlightNumbers(
          "全面监控外部勾结稽查以及内部日常关键操作。主要包括红利发放、敏感信息修改、异常登录等高风险场景，建立完整的行为记录与追溯机制，确保所有内部管理动作有据可查、发现异常即时预警。",
        )}
      </SummaryBox>

      {/* 2.2.1 核心手段和线索来源 */}
      <div className="bg-white border border-slate-100 rounded-xl p-6 md:p-8 space-y-6 ">
        <div className="border-b border-slate-100 pb-2"><CoreActionHeader title={<><span className="w-2 h-6 bg-blue-600 rounded-full"></span>2.2.1 核心线索来源</>} /></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* 1. 群组监测 */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>渠道群组监测</span>
            </div>
            <p className="text-sm text-slate-900 font-bold leading-relaxed">
              日常排查各公开信息渠道，了解掌握最新黑产动向与异常订单线索。
            </p>
          </div>

          {/* 2. 合规稽查 */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>合规日常稽查</span>
            </div>
            <p className="text-sm text-slate-900 font-bold leading-relaxed">
              定期对新入职员工及高风险岗位进行业务流程合规抽检。
            </p>
          </div>

          {/* 3. 配置修改预警 */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>配置修改预警</span>
            </div>
            <p className="text-sm text-slate-900 font-bold leading-relaxed">
              实时监测后台参数变动，如会员返水比例、出款通道费率、代理方案等修改。
            </p>
          </div>

          {/* 4. 出款预警 */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>审核与出款预警</span>
            </div>
            <p className="text-sm text-slate-900 font-bold leading-relaxed">
              监控非审核人强行代审、多人流转异常、被同人多次审核等高危风险动作。
            </p>
          </div>

          {/* 5. 线索举报 */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>匿名线索举报</span>
            </div>
            <p className="text-sm text-slate-900 font-bold leading-relaxed">
              开通匿名举报渠道，收集核实内部及外部提供的异常操作线索。
            </p>
          </div>

          {/* 6. 行为录屏监控 */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-black text-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>行为录屏监控</span>
            </div>
            <p className="text-sm text-slate-900 font-bold leading-relaxed">
              对核心管理页面与出款操作进行屏幕流记录，防范违规操作。
            </p>
          </div>
        </div>
      </div>

      {/* 2.2.2 违规高危场景 */}
      <div className="bg-white border border-slate-100 rounded-xl p-6 md:p-8 space-y-6">
        <div className="border-b border-slate-100 pb-2"><CoreActionHeader title={<><span className="w-2 h-6 bg-rose-600 rounded-full"></span>2.2.2 违规高危场景</>} /></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. 小飞机群信息 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-rose-900 font-black text-base">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
                <span>1. 小飞机群信息风险</span>
              </div>
              <p className="text-sm text-slate-900 font-bold leading-relaxed">
                群内成员通过搜索关键信息即可轻易获取敏感信息，以此进行不当获利，对信息安全造成极大威胁。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 space-y-1">
              <div className="text-xs font-black text-slate-900 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                <span>解决策略：</span>
              </div>
              <p className="text-xs text-slate-900 font-bold leading-relaxed">
                逐步取消飞机群，详情见下文章节说明。
              </p>
            </div>
          </div>

          {/* 2. 内部勾结出款 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-rose-900 font-black text-base">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
                <span>2. 内部勾结出款风险</span>
              </div>
              <p className="text-sm text-slate-900 font-bold leading-relaxed">
                涉及 KYC 审核、佣金审核、出款审核出款等多关键环节，极易形成上下游的内部链条合作与作恶。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 space-y-1">
              <div className="text-xs font-black text-slate-900 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                <span>解决策略：</span>
              </div>
              <p className="text-xs text-slate-900 font-bold leading-relaxed">
                核心审核环节启动全新审核流程；如KYC、提款、佣金等正在改造中，详情见下文章节说明。
              </p>
            </div>
          </div>

          {/* 3. 业绩任务造假 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-rose-900 font-black text-base">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span>
                <span>3. 业绩任务造假欺诈</span>
              </div>
              <p className="text-sm text-slate-900 font-bold leading-relaxed">
                利用 AI 工具 P 图伪造与会员的真实对话记录，虚假伪装会员参与平台活动，以此违规完成个人业绩指标。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 space-y-1">
              <div className="text-xs font-black text-slate-900 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                <span>解决策略：</span>
              </div>
              <p className="text-xs text-slate-900 font-bold leading-relaxed">
                引入隐性反舞弊策略，精准识别是否为真实用户，非真实用户立即触发系统稽查预警，详情见下文章节说明。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2.2.3 内控数据概览 */}
      <div className="bg-white border border-slate-100 rounded-xl p-6 md:p-8 space-y-6 ">
        <div className="border-b border-slate-100 pb-2 mb-4"><CoreActionHeader title={<><span className="w-2 h-6 bg-blue-600 rounded-full shrink-0"></span>2.2.3 内控数据概览</>} /></div>

        {/* 核心违规人员汇总大卡 */}
        <div className="bg-slate-900 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-base font-black text-white">违规处理总计</div>
            <p className="text-sm text-slate-200 font-bold">通过渠道稽查与数据链条监控精准定位</p>
          </div>
          <div className="flex items-baseline gap-4 font-mono">
            <div>
              <span className="text-3xl md:text-4xl font-black text-white">225</span>
              <span className="text-sm text-slate-200 font-bold ml-1">人</span>
            </div>
            <div className="text-2xl md:text-3xl font-black text-amber-400">
              178,140 <span className="text-base text-amber-300 font-sans font-bold">U</span>
            </div>
          </div>
        </div>

        {/* 6个细分数据看板 - 扁平化，去除卡片嵌套边框 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* 1. 红利类型派错 */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-3">
            <div className="text-sm font-black text-slate-900">红利类型派错</div>
            <div className="flex items-baseline gap-2 font-mono">
              <span className="text-2xl font-black text-slate-900">1143</span>
              <span className="text-sm text-slate-900 font-bold">人</span>
              <span className="text-xl font-black text-rose-900 ml-auto">36.69</span>
            </div>
            <div className="pt-2 border-t border-slate-100 text-sm font-bold text-slate-900">
              通过每日复核机制查获并退回
            </div>
          </div>

          {/* 2. 红利流水派错 */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-3">
            <div className="text-sm font-black text-slate-900">红利流水派错</div>
            <div className="flex items-baseline gap-2 font-mono">
              <span className="text-2xl font-black text-slate-900">465</span>
              <span className="text-sm text-slate-900 font-bold">人</span>
              <span className="text-xl font-black text-rose-900 ml-auto">6.79</span>
            </div>
            <div className="pt-2 border-t border-slate-100 text-sm font-bold text-slate-900">
              通过每日复核机制查获并修正
            </div>
          </div>

          {/* 3. 平台敏感信息修改 */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-3">
            <div className="text-sm font-black text-slate-900">平台敏感参数修改</div>
            <div className="flex items-baseline gap-2 font-mono">
              <span className="text-2xl font-black text-slate-900">52</span>
              <span className="text-sm text-slate-900 font-bold">条</span>
            </div>
            <div className="pt-2 border-t border-slate-100 text-sm font-bold text-slate-900">
              涵盖返水比例、通道费率、代理分红、财务存提等
            </div>
          </div>

          {/* 4. 玩家敏感信息修改 */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-3">
            <div className="text-sm font-black text-slate-900">玩家敏感信息修改</div>
            <div className="flex items-baseline gap-2 font-mono">
              <span className="text-2xl font-black text-slate-900">17166</span>
              <span className="text-sm text-slate-900 font-bold">条</span>
            </div>
            <div className="pt-2 border-t border-slate-100 text-sm font-bold text-slate-900 leading-relaxed">
              修改漏记/错记 <span className="font-black text-rose-900">248条</span>
            </div>
          </div>

          {/* 5. 后台登陆IP监测 */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-3">
            <div className="text-sm font-black text-slate-900">后台登陆IP监测</div>
            <div className="flex items-baseline gap-2 font-mono">
              <span className="text-2xl font-black text-slate-900">568+</span>
              <span className="text-sm text-slate-900 font-bold">个常用IP</span>
            </div>
            <div className="pt-2 border-t border-slate-100 text-sm font-bold text-slate-900">
              其中 <span className="font-black text-amber-900">16条</span> 异常跳跃登录节点已全部核实
            </div>
          </div>

          {/* 6. 敏感数据导出监测 */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 space-y-3">
            <div className="text-sm font-black text-slate-900">敏感数据导出监测</div>
            <div className="flex items-baseline gap-2 font-mono">
              <span className="text-2xl font-black text-slate-900">49,114</span>
              <span className="text-sm text-slate-900 font-bold">次</span>
            </div>
            <div className="pt-2 border-t border-slate-100 text-sm font-black text-emerald-900">
              经人工及系统双向复核，未发现泄露行为
            </div>
          </div>
        </div>
      </div>

      {/* 2.2.4 典型违规案例剖析 */}
      <div className="bg-white border border-slate-100 rounded-xl p-6 md:p-8 space-y-6">
        <div className="border-b border-slate-100 pb-2 mb-4"><CoreActionHeader title={<><span className="w-2 h-6 bg-blue-600 rounded-full shrink-0"></span>2.2.4 典型违规案例剖析</>} /></div>

        <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 space-y-6">
          <div className="flex items-center gap-2 text-rose-900 font-black text-lg border-b border-rose-200 pb-3">
            <AlertTriangle className="w-6 h-6 text-rose-900 shrink-0" />
            <span>外包审核质量及管理人员违规专项案例</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 案例背景 */}
            <div className="bg-white p-5 rounded-lg border border-rose-200 space-y-2">
              <span className="font-black text-rose-950 block text-base">一、背景</span>
              <p className="text-sm text-slate-900 font-bold leading-relaxed">
                外包审核质量一直较差，且日常审计中发现存在内部敏感数据泄露案例；据此JC在 5 月正式启动专项治理。
              </p>
            </div>

            {/* 专项跟进与录屏分析 */}
            <div className="bg-white p-5 rounded-lg border border-rose-200 space-y-2">
              <span className="font-black text-rose-950 block text-base">二、专项跟进与录屏分析</span>
              <p className="text-sm text-slate-900 font-bold leading-relaxed">
                对全部外包账号进行全量跟进和录屏深度分析。结果显示，审核过程中不规范操作的占比达 <span className="text-blue-600 font-black text-base">33%</span>。
              </p>
            </div>

            {/* 监控与不当获利 */}
            <div className="bg-white p-5 rounded-lg border border-rose-200 space-y-2">
              <span className="font-black text-rose-950 block text-base">三、深度挖掘与处理情况</span>
              <p className="text-sm text-slate-900 font-bold leading-relaxed">
                对负责外包管理的相关责任人 <span className="text-blue-600 font-black">Hu*h</span> 进行定向监控，最终锁定并查实其不仅不尽管理职责、内外违规操作，且利用职权进行不当获利的严重违规行为。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
