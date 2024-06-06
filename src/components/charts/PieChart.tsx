import { NEO } from "@Types/neo.d";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({
  labels = [],
  data = [],
}: {
  labels: string[] | undefined;
  data: NEO[];
}) => {
  const [initialData, setInitialData] = useState(() => {
    const baseModel = {
      labels: labels,
      datasets: [
        {
          label: "Kilometers (KM)",
          data: data.map(
            (neo: NEO) =>
              neo.estimated_diameter.kilometers.estimated_diameter_max
          ),
          backgroundColor: data.map(
            () =>
              `rgba(${(Math.random() * 256) | 0}, ${
                (Math.random() * 256) | 0
              }, ${(Math.random() * 256) | 0}, 1)`
          ),
          borderWidth: 1,
        },
      ],
    };
    return baseModel;
  });
  useEffect(() => {
    const baseModel = {
      labels: labels,
      datasets: [
        {
          label: "Kilometers (KM)",
          data: data.map(
            (neo: NEO) =>
              neo.estimated_diameter.kilometers.estimated_diameter_max
          ),
          backgroundColor: data.map(
            () =>
              `rgba(${(Math.random() * 256) | 0}, ${
                (Math.random() * 256) | 0
              }, ${(Math.random() * 256) | 0}, 1)`
          ),
          borderWidth: 1,
        },
      ],
    };
    setInitialData(baseModel);
  }, [data]);
  return <Pie data={initialData} data-testid="pieChart"/>;
};
