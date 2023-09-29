import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Imobiliaria',
          data: [1827, 2201, 1490, -1998, 2410, 1942, -275],
          backgroundColor: '#81B5E9',
          stack: 'Stack 0',
        },
        {
          label: 'Farmácia',
          data: [-1812, -2221, -1390, 1798, -2182, -1742, 2275],
          backgroundColor: '#4bc0c0',
          stack: 'Stack 0',
        },
        {
          label: 'Mercadinho',
          data: [187, 201, 490, -938, 282, 172, 225],
          backgroundColor: '#ff6384',
          stack: 'Stack 1',
        },
      ]
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: "white",
          },

          title: {
            display: true,
            text: 'Últimas Despesas',
            color: 'white'
          },
          maintainAspectRatio: false,
          responsive: true
        }
      },

      scales: {
        x: {
          stacked: true,
          ticks: { color: 'white', beginAtZero: true }
        },
        y: {
          stacked: true,
          ticks: { color: 'white', beginAtZero: true }
        },
      },
    })
  }, [])

  return (
    <>
      <div className='w-full md:col-span-2 static lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;