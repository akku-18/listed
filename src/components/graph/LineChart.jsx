import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import "./graph.css"

const MyLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: 'line',
      data : {
        labels: ['0', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
              label: 'Guest', // Label for the first line
              data: [100, 400, 200, 400, 200],
              fill: false,
              borderColor: '#9BDD7C',
              tension: 0.1
            },
            {
              label: 'User', // Label for the second line
              data: [100, 200, 300, 200, 300],
              fill: false,
              borderColor: '#E9A0A0',
              tension: 0.1
            }
          ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: '',
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: '',
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className='line' style={{ height: '300px' }}>
      <h2 className="lineChart-heading">Activities</h2>
        <span className="date">May-June 2021</span>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default MyLineChart;
