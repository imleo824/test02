import React from "react";
import { CoreActionHeader, SummaryBox, highlightNumbers } from "./utils";

export const AuditOverviewStudioInterception: React.FC = () => {
  const studioData = [
    {
      site: "Y1",
      total_amt: "370.30", total_pct: "7.68%",
      sports_amt: "164.73", sports_pct: "8.03%",
      lottery_amt: "51.31", lottery_pct: "6.63%",
      live_amt: "74.09", live_pct: "8.72%",
      slot_amt: "36.23", slot_pct: "7.21%",
      esports_amt: "11.95", esports_pct: "7.16%",
      other_amt: "31.98", other_pct: "6.73%",
    },
    {
      site: "Y2",
      total_amt: "447.25", total_pct: "9.28%",
      sports_amt: "251.07", sports_pct: "12.24%",
      lottery_amt: "45.74", lottery_pct: "5.91%",
      live_amt: "74.32", live_pct: "8.75%",
      slot_amt: "42.81", slot_pct: "8.52%",
      esports_amt: "9.65", esports_pct: "5.78%",
      other_amt: "23.67", other_pct: "4.98%",
    },
    {
      site: "Y3",
      total_amt: "378.40", total_pct: "7.85%",
      sports_amt: "130.38", sports_pct: "6.36%",
      lottery_amt: "57.78", lottery_pct: "7.46%",
      live_amt: "111.85", live_pct: "13.17%",
      slot_amt: "37.62", slot_pct: "7.49%",
      esports_amt: "9.62", esports_pct: "5.76%",
      other_amt: "31.15", other_pct: "6.55%",
    },
    {
      site: "Y4",
      total_amt: "1,224.53", total_pct: "25.41%",
      sports_amt: "482.91", sports_pct: "23.54%",
      lottery_amt: "201.20", lottery_pct: "25.99%",
      live_amt: "185.97", live_pct: "21.89%",
      slot_amt: "102.82", slot_pct: "20.47%",
      esports_amt: "55.22", esports_pct: "33.09%",
      other_amt: "196.41", other_pct: "41.30%",
    },
    {
      site: "Y5",
      total_amt: "29.63", total_pct: "0.61%",
      sports_amt: "18.90", sports_pct: "0.92%",
      lottery_amt: "1.06", lottery_pct: "0.14%",
      live_amt: "4.47", live_pct: "0.53%",
      slot_amt: "2.87", slot_pct: "0.57%",
      esports_amt: "0.41", esports_pct: "0.25%",
      other_amt: "1.92", other_pct: "0.40%",
    },
    {
      site: "Y7",
      total_amt: "580.44", total_pct: "12.04%",
      sports_amt: "253.55", sports_pct: "12.36%",
      lottery_amt: "73.39", lottery_pct: "9.48%",
      live_amt: "105.83", live_pct: "12.46%",
      slot_amt: "58.43", slot_pct: "11.63%",
      esports_amt: "23.87", esports_pct: "14.30%",
      other_amt: "65.37", other_pct: "13.75%",
    },
    {
      site: "Y8",
      total_amt: "293.93", total_pct: "6.10%",
      sports_amt: "145.33", sports_pct: "7.09%",
      lottery_amt: "58.21", lottery_pct: "7.52%",
      live_amt: "31.99", live_pct: "3.77%",
      slot_amt: "32.33", slot_pct: "6.44%",
      esports_amt: "12.16", esports_pct: "7.28%",
      other_amt: "13.91", other_pct: "2.93%",
    },
    {
      site: "Y6+Y9",
      total_amt: "618.56", total_pct: "12.83%",
      sports_amt: "249.71", sports_pct: "12.17%",
      lottery_amt: "83.47", lottery_pct: "10.78%",
      live_amt: "120.52", live_pct: "14.19%",
      slot_amt: "92.99", slot_pct: "18.51%",
      esports_amt: "19.41", esports_pct: "11.63%",
      other_amt: "52.47", other_pct: "11.03%",
    },
    {
      site: "BD+XK",
      total_amt: "449.01", total_pct: "9.32%",
      sports_amt: "174.72", sports_pct: "8.52%",
      lottery_amt: "109.74", lottery_pct: "14.18%",
      live_amt: "73.27", live_pct: "8.63%",
      slot_amt: "50.70", slot_pct: "10.09%",
      esports_amt: "10.59", esports_pct: "6.34%",
      other_amt: "29.99", other_pct: "6.31%",
    },
    {
      site: "综合",
      total_amt: "427.39", total_pct: "8.87%",
      sports_amt: "179.79", sports_pct: "8.77%",
      lottery_amt: "92.21", lottery_pct: "11.91%",
      live_amt: "67.15", live_pct: "7.91%",
      slot_amt: "45.50", slot_pct: "9.06%",
      esports_amt: "14.03", esports_pct: "8.41%",
      other_amt: "28.71", other_pct: "6.04%",
    },
  ];

  return (
    <div id="section-audit-studio-interception" className="space-y-6 pt-2">
      {/* 模块小标题 - 统一规范 */}
      <div className="border-b border-slate-900 pb-2 mb-4"><CoreActionHeader title={<><span className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0"></span>2.1.5 工作室拦截明细</>} /></div>

      {/* 统一总结模块 */}
      <SummaryBox>
        {highlightNumbers(
          "4-6月工作室拦截总计达[[4,819.44万元]]。游戏分类中[[体育批量拦截]]占据主导，达[[2,051.09万元]]（占比[[42.56%]]）；其次为[[真人批量]]（849.46万元，17.63%）与[[彩票批量]]（774.11万元，16.06%）。站点分布中[[Y4站点]]金额最高，达[[1,224.53万元]]（占比[[25.41%]]）。",
        )}
      </SummaryBox>

      {/* 工作室拦截明细表格 */}
      <div className="bg-white border border-slate-100 rounded-xl overflow-hidden  space-y-3 p-5 md:p-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            工作室拦截分类与站点明细表 (4-6月)
          </h4>
          <span className="text-sm font-bold text-slate-900 font-bold">金额 / 占比</span>
        </div>

        <div className="">
          <table className="w-full font-bold border-collapse text-slate-900 table-fixed w-full report-dense-table">
            <thead className="bg-slate-100 text-slate-900 ">
              {/* 一级表头 */}
              <tr className="bg-slate-100 border-b border-slate-100 font-black text-slate-900">
                <th rowSpan={2} className="p-0.5 md:p-1 lg:p-2.5 border-r border-slate-100 min-w-[70px]">站点</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">4-6月总计</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">体育批量</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">彩票批量</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">真人批量</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">电子批量</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">电竞批量</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2">其他（棋牌，娱乐）</th>
              </tr>
              {/* 二级表头 */}
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-900 font-bold">
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
                <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {studioData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50 border border-slate-100"}>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.site}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.total_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.total_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.sports_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.sports_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.lottery_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.lottery_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.live_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.live_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.slot_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.slot_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.esports_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.esports_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.other_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.other_pct}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-slate-100 font-black border-t-2 border-slate-100 text-slate-900">
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">小计|占比</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">-</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">-</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">2051.09</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100%</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">774.10</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100%</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">849.46</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100%</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">502.31</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100%</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">166.91</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100%</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">475.58</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100%</td>
              </tr>
              <tr className="bg-slate-200 font-black border-t border-slate-100 text-slate-900">
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">总计|占比</td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">
                  4819.44 <span className="text-slate-900 font-normal ml-1">(100%)</span>
                </td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">42.56%</td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">16.06%</td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">17.63%</td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">10.42%</td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">3.46%</td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 font-mono text-center">9.87%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
