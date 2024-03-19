"use client";

import { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const BestSellingProductsChart: FC = () => {
  const chartData = {
    labels: ["Cabbage", "Watermelon", "Tomato", "Broccoli"],
    datasets: [
      {
        label: "No.of Sales",
        data: [45, 15, 17, 23],
        backgroundColor: [
          "rgba(10, 70, 170, 0.7)",
          "rgba(200, 0, 150, 0.7)",
          "rgba(20, 150, 80, 0.7)",
          "rgba(80, 40, 10, 0.7)",
        ],
        borderColor: [
          "rgba(255, 255, 255, 0.7)",
          "rgba(255, 255, 255, 0.7)",
          "rgba(255, 255, 255, 0.7)",
          "rgba(255, 255, 255, 0.7)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <div className="bg-slate-700 p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Best Selling Products</h2>

        {/* Pie Chart */}
        <div className="p-4">
          <Pie data={chartData} />
        </div>
      </div>
    </>
  );
};
