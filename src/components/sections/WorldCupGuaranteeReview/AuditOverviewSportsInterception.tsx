import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, ComposedChart, Line } from "recharts";
import { CoreActionHeader, SummaryBox, highlightNumbers } from "./utils";

export const AuditOverviewSportsInterception: React.FC = () => {
  // Chart 1: 整体系别杀率对比
  const siteSlData = [
    {
      quarter: "26年1季度",
      b_sys: 6.63,
      y_sys: 5.78,
      bw_sys: 5.39,
      comboVal: 6.45,
      comboLabel: "6.45%",
    },
    {
      quarter: "26年2季度",
      b_sys: 6.61,
      y_sys: 5.97,
      bw_sys: 5.89,
      comboVal: 6.50,
      comboLabel: "6.50%",
    },
  ];

  // Chart 2: 场馆杀率对比 (总计)
  const venueSlData = [
    {
      quarter: "26年1季度",
      im_venue: 6.11,
      title_venue: 6.57,
      panda_venue: 5.42,
      comboVal: 6.45,
      comboLabel: "6.45%",
    },
    {
      quarter: "26年2季度",
      im_venue: 6.24,
      title_venue: 6.59,
      panda_venue: 5.68,
      comboVal: 6.50,
      comboLabel: "6.50%",
    },
  ];

  // 4组明细表格数据
  const venueTables = [
    {
      name: "IM 场馆",
      rows: [
        { quarter: "26年1季度", b: "6.22%", y: "5.69%", bw: "5.49%", total: "6.11%" },
        { quarter: "26年2季度", b: "6.22%", y: "6.34%", bw: "6.32%", total: "6.24%" },
        { quarter: "上个季度对比", b: "0.00%", y: "0.65%", bw: "0.84%", total: "0.13%", isDiff: true },
      ],
    },
    {
      name: "冠名 场馆",
      rows: [
        { quarter: "26年1季度", b: "6.74%", y: "5.91%", bw: "5.33%", total: "6.57%" },
        { quarter: "26年2季度", b: "6.70%", y: "6.00%", bw: "5.92%", total: "6.59%" },
        { quarter: "上个季度对比", b: "-0.04%", y: "0.08%", bw: "0.59%", total: "0.02%", isDiff: true },
      ],
    },
    {
      name: "熊猫 场馆",
      rows: [
        { quarter: "26年1季度", b: "5.63%", y: "4.00%", bw: "5.78%", total: "5.42%" },
        { quarter: "26年2季度", b: "5.84%", y: "4.67%", bw: "5.14%", total: "5.68%" },
        { quarter: "上个季度对比", b: "0.21%", y: "0.66%", bw: "-0.65%", total: "0.26%", isDiff: true },
      ],
    },
    {
      name: "整体季度",
      rows: [
        { quarter: "26年1季度", b: "6.63%", y: "5.78%", bw: "5.39%", total: "6.45%" },
        { quarter: "26年2季度", b: "6.61%", y: "5.97%", bw: "5.89%", total: "6.50%" },
        { quarter: "上个季度对比", b: "-0.02%", y: "0.19%", bw: "0.50%", total: "0.05%", isDiff: true },
      ],
    },
  ];

  // 体育拦截细分类别数据
  const categoryDetailData = [
    {
      site: "1",
      sports_water_amt: "688.81", sports_water_pct: "6.36%",
      batch_water_amt: "158.59", batch_water_pct: "9.16%",
      negative_rent_amt: "13.47", negative_rent_pct: "4.95%",
      other_water_amt: "0.00", other_water_pct: "0.00%",
      shipment_amt: "0.00", shipment_pct: "0.00%",
      pheasant_protocol_amt: "21.85", pheasant_protocol_pct: "39.80%",
      other_shipment_amt: "21.43", other_shipment_pct: "2.21%",
    },
    {
      site: "2",
      sports_water_amt: "553.49", sports_water_pct: "5.11%",
      batch_water_amt: "227.17", batch_water_pct: "13.12%",
      negative_rent_amt: "54.82", negative_rent_pct: "20.12%",
      other_water_amt: "0.00", other_water_pct: "0.00%",
      shipment_amt: "0.00", shipment_pct: "0.00%",
      pheasant_protocol_amt: "0.00", pheasant_protocol_pct: "0.00%",
      other_shipment_amt: "35.09", other_shipment_pct: "3.62%",
    },
    {
      site: "3",
      sports_water_amt: "720.82", sports_water_pct: "6.66%",
      batch_water_amt: "93.62", batch_water_pct: "5.41%",
      negative_rent_amt: "9.82", negative_rent_pct: "3.61%",
      other_water_amt: "0.00", other_water_pct: "0.00%",
      shipment_amt: "0.00", shipment_pct: "0.00%",
      pheasant_protocol_amt: "4.04", pheasant_protocol_pct: "7.35%",
      other_shipment_amt: "27.69", other_shipment_pct: "2.85%",
    },
    {
      site: "4",
      sports_water_amt: "4,065.38", sports_water_pct: "37.55%",
      batch_water_amt: "408.81", batch_water_pct: "23.62%",
      negative_rent_amt: "90.49", negative_rent_pct: "33.22%",
      other_water_amt: "19.48", other_water_pct: "1.41%",
      shipment_amt: "0.00", shipment_pct: "0.00%",
      pheasant_protocol_amt: "27.70", pheasant_protocol_pct: "50.44%",
      other_shipment_amt: "630.30", other_shipment_pct: "64.95%",
    },
    {
      site: "5",
      sports_water_amt: "59.23", sports_water_pct: "0.55%",
      batch_water_amt: "17.80", batch_water_pct: "1.03%",
      negative_rent_amt: "0.00", negative_rent_pct: "0.00%",
      other_water_amt: "0.00", other_water_pct: "0.00%",
      shipment_amt: "0.00", shipment_pct: "0.00%",
      pheasant_protocol_amt: "0.00", pheasant_protocol_pct: "0.00%",
      other_shipment_amt: "2.93", other_shipment_pct: "0.30%",
    },
    {
      site: "7",
      sports_water_amt: "881.27", sports_water_pct: "8.14%",
      batch_water_amt: "208.96", batch_water_pct: "12.07%",
      negative_rent_amt: "17.57", negative_rent_pct: "6.45%",
      other_water_amt: "0.00", other_water_pct: "0.00%",
      shipment_amt: "0.00", shipment_pct: "0.00%",
      pheasant_protocol_amt: "1.32", pheasant_protocol_pct: "2.41%",
      other_shipment_amt: "39.18", other_shipment_pct: "4.04%",
    },
    {
      site: "8",
      sports_water_amt: "597.45", sports_water_pct: "5.52%",
      batch_water_amt: "120.85", batch_water_pct: "6.98%",
      negative_rent_amt: "0.27", negative_rent_pct: "0.10%",
      other_water_amt: "1,359.90", other_water_pct: "98.59%",
      shipment_amt: "0.00", shipment_pct: "0.00%",
      pheasant_protocol_amt: "0.00", pheasant_protocol_pct: "0.00%",
      other_shipment_amt: "18.05", other_shipment_pct: "1.86%",
    },
    {
      site: "Y6+Y9",
      sports_water_amt: "860.47", sports_water_pct: "7.95%",
      batch_water_amt: "189.38", batch_water_pct: "10.94%",
      negative_rent_amt: "14.29", negative_rent_pct: "5.25%",
      other_water_amt: "0.00", other_water_pct: "0.00%",
      shipment_amt: "6.61", shipment_pct: "50.31%",
      pheasant_protocol_amt: "0.00", pheasant_protocol_pct: "0.00%",
      other_shipment_amt: "100.34", other_shipment_pct: "10.34%",
    },
    {
      site: "BD+XK",
      sports_water_amt: "1,379.24", sports_water_pct: "12.74%",
      batch_water_amt: "158.94", batch_water_pct: "9.18%",
      negative_rent_amt: "55.03", negative_rent_pct: "20.20%",
      other_water_amt: "0.00", other_water_pct: "0.00%",
      shipment_amt: "6.53", shipment_pct: "49.69%",
      pheasant_protocol_amt: "0.00", pheasant_protocol_pct: "0.00%",
      other_shipment_amt: "51.26", other_shipment_pct: "5.28%",
    },
    {
      site: "综合",
      sports_water_amt: "1,021.05", sports_water_pct: "9.43%",
      batch_water_amt: "146.85", batch_water_pct: "8.48%",
      negative_rent_amt: "16.65", negative_rent_pct: "6.11%",
      other_water_amt: "0.00", other_water_pct: "0.00%",
      shipment_amt: "0.00", shipment_pct: "0.00%",
      pheasant_protocol_amt: "0.00", pheasant_protocol_pct: "0.00%",
      other_shipment_amt: "44.11", other_shipment_pct: "4.55%",
    },
  ];

  return (
    <div id="section-audit-sports-interception" className="space-y-6">
      {/* 模块小标题 - 统一规范 */}
      <div className="border-b border-slate-900 pb-2 mb-4"><CoreActionHeader title={<><span className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0"></span>2.1.4 体育拦截数据</>} /></div>

      {/* 统一总结模块 */}
      <SummaryBox>
        <div className="space-y-2">
          {highlightNumbers(
            "[[整体杀率分析]]：26年2季度整体杀率为 [[6.50%]]（环比 [[+0.05%]]）。其中Y系提升 [[+0.19%]] 至 5.97%，BW提升 [[+0.50%]] 至 5.89%，B系维持高位 6.61%。",
          )}
          {highlightNumbers(
            "[[场馆表现对比]]：IM场馆杀率 [[6.24%]]（+0.13%）；冠名场馆杀率 [[6.59%]]（+0.02%）；熊猫场馆杀率 [[5.68%]]（+0.26%）。",
          )}
        </div>
      </SummaryBox>

      {/* 图表展示区 - 左右并排 */}
      <div className="grid grid-cols-1 gap-6">
        {/* 图表 1: 系别杀率对比 */}
        <div className="bg-white border border-slate-100 rounded-xl p-6  space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              系别杀率对比
            </h4>
            <div className="flex items-center gap-4 text-sm font-bold text-slate-900 font-bold">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>B系</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-blue-400 rounded-xs"></span>Y系</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-slate-300 rounded-xs"></span>BW</span>
              <span className="flex items-center gap-1.5"><span className="w-4 h-0.5 bg-slate-900"></span>综合</span>
            </div>
          </div>
          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={siteSlData} margin={{ top: 25, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="quarter" tick={{ fill: "#0f172a", fontSize: 12, fontWeight: 700 }} axisLine={{ stroke: "#475569" }} tickLine={false} />
                <YAxis yAxisId="left" domain={[0, 10]} ticks={[0, 2.5, 5, 7.5, 10]} tick={{ fill: "#0f172a", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis yAxisId="right" orientation="right" domain={[3.0, 8.0]} ticks={[3.0, 4.0, 5.0, 6.0, 7.0, 8.0]} tick={{ fill: "#0f172a", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Bar yAxisId="left" dataKey="b_sys" fill="#2563eb" barSize={24} radius={[2, 2, 0, 0]} isAnimationActive={false} label={{ position: "top", fill: "#1e3a8a", fontSize: 10, fontWeight: "bold", formatter: (v: any) => `${v}%` }} />
                <Bar yAxisId="left" dataKey="y_sys" fill="#60a5fa" barSize={24} radius={[2, 2, 0, 0]} isAnimationActive={false} label={{ position: "top", fill: "#1d4ed8", fontSize: 10, fontWeight: "bold", formatter: (v: any) => `${v}%` }} />
                <Bar yAxisId="left" dataKey="bw_sys" fill="#1e293b" barSize={24} radius={[2, 2, 0, 0]} isAnimationActive={false} label={{ position: "top", fill: "#0f172a", fontSize: 10, fontWeight: "bold", formatter: (v: any) => `${v}%` }} />
                <Line yAxisId="right" type="monotone" dataKey="comboVal" stroke="#0f172a" strokeWidth={3} isAnimationActive={false} dot={{ r: 5, fill: "#0f172a" }} label={({ x, y, index }) => (
                  <g>
                    <rect x={x - 22} y={y - 24} width="44" height="18" rx="3" fill="#0f172a" />
                    <text x={x} y={y - 12} fill="#ffffff" fontSize={11} fontWeight="black" textAnchor="middle">
                      {siteSlData[index].comboLabel}
                    </text>
                  </g>
                )} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 图表 2: 场馆杀率对比 */}
        <div className="bg-white border border-slate-100 rounded-xl p-6  space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
              场馆杀率对比
            </h4>
            <div className="flex items-center gap-4 text-sm font-bold text-slate-900 font-bold">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>IM</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-blue-400 rounded-xs"></span>冠名</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-slate-800 rounded-xs"></span>熊猫</span>
              <span className="flex items-center gap-1.5"><span className="w-4 h-0.5 bg-slate-900"></span>综合</span>
            </div>
          </div>
          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={venueSlData} margin={{ top: 25, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="quarter" tick={{ fill: "#0f172a", fontSize: 12, fontWeight: 700 }} axisLine={{ stroke: "#475569" }} tickLine={false} />
                <YAxis yAxisId="left" domain={[0, 10]} ticks={[0, 2.5, 5, 7.5, 10]} tick={{ fill: "#0f172a", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis yAxisId="right" orientation="right" domain={[3.0, 8.0]} ticks={[3.0, 4.0, 5.0, 6.0, 7.0, 8.0]} tick={{ fill: "#0f172a", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Bar yAxisId="left" dataKey="im_venue" fill="#2563eb" barSize={24} radius={[2, 2, 0, 0]} isAnimationActive={false} label={{ position: "top", fill: "#1e3a8a", fontSize: 10, fontWeight: "bold", formatter: (v: any) => `${v}%` }} />
                <Bar yAxisId="left" dataKey="title_venue" fill="#60a5fa" barSize={24} radius={[2, 2, 0, 0]} isAnimationActive={false} label={{ position: "top", fill: "#1d4ed8", fontSize: 10, fontWeight: "bold", formatter: (v: any) => `${v}%` }} />
                <Bar yAxisId="left" dataKey="panda_venue" fill="#1e293b" barSize={24} radius={[2, 2, 0, 0]} isAnimationActive={false} label={{ position: "top", fill: "#0f172a", fontSize: 10, fontWeight: "bold", formatter: (v: any) => `${v}%` }} />
                <Line yAxisId="right" type="monotone" dataKey="comboVal" stroke="#0f172a" strokeWidth={3} isAnimationActive={false} dot={{ r: 5, fill: "#0f172a" }} label={({ x, y, index }) => (
                  <g>
                    <rect x={x - 22} y={y - 24} width="44" height="18" rx="3" fill="#0f172a" />
                    <text x={x} y={y - 12} fill="#ffffff" fontSize={11} fontWeight="black" textAnchor="middle">
                      {venueSlData[index].comboLabel}
                    </text>
                  </g>
                )} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 体育拦截分类与站点明细大表 */}
      <div className="bg-white border border-slate-100 rounded-xl overflow-hidden  space-y-3 p-5 md:p-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h4 className="text-base md:text-lg font-black tracking-tight text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span>
            体育拦截细分类别与站点分布明细
          </h4>
          <span className="text-sm font-bold text-slate-900 font-bold">单位：万元 / %</span>
        </div>

        <div className="">
          <table className="w-full font-bold border-collapse text-slate-900 table-fixed w-full text-[10px] md:text-xs break-all">
            <thead className="bg-slate-100 text-slate-900 ">
              {/* 一级分类表头 */}
              <tr className="bg-slate-100 border-b border-slate-100 font-black text-slate-900">
                <th rowSpan={3} className="p-0.5 md:p-1 lg:p-2.5 border-r border-slate-100 min-w-[70px]">站点</th>
                <th colSpan={8} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">体育打水 (71.01%)</th>
                <th colSpan={4} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">出货 (0.45%)</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2">其他 / 夹盘 (6.36%)</th>
              </tr>
              {/* 二级分类表头 */}
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-900 font-bold">
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">体育打水</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">批量打水</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">打负、租卖号</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">其他打水</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">出货</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100">野鸡、协议球</th>
                <th colSpan={2} className="p-0.5 md:p-1 lg:p-2">其他 (夹盘、卡进球)</th>
              </tr>
              {/* 三级表头 */}
              <tr className="bg-slate-100 border-b border-slate-100 text-slate-900 font-bold font-semibold text-sm">
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
              {categoryDetailData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50 border border-slate-100"}>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.site}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.sports_water_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.sports_water_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.batch_water_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.batch_water_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.negative_rent_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.negative_rent_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.other_water_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.other_water_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.shipment_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.shipment_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.pheasant_protocol_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.pheasant_protocol_pct}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.other_shipment_amt}</td>
                  <td className="px-2 md:px-3 lg:px-4 py-3 text-center">{row.other_shipment_pct}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-slate-100 font-black border-t-2 border-slate-100 text-slate-900">
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">小计|占比</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">10,827.21</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100%</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">1,730.97</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100%</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">272.41</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100%</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">1,379.37</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100%</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">13.14</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100%</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">54.91</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100%</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">970.38</td>
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">100%</td>
              </tr>
              <tr className="bg-slate-200 font-black border-t border-slate-100 text-slate-900">
                <td className="px-2 md:px-3 lg:px-4 py-3 text-center">总计|占比</td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">71.01%</td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">11.35%</td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">1.79%</td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">9.05%</td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">0.09%</td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 border-r border-slate-100 font-mono text-center">0.36%</td>
                <td colSpan={2} className="p-0.5 md:p-1 lg:p-2 font-mono text-center">6.36%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

