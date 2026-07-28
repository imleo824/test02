import React from "react";
import { FA } from "../types";

export const ReportCover: React.FC = () => {
  const sections: {
    id: string;
    title: string;
    paths: {
      title: string;
      items?: {
        title: string;
        items?: {
          title: string;
        }[];
      }[];
    }[];
  }[] = [
    {
      id: "1.0",
      title: "组织概览",
      paths: [
        {
          title: "组织人员结构",
        },
      ],
    },
    {
      id: "2.0",
      title: "数据概览",
      paths: [
        {
          title: "2.1 风控数据",
          items: [
            { title: "2.1.1 拦截金额时效" },
            { title: "2.1.2 拦截类型占比" },
            { title: "2.1.3 代理拦截数据" },
            { title: "2.1.4 体育拦截数据" },
            { title: "2.1.5 团伙拦截数据" },
            { title: "2.1.6 高V拦截数据" },
          ],
        },
        {
          title: "2.2 内控数据",
          items: [
            { title: "2.2.1 核心线索来源" },
            { title: "2.2.2 违规高危场景" },
            { title: "2.2.3 内控数据概览" },
            { title: "2.2.4 违规案例剖析" },
          ],
        },
      ],
    },
    {
      id: "3.0",
      title: "业务概览",
      paths: [
        {
          title: "3.1 风控前置",
          items: [
            { title: "3.1.1 系统自动预警" },
            { title: "3.1.2 系统自动上标" },
            { title: "3.1.3 人工主动上标" },
          ],
        },
        {
          title: "3.2 系统审核",
          items: [
            { title: "3.2.1 系统评估指标" },
            { title: "3.2.2 系统审核流程" },
          ],
        },
        {
          title: "3.3 智能派单",
          items: [
            { title: "3.3.1 系统直接出单比例" },
            { title: "3.3.2 升级人工派单模式" },
          ],
        },
        {
          title: "3.4 人工审核",
          items: [
            { title: "3.4.1 流程线上化" },
            { title: "3.4.2 升级考核机制" },
            { title: "3.4.3 系统工具支持" },
          ],
        },
        {
          title: "3.5 代理风控",
        },
      ],
    },
  ];

  return (
    <div className="report-card p-7 md:p-10 space-y-8 w-full mx-auto min-h-fit flex flex-col">
      {/* 封面标题区 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight max-w-4xl">
          {FA.reportTitle}
        </h1>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-base text-slate-900 font-bold mb-1">
          <div className="flex items-center gap-2">
            <span>数据周期:</span>
            <span className="font-bold text-slate-900">{FA.navTitle}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>报告日期:</span>
            <span className="font-bold text-slate-900">
              {FA.reportDate}
            </span>
          </div>
        </div>
      </div>

      {/* 目录 */}
      <div className="report-cover-directory">
        {sections.map((section) => (
          <div key={section.id} className="report-cover-section">
            <div className="report-cover-section-title">
              <span>{section.id}</span>
              <strong>{section.title}</strong>
            </div>

            <div className="report-cover-paths">
              {section.paths.map((path) => (
                <div key={path.title} className="report-cover-path">
                  <div className="report-cover-path-title">{path.title}</div>
                  {path.items && path.items.length > 0 && (
                    <div className="report-cover-items">
                      {path.items.map((item) => (
                        <div key={item.title} className="report-cover-item">
                          {item.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
