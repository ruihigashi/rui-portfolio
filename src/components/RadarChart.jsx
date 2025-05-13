// components/RadarChart.jsx
import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function RadarChart() {
  const data = {
    labels: [
      "FRONT-END",
      "BACK-END",
      "FW",
      "DATABASE",
      "CLOUD",
      "INFRA",
      "OS",
      "TOOL",
    ],
    datasets: [
      {
        label: "Skill Level",
        data: [4, 3, 2, 3, 4, 2, 3, 4],
        backgroundColor: "rgba(139, 92, 246, 0.3)",
        borderColor: "rgba(139, 92, 246, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(139, 92, 246, 1)",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
          color: "#aaa",
        },
        pointLabels: {
          font: {
            size: 12,
          },
          color: "#333",
        },
        grid: {
          color: "#ccc",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full max-w-md h-[400px] mx-auto">
      <Radar data={data} options={options} />
    </div>
  );
}
