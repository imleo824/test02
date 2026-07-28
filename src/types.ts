export interface ReportConfig {
  brandMark: string;
  navTitle: string;
  reportTitle: string;
  pageTitle: string;
  printHeaderLeft: string;
  confidentiality: string;
  reportDateLabel: string;
  reportDate: string;
  pdfFileName: string;
  pdfBackgroundColor: string;
}

export const FA: ReportConfig = {
  brandMark: "",
  navTitle: "2026年Q2",
  reportTitle: "风控季度工作总结报告",
  pageTitle: "风控季度工作总结报告",
  printHeaderLeft: "风控季度工作总结报告",
  confidentiality: "内部机密",
  reportDateLabel: "汇报日期",
  reportDate: "2026.08",
  pdfFileName: "风控季度工作总结报告_202607.pdf",
  pdfBackgroundColor: "#FFFFFF",
};
