const fs = require('fs');
let code = fs.readFileSync('src/components/sections/WorldCupGuaranteeReview/SystemAuditSection.tsx', 'utf8');

const regex1 = /<div className="flex items-center justify-between border-b border-slate-100 pb-3\.5">\s*<div className="flex items-center gap-2\.5">\s*<Scale className="w-5 h-5 text-blue-900 shrink-0" \/>\s*<h3 className="text-xl md:text-2xl font-black tracking-tight text-slate-900">\s*系统评估指标\s*<\/h3>\s*<\/div>\s*<span className="text-sm font-black text-blue-900 bg-blue-50 px-3 py-1 rounded">\s*召回率 与 准确率\s*<\/span>\s*<\/div>\s*\{\/\* 独立总结模块：系统审核升级目标 \*\/\}\s*<SummaryBox className="mb-0" hideIcon=\{false\}>\s*\{highlightNumbers\(\s*"策略以及特征\[\[100\+\]\]，调整任意一个都会影响\[\[召回率和准确率\]\]，是一项从\[\[评估\]\]、\[\[调整\]\]、\[\[上线\]\]、\[\[数据\]\]、\[\[迭代\]\]的\[\[长期持续进行的工程\]\]",\s*\)\}\s*<\/SummaryBox>/g;

code = code.replace(regex1, `        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <CoreActionHeader
            title={<><Scale className="w-5 h-5 text-blue-900 shrink-0" />系统评估指标</>}
            desc="策略以及特征[[100+]]，调整任意一个都会影响[[召回率和准确率]]，是一项从[[评估]]、[[调整]]、[[上线]]、[[数据]]、[[迭代]]的[[长期持续进行的工程]]"
            summaryStyle={true}
          />
          <span className="text-sm font-black text-blue-900 bg-blue-50 px-3 py-1 rounded self-start mt-2 hidden md:block">
            召回率 与 准确率
          </span>
        </div>`);

const regex2 = /<div className="flex items-center justify-between border-b border-slate-100 pb-3\.5 pt-6">\s*<div className="flex items-center gap-2\.5">\s*<Activity className="w-5 h-5 text-emerald-600 shrink-0" \/>\s*<h3 className="text-xl md:text-2xl font-black tracking-tight text-slate-900">\s*指标当前表现\s*<\/h3>\s*<\/div>\s*<\/div>/g;

code = code.replace(regex2, `        <div className="border-b border-slate-100 pb-2 pt-6">
          <CoreActionHeader
            title={<><Activity className="w-5 h-5 text-emerald-600 shrink-0" />指标当前表现</>}
          />
        </div>`);


fs.writeFileSync('src/components/sections/WorldCupGuaranteeReview/SystemAuditSection.tsx', code);
