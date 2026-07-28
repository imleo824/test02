const fs = require('fs');
let code = fs.readFileSync('src/components/sections/WorldCupGuaranteeReview/TgGovernanceSection.tsx', 'utf8');
code = code.replace(
  'title="流程线上化 ✓"',
  'title={<>流程线上化 <span className="text-emerald-600 font-black">✓</span></>}'
);
fs.writeFileSync('src/components/sections/WorldCupGuaranteeReview/TgGovernanceSection.tsx', code);
