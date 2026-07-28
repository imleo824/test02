import React from "react";

// 辅助函数：统一高亮数字样式（纯静态，不带任何动效，投屏无浮夸色彩）
export function highlightNumbers(
  text: string,
  colorClass: string = "text-blue-900 font-bold",
) {
  const pattern =
    /(\[\[(.*?)\]\])|([+\-]?\d+(?:[.,]\d+)*(?:\s*(?:%|人|场|项|倍|E|元|h|ms|min|k|个))?)/g;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.substring(lastIndex, match.index));
    }

    if (match[1]) {
      // It's a [[core phrase]]
      let phrase = match[2];

      if (phrase.startsWith("green:")) {
        result.push(
          <span
            key={match.index}
            className="text-emerald-900 font-bold font-mono mx-0.5"
          >
            {phrase.substring(6)}
          </span>,
        );
        lastIndex = pattern.lastIndex;
        continue;
      }
      if (phrase.startsWith("red:")) {
        result.push(
          <span key={match.index} className="text-rose-900 font-bold font-mono mx-0.5">
            {phrase.substring(4)}
          </span>,
        );
        lastIndex = pattern.lastIndex;
        continue;
      }
      if (phrase.startsWith("blue:")) {
        result.push(
          <span key={match.index} className="text-blue-900 font-bold font-mono mx-0.5">
            {phrase.substring(5)}
          </span>,
        );
        lastIndex = pattern.lastIndex;
        continue;
      }

      // 提取纯数字部分进行判断
      const numericValue = phrase.replace(/[^\d.-]/g, "");
      const isNumber =
        /^[+\-]?\d+(?:[.,]\d+)*(?:%|人|项|倍|E|元|h|ms|min|k)?$/.test(phrase);

      if (
        isNumber &&
        (phrase.startsWith("-") || parseFloat(numericValue) < 0)
      ) {
        result.push(
          <span key={match.index} className="text-rose-900 font-bold font-mono mx-0.5">
            {phrase}
          </span>,
        );
      } else if (
        isNumber &&
        phrase.startsWith("+")
      ) {
        result.push(
          <span
            key={match.index}
            className="text-emerald-900 font-bold font-mono mx-0.5"
          >
            {phrase.substring(1)}
          </span>,
        );
      } else if (isNumber) {
        result.push(
          <span
            key={match.index}
            className={`${colorClass} font-mono mx-0.5`}
          >
            {phrase}
          </span>,
        );
      } else {
        result.push(
          <span
            key={match.index}
            className="text-slate-900 font-black mx-0.5"
          >
            {phrase}
          </span>,
        );
      }
    } else if (match[3]) {
      // It's a number/unit
      const part = match[3];
      if (part.startsWith("+")) {
        result.push(
          <strong
            key={match.index}
            className="font-mono tracking-tight mx-0.5 text-emerald-900 font-bold"
          >
            {part.substring(1)}
          </strong>,
        );
      } else if (part.startsWith("-")) {
        result.push(
          <strong
            key={match.index}
            className="font-mono tracking-tight mx-0.5 text-rose-900 font-bold"
          >
            {part}
          </strong>,
        );
      } else {
        result.push(
          <strong
            key={match.index}
            className={`${colorClass} font-mono tracking-tight mx-0.5`}
          >
            {part}
          </strong>,
        );
      }
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    result.push(text.substring(lastIndex));
  }

  return result;
}

export const SummaryBox = ({
  children,
  title,
  icon,
  className = "",
  hideIcon = false,
}: {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  hideIcon?: boolean;
}) => {
  const hasMargin = className.match(/\b(m|m[tby])-\d+/);
  const marginClass = hasMargin ? "" : "mb-6";

  return (
    <div
      className={`report-note p-4 md:p-5 ${marginClass} relative ${className}`}
    >
      {title && (
        <div
          className="flex items-center gap-2 mb-2 text-blue-950 font-black text-sm"
        >
          {icon && <span>{icon}</span>}
          <span>{title}</span>
        </div>
      )}
      <div className="flex items-start gap-3">
        <div className="text-base md:text-lg text-slate-950 font-bold leading-relaxed flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export const SignColoredValue = ({
  value,
  className = "font-mono font-bold tabular-nums",
}: {
  value: string | number;
  className?: string;
}) => {
  const str = String(value);
  const numValue = parseFloat(str.replace(/[^\d.-]/g, ""));

  const isPositive = str.startsWith("+") || numValue > 0;
  const isNegative = str.startsWith("-") || numValue < 0;

  let colorClass = "text-slate-900";
  if (isPositive) colorClass = "text-emerald-900 font-bold";
  if (isNegative) colorClass = "text-rose-900 font-bold";

  // 去掉正数前面的 + 号展示
  const displayValue =
    isPositive && str.startsWith("+") ? str.substring(1) : str;

  return <span className={`font-mono tabular-nums ${colorClass} ${className}`}>{displayValue}</span>;
};

