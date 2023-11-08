import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement);

function BarChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Visits",
        data: [0, 5, 15, 25, 35, 45, -5, -15, -25, -35, -45, -55],
        backgroundColor: [
          "green",
          "green",
          "green",
          "green",
          "green",
          "green",
          "red",
          "red",
          "red",
          "red",
          "red",
          "red",
        ],
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
        max: 50,
        ticks: {
          callback: (value: number) => "$" + value + "k",
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default BarChart;
