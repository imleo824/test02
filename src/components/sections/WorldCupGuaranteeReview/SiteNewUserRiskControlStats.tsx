import React from "react";
import { SignColoredValue, highlightNumbers, SummaryBox } from "./utils";
import { siteNewUserRiskControlData as siteData } from "./data";

export const SiteNewUserRiskControlStats = () => {
  const sortedData = React.useMemo(() => {
    return [...siteData].sort((a, b) => b.rate - a.rate);
  }, []);

  const totalAccounts = siteData.reduce((sum, item) => sum + item.accounts, 0);
  const totalDepositAmountSummary = siteData.reduce((sum, item) => sum + item.totalDeposit, 0);
  const totalBanned = siteData.reduce((sum, item) => sum + item.banned, 0);
  const totalAdjust = siteData.reduce((sum, item) => sum + item.adjust, 0);
  const totalBoth = siteData.reduce((sum, item) => sum + item.both, 0);
  const totalProfitCount = siteData.reduce((sum, item) => sum + item.profitCount, 0);
  const totalLossCount = siteData.reduce((sum, item) => sum + item.lossCount, 0);
  const totalAdjustAmount = siteData.reduce((sum, item) => sum + item.adjustAmount, 0);
  const totalMemberWinLoss = siteData.reduce((sum, item) => sum + item.memberWinLoss, 0);
  const totalProfitAmount = siteData.reduce((sum, item) => sum + item.totalProfit, 0);
  const totalLossAmount = siteData.reduce((sum, item) => sum + item.totalLoss, 0);
  const totalBonusAmount = siteData.reduce((sum, item) => sum + item.totalBonus, 0);
  const totalRebateAmount = siteData.reduce((sum, item) => sum + item.totalRebate, 0);
  const overallRate = ((totalBanned + totalAdjust + totalBoth) / totalAccounts * 100);

  return (
    <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-5 md:p-6 space-y-6">
      <div className="mb-6">
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900 flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0" />
            <span>2.2.7.1 新人风控率</span>
          </h4>
          <span className="text-sm text-slate-900 font-black bg-slate-100 px-1 md:px-2 lg:px-3 py-1 rounded-full border border-slate-100">
            风控率 = 拦截人数 / 总人数
          </span>
        </div>
        <SummaryBox className="mt-4 mb-0 p-2 md:p-3 lg:p-4 flex flex-col gap-2.5">
          <div>
            {highlightNumbers(`SJB期间注册的用户且有发起提款的数量 [[${totalAccounts.toLocaleString()} 人]]，发现[[高风险异常账号]] [[${(totalBanned + totalAdjust + totalBoth).toLocaleString()} 人]]，[[拦截金额]]达 [[green:${totalAdjustAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}]]，整体实现 [[${overallRate.toFixed(2)}%]] 的[[新人风控率]]。`)}
          </div>
          <div className="pt-2 border-t border-slate-100 text-sm text-slate-900 font-bold flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
            <span>
              {highlightNumbers(`备注：[[blue:A8]] 玩家总输赢为 [[blue:21,173.24]]，该数据主要由[[核心一些出货客户]]投注导致，共拦截金额 [[green:2,037.44]]。`)}
            </span>
          </div>
        </SummaryBox>
      </div>
 
 {/* Risk Control Table Card */}
 <div className="bg-white border border-slate-100 rounded-xl overflow-hidden space-y-4">
 <div className="">
 <table className="w-full font-bold border-collapse text-slate-900 table-fixed w-full text-[10px] md:text-xs break-all">
 <thead className="bg-slate-100 text-slate-900 ">
 <tr className="bg-slate-100 border-b border-slate-100 text-slate-900 font-bold text-sm uppercase tracking-wider">
 <th rowSpan={2} className="py-1 md:py-2 lg:py-3 px-4 text-left border-r border-slate-100 text-slate-900 font-bold">站点</th>
 <th rowSpan={2} className="py-1 md:py-2 lg:py-3 px-4 text-right border-r border-slate-100 text-slate-900 font-bold">总人数</th>
 <th rowSpan={2} className="py-1 md:py-2 lg:py-3 px-4 text-right border-r border-slate-100 text-slate-900 font-bold">总存款</th>
 <th colSpan={5} className="py-0.5 md:py-1 lg:py-2.5 px-4 text-center border-b border-slate-100 text-slate-900 font-bold bg-slate-100">会员输赢</th>
 <th colSpan={2} className="py-0.5 md:py-1 lg:py-2.5 px-4 text-center border-b border-slate-100 text-slate-900 font-bold bg-slate-100">红利返水</th>
 <th colSpan={2} className="py-0.5 md:py-1 lg:py-2.5 px-4 text-center border-b border-slate-100 text-slate-900 font-bold bg-slate-100">风控结果</th>
 <th rowSpan={2} className="py-1 md:py-2 lg:py-3 px-4 text-right w-48 text-slate-900 font-bold border-l border-slate-100">风控率</th>
 </tr>
 <tr className="bg-slate-50 border-b border-slate-100 text-slate-900 font-bold text-sm">
 <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-right">盈利人数</th>
 <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-right">盈利额</th>
 <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-right">输钱人数</th>
 <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-right">输钱额</th>
 <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-right">总输赢</th>
 <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-right">总红利</th>
 <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-right">总返水</th>
 <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-right">拦截人数</th>
 <th className="px-2 md:px-3 lg:px-4 py-3 border-b border-slate-200 font-black text-right">拦截金额</th>
 </tr>
 </thead>
 <tbody className="bg-white divide-y divide-slate-100">
 {sortedData.map((item) => (
 <tr key={item.site} className=" ">
 <td className="px-2 md:px-3 lg:px-4 py-3 text-center">
 {item.site}
 </td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{item.accounts.toLocaleString()}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{item.totalDeposit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{item.profitCount.toLocaleString()}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">
 <SignColoredValue value={item.totalProfit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} className="font-mono font-bold" />
 </td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{item.lossCount.toLocaleString()}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">
 <SignColoredValue value={item.totalLoss.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} className="font-mono font-bold" />
 </td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">
 <SignColoredValue value={item.memberWinLoss.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} className="font-mono font-bold" />
 </td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{item.totalBonus.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{item.totalRebate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{(item.banned + item.adjust + item.both).toLocaleString()}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">
 <SignColoredValue value={item.adjustAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} className="font-mono font-bold" />
 </td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-center">
 <div className="flex items-center justify-end gap-3">
 <span className={`w-14 text-right font-mono tabular-nums font-black text-sm text-slate-900`}>
 {item.rate.toFixed(2)}%
 </span>
 <div className="flex-1 bg-slate-200 rounded-full h-1.5 overflow-hidden max-w-[120px] hidden sm:block">
 <div 
 className="h-full rounded-full bg-slate-900"
 style={{ width: `${Math.min((item.rate / (overallRate * 2)) * 100, 100)}%` }}
 />
 </div>
 </div>
 </td>
 </tr>
 ))}
 <tr className="border-t border-slate-100 bg-blue-50 font-black text-slate-900">
 <td className="px-2 md:px-3 lg:px-4 py-3 text-center">汇总</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{totalAccounts.toLocaleString()}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{totalDepositAmountSummary.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{totalProfitCount.toLocaleString()}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">
 <SignColoredValue value={totalProfitAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} className="font-mono font-black" />
 </td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{totalLossCount.toLocaleString()}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">
 <SignColoredValue value={totalLossAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} className="font-mono font-black" />
 </td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">
 <SignColoredValue value={totalMemberWinLoss.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} className="font-mono font-black" />
 </td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{totalBonusAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{totalRebateAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">{(totalBanned + totalAdjust + totalBoth).toLocaleString()}</td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-right">
 <span className="font-mono font-black text-blue-600">{totalAdjustAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
 </td>
 <td className="px-2 md:px-3 lg:px-4 py-3 text-center">
 <div className="flex items-center justify-end gap-3">
 <span className="w-14 text-right font-mono tabular-nums font-black text-sm text-blue-600">
 {overallRate.toFixed(2)}%
 </span>
 <div className="flex-1 bg-slate-200 rounded-full h-1.5 overflow-hidden max-w-[120px] hidden sm:block border border-slate-100">
 <div 
 className="h-full rounded-full bg-blue-600"
 style={{ width: `${Math.min((overallRate / (overallRate * 2)) * 100, 100)}%` }}
 />
 </div>
 </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default SiteNewUserRiskControlStats;