export const UnitNumber = ({
  value,
  unit,
  className = "text-3xl font-bold",
  unitClassName = "text-lg",
}: {
  value: string;
  unit?: string;
  className?: string;
  unitClassName?: string;
}) => {
  const showUnit = unit && !["E", "万", "亿", "万元", "亿元"].includes(unit);
  return (
    <div className="flex items-baseline gap-1.5 font-mono tabular-nums">
      <SignColoredValue value={value} className={`${className}`} />
      {showUnit && (
        <span className={`font-sans font-semibold text-slate-900 ${unitClassName}`}>
          {unit}
        </span>
      )}
    </div>
  );
};

export const MetricTile = ({
  label,
  value,
  unit,
  detail,
  valueClassName = "text-3xl sm:text-4xl font-mono font-bold tabular-nums",
  
}: {
  label: string;
  value: string;
  unit?: string;
  detail?: string;
  valueClassName?: string;
  
}) => {
  const showUnit = unit && !["E", "万", "亿", "万元", "亿元"].includes(unit);
  return (
    <div className="report-card p-5 md:p-6">
      <div className="mb-3 text-sm font-bold text-slate-900">
        {label}
        {showUnit ? ` (${unit})` : ""}
      </div>
      <UnitNumber
        value={value}
        className={`${valueClassName} tracking-tighter`}
        unit={unit}
        unitClassName="text-slate-900 text-lg"
      />
      {detail && (
        <div className="mt-4 text-base font-bold leading-relaxed text-slate-900 border-t border-slate-100 pt-3">
          {detail}
        </div>
      )}
    </div>
  );
};

export const CoreActionHeader = ({
  index,
  title,
  desc,
  summaryStyle = false,
}: {
  index?: string;
  title: React.ReactNode;
  desc?: string;
  summaryStyle?: boolean;
}) => (
  <div className="flex flex-col gap-3 break-inside-avoid mb-1">
    <div className="flex flex-wrap items-center gap-3">
      {index && (
        <span className="rounded-md bg-blue-600/10 px-2 py-0.5 text-sm font-mono font-bold text-blue-900">
          {index}
        </span>
      )}
      <h3 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
        {title}
      </h3>
    </div>
    {desc && (
      summaryStyle ? (
        <SummaryBox className="mb-2 p-4 md:p-5">
          <p className="text-sm md:text-base font-bold leading-relaxed text-slate-900">
            {highlightNumbers(desc)}
          </p>
        </SummaryBox>
      ) : (
        <div className="max-w-4xl text-sm font-bold leading-relaxed text-slate-900">
          {highlightNumbers(desc)}
        </div>
      )
    )}
  </div>
);

export const ExpectedRhythm = ({
  items,
}: {
  items: { month: string; title?: string; desc?: string; status?: string; submitTime?: string; tagColor?: "blue" | "amber" | "emerald" | "slate" }[];
}) => {
  return (
    <div className="report-card-soft p-4 space-y-3 mt-auto">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
        <span className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2">
          <span className="w-2 h-4 bg-blue-600 rounded-full"></span>
          预期节奏
        </span>
      </div>
      <div className={`grid grid-cols-2 ${items.length > 3 ? 'md:grid-cols-5' : 'md:grid-cols-3'} gap-3 text-sm`}>
        {items.map((step, idx) => {
          let colorClass = "text-blue-900 bg-blue-50 border-blue-200";
          if (step.tagColor === "amber" || (!step.tagColor && idx === 1 && items.length <= 3)) colorClass = "text-amber-900 bg-amber-50 border-amber-200";
          if (step.tagColor === "emerald" || (!step.tagColor && idx === 2 && items.length <= 3)) colorClass = "text-emerald-900 bg-emerald-50 border-emerald-200";
          if (step.tagColor === "slate") colorClass = "text-slate-900 bg-slate-100 border-slate-200";

          return (
            <div key={idx} className="bg-white rounded-lg p-3 flex flex-col justify-between h-full space-y-2">
              <div>
                <span className={`text-xs font-black px-2 py-0.5 rounded border inline-block mb-2 w-full text-center ${items.length > 3 && !step.title && !step.submitTime ? "" : "w-auto text-left"} ${colorClass}`}>
                  {step.month}
                </span>
                {step.title && <div className="font-black text-slate-900 text-sm">{step.title}</div>}
              </div>
              {step.desc && (
                <div className={`text-xs text-slate-900 font-bold leading-relaxed ${items.length > 3 && !step.title && !step.submitTime ? "text-center mt-auto mb-auto" : ""}`}>
                  {step.desc}
                </div>
              )}
              {step.submitTime && (
                 <div className="text-xs text-slate-900 font-bold pt-2 border-t border-slate-100 mt-2">
                   <div className="flex justify-between items-center mb-1"><span className="font-black text-slate-900">提交:</span> <span className="font-mono text-blue-900">{step.submitTime}</span></div>
                   <div className="flex justify-between items-center"><span className="font-black text-slate-900">状态:</span> <span className="text-amber-900">{step.status}</span></div>
                 </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
