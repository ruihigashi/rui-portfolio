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
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mx-auto">

            <div className="w-full max-w-md h-[250px]">
                <Radar data={data} options={options} />
            </div>

            <div className="bg-purple-100 text-brack p-4 rounded-lg text-sm space-y-2 shadow-md max-w-xs w-full">
                <SkillLevel stars={1} text="触ったことあり" />
                <SkillLevel stars={2} text="楽しめる" />
                <SkillLevel stars={3} text="理解してきた" />
                <SkillLevel stars={4} text="" />
                <SkillLevel stars={5} text="実務経験あり" />
            </div>
        </div>
    );
}

function SkillLevel({ stars, text }) {
    return (
        <div className="flex items-center space-x-2">
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        fill={i < stars ? "#facc15" : "#d1d5db"}
                        stroke=""
                        className="mr-0.5"
                    />
                ))}
            </div>
            <span>{text}</span>
        </div>
    );
}