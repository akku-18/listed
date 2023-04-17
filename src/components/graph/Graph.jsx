import React from "react";
import Chart from "react-google-charts";
import "./graph.css";

export default function Graph() {
  const LineData = [
    ["x", "user", "guests"],
    [0, 50, 150],
    [1, 180, 200],
    [2, 100, 80],
    [3, 170, 190],
    [4, 80, 100],
  ];
  const LineChartOptions = {
    hAxis: {
      title: "Week",
    },
    vAxis: {
      title: "",
    },
    series: {
      1: { curveType: "function" },
    },
  };
  return (
    <>
      <div className="graph-container">
        <Chart
          width={"1000px"}
          height={"460px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ "data-testid": "2" }}
          style={{ background: 'black'}}
        />
      </div>
    </>
  );
}
