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
import { Star } from "lucide-react";

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
            data: [5, 4, 5, 4, 3, 3, 4, 5],
            backgroundColor: "rgba(168, 85, 247, 0.4)", // violet-500
            borderColor: "rgba(168, 85, 247, 1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(168, 85, 247, 1)",
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
                color: "#fff",
                backdropColor: "transparent",  // ラベル色
            },
            pointLabels: {
                font: {
                    size: 12,
                },
                color: "#ffffff", // ラベル色
            },
            grid: {
                color: "#ffffff", // グリッド色
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
    backgroundColor: "white"
};


    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mx-auto">

            <div className="w-full max-w-md h-[250px]">
                <Radar data={data} options={options} />
            </div>

            <div className="bg-purple-300 text-gray-900 p-4 rounded-lg text-sm space-y-2 shadow-md max-w-xs w-full">
                <SkillLevel stars={1} text="触ったことあり" />
                <SkillLevel stars={2} text="楽しめる" />
                <SkillLevel stars={3} text="理解してきた" />
                <SkillLevel stars={4} text="得意" />
                <SkillLevel stars={5} text="実務経験あり" />
            </div>
        </div>
    );
}

function SkillLevel({ stars, text }) {
  return (
    <div className="flex justify-center items-center space-x-4">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < stars ? "#facc15" : "#6b7280"}
            stroke=""
            className="mr-0.5"
          />
        ))}
      </div>
      <span className="inline-block min-w-[6rem] text-left">{text}</span>
    </div>
  );
}