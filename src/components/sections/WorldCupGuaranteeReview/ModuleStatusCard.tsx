import React from "react";

export interface MetricItem {
  label: string;
  current?: string;
  target?: string;
}

export interface ModuleStatusCardProps {
  coreValue: string;
  keyMetrics?: string;
  currentStatus?: string;
  metricLabel?: string;
  metricsList?: MetricItem[];
  progress: string;
  estimatedTime: string;
}

export const ModuleStatusCard: React.FC<ModuleStatusCardProps> = ({
  coreValue,
  keyMetrics,
  currentStatus,
  metricLabel,
  metricsList,
  progress,
  estimatedTime,
}) => {
  const numericProgress = parseFloat(progress.replace(/[^0-9.]/g, "")) || 0;

  return (
    <div className="bg-blue-50 border-2 border-blue-100 rounded-xl p-6 md:p-8 text-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-blue-200">
        
        {/* 1. 核心价值 */}
        <div className="flex flex-col justify-start space-y-4 pt-2 lg:pt-0 lg:pr-8 first:pt-0">
          <div className="text-base md:text-lg font-black text-blue-900 flex items-center gap-2.5 shrink-0 border-b border-blue-200 pb-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-700" />
            <span>核心价值</span>
          </div>
          <div className="text-lg md:text-xl font-bold text-slate-900 leading-relaxed my-auto">
            {coreValue}
          </div>
        </div>

        {/* 2. 核心指标 */}
        <div className="flex flex-col justify-start space-y-4 pt-6 lg:pt-0 lg:px-8">
          <div className="text-base md:text-lg font-black text-blue-900 flex items-center gap-2.5 shrink-0 border-b border-blue-200 pb-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-700" />
            <span>核心指标：</span>
            {!metricsList && (
              <span className="text-lg md:text-xl font-black text-slate-900 ml-1">
                {metricLabel || "攻坚指标"}
              </span>
            )}
          </div>
          
          {metricsList && metricsList.length > 0 ? (
            <div className="space-y-3 my-auto w-full">
              {metricsList.map((m, idx) => (
                <div key={idx} className="flex items-center justify-between bg-white border border-blue-100 px-4 py-3 rounded-lg shadow-sm">
                  <span className="text-base font-black text-slate-900">{m.label}</span>
                  {(m.current || m.target) && (
                    <div className="flex items-baseline gap-2 text-base font-black">
                      {m.current && (
                        <>
                          <span className="text-slate-900 font-black">当前</span>
                          <span className="text-slate-900">{m.current}</span>
                        </>
                      )}
                      {m.current && m.target && (
                        <span className="text-slate-900 font-black px-1">➔</span>
                      )}
                      {m.target && (
                        <>
                          <span className="text-slate-900 font-black">目标</span>
                          <span className="text-blue-700 font-black">{m.target}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-baseline gap-3 flex-wrap my-auto bg-white p-5 rounded-lg border border-blue-100 shadow-sm">
              <span className="text-base font-black text-slate-900">当前</span>
              <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                {currentStatus}
              </span>
              <span className="text-2xl font-black text-slate-900 px-2">➔</span>
              <span className="text-base font-black text-slate-900">目标</span>
              <span className="text-3xl md:text-4xl font-black text-blue-700 tracking-tight">
                {keyMetrics}
              </span>
            </div>
          )}
        </div>

        {/* 3. 整体进度 */}
        <div className="flex flex-col justify-start space-y-4 pt-6 lg:pt-0 lg:pl-8">
          <div className="text-base md:text-lg font-black text-blue-900 flex items-center gap-2.5 shrink-0 border-b border-blue-200 pb-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-700" />
            <span>整体进度：</span>
            <span className="text-lg md:text-xl font-black text-slate-900 ml-1">
              {estimatedTime}
            </span>
          </div>
          
          <div className="flex flex-col justify-center space-y-3 my-auto w-full bg-white p-5 rounded-lg border border-blue-100 shadow-sm">
            <div className="flex items-end justify-between">
              <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                {progress}
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-none h-4 overflow-hidden border border-slate-300">
              <div
                className="bg-blue-700 h-full rounded-none"
                style={{ width: `${Math.min(Math.max(numericProgress, 0), 100)}%` }}
              >
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
