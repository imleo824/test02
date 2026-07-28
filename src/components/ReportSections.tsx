import React from "react";

export const ChapterTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`report-chapter-title ${className}`}>
      <h2>{children}</h2>
    </div>
  );
};

// Helper component for subsection titles
export const SubsectionTitle: React.FC<{
  title: string;
  icon?: React.ReactNode;
  rightContent?: React.ReactNode;
}> = ({ title, icon, rightContent }) => {
  return (
    <div className="mb-5 mt-8 border-b border-slate-200 pb-3 flex items-baseline justify-between">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-blue-600 rounded-none shrink-0" />
          {icon && <span className="text-slate-900">{icon}</span>}
          <h3 className="text-xl md:text-2xl font-black text-slate-900">
            {title}
          </h3>
        </div>
      </div>
      {rightContent && (
        <div className="hidden md:flex gap-4 text-sm font-bold text-slate-900 whitespace-nowrap flex-nowrap items-baseline">
          {rightContent}
        </div>
      )}
    </div>
  );
};

// Helper card with clean styling
export const Card: React.FC<{
  children: React.ReactNode;
  title?: string;
  className?: string;
  padding?: "none" | "xs" | "sm" | "md" | "lg";
  tone?: "default" | "soft" | "dark" | "flat";
  id?: string;
  headerRight?: React.ReactNode;
}> = ({
  children,
  title,
  className = "",
  padding = "md",
  tone = "default",
  id,
  headerRight,
}) => {
  const pStyle = {
    none: "p-0",
    xs: "p-3 md:p-4",
    sm: "p-4 md:p-5",
    md: "p-5 md:p-6",
    lg: "p-6 md:p-8",
  }[padding];

  const tStyle = {
    default: "report-card",
    soft: "report-card-soft",
    dark: "bg-slate-900 border border-slate-800 text-white shadow-sm",
    flat: "bg-white border-0 shadow-none",
  }[tone];

  return (
    <div id={id} className={`rounded-lg ${pStyle} ${tStyle} ${className}`}>
      {title && (
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
          <h4
            className={`text-base md:text-lg font-black ${tone === "dark" ? "text-white" : "text-slate-900"}`}
          >
            {title}
          </h4>
          {headerRight && (
            <div className="flex items-center gap-4 text-sm font-bold text-slate-900">
              {headerRight}
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export const ReportPanel: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "soft";
  padding?: "sm" | "md" | "lg";
}> = ({ children, className = "", id, tone = "default", padding = "md" }) => {
  const paddingClass = {
    sm: "p-4 md:p-5",
    md: "p-5 md:p-6",
    lg: "p-6 md:p-8",
  }[padding];
  const toneClass = tone === "soft" ? "report-card-soft" : "report-card";

  return (
    <div id={id} className={`${toneClass} ${paddingClass} ${className}`}>
      {children}
    </div>
  );
};

export const ReportBadge: React.FC<{
  children: React.ReactNode;
  tone?: "blue" | "slate" | "green" | "amber" | "red";
  className?: string;
}> = ({ children, tone = "blue", className = "" }) => {
  const toneClass = {
    blue: "text-blue-900 bg-blue-50 border-blue-200",
    slate: "text-slate-900 bg-slate-100 border-slate-200",
    green: "text-emerald-900 bg-emerald-50 border-emerald-200",
    amber: "text-amber-900 bg-amber-50 border-amber-200",
    red: "text-rose-900 bg-rose-50 border-rose-200",
  }[tone];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded border text-sm font-black ${toneClass} ${className}`}
    >
      {children}
    </span>
  );
};

export const ReportPanelHeader: React.FC<{
  title: React.ReactNode;
  rightContent?: React.ReactNode;
  markerTone?: "ink" | "blue";
  className?: string;
}> = ({ title, rightContent, markerTone = "ink", className = "" }) => {
  const markerClass = markerTone === "blue" ? "bg-blue-600" : "bg-slate-900";

  return (
    <div
      className={`flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-3 gap-2 ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className={`w-2.5 h-5 ${markerClass} rounded-none shrink-0`} />
        <h3 className="text-lg font-black text-slate-900">{title}</h3>
      </div>
      {rightContent}
    </div>
  );
};
