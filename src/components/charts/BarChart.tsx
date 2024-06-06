import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { NEO } from "@Types/neo.d";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ data = [] }: { data: NEO[] }) => {
  const options = {
    responsive: true,
  };

  const [initialData, setInitialData] = useState(() => {
    const baseModel = {
      labels: ["Kilometers (KM)"],
      datasets: data.map((neo: NEO) => {
        return {
          label: neo.name,
          data: [neo.close_approach_data[0].miss_distance.kilometers],
          backgroundColor: `rgba(${(Math.random() * 256) | 0}, ${
            (Math.random() * 256) | 0
          }, ${(Math.random() * 256) | 0}, 1)`,
        };
      }),
    };
    return baseModel;
  });

  useEffect(() => {
    const baseModel = {
      labels: ["Kilometers (KM)"],
      datasets: data.map((neo: NEO) => {
        return {
          label: neo.name,
          data: [neo.close_approach_data[0].miss_distance.kilometers],
          backgroundColor: `rgba(${(Math.random() * 256) | 0}, ${
            (Math.random() * 256) | 0
          }, ${(Math.random() * 256) | 0}, 1)`,
        };
      }),
    };
    setInitialData(baseModel);
  }, [data]);

  return (
    <>
      <Bar options={options} data={initialData} data-testid="barChart" />;
    </>
  );
};
