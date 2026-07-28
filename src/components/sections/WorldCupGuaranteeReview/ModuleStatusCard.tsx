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
}) => {
  const numericProgress = parseFloat(progress.replace(/[^0-9.]/g, "")) || 0;
  const normalizedMetrics =
    metricsList && metricsList.length > 0
      ? metricsList
      : [
          {
            label: metricLabel || "攻坚指标",
            current: currentStatus,
            target: keyMetrics,
          },
        ];

  return (
    <div className="report-status-card overflow-hidden text-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch">
        
        {/* 1. 核心价值 */}
        <div className="report-status-segment">
          <div className="report-status-heading">
            <span>核心价值</span>
          </div>
          <div className="report-status-content report-status-value">
            {coreValue}
          </div>
        </div>

        {/* 2. 核心指标 */}
        <div className="report-status-segment">
          <div className="report-status-heading">
            <span>核心指标</span>
          </div>
          
          <div className="report-status-content report-status-metric-list">
            {normalizedMetrics.map((m, idx) => (
              <div key={idx} className="report-status-metric-row">
                <span>{m.label}</span>
                {(m.current || m.target) && (
                  <div className="report-status-range">
                    {m.current && (
                      <>
                        <span className="report-status-range-label">当前</span>
                        <strong>{m.current}</strong>
                      </>
                    )}
                    {m.current && m.target && (
                      <span className="report-status-arrow">→</span>
                    )}
                    {m.target && (
                      <>
                        <span className="report-status-range-label">目标</span>
                        <strong className="report-status-target">{m.target}</strong>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3. 整体进度 */}
        <div className="report-status-segment">
          <div className="report-status-heading">
            <span>整体进度</span>
          </div>
          
          <div className="report-status-content report-status-progress-panel">
            <strong>
              {progress}
            </strong>
            <div className="report-status-progress-track">
              <div
                className="report-status-progress-fill"
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
