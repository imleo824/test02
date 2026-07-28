import React from "react";
import {
  BarChart3,
  Clock3,
  Crosshair,
  Database,
  FileText,
  ShieldCheck,
  Target,
  UserRound,
  UsersRound,
} from "lucide-react";

const flywheelSteps = [
  {
    number: "1",
    title: "提升系统审核比例",
    desc: ["规则、模型、特征优化", "让系统承担更多低风险订单"],
    icon: BarChart3,
    tone: "red",
    className: "business-flywheel-card-one",
    tag: "破局点 / 切入点",
  },
  {
    number: "2",
    title: "人工审核量下降",
    desc: ["人工处理单量减少", "审核资源更聚焦"],
    icon: UsersRound,
    tone: "teal",
    className: "business-flywheel-card-two",
  },
  {
    number: "3",
    title: "人工审核风险浓度提升",
    desc: ["人工收到的订单更“有问题”", "无效审核减少"],
    icon: Crosshair,
    tone: "green",
    className: "business-flywheel-card-three",
  },
  {
    number: "4",
    title: "质量提升 & 时效提升",
    desc: ["处理更快，积压更少", "误判、漏判减少"],
    icon: Clock3,
    tone: "orange",
    className: "business-flywheel-card-four",
  },
  {
    number: "5",
    title: "结果沉淀与反哺系统",
    desc: ["审核结果、标签、案例沉淀", "持续优化规则与模型"],
    icon: Database,
    tone: "purple",
    className: "business-flywheel-card-five",
  },
];

const metricItems = [
  {
    label: "系统审核率",
    value: "80%",
    icon: BarChart3,
    tone: "blue",
  },
  {
    label: "人工审核率",
    value: "20%",
    icon: UserRound,
    tone: "teal",
  },
  {
    label: "问题召回率",
    value: "≥ 70.67%",
    icon: Target,
    tone: "teal",
  },
  {
    label: "问题命中率",
    value: "≥ 6.75%",
    icon: Crosshair,
    tone: "orange",
  },
  {
    label: "系统错误率",
    value: "≤ 7‰",
    icon: ShieldCheck,
    tone: "purple",
  },
  {
    label: "系统漏出问题单",
    value: "≤ 12,320 单/月",
    icon: FileText,
    tone: "blue",
  },
];

export const ZZOverview: React.FC = () => {
  return (
    <div className="report-card business-flywheel-shell p-6 overflow-hidden">
      <div className="business-flywheel">
        <div className="business-flywheel-head">
          <h3>审核业务增长飞轮</h3>
        </div>

        <div className="business-flywheel-stage">
          <div className="business-flywheel-ring business-flywheel-ring-one" />
          <div className="business-flywheel-ring business-flywheel-ring-two" />
          <div className="business-flywheel-ring business-flywheel-ring-three" />

          <div className="business-flywheel-center">
            <div>核心目标</div>
            <strong>质量更高</strong>
            <strong>时效更快</strong>
            <strong>成本更低</strong>
          </div>

          <div className="business-flywheel-grid">
            {flywheelSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`business-flywheel-card business-flywheel-card-${step.tone} ${step.className}`}
                >
                  <div className="business-flywheel-card-top">
                    <div className={`business-flywheel-number business-flywheel-number-${step.tone}`}>
                      {step.number}
                    </div>
                    {step.tag && <div className="business-flywheel-tag">{step.tag}</div>}
                  </div>
                  <div className="business-flywheel-card-body">
                    <Icon className={`business-flywheel-icon business-flywheel-icon-${step.tone}`} />
                    <div className="business-flywheel-card-copy">
                      <h4>{step.title}</h4>
                      {step.desc.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="business-metrics-strip">
          <div className="business-metrics-title">
            <span>关键指标底线</span>
            <i />
          </div>
          {metricItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="business-metric-item">
                <Icon className={`business-metric-icon business-metric-icon-${item.tone}`} />
                <div>
                  <div className="business-metric-label">{item.label}</div>
                  <div className="business-metric-value">{item.value}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
