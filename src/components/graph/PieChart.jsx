import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { BiChevronDown } from 'react-icons/bi'
import "./graph.css"

const MyPieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: "pie",
      data: {
        labels: ["Super Hoodies", "Custom Short Pants", "Basic Tees"],
        datasets: [
          {
            data: [10, 20, 30],
            backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "right",
            labels: {
              boxWidth: 10,
              radius: 100,
            },
          },
        },
        tooltips: {
          enabled: false,
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="pieChart" style={{ height: '200px', width:'500px' }}>
      <div className="pie-topbar">
        <h2 className="pie-heading">Top Products</h2>
        <span className="date">May-June 2021 <BiChevronDown /> </span>
      </div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default MyPieChart;
