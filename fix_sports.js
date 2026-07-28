const fs = require('fs');
let code = fs.readFileSync('src/components/sections/WorldCupGuaranteeReview/SportsRiskControlSection.tsx', 'utf8');

const regex1 = /<CoreActionHeader title="B端操盘监控" \/>\s*<SummaryBox>\s*<p className="text-base text-slate-900 font-bold leading-relaxed">\s*\{highlightNumbers\(\s*"\[\[SJB筹备阶段\]\]即建立\[\[C端风控监控\]\]与\[\[B端操盘协同机制\]\]。已实现\[\[异常发现、专人确认与15分钟协同反馈\]\]的闭环标准化流程；同时推动B端\[\[赔率联动\]\]覆盖 90% 以上进球类玩法，保障整体流程运转的高效性。",\s*\)\}\s*<\/p>\s*<\/SummaryBox>/g;
code = code.replace(regex1, `<CoreActionHeader title="B端操盘监控" desc="[[SJB筹备阶段]]即建立[[C端风控监控]]与[[B端操盘协同机制]]。已实现[[异常发现、专人确认与15分钟协同反馈]]的闭环标准化流程；同时推动B端[[赔率联动]]覆盖 90% 以上进球类玩法，保障整体流程运转的高效性。" summaryStyle={true} />`);

const regex2 = /<CoreActionHeader title="C端体育拦截" \/>\s*<SummaryBox>\s*<p className="text-base text-slate-900 font-bold leading-relaxed">\s*\{highlightNumbers\(\s*\`SJB期间，全面实施\[\[系统预警、系统初审、系统分单与人工复审\]\]的标准化流程，累计拦截体育高危订单金额达 \[\[green:17,070\.07\]\]，确保高风险订单\[\[有效拦截\]\]。\`,\s*\)\}\s*<\/p>\s*<\/SummaryBox>/g;
code = code.replace(regex2, `<CoreActionHeader title="C端体育拦截" desc="SJB期间，全面实施[[系统预警、系统初审、系统分单与人工复审]]的标准化流程，累计拦截体育高危订单金额达 [[green:17,070.07]]，确保高风险订单[[有效拦截]]。" summaryStyle={true} />`);

fs.writeFileSync('src/components/sections/WorldCupGuaranteeReview/SportsRiskControlSection.tsx', code);
