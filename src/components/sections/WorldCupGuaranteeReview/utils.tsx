import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

export const stripDisplayUnits = (value: string | number) =>
  String(value)
    .replace(/3\s*[kK][wW]/g, "3000")
    .replace(/([+\-]?\d+(?:[.,]\d+)*)\s*(?:万元|亿元|[kK][wW]|[wW]|[eE]|万|亿)/g, "$1");

const summaryNumberClass =
  "report-number text-blue-900 font-black font-mono tabular-nums mx-0.5";
const summaryRiskNumberClass =
  "report-number report-number-risk text-rose-900 font-black font-mono tabular-nums mx-0.5";
const summaryCoreClass =
  "report-core-underline text-blue-900 font-black mx-0.5";

// 辅助函数：统一高亮核心内容与数字样式（纯静态，不带任何动效，投屏无浮夸色彩）
export function highlightNumbers(
  text: string,
  colorClass: string = summaryNumberClass,
) {
  const pattern =
    /(\[\[(.*?)\]\])|([+\-]?\d+(?:[.,]\d+)*(?:\s*(?:%|人|场|项|倍|E|W|万|亿|万元|亿元|元|h|ms|min|k|个))?)/g;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.substring(lastIndex, match.index));
    }

    if (match[1]) {
      // It's a [[core phrase]]
      let phrase = stripDisplayUnits(match[2]);

      if (phrase.startsWith("green:")) {
        result.push(
          <span
            key={match.index}
            className={summaryNumberClass}
          >
            {phrase.substring(6)}
          </span>,
        );
        lastIndex = pattern.lastIndex;
        continue;
      }
      if (phrase.startsWith("red:")) {
        result.push(
          <span key={match.index} className={summaryRiskNumberClass}>
            {stripDisplayUnits(phrase.substring(4))}
          </span>,
        );
        lastIndex = pattern.lastIndex;
        continue;
      }
      if (phrase.startsWith("blue:")) {
        result.push(
          <span key={match.index} className={summaryNumberClass}>
            {phrase.substring(5)}
          </span>,
        );
        lastIndex = pattern.lastIndex;
        continue;
      }

      // 提取纯数字部分进行判断
      const numericValue = phrase.replace(/[^\d.-]/g, "");
      const isNumber =
        /^[<>≤≥]?\s*[+\-]?\d+(?:[.,]\d+)*(?:%|人|项|倍|元|h|ms|min|k|个)?$/.test(phrase);

      if (
        isNumber &&
        (phrase.startsWith("-") || phrase.startsWith("<") || parseFloat(numericValue) < 0)
      ) {
        result.push(
          <span key={match.index} className={summaryRiskNumberClass}>
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
            className={summaryNumberClass}
          >
            {phrase.substring(1)}
          </span>,
        );
      } else if (isNumber) {
        result.push(
          <span
            key={match.index}
            className={colorClass}
          >
            {phrase}
          </span>,
        );
      } else {
        result.push(
          <span
            key={match.index}
            className={summaryCoreClass}
          >
            {phrase}
          </span>,
        );
      }
    } else if (match[3]) {
      // It's a number/unit
      const part = stripDisplayUnits(match[3]);
      if (part.startsWith("+")) {
        result.push(
          <strong
            key={match.index}
            className={summaryNumberClass}
          >
            {part.substring(1)}
          </strong>,
        );
      } else if (part.startsWith("-")) {
        result.push(
          <strong
            key={match.index}
            className={summaryRiskNumberClass}
          >
            {part}
          </strong>,
        );
      } else {
        result.push(
          <strong
            key={match.index}
            className={colorClass}
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
  const showUnit = unit && !["E", "W", "w", "KW", "kw", "万", "亿", "万元", "亿元"].includes(unit);
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
  const showUnit = unit && !["E", "W", "w", "KW", "kw", "万", "亿", "万元", "亿元"].includes(unit);
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
  const gridClass =
    items.length === 1
      ? "grid-cols-1"
      : items.length === 2
        ? "grid-cols-1 md:grid-cols-2"
        : items.length === 3
          ? "grid-cols-1 md:grid-cols-3"
          : "grid-cols-2 md:grid-cols-5";

  return (
    <div className="report-card-soft p-4 space-y-3 mt-auto">
      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
        <span className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2">
          <span className="w-2 h-4 bg-blue-600 rounded-full"></span>
          预期节奏
        </span>
      </div>
      <div className={`grid ${gridClass} gap-3 text-sm`}>
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
                   <div className="flex justify-between items-center mb-1"><span className="font-black text-slate-900">提交时间</span> <span className="font-mono text-blue-900">{step.submitTime}</span></div>
                   <div className="flex justify-between items-center"><span className="font-black text-slate-900">状态</span> <span className="text-amber-900">{step.status}</span></div>
                 </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ModuleBlockHeader = ({
  title,
  right,
}: {
  title: React.ReactNode;
  right?: React.ReactNode;
}) => (
  <div className="report-module-head">
    <div className="flex items-center gap-2">
      <span className="w-2.5 h-5 bg-blue-700 rounded-none shrink-0" />
      <h4 className="text-base md:text-lg font-black text-slate-900">{title}</h4>
    </div>
    {right}
  </div>
);

export const ReportFlow = ({
  title,
  steps,
}: {
  title: string;
  steps: { title: string; desc: string; strong?: boolean }[];
}) => (
  <div className="report-flow-box">
    <div className="report-small-title">{title}</div>
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-2 items-stretch">
      {steps.map((step, index) => (
        <React.Fragment key={`${step.title}-${index}`}>
          <div className={step.strong ? "report-flow-step report-flow-step-strong" : "report-flow-step"}>
            <div className="text-sm font-black">{index + 1}. {step.title}</div>
            <div className="text-xs font-bold leading-normal">{step.desc}</div>
          </div>
          {index < steps.length - 1 && (
            <>
              <div className="hidden md:flex items-center justify-center text-blue-900">
                <ArrowRight className="w-5 h-5" strokeWidth={3} />
              </div>
              <div className="md:hidden flex items-center justify-center text-blue-900">
                <ArrowDown className="w-5 h-5" strokeWidth={3} />
              </div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export const ReportInfoGrid = ({
  title,
  desc,
  items,
  showIndex = false,
}: {
  title: React.ReactNode;
  desc?: React.ReactNode;
  items: { title: string; desc?: string; badge?: string }[];
  showIndex?: boolean;
}) => (
  <div className="report-info-box">
    <div className="space-y-1.5 border-b border-slate-200 pb-2">
      <div className="report-small-title border-0 pb-0">{title}</div>
      {desc && <p className="text-sm font-bold text-slate-900 leading-relaxed">{desc}</p>}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {items.map((item, index) => (
        <div key={item.title} className="report-info-item">
          {showIndex && <span className="report-info-index">{index + 1}</span>}
          <div className="min-w-0 flex-1">
            <div className="text-sm font-black text-slate-900 leading-tight">{item.title}</div>
            {item.desc && <p className="text-sm font-bold text-slate-900 leading-normal mt-1">{item.desc}</p>}
          </div>
          {item.badge && (
            <span className="px-2 py-1 rounded border border-blue-200 bg-blue-50 text-blue-900 text-sm font-black shrink-0">
              {item.badge}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export const BeforeAfter = ({
  beforeTitle = "原来模式",
  before,
  afterTitle = "升级模式",
  after,
}: {
  beforeTitle?: string;
  before: React.ReactNode;
  afterTitle?: string;
  after: React.ReactNode;
}) => (
  <div className="report-compare">
    <div className="report-compare-side">
      <div className="text-sm font-black text-slate-900">{beforeTitle}</div>
      <div className="text-sm font-bold text-slate-900 leading-relaxed">{before}</div>
    </div>
    <div className="report-compare-arrow">→</div>
    <div className="report-compare-side report-compare-after">
      <div className="text-sm font-black text-blue-900">{afterTitle}</div>
      <div className="text-sm font-black text-slate-900 leading-relaxed">{after}</div>
    </div>
  </div>
);
