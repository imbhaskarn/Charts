import { useContext, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
// Chart.register(ArcElement)
import {PolarArea, Doughnut, Bar, Line } from "react-chartjs-2";
ChartJS.defaults.color = "#38bdf8";
// ChartJS.defaults.font = "'Poppins', sans-serif"
import RequestContext from "../context/RequestContext";
const Intensity = () => {
  const { apiRes } = useContext(RequestContext);
  console.log(apiRes);

  const labels = apiRes.map((data) => {
    return data.country;
  });
  const dataPoints = apiRes.map((data) => {
    return data.intensity;
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Intensity with respect to country",
        data: dataPoints,
        color: "white",
        backgroundColor: [
          "#ff0800",
          "#007bff",
          "#f3c028",
          "#00f054",
          "#271d95",
          "#00ddff",
          "#0d0142",
          "#f8e16c",
          "#df17ad",
          "#ff5618",
        ],
        borderColor: [
          "#ff0800",
          "#007bff",
          "#f3c028",
          "#00f054",
          "#271d95",
          "#00ddff",
          "#0d0142",
          "#f8e16c",
          "#df17ad",
          "#ff5618",
        ],
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className="relative m-auto" style={{ width: "800px" }}>
    <div className="p-4">{apiRes.length > 0 ? <PolarArea data={data} /> : ""}</div>
      <div className="p-4">{apiRes.length > 0 ? <Doughnut data={data} /> : ""}</div>
      <div className="p-4">{apiRes.length > 0 ? <Bar data={data} /> : ""}</div>
      <div className="p-4">{apiRes.length > 0 ? <Line data={data} /> : ""}</div>
    </div>
  );
};

export default Intensity;
