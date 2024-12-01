import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Charts() {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setCharts(data);                                              // Store fetched data and set data in charts
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Prepare data for the charts
  const labels = charts.map((item) => item.title); // Product titles as labels
  const prices = charts.map((item) => item.price); // Product prices as data

  // Line chart data
  const lineChartData = {
    labels,
    datasets: [
      {
        label: "Product Prices",
        data: prices,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Product Data Charts</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Line Chart (Prices)</h2>
        {charts.length > 0 ? (
          <Line data={lineChartData} />
        ) : (
          <p>Loading chart data...</p>
        )}
      </div>
    </div>
  );
}
