"use client";

import { FC, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const WeeklySalesChart: FC = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: `Weekly Sales Chart`,
      },
    },
  };

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const tabs = [
    {
      title: "Sales",
      type: "sales",
      tabTextColor: "text-sky-600",
      tabBorderColor: "border-sky-600",
      data: {
        labels,
        datasets: [
          {
            label: "No.of Sales",
            data: labels.map(() => 0 + Math.random() * 999),
            backgroundColor: "rgba(2, 132, 199, 0.5)",
            borderColor: "rgb(2, 132, 199)",
          },
        ],
      },
    },
    {
      title: "Orders",
      type: "orders",
      tabTextColor: "text-orange-600",
      tabBorderColor: "border-orange-600",
      data: {
        labels,
        datasets: [
          {
            label: "No.of Orders",
            data: labels.map(() => 0 + Math.random() * 999),
            backgroundColor: "rgba(251, 140, 0, 0.5)",
            borderColor: "rgb(251, 140, 0)",
          },
        ],
      },
    },
  ];

  const [chartToDisplay, setChartToDisplay] = useState<string>(tabs[0].type);

  return (
    <>
      <div className="bg-slate-700 rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">Weekly Sales</h2>

        {/* Line Chart */}
        <div className="">
          <div className="text-sm mb-5 font-medium text-center text-slate-100 border-b border-slate-200 dark:text-slate-50 dark:border-slate-100">
            <ul className="flex flex-wrap -mb-px">
              {tabs.map((tab, i) => (
                <li key={i} className="me-2">
                  <button
                    className={
                      chartToDisplay === tab.type
                        ? `inline-block p-4 ${tab.tabTextColor} border-b-2 rounded-t-lg active ${tab.tabBorderColor} dark:${tab.tabTextColor} dark:${tab.tabBorderColor}`
                        : `inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:${tab.tabTextColor} hover:${tab.tabBorderColor} dark:hover:${tab.tabTextColor}`
                    }
                    onClick={() => setChartToDisplay(tab.type)}
                  >
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {tabs.map((tab, i) => {
            if (chartToDisplay === tab.type)
              return <Line options={options} data={tab.data} />;
            return null;
          })}
        </div>
      </div>
    </>
  );
};
