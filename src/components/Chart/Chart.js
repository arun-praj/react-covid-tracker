import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Bar, Line } from "react-chartjs-2";

import styles from "./Chart.module.scss";

const Chart = (props) => {
   const [dailyData, setDailyData] = useState({});
   useEffect(() => {
      const fetchData = async () => {
         setDailyData(await fetchDailyData());
      };
      fetchData();
   }, []);
   const lineChart = dailyData.length ? (
      <Line
         data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [
               {
                  data: dailyData.map(({ confirmed }) => confirmed),
                  label: "Infected",
                  borderColor: "#3333ff",
                  fill: true,
               },
               {
                  data: dailyData.map(({ deaths }) => deaths),
                  label: "Deaths",
                  borderColor: "red",
                  fill: true,
                  backgroundColor: "rgba(216, 0, 0,0.4)",
               },
            ],
         }}
      />
   ) : null;
   return (
      <div>
         <h1>Chart</h1>
         {lineChart}
      </div>
   );
};
export default Chart;
