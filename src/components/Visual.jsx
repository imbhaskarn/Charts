import { useState } from "react"
import PieChart from "./PieChart";
import chart from "chart.js/auto";
import axios from "axios";

const Visual = () => {
    const [chartData, setChartData] = useState()
  
      axios.get('http://localhost:8080/api/data')
    .then( async (res) =>{
       const Data = await res.data
       const inputData = {
        labels: Data.map((data) =>{ return data.sector}), 
        datasets: [
          {
            label: "intensity ",
            data: Data.map((data) =>{ return data.intensity}),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
          }
        ]
    }
    setChartData(inputData)
    })

    return (
      <div className="">
        <PieChart chartData={chartData} />
      </div>
    );
}

export default Visual


