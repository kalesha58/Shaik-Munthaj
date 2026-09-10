export type StatItem = {
  value: string;
  label: string;
  sublabel?: string;
  color: "blue" | "teal" | "purple" | "amber";
  iconName: "Database" | "Users" | "FileText" | "TrendingUp";
  chartBars: number[];
};

export const stats: StatItem[] = [
  {
    value: "13",
    label: "Years of Real-World Data Analyzed",
    color: "blue",
    iconName: "Database",
    chartBars: [30, 45, 25, 60, 40, 75, 50, 85, 65, 100],
  },
  {
    value: "47",
    label: "Municipal Managers Studied",
    color: "teal",
    iconName: "Users",
    chartBars: [25, 50, 35, 70, 45, 60, 55, 80, 90, 100],
  },
  {
    value: "610",
    label: "Observations Processed",
    color: "purple",
    iconName: "FileText",
    chartBars: [40, 25, 65, 50, 80, 45, 70, 60, 85, 95],
  },
  {
    value: "0.803",
    label: "Best Model R² Score",
    sublabel: "(5-Fold CV)",
    color: "amber",
    iconName: "TrendingUp",
    chartBars: [35, 55, 40, 75, 60, 80, 65, 90, 85, 95],
  },
];

