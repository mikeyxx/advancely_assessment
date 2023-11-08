import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function LineChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        data: [5, 10, 15, 20, 25],
        backgroundColor: "blue",
        borderColor: "blue",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };

  const options: any = {
    plugins: { legend: { display: false } },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 30,
        ticks: {
          callback: (value: number) => value + "k",
        },
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default LineChart;
