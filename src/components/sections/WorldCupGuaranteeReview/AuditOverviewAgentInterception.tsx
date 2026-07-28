import React from "react";
import { CoreActionHeader, SummaryBox, highlightNumbers } from "./utils";

export const AuditOverviewAgentInterception: React.FC = () => {
  const agentTableData = [
    {
      month: "1月",
      base_amt: "683.0",
      base_pct: "26.12%",
      extra_amt: "740.9",
      extra_pct: "17.51%",
      head_amt: "61.1",
      head_pct: "14.44%",
      first_dep_amt: "322.4",
      first_dep_pct: "19.77%",
      reward1_amt: "66.4",
      reward1_pct: "17.24%",
      sprint_amt: "146.6",
      sprint_pct: "13.79%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "2月",
      base_amt: "399.3",
      base_pct: "15.27%",
      extra_amt: "684.0",
      extra_pct: "16.16%",
      head_amt: "81.3",
      head_pct: "19.22%",
      first_dep_amt: "165.6",
      first_dep_pct: "10.15%",
      reward1_amt: "73.2",
      reward1_pct: "19.00%",
      sprint_amt: "202.0",
      sprint_pct: "19.00%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "3月",
      base_amt: "159.0",
      base_pct: "6.08%",
      extra_amt: "384.2",
      extra_pct: "9.08%",
      head_amt: "38.7",
      head_pct: "9.15%",
      first_dep_amt: "202.0",
      first_dep_pct: "12.39%",
      reward1_amt: "50.9",
      reward1_pct: "13.21%",
      sprint_amt: "124.8",
      sprint_pct: "11.74%",
      other_amt: "17.8",
      other_pct: "24.45%",
    },
    {
      month: "4月",
      base_amt: "304.2",
      base_pct: "11.64%",
      extra_amt: "540.8",
      extra_pct: "12.78%",
      head_amt: "62.2",
      head_pct: "14.70%",
      first_dep_amt: "276.1",
      first_dep_pct: "16.93%",
      reward1_amt: "64.5",
      reward1_pct: "16.74%",
      sprint_amt: "203.4",
      sprint_pct: "19.13%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "5月",
      base_amt: "298.4",
      base_pct: "11.41%",
      extra_amt: "588.9",
      extra_pct: "13.92%",
      head_amt: "66.9",
      head_pct: "15.81%",
      first_dep_amt: "233.2",
      first_dep_pct: "14.30%",
      reward1_amt: "66.8",
      reward1_pct: "17.34%",
      sprint_amt: "249.8",
      sprint_pct: "23.49%",
      other_amt: "-",
      other_pct: "0.00%",
    },
    {
      month: "6月",
      base_amt: "244.7",
      base_pct: "9.36%",
      extra_amt: "495.8",
      extra_pct: "11.72%",
      head_amt: "63.9",
      head_pct: "15.10%",
      first_dep_amt: "284.9",
      first_dep_pct: "17.47%",
      reward1_amt: "63.4",
      reward1_pct: "16.46%",
      sprint_amt: "136.8",
      sprint_pct: "12.86%",
      other_amt: "-",
      other_pct: "0.00%",
    },
  ];

  return (
    <div id="section-audit-agent-interception" className="space-y-6">
      {/* 模块小标题 - 统一规范 */}
      <div className="border-b border-slate-900 pb-2 mb-4"><CoreActionHeader title={<><span className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0"></span>2.1.3 代理拦截数据</>} /></div>

      {/* 统一总结模块 */}
      <SummaryBox>
        <div className="space-y-2">
          {highlightNumbers(
            "[[基础与额外佣金拦截]]：两项总计拦截金额达 [[5,523.2 万]]，占代理拦截的 [[62.42%]]，主要为[[基础以及扶持降低派发拦截]]。",
          )}
          {highlightNumbers(
            "[[代理活动与人头费]]：首复存与新增冲刺活动占整体的 [[28.79%]]；人头费拦截 [[374.1 万]]（占比 [[4.23%]]）。",
          )}
        </div>
      </SummaryBox>

      {/* 表格 */}
      <div className=" border border-slate-100 rounded-xl bg-white ">
        <table className="w-full font-bold border-collapse text-slate-900 table-fixed w-full report-dense-table">
          <thead className="bg-slate-100 text-slate-900 ">
            <tr className="bg-slate-100 border-b border-slate-100 font-bold text-slate-900">
              <th rowSpan={2} className="p-0.5 md:p-1 lg:p-2.5 border-r border-slate-100 min-w-[70px]">时间</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">基础拦截</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">额外拦截金额</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">人头费拦截</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">首复存</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">奖励活动1</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">新增冲刺</th>
              <th colSpan={2} className="p-0.5 md:p-1 lg:p-2">其他</th>
            </tr>
            <tr className="bg-slate-50 border-b border-slate-100 text-slate-900 font-bold font-semibold text-sm">
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">金额</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">占比</th>
              <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-center">拦截金额</th>
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
            {agentTableData.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50 border border-slate-100"}>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.month}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.base_amt}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.base_pct}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.extra_amt}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.extra_pct}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.head_amt}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.head_pct}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.first_dep_amt}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.first_dep_pct}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.reward1_amt}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.reward1_pct}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.sprint_amt}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.sprint_pct}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.other_amt}</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.other_pct}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-slate-100 font-black border-t-2 border-slate-100 text-slate-900">
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">小计|占比</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">2088.6</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100.00%</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">3434.6</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100.00%</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">374.1</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100.00%</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">1484.2</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100.00%</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">385.2</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100.00%</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">1063.4</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100.00%</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">17.8</td>
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100.00%</td>
            </tr>
            <tr className="bg-slate-200 font-black border-t border-slate-100 text-slate-900">
              <td className="px-2 md:px-3 lg:px-4 py-3 text-center">总计|占比</td>
              <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">
                8847.9 <span className="text-slate-900 font-bold font-normal ml-1">(23.6%)</span>
              </td>
              <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">38.82%</td>
              <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">4.23%</td>
              <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">16.77%</td>
              <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">4.35%</td>
              <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">12.02%</td>
              <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 font-mono text-center">0.20%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

