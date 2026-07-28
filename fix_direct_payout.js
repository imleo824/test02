const fs = require('fs');
let code = fs.readFileSync('src/components/sections/WorldCupGuaranteeReview/MemberRiskDirectPayout.tsx', 'utf8');

const regex = /\{\/\* 预期节奏 \*\/\}([\s\S]*?)<\/div>\n    <\/div>\n  \);\n\};/g;

code = code.replace(regex, `      <ExpectedRhythm
        items={[
          { month: "8月", desc: "A系 2个站点" },
          { month: "9月", desc: "A系 8个站点" },
          { month: "10月", desc: "A系 全部站点" },
          { month: "11月", desc: "B系 全部站点" },
          { month: "12月", desc: "全量平稳运行" },
        ]}
      />
    </div>
  );
};`);
fs.writeFileSync('src/components/sections/WorldCupGuaranteeReview/MemberRiskDirectPayout.tsx', code);
