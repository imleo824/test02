import React from "react";
import { CoreActionHeader, SummaryBox, highlightNumbers } from "./utils";

export const AuditOverviewHighVipDetail: React.FC = () => {
  // VIP等级明细数据（最新数据）
  const vipDetailData = [
    {
      vip_level: "VIP6",
      total_people: 394,
      vip_people_pct: "48.64%",
      sports_people: 167, sports_amt: "767.35", sports_pct: "24.77%",
      esports_people: 50, esports_amt: "151.46", esports_pct: "18.15%",
      rent_people: 41, rent_amt: "131.55", rent_pct: "20.18%",
      bonus_people: 116, bonus_amt: "361.79", bonus_pct: "34.83%",
      software_people: 20, software_amt: "68.87", software_pct: "41.14%",
    },
    {
      vip_level: "VIP7",
      total_people: 250,
      vip_people_pct: "30.86%",
      sports_people: 107, sports_amt: "1,398.96", sports_pct: "45.16%",
      esports_people: 44, esports_amt: "415.30", esports_pct: "49.76%",
      rent_people: 29, rent_amt: "139.26", rent_pct: "21.37%",
      bonus_people: 54, bonus_amt: "328.70", bonus_pct: "31.64%",
      software_people: 16, software_amt: "81.22", software_pct: "48.52%",
    },
    {
      vip_level: "VIP8",
      total_people: 122,
      vip_people_pct: "15.06%",
      sports_people: 71, sports_amt: "713.20", sports_pct: "23.02%",
      esports_people: 12, esports_amt: "147.19", esports_pct: "17.63%",
      rent_people: 9, rent_amt: "110.11", rent_pct: "16.89%",
      bonus_people: 24, bonus_amt: "199.88", bonus_pct: "19.24%",
      software_people: 6, software_amt: "17.29", software_pct: "10.33%",
    },
    {
      vip_level: "VIP9",
      total_people: 29,
      vip_people_pct: "3.58%",
      sports_people: 19, sports_amt: "135.39", sports_pct: "4.37%",
      esports_people: 3, esports_amt: "13.30", esports_pct: "1.59%",
      rent_people: 1, rent_amt: "4.48", rent_pct: "0.69%",
      bonus_people: 5, bonus_amt: "64.33", bonus_pct: "6.19%",
      software_people: 1, software_amt: "0.00", software_pct: "0.00%",
    },
    {
      vip_level: "VIP10",
      total_people: 15,
      vip_people_pct: "1.85%",
      sports_people: 7, sports_amt: "83.04", sports_pct: "2.68%",
      esports_people: 3, esports_amt: "107.40", esports_pct: "12.87%",
      rent_people: 1, rent_amt: "266.39", rent_pct: "40.87%",
      bonus_people: 4, bonus_amt: "84.14", bonus_pct: "8.10%",
      software_people: 0, software_amt: "0.00", software_pct: "0.00%",
    },
  ];

  // 类型人数与占比数据
  const typePeopleData = [
    { type: "体育打水", count: 371, pct: "45.80%" },
    { type: "彩金套利", count: 203, pct: "25.06%" },
    { type: "电竞打水", count: 112, pct: "13.83%" },
    { type: "租卖号", count: 81, pct: "10.00%" },
    { type: "软件投注", count: 43, pct: "5.31%" },
  ];

  return (
    <div id="section-audit-high-vip-detail" className="space-y-6 pt-2">
      {/* 模块小标题 - 统一规范 */}
      <div className="border-b border-slate-900 pb-2 mb-4"><CoreActionHeader title={<><span className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0"></span>2.1.6 高V拦截明细</>} /></div>

      {/* 统一总结模块 */}
      <SummaryBox>
        <p className="text-base text-slate-900 font-bold leading-relaxed mb-3">
          {highlightNumbers(
            "高VIP违规玩家处理总金额达[[5,790.60万元]]，共涉及[[810人]]，整体分布特征与专项复盘如下：",
          )}
        </p>
        <ul className="mt-4 list-disc list-outside ml-5 space-y-2 text-slate-900 font-bold">
          <li className="flex items-start gap-2 text-sm text-slate-900 font-bold">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-700 shrink-0" />
            <span>
              {highlightNumbers(
                "[[分布特征]]：等级分布主要集中在 [[VIP6与VIP7]]（人数占比达 [[79.50%]]）；异常类型主要以 [[体育打水]] 与 [[彩金套利]] 为主，两者人数占比达 [[70.86%]]（金额占比 [[71.44%]]）。",
              )}
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-900 font-bold">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-700 shrink-0" />
            <span>
              {highlightNumbers(
                "[[复盘分析]]：部分违规会员养号手段愈发成熟导致发现延迟；高V用户违规手法更隐蔽并伴随新型套利手法，对审核专员的综合认知与整体判断水平提出了更高要求。",
              )}
            </span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-900 font-bold">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-700 shrink-0" />
            <span>
              {highlightNumbers(
                "[[优化方案]]：高V观察中用户超 [[7天]] 未发现异常提交组长审核，超 [[15天]] 上升主管审核，新增组长每日抽查排查；提高向上反馈频率，一审或二审优先向组长反馈并定期复查。",
              )}
            </span>
          </li>
        </ul>
      </SummaryBox>

      {/* 布局：VIP等级与违规拦截金额大表（全宽），下方补充类型统计 */}
      <div className="space-y-6">
        {/* VIP等级与违法类型金额明细表 */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden space-y-3 p-5 md:p-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              VIP等级与违规类型拦截金额及占比表
            </h4>
        
          </div>

          <div className="">
            <table className="w-full font-bold border-collapse text-slate-900 table-fixed w-full report-dense-table">
              <thead className="bg-slate-100 text-slate-900 ">
                {/* 一级表头 */}
                <tr className="bg-slate-100 border-b border-slate-200 font-black text-slate-900">
                  <th rowSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-200 min-w-[65px] text-center">VIP等级</th>
                  <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-200 text-center">总人数</th>
                  <th colSpan={3} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-200 text-center">体育打水</th>
                  <th colSpan={3} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-200 text-center">电竞打水</th>
                  <th colSpan={3} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-200 text-center">租卖号</th>
                  <th colSpan={3} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-200 text-center">彩金套利</th>
                  <th colSpan={3} className="p-0.5 md:p-1 lg:p-2 text-center">软件投注</th>
                </tr>
                {/* 二级表头 */}
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">人数</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">占比</th>

                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">人数</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">金额</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">占比</th>

                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">人数</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">金额</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">占比</th>

                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">人数</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">金额</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">占比</th>

                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">人数</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">金额</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">占比</th>

                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">人数</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 border-r border-slate-200 font-black text-center">金额</th>
                  <th className="px-0.5 md:px-1 lg:px-2 py-2 font-black text-center">占比</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 ">
                {vipDetailData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-1 md:px-2 lg:px-3 py-2.5 text-center font-black border-r border-slate-100">{row.vip_level}</td>
                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.total_people}</td>
                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-100">{row.vip_people_pct}</td>

                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.sports_people}</td>
                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.sports_amt}</td>
                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-100">{row.sports_pct}</td>

                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.esports_people}</td>
                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.esports_amt}</td>
                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-100">{row.esports_pct}</td>

                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.rent_people}</td>
                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.rent_amt}</td>
                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-100">{row.rent_pct}</td>

                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.bonus_people}</td>
                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.bonus_amt}</td>
                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-100">{row.bonus_pct}</td>

                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.software_people}</td>
                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.software_amt}</td>
                    <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">{row.software_pct}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-slate-100 font-black border-t-2 border-slate-300 text-slate-900 ">
                  <td className="px-1 md:px-2 lg:px-3 py-2.5 text-center border-r border-slate-200 font-black">总计</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">810</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-200">100.00%</td>

                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">371</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono text-blue-900">3,097.93</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-200">53.50%</td>

                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">112</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono text-blue-900">834.66</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-200">14.41%</td>

                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">81</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono text-blue-900">651.78</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-200">11.26%</td>

                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">203</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono text-blue-900">1,038.85</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono border-r border-slate-200">17.94%</td>

                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">43</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono text-blue-900">167.38</td>
                  <td className="px-0.5 md:px-1 lg:px-2 py-2.5 text-center font-mono">2.89%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* 违规类型人数与占比汇总 */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden p-5 md:p-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              高V违规类型人数与占比汇总
            </h4>
            <span className="text-xs font-bold text-slate-900 bg-slate-100 px-0.5 md:px-1 lg:px-2.5 py-1 rounded border border-slate-200">
              违规会员共计：<strong className="font-black text-slate-900">810 人</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {typePeopleData.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-1 md:p-2 lg:p-3 space-y-1.5 text-center">
                <div className="text-xs font-black text-slate-900">{item.type}</div>
                <div className="text-lg font-black text-blue-900 font-mono">{item.count} 人</div>
                <div className="text-xs font-bold text-slate-900">人数占比：<span className="font-mono">{item.pct}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
