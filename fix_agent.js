const fs = require('fs');
let code = fs.readFileSync('src/components/sections/WorldCupGuaranteeReview/AgentRiskControlSection.tsx', 'utf8');

// The first 预期节奏 block
const regex1 = /\{\/\* 预期节奏 \*\/\}\s*<div className="bg-slate-50 border border-slate-200 rounded-lg p-3\.5 space-y-2 mt-auto pt-2">[\s\S]*?待排期（世界杯后启动）<\/span>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;

code = code.replace(regex1, `      <ExpectedRhythm
            items={[
              {
                month: "待排期",
                tagColor: "amber",
                title: "【佣金审核】-随机派单",
                submitTime: "2026-05-19",
                status: "待排期（世界杯后启动）",
              },
            ]}
          />`);

// The second 预期节奏 block
const regex2 = /\{\/\* 预期节奏 \*\/\}\s*<div className="bg-slate-50 border border-slate-200 rounded-lg p-3\.5 space-y-2 mt-auto pt-2">[\s\S]*?已上线（比对预警中）<\/span>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;

code = code.replace(regex2, `      <ExpectedRhythm
            items={[
              {
                month: "第一阶段已上线",
                tagColor: "emerald",
                title: "【代理风控】代理云盾分数",
                submitTime: "2025-10-22",
                status: "已上线（参数调优中）",
              },
              {
                month: "第一阶段已上线",
                tagColor: "emerald",
                title: "【代理风控】代理云盾审核",
                submitTime: "2025-12-28",
                status: "已上线（比对预警中）",
              },
            ]}
          />`);

fs.writeFileSync('src/components/sections/WorldCupGuaranteeReview/AgentRiskControlSection.tsx', code);
