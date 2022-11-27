import { useContext, useState } from "react";
import Chart from "chart.js/auto";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import RequestContext from "../context/RequestContext";
const Relevance = () => {
  const { apiRes } = useContext(RequestContext);
  console.log(apiRes);

  const labels = apiRes.map((data) => {
    return data.source;
  });
  const dataPoints = apiRes.map((data) => {
    return data.relevance;
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Relevance with respect to source",
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
      <div className="p-4">{apiRes.length > 0 ? <Bar data={data} /> : ""}</div>
      <div className="p-4">{apiRes.length > 0 ? <Line data={data} /> : ""}</div>
    </div>
  );
};

export default Relevance;
