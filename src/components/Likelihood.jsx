import { useContext, useState } from "react";
import Chart from "chart.js/auto";
// import {Chart, Color } from 'chart.js'
// Chart.register(Color)
import { Pie, Bar, Line } from "react-chartjs-2";
import RequestContext from "../context/RequestContext";
const Likelihood = () => {
  const { apiRes } = useContext(RequestContext);
  console.log(apiRes);

  const labels = apiRes.map((data) => {
    return data.sector;
  });
  const dataPoints = apiRes.map((data) => {
    return data.likelihood;
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Likelihood with respect to country",
        data: dataPoints,
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
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="relative m-auto" style={{ width: "800px" }}>
      <div className="p-4">
        {apiRes.length > 0 ? <Pie data={data} /> : ""}
      </div>
      <div className="p-4">{apiRes.length > 0 ? <Bar data={data} /> : ""}</div>
      <div className="p-4">{apiRes.length > 0 ? <Line data={data} /> : ""}</div>
    </div>
  );
};

export default Likelihood;
