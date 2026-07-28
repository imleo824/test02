export const chartColors = {
  ink: "#0f172a",
  blue: "#1d4e89",
  blueSoft: "#8aa6c8",
  line: "#d7dee8",
  grid: "#dfe6ef",
  green: "#166534",
  amber: "#854d0e",
  red: "#9f1239",
};

export const chartSeriesColors = {
  primary: chartColors.ink,
  secondary: chartColors.blue,
  tertiary: chartColors.blueSoft,
  manual: chartColors.amber,
  positive: chartColors.green,
  negative: chartColors.red,
  trend: chartColors.ink,
};

export const chartAxisTick = {
  fill: chartColors.ink,
  fontWeight: 800,
  fontSize: 14,
};

export const chartLabelStyle = {
  fill: chartColors.ink,
  fontWeight: 900,
  fontSize: 14,
};

export const chartTooltipStyle = {
  backgroundColor: "#ffffff",
  color: chartColors.ink,
  borderRadius: "4px",
  border: `1px solid ${chartColors.line}`,
  boxShadow: "none",
  fontWeight: "bold",
};

export const chartTooltipItemStyle = {
  color: chartColors.ink,
};

export const chartLegendStyle = {
  fontWeight: 900,
  color: chartColors.ink,
  paddingTop: "10px",
};

export const chartMargins = {
  standard: { top: 30, right: 35, left: 15, bottom: 10 },
  compact: { top: 25, right: 30, left: 10, bottom: 8 },
  mini: { top: 25, right: 20, left: 0, bottom: 20 },
  hiddenAxis: { top: 25, right: 10, left: -20, bottom: 0 },
};

export const chartBarSize = {
  single: 32,
  grouped: 24,
  stacked: 22,
  horizontal: 18,
  delta: 12,
};

export const chartBarGap = {
  grouped: 6,
  stacked: 0,
};

export const chartBarRadius = {
  standard: [4, 4, 0, 0] as [number, number, number, number],
  horizontal: [0, 4, 4, 0] as [number, number, number, number],
  stackedTop: [4, 4, 0, 0] as [number, number, number, number],
  square: [0, 0, 0, 0] as [number, number, number, number],
};
