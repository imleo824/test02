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

export const chartAxisTick = {
  fill: chartColors.ink,
  fontWeight: 800,
  fontSize: 13,
};

export const chartLabelStyle = {
  fill: chartColors.ink,
  fontWeight: 900,
  fontSize: 13,
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
};
