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
        data: [0, 5, 15, 25, 35, 45, -5, -15, -25, -35, -45, -55], // Use negative values for "July" to "Dec"
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

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 50, // Adjust the maximum value as needed
        ticks: {
          callback: (value: any) => "$" + value + "k",
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
